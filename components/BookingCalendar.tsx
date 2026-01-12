import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Minus, Plus, Search } from 'lucide-react';
import { formatCurrency } from '../utils';

interface BookingCalendarProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (checkIn: Date, checkOut: Date, guests: { rooms: number, adults: number, children: number }) => void;
  initialCheckIn?: Date;
  initialCheckOut?: Date;
  initialGuests?: { rooms: number, adults: number, children: number };
}

export const BookingCalendar: React.FC<BookingCalendarProps> = ({ 
  isOpen, 
  onClose, 
  onApply,
  initialCheckIn,
  initialCheckOut,
  initialGuests
}) => {
  const [checkIn, setCheckIn] = useState<Date | null>(initialCheckIn || null);
  const [checkOut, setCheckOut] = useState<Date | null>(initialCheckOut || null);
  const [hoverDate, setHoverDate] = useState<Date | null>(null);
  
  // Base month for the left calendar (default to current month)
  const [baseDate, setBaseDate] = useState(new Date());

  // Guests State
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  // Sync state when modal opens or initialGuests changes
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
        if (initialGuests) {
            setRooms(initialGuests.rooms);
            setAdults(initialGuests.adults);
            setChildren(initialGuests.children);
        }
        // Update Checkin/Checkout if provided props change
        if (initialCheckIn) setCheckIn(initialCheckIn);
        if (initialCheckOut) setCheckOut(initialCheckOut);
    } else {
        document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialGuests, initialCheckIn, initialCheckOut]);

  if (!isOpen) return null;

  // --- DATE LOGIC ---
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay(); // 0 is Sunday
    // Adjust so Monday is 0 (optional, but standard usually Sun=0). Design shows Mon start? 
    // Let's stick to standard JS Sun=0 for rendering grid, but adjust visual label order
    // Design shows T2 T3 ... CN (Mon -> Sun). So we need to shift.
    const firstDayShifted = firstDay === 0 ? 6 : firstDay - 1; 
    return { days, firstDay: firstDayShifted, year, month };
  };

  const handleDateClick = (date: Date) => {
    // Prevent clicking past dates
    const today = new Date();
    today.setHours(0,0,0,0);
    if (date < today) return;

    if (!checkIn || (checkIn && checkOut)) {
      // Start new selection
      setCheckIn(date);
      setCheckOut(null);
    } else if (checkIn && !checkOut) {
      // Select end date
      if (date < checkIn) {
        setCheckIn(date);
      } else if (date.getTime() === checkIn.getTime()) {
         // Click same day, do nothing or reset? Let's reset checkOut
         setCheckOut(null);
      } else {
        setCheckOut(date);
      }
    }
  };

  const nextMonth = () => {
    setBaseDate(new Date(baseDate.getFullYear(), baseDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    const today = new Date();
    const prev = new Date(baseDate.getFullYear(), baseDate.getMonth() - 1, 1);
    // Don't go too far back into past
    if (prev.getMonth() < today.getMonth() && prev.getFullYear() <= today.getFullYear()) return; 
    setBaseDate(prev);
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 0;
  };

  // --- RENDER HELPERS ---
  const renderMonth = (offset: number) => {
    const viewDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + offset, 1);
    const { days, firstDay, year, month } = getDaysInMonth(viewDate);
    const today = new Date();
    today.setHours(0,0,0,0);

    const dayCells = [];
    
    // Empty cells for padding
    for (let i = 0; i < firstDay; i++) {
      dayCells.push(<div key={`empty-${i}`} className="h-14 md:h-16"></div>);
    }

    // Days
    for (let d = 1; d <= days; d++) {
      const currentDate = new Date(year, month, d);
      const isPast = currentDate < today;
      
      let isSelected = false;
      let isRange = false;
      let isStart = false;
      let isEnd = false;

      if (checkIn && currentDate.getTime() === checkIn.getTime()) {
        isSelected = true;
        isStart = true;
      }
      if (checkOut && currentDate.getTime() === checkOut.getTime()) {
        isSelected = true;
        isEnd = true;
      }
      if (checkIn && checkOut && currentDate > checkIn && currentDate < checkOut) {
        isRange = true;
      }
      // Hover effect logic for range preview
      if (checkIn && !checkOut && hoverDate && currentDate > checkIn && currentDate <= hoverDate) {
          isRange = true;
      }

      // Mock Price (Show price for future dates)
      const mockPrice = "5.000.000 đ";

      dayCells.push(
        <div 
          key={d}
          onMouseEnter={() => setHoverDate(currentDate)}
          onClick={() => handleDateClick(currentDate)}
          className={`
            relative h-14 md:h-16 border-[0.5px] border-gray-100 flex flex-col items-center justify-center cursor-pointer transition-all
            ${isPast ? 'bg-gray-50 text-gray-300 pointer-events-none' : 'hover:bg-[#FDFBF7]'}
            ${isRange ? 'bg-[#FDFBF7] border-[#A68A64]/20' : ''}
            ${(isStart || isEnd) ? 'bg-[#A68A64] text-white hover:bg-[#A68A64] !border-[#A68A64]' : ''}
          `}
        >
          <span className={`text-sm md:text-base font-medium ${(isStart || isEnd) ? 'text-white' : 'text-gray-700'}`}>
            {d}
          </span>
          {!isPast && (
             <span className={`text-[8px] md:text-[9px] mt-1 ${(isStart || isEnd) ? 'text-white/80' : 'text-[#A68A64]'}`}>
               {mockPrice}
             </span>
          )}
        </div>
      );
    }

    return (
      <div className="w-full">
         <div className="text-center mb-6">
            <h3 className="text-xl font-serif text-[#A68A64] font-bold capitalize">
              Tháng {viewDate.getMonth() + 1} {viewDate.getFullYear()}
            </h3>
         </div>
         
         {/* Weekday Headers (Mon-Sun) */}
         <div className="grid grid-cols-7 mb-2">
            {['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].map(day => (
              <div key={day} className="text-center font-bold text-xs text-gray-800 uppercase tracking-wider">{day}</div>
            ))}
         </div>

         {/* Days Grid */}
         <div className="grid grid-cols-7">
            {dayCells}
         </div>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-6xl max-h-[95vh] overflow-y-auto shadow-2xl rounded-sm flex flex-col">
        
        {/* --- TOP BAR (Inputs) --- */}
        <div className="bg-white border-b border-gray-100 p-6 sticky top-0 z-10">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-12">
              
              {/* Left: Close */}
              <button onClick={onClose} className="absolute top-4 left-4 lg:hidden text-gray-400">
                 <X size={24} />
              </button>

              <div className="flex items-center gap-2">
                  <div className="hidden lg:block">
                     <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1">Trở về</span>
                     <button onClick={onClose} className="text-gray-600 hover:text-[#A68A64]"><ArrowLeftIcon /></button>
                  </div>
              </div>

              {/* CENTER: Date & Night Counter */}
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 bg-[#FDFBF7] px-6 py-3 rounded-lg border border-[#A68A64]/10">
                 <div className="text-center md:text-left">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Ngày nhận phòng</span>
                    <div className="text-xl font-serif text-[#2C2C2C]">
                       {checkIn ? `${checkIn.getDate()} Tháng ${checkIn.getMonth() + 1}` : '--'}
                       {checkIn && <span className="text-xs text-gray-400 font-sans ml-1">{checkIn.getFullYear()}</span>}
                    </div>
                 </div>

                 <div className="flex flex-col items-center justify-center px-4">
                     {/* Badge Night Counter */}
                     <span className="bg-[#A68A64] text-white text-[10px] font-bold px-3 py-1 rounded-full mb-1">
                        {calculateNights()} Đêm
                     </span>
                     <div className="w-12 h-px bg-gray-300"></div>
                 </div>

                 <div className="text-center md:text-right">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Ngày trả phòng</span>
                    <div className="text-xl font-serif text-[#2C2C2C]">
                       {checkOut ? `${checkOut.getDate()} Tháng ${checkOut.getMonth() + 1}` : '--'}
                       {checkOut && <span className="text-xs text-gray-400 font-sans ml-1">{checkOut.getFullYear()}</span>}
                    </div>
                 </div>
              </div>

              {/* RIGHT: Guests & Button */}
              <div className="flex flex-col md:flex-row items-center gap-6">
                 {/* Room/Guest Selector */}
                 <div className="flex gap-6 text-center">
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phòng</span>
                        <div className="flex items-center gap-2 mt-1">
                           <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                           <span className="text-lg font-serif w-4">{rooms}</span>
                           <button onClick={() => setRooms(rooms + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                        </div>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Người lớn</span>
                        <div className="flex items-center gap-2 mt-1">
                           <button onClick={() => setAdults(Math.max(1, adults - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                           <span className="text-lg font-serif w-4">{adults}</span>
                           <button onClick={() => setAdults(adults + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                        </div>
                    </div>
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Trẻ em</span>
                        <div className="flex items-center gap-2 mt-1">
                           <button onClick={() => setChildren(Math.max(0, children - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                           <span className="text-lg font-serif w-4">{children}</span>
                           <button onClick={() => setChildren(children + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                        </div>
                    </div>
                 </div>

                 {/* Apply Button */}
                 <button 
                    onClick={() => checkIn && checkOut && onApply(checkIn, checkOut, { rooms, adults, children })}
                    disabled={!checkIn || !checkOut}
                    className="bg-[#A68A64] text-white px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#8e7655] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                 >
                    Tìm kiếm <Search size={14} />
                 </button>
              </div>
           </div>
        </div>

        {/* --- CALENDAR BODY --- */}
        <div className="p-6 md:p-12 flex-grow bg-white relative">
           {/* Navigation Arrows */}
           <button 
             onClick={prevMonth}
             className="absolute top-12 left-4 md:left-8 z-10 w-10 h-10 rounded-full bg-[#A68A64] text-white flex items-center justify-center hover:bg-[#8e7655] shadow-lg"
           >
             <ChevronLeft size={20} />
           </button>
           <button 
             onClick={nextMonth}
             className="absolute top-12 right-4 md:right-8 z-10 w-10 h-10 rounded-full bg-[#A68A64] text-white flex items-center justify-center hover:bg-[#8e7655] shadow-lg"
           >
             <ChevronRight size={20} />
           </button>

           <div className="flex flex-col lg:flex-row gap-12">
              {renderMonth(0)}
              <div className="hidden lg:block w-px bg-gray-100 self-stretch"></div>
              <div className="hidden lg:block w-full">
                {renderMonth(1)}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
);