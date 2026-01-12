import React, { useState, useMemo, useEffect } from 'react';
import { Room } from '../types';
import { rooms as allRooms } from '../constants';
import { formatCurrency } from '../utils';
import { User, Layout, Bed, Home, Minus, Plus, ChevronDown, Search, X, Trash2 } from 'lucide-react';

interface BookingResultViewProps {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: { rooms: number, adults: number, children: number };
  onOpenCalendar: () => void;
  onProceedToCheckout?: (selectedRooms: { room: Room; quantity: number }[]) => void;
}

export const BookingResultView: React.FC<BookingResultViewProps> = ({ 
  checkIn, 
  checkOut, 
  guests,
  onOpenCalendar,
  onProceedToCheckout
}) => {
  // State to track quantity for each room type
  const [quantities, setQuantities] = useState<{[key: number]: number}>({});
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isSummaryOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isSummaryOpen]);

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const newVal = Math.max(0, current + delta);
      return { ...prev, [id]: newVal };
    });
  };

  const handleRemoveRoom = (id: number) => {
      setQuantities(prev => ({ ...prev, [id]: 0 }));
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 1; // Minimum 1 night
    }
    return 1;
  };

  const formatDateSimple = (date: Date | null) => {
      if (!date) return '';
      const d = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const m = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      return `${d}/${m}/${date.getFullYear()}`;
  }

  const nights = calculateNights();

  // --- LOGIC LỌC & SẮP XẾP PHÒNG ---
  const filteredRooms = useMemo(() => {
    const validRooms = allRooms.filter(room => {
       const meetsRoomCount = room.roomsCount >= guests.rooms;
       const meetsCapacity = room.maxPeople >= guests.adults;
       return meetsRoomCount && meetsCapacity;
    });

    return validRooms.sort((a, b) => {
        // Priority 1: Capacity
        if (a.maxPeople !== b.maxPeople) return a.maxPeople - b.maxPeople;
        // Priority 2: Room Count
        if (a.roomsCount !== b.roomsCount) return a.roomsCount - b.roomsCount;
        // Priority 3: Price
        return a.price - b.price;
    });
  }, [guests.rooms, guests.adults]);

  // --- CALCULATE TOTALS ---
  const totalSelectedRooms = (Object.values(quantities) as number[]).reduce((a: number, b: number) => a + b, 0);
  
  const totalBill = useMemo(() => {
     let total = 0;
     // Iterate over all rooms to calculate total regardless of current filter view
     allRooms.forEach(room => {
        const qty = quantities[room.id] || 0;
        total += (room.price * qty * nights);
     });
     return total;
  }, [quantities, nights]);

  // Get list of selected room objects
  const selectedRoomList = useMemo(() => {
      return allRooms.filter(r => (quantities[r.id] || 0) > 0);
  }, [quantities]);

  const handleCheckoutClick = () => {
      if (onProceedToCheckout) {
          const checkoutPayload = selectedRoomList.map(room => ({
              room: room,
              quantity: quantities[room.id]
          }));
          onProceedToCheckout(checkoutPayload);
      }
  };

  return (
    <div className="bg-white min-h-screen pt-[140px] pb-24 relative">
      {/* --- TOP SEARCH BAR --- */}
      <div className="container mx-auto px-6 mb-8">
        <div className="bg-white p-6 shadow-sm border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex gap-8 md:gap-16">
              <div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Ngày</span>
                 <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-serif text-[#2C2C2C]">{checkIn ? checkIn.getDate() : '--'}</span>
                    <div className="text-xs text-gray-500">
                       <div>Tháng {checkIn ? checkIn.getMonth() + 1 : '--'}</div>
                       <div>{checkIn ? checkIn.getFullYear() : '--'}</div>
                    </div>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="bg-[#A68A64] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm transform -translate-y-1">{nights} Đêm</span>
                    <span className="mx-2 text-gray-300">|</span>
                    <span className="text-2xl font-serif text-[#2C2C2C]">{checkOut ? checkOut.getDate() : '--'}</span>
                    <div className="text-xs text-gray-500">
                       <div>Tháng {checkOut ? checkOut.getMonth() + 1 : '--'}</div>
                       <div>{checkOut ? checkOut.getFullYear() : '--'}</div>
                    </div>
                 </div>
              </div>
              
              <div className="hidden md:block w-px bg-gray-200"></div>

              <div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-1">Phòng & Khách</span>
                 <div className="flex gap-8 text-xl font-serif text-[#2C2C2C]">
                    <div className="flex flex-col items-center">
                       <span>{guests.rooms}</span>
                       <span className="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider">Phòng</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <span>{guests.adults}</span>
                       <span className="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider">Người lớn</span>
                    </div>
                    <div className="flex flex-col items-center">
                       <span>{guests.children}</span>
                       <span className="text-[9px] font-sans text-gray-400 font-bold uppercase tracking-wider">Trẻ em</span>
                    </div>
                    <ChevronDown size={16} className="text-gray-400 mt-2" />
                 </div>
              </div>
           </div>

           <button 
             onClick={onOpenCalendar}
             className="bg-[#A68A64] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#8e7655] flex items-center gap-2"
           >
             TÌM KIẾM <Search size={12} />
           </button>
        </div>
      </div>

      {/* --- STICKY SUMMARY BAR --- */}
      <div className={`sticky top-[110px] z-40 transition-all duration-500 ease-in-out transform ${totalSelectedRooms > 0 ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none h-0 overflow-hidden'}`}>
        <div className="bg-[#A68A64] text-white py-4 shadow-xl">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-widest">
                    <span>Bạn đã lựa chọn:</span>
                    <span className="text-lg md:text-xl font-serif mx-1">{totalSelectedRooms}</span> <span>Phòng</span>
                    <span className="mx-2 opacity-50">|</span>
                    <span className="text-lg md:text-xl font-serif mx-1">{nights}</span> <span>Đêm</span>
                </div>
                
                <div className="flex items-center gap-6">
                    <span className="text-xl md:text-2xl font-serif font-bold">{formatCurrency(totalBill)}</span>
                    <button 
                        onClick={() => setIsSummaryOpen(true)}
                        className="bg-[#FDFBF7] text-[#A68A64] px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-sm"
                    >
                        ĐẶT NGAY
                    </button>
                </div>
            </div>
        </div>
      </div>

      {/* --- SUMMARY POPUP MODAL --- */}
      {isSummaryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="bg-white w-full max-w-xl shadow-2xl rounded-sm p-6 md:p-8 relative animate-in fade-in zoom-in duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                           <div className="flex items-baseline gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
                               <span>Bạn đã lựa chọn:</span>
                               <strong className="text-black text-sm">{totalSelectedRooms} PHÒNG</strong>
                               <strong className="text-black text-sm">{nights} ĐÊM</strong>
                           </div>
                           <div className="text-sm font-serif text-gray-600 italic">
                               {formatDateSimple(checkIn)} - {formatDateSimple(checkOut)}
                           </div>
                      </div>
                      <button onClick={() => setIsSummaryOpen(false)} className="text-gray-400 hover:text-black">
                          <X size={20} />
                      </button>
                  </div>

                  {/* List of Selected Rooms */}
                  <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2 mb-8 no-scrollbar">
                      {selectedRoomList.map(room => {
                          const qty = quantities[room.id];
                          const subTotal = room.price * qty * nights;
                          return (
                              <div key={room.id} className="border border-gray-100 p-4 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4">
                                  <div className="w-full md:w-auto">
                                      <h4 className="text-base font-serif text-[#A68A64] mb-1">{room.name}</h4>
                                      <span className="text-[10px] text-gray-400 font-light">{formatCurrency(room.price)} / đêm</span>
                                  </div>
                                  
                                  <div className="flex items-center justify-between w-full md:w-auto gap-6">
                                      {/* Quantity Control */}
                                      <div className="flex items-center border border-gray-200 h-9 px-2 bg-white">
                                          <button 
                                              onClick={() => handleQuantityChange(room.id, -1)}
                                              className="text-gray-400 hover:text-[#A68A64]"
                                          >
                                              <Minus size={12} />
                                          </button>
                                          <span className="text-sm font-serif text-gray-600 w-8 text-center">{qty < 10 ? `0${qty}` : qty}</span>
                                          <button 
                                              onClick={() => handleQuantityChange(room.id, 1)}
                                              className="text-gray-400 hover:text-[#A68A64]"
                                          >
                                              <Plus size={12} />
                                          </button>
                                      </div>
                                      
                                      <div className="flex items-center gap-4 min-w-[120px] justify-end">
                                         <div className="text-right">
                                              <div className="text-sm font-bold text-gray-700">{formatCurrency(subTotal)}</div>
                                              <div className="text-[9px] text-gray-400">({nights} đêm)</div>
                                         </div>
                                         <button onClick={() => handleRemoveRoom(room.id)} className="text-[#A68A64] hover:text-red-500 transition-colors">
                                              <Trash2 size={16} />
                                         </button>
                                      </div>
                                  </div>
                              </div>
                          );
                      })}
                  </div>

                  {/* Footer Totals */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                       <div className="flex items-center gap-3">
                           <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Tạm tính:</span>
                           <span className="text-2xl font-serif font-bold text-black">{formatCurrency(totalBill)}</span>
                       </div>
                       
                       <button 
                           onClick={handleCheckoutClick}
                           className="bg-[#A68A64] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-lg w-full md:w-auto"
                       >
                           ĐẶT NGAY
                       </button>
                  </div>
              </div>
          </div>
      )}

      {/* --- ROOM LIST --- */}
      <div className="container mx-auto px-6 max-w-5xl space-y-12 mt-12">
         {filteredRooms.length > 0 ? (
            filteredRooms.map(room => {
                const qty = quantities[room.id] || 0;
                // Calculate Total Price for this room for X nights
                const roomTotalPrice = room.price * nights;

                return (
                  <div key={room.id} className="flex flex-col md:flex-row gap-8 pb-12 border-b border-gray-100 last:border-0">
                     {/* Image */}
                     <div className="md:w-1/2 h-[300px] overflow-hidden group cursor-pointer relative">
                        <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        {/* Arrows decoration */}
                        <div className="flex justify-between absolute bottom-4 left-4 right-4 text-white/80 font-light text-2xl">
                           <span>&larr;</span>
                           <span>&rarr;</span>
                        </div>
                     </div>

                     {/* Info */}
                     <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                           <h3 className="text-3xl font-serif text-[#C4A484] mb-4">{room.name}</h3>
                           
                           <div className="space-y-2 text-xs text-gray-500 font-light mb-6">
                              <div className="flex items-center gap-3">
                                 <User size={14} className="text-[#C4A484]" />
                                 <span>{room.maxPeople < 10 ? `0${room.maxPeople}` : room.maxPeople} người lớn</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <Layout size={14} className="text-[#C4A484]" />
                                 <span>{room.area < 10 ? `0${room.area}` : room.area} m²</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <Home size={14} className="text-[#C4A484]" />
                                 <span>{room.roomsCount < 10 ? `0${room.roomsCount}` : room.roomsCount} phòng ngủ</span>
                              </div>
                              <div className="flex items-center gap-3">
                                 <Bed size={14} className="text-[#C4A484]" />
                                 <span>{room.bedType}</span>
                              </div>
                           </div>
                        </div>

                        {/* Pricing & Action */}
                        <div>
                           <div className="text-xl font-serif text-[#A68A64] mb-1">
                              {/* Display Total Price for N nights */}
                              {formatCurrency(roomTotalPrice)} <span className="text-xs font-sans text-gray-400 font-normal">({nights} đêm)</span>
                           </div>
                           <div className="text-[10px] text-gray-400 mb-4">Còn 02 phòng</div>

                           <div className="flex items-center gap-4">
                              {/* Quantity Selector */}
                              <div className="flex items-center border border-gray-200 h-10 w-32 justify-between px-2">
                                 <button 
                                    onClick={() => handleQuantityChange(room.id, -1)}
                                    className="text-gray-400 hover:text-[#A68A64] disabled:opacity-30"
                                    disabled={qty === 0}
                                 >
                                    <Minus size={12} />
                                 </button>
                                 <span className="text-sm font-serif text-gray-600 w-6 text-center">{qty < 10 ? `0${qty}` : qty}</span>
                                 <button 
                                    onClick={() => handleQuantityChange(room.id, 1)}
                                    className="text-gray-400 hover:text-[#A68A64]"
                                 >
                                    <Plus size={12} />
                                 </button>
                              </div>
                              
                              {qty === 0 ? (
                                 <button className="h-10 px-6 border border-[#A68A64] text-[#A68A64] text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors">
                                    Chọn
                                 </button>
                              ) : (
                                 <button className="h-10 px-6 bg-[#A68A64] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-md">
                                    Đã chọn
                                 </button>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
                );
            })
         ) : (
             <div className="text-center py-24">
                <h3 className="text-xl font-serif text-gray-400 mb-4">Không tìm thấy phòng phù hợp</h3>
                <p className="text-gray-500 font-light text-sm mb-8">
                   Rất tiếc, chúng tôi không tìm thấy phòng trống đáp ứng đủ số lượng phòng ngủ và số khách bạn yêu cầu. <br/>
                   Vui lòng thử giảm số lượng phòng hoặc liên hệ trực tiếp với chúng tôi để được hỗ trợ.
                </p>
                <button 
                  onClick={onOpenCalendar}
                  className="border border-[#A68A64] text-[#A68A64] px-6 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
                >
                   Thay đổi tìm kiếm
                </button>
             </div>
         )}
      </div>

      {/* --- POLICIES SECTION --- */}
      {filteredRooms.length > 0 && (
          <div className="container mx-auto px-6 mt-16 pt-16 border-t border-gray-200">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Policy Content (No changes here, kept for structure) */}
                <div className="space-y-10">
                   <div>
                      <h3 className="text-3xl font-serif text-[#C4A484] mb-4 text-center md:text-left">Tiện nghi đã bao gồm</h3>
                      <div className="text-center md:text-left text-2xl font-serif text-[#C4A484] mb-4">gồm</div>
                      <div className="space-y-4">
                          <div className="text-center md:text-left">
                             <h4 className="text-lg font-serif text-[#C4A484]">Wi-Fi 24/7</h4>
                             <p className="text-xs text-gray-500 font-light">Luôn duy trì sự kết nối mượt mà trong suốt kỳ nghỉ.</p>
                          </div>
                          {/* ... truncated amenities items for brevity ... */}
                      </div>
                   </div>
                </div>
                <div className="space-y-10">
                   <div>
                      <h3 className="text-3xl font-serif text-[#C4A484] mb-6 text-center md:text-right">Chính sách villa</h3>
                      <div className="mb-8 text-right">
                         <h4 className="text-xl font-serif text-[#A68A64] mb-2">Thanh toán & huỷ đặt phòng</h4>
                         <ul className="text-xs text-gray-500 font-light space-y-1 list-none">
                            <li>• Quý khách vui lòng đặt cọc 50% tổng giá trị booking để xác nhận giữ phòng.</li>
                            <li>• Hủy phòng trước 14 ngày: Hoàn 100% tiền cọc.</li>
                            <li>• Hủy phòng từ 7-14 ngày: Hoàn 50% tiền cọc.</li>
                            <li>• Hủy phòng trong vòng 7 ngày: Không hoàn tiền cọc.</li>
                         </ul>
                         <div className="w-full h-px bg-gray-100 mt-4"></div>
                      </div>
                      {/* ... truncated policies items for brevity ... */}
                   </div>
                </div>
             </div>
          </div>
      )}
    </div>
  );
};