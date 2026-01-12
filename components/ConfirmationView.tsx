import React from 'react';
import { Room } from '../types';
import { formatCurrency } from '../utils';
import { Clock, ChevronLeft, ChevronDown } from 'lucide-react';

interface ConfirmationViewProps {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: { rooms: number, adults: number, children: number };
  selectedRooms: { room: Room; quantity: number }[];
  customerInfo: any;
  roomConfigs: { [key: number]: { name: string, adults: number, children: number, infants: number } };
  bookingId: string;
  onBackHome: () => void;
}

export const ConfirmationView: React.FC<ConfirmationViewProps> = ({
  checkIn,
  checkOut,
  guests,
  selectedRooms,
  customerInfo,
  roomConfigs,
  bookingId,
  onBackHome
}) => {

  const formatDate = (date: Date | null) => {
    if (!date) return '--/--/----';
    return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 1;
    }
    return 1;
  };
  const nights = calculateNights();

  const calculateTotal = () => {
    let roomTotal = 0;
    selectedRooms.forEach(({ room, quantity }) => {
        roomTotal += room.price * quantity * nights;
    });
    return roomTotal;
  };

  const totalAmount = calculateTotal();
  const totalRooms = selectedRooms.reduce((acc, curr) => acc + curr.quantity, 0);

  // Helper to pad numbers with 0 (e.g. 0 -> 00, 2 -> 02)
  const pad = (num: number) => num < 10 ? `0${num}` : num;

  return (
    <div className="bg-[#FDFBF7] min-h-screen pt-[140px] pb-24 font-sans text-[#4A4A4A]">
      
      {/* --- HEADER TITLE --- */}
      <div className="container mx-auto px-6 mb-16 text-center relative">
         <button onClick={onBackHome} className="absolute left-0 md:left-20 top-4 flex items-center text-xs text-gray-500 hover:text-[#A68A64] uppercase tracking-widest">
            <ChevronLeft size={14} /> Trở về
         </button>
         <h1 className="text-4xl md:text-6xl font-serif text-[#C4A484] mb-6">Xác nhận</h1>
         
         {/* NOTIFICATION MESSAGE */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm md:text-base font-light text-gray-600">
            <span>Đang tiến hành kiểm tra thông tin bạn sẽ nhận được thông báo qua mail và tin nhắn trong</span>
            <div className="flex items-center gap-2 font-bold text-black">
                <Clock size={18} />
                <span>24:00:00</span>
            </div>
         </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl">
         
         {/* --- LEFT COLUMN: CUSTOMER INFO --- */}
         <div>
            <h3 className="text-3xl font-serif text-[#C4A484] mb-8 font-normal">Thông tin khách hàng</h3>
            
            <div className="space-y-6">
                <div>
                    <label className="block text-[11px] font-normal text-gray-500 mb-2">Họ và tên *</label>
                    <input 
                        type="text" 
                        value={customerInfo.fullName} 
                        readOnly
                        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                    />
                </div>
                <div>
                    <label className="block text-[11px] font-normal text-gray-500 mb-2">Số điện thoại *</label>
                    <div className="flex border border-gray-300 bg-white rounded-sm">
                        <div className="flex items-center px-3 border-r border-gray-300">
                            <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="w-5"/>
                            <ChevronDown size={12} className="ml-1 text-gray-400"/>
                        </div>
                        <input 
                            type="text" 
                            value={customerInfo.phone} 
                            readOnly
                            className="w-full bg-transparent px-4 py-3 text-sm text-gray-600 outline-none" 
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-[11px] font-normal text-gray-500 mb-2">Email *</label>
                    <input 
                        type="text" 
                        value={customerInfo.email} 
                        readOnly
                        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                    />
                </div>
                <div className="grid grid-cols-2 gap-6">
                     <div>
                         <label className="block text-[11px] font-normal text-gray-500 mb-2">ID/Passport *</label>
                         <input 
                            type="text" 
                            value={customerInfo.idPassport} 
                            readOnly
                            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                        />
                     </div>
                     <div>
                          <label className="block text-[11px] font-normal text-gray-500 mb-2">Giới tính theo ID/Passport *</label>
                          <div className="relative">
                              <input 
                                type="text" 
                                value={customerInfo.gender} 
                                readOnly
                                className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                              />
                              <ChevronDown size={14} className="absolute right-4 top-4 text-gray-400 pointer-events-none"/>
                          </div>
                     </div>
                </div>
                <div>
                     <label className="block text-[11px] font-normal text-gray-500 mb-2">Ngày sinh *</label>
                     <input 
                        type="text" 
                        value={formatDate(new Date(customerInfo.dob))} 
                        readOnly
                        className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                    />
                </div>
                <div>
                      <label className="block text-[11px] font-normal text-gray-500 mb-2">Quốc tịch *</label>
                      <div className="relative">
                          <input 
                            type="text" 
                            value={customerInfo.nationality} 
                            readOnly
                            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-600 outline-none rounded-sm"
                          />
                          <ChevronDown size={14} className="absolute right-4 top-4 text-gray-400 pointer-events-none"/>
                      </div>
                </div>
            </div>
         </div>

         {/* --- RIGHT COLUMN: BOOKING INFO --- */}
         <div>
            <h3 className="text-3xl font-serif text-[#C4A484] mb-8 font-normal text-right md:text-left">Thông tin đặt phòng</h3>
            
            {/* Header Summary: "2 PHÒNG 10 ĐÊM" */}
            <div className="flex gap-4 mb-2 text-xl font-bold uppercase text-gray-500">
                <span className="text-gray-600">{totalRooms} PHÒNG</span>
                <span className="text-gray-600">{nights} ĐÊM</span>
            </div>
            {/* Date Range */}
            <div className="text-base text-gray-700 mb-6">
                {formatDate(checkIn)} - {formatDate(checkOut)}
            </div>

            {/* Checkin/Checkout Dates Row */}
            <div className="flex justify-between items-center text-base font-bold text-gray-800 mb-2">
                <span>Nhận phòng</span>
                <span className="font-normal text-gray-500">{formatDate(checkIn)}</span>
            </div>
            <div className="flex justify-between items-center text-base font-bold text-gray-800 mb-8 border-b border-[#A68A64] pb-4">
                <span>Trả phòng</span>
                <span className="font-normal text-gray-500">{formatDate(checkOut)}</span>
            </div>

            {/* Rooms List - Aligned: Name Left, Guests Right */}
            <div className="space-y-6 mb-8">
                 {selectedRooms.map(item => {
                      const config = roomConfigs[item.room.id];
                      const adults = config?.adults || item.room.maxPeople;
                      const children = config?.children || 0;
                      const infants = config?.infants || 0;

                      return (
                          <div key={item.room.id} className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-dashed border-gray-200 pb-4 last:border-0">
                              <h4 className="text-[#A68A64] font-bold text-lg font-serif">{item.room.name}</h4>
                              <div className="flex items-center gap-2 text-sm font-light text-gray-600">
                                  <span>
                                      {pad(adults)} người lớn
                                  </span>
                                  <span>
                                      {pad(children)} trẻ em
                                  </span>
                                  <span>
                                      {pad(infants)} em bé
                                  </span>
                              </div>
                          </div>
                      );
                 })}
            </div>

            {/* Extra Requests */}
            <div className="mb-8">
                 <label className="block text-[11px] text-gray-500 mb-2">Yêu cầu bổ sung (nếu có)</label>
                 <div className="w-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-400 rounded-sm min-h-[50px]">
                     {customerInfo.note || "Không có"}
                 </div>
            </div>

            <div className="w-full h-px bg-[#A68A64] mb-8"></div>

            {/* Booking ID & Total */}
            <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-base text-gray-800">Mã đặt phòng</span>
                <span className="font-bold text-xl text-gray-400">{bookingId}</span>
            </div>

            <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-base text-gray-800">Tổng thanh toán</span>
                <span className="font-bold text-3xl text-gray-600">{formatCurrency(totalAmount).replace('₫', 'đ')}</span>
            </div>
            <div className="text-[11px] text-gray-400 text-right font-light">(Bao gồm thuế GTGT 10% và phí dịch vụ 5%)</div>
         </div>

      </div>
    </div>
  );
};