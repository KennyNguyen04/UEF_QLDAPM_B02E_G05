import React, { useState, useEffect } from 'react';
import { Room } from '../types';
import { formatCurrency, countWeekendNights, calculateWeekendSurcharge } from '../utils';
import { Clock, ChevronLeft, Copy, Check, ChevronDown, Users, AlertTriangle } from 'lucide-react';

interface PaymentViewProps {
  checkIn: Date | null;
  checkOut: Date | null;
  selectedRooms: { room: Room; quantity: number }[];
  customerInfo: any;
  roomConfigs: { [key: number]: { name: string, adults: number, children: number, infants: number } };
  bookingId: string;
  weekendSurchargeRate?: number; // Tỷ lệ phụ thu cuối tuần
  onBack: () => void;
  onFinish: () => void;
}

export const PaymentView: React.FC<PaymentViewProps> = ({
  checkIn,
  checkOut,
  selectedRooms,
  customerInfo,
  roomConfigs,
  bookingId,
  weekendSurchargeRate = 10,
  onBack,
  onFinish
}) => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [copiedAccount, setCopiedAccount] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
  };

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

  // Calculate weekend surcharge
  const weekendNights = checkIn && checkOut ? countWeekendNights(checkIn, checkOut) : 0;
  
  const calculateWeekendSurchargeAmount = () => {
      let surchargeTotal = 0;
      selectedRooms.forEach(({ room, quantity }) => {
          surchargeTotal += calculateWeekendSurcharge(room.price * quantity, weekendNights, weekendSurchargeRate);
      });
      return surchargeTotal;
  };
  
  const baseAmount = calculateTotal();
  const weekendSurchargeAmount = calculateWeekendSurchargeAmount();
  const totalAmount = baseAmount + weekendSurchargeAmount;
  
  const bankAccount = "396366668888";
  
  // VietQR QuickLink (Using Techcombank as example from design)
  // Format: https://img.vietqr.io/image/<BANK_ID>-<ACCOUNT_NO>-<TEMPLATE>.png?amount=<AMOUNT>&addInfo=<CONTENT>
  const qrUrl = `https://img.vietqr.io/image/TCB-${bankAccount}-compact2.png?amount=${totalAmount}&addInfo=${bookingId} ${customerInfo.phone}&accountName=THEROSE`;

  const copyToClipboard = () => {
      navigator.clipboard.writeText(bankAccount);
      setCopiedAccount(true);
      setTimeout(() => setCopiedAccount(false), 2000);
  };

  return (
    <div className="bg-[#F9F9F9] min-h-screen pt-[140px] pb-24 font-sans text-[#4A4A4A]">
       
       {/* --- HEADER TITLE --- */}
       <div className="container mx-auto px-6 mb-8 text-center relative">
         <button onClick={onBack} className="absolute left-0 md:left-20 top-4 flex items-center text-xs text-gray-500 hover:text-[#A68A64]">
            <ChevronLeft size={14} /> TRỞ VỀ
         </button>
         <h1 className="text-3xl md:text-5xl font-serif text-[#C4A484] mb-4">Thanh toán</h1>
         
         {/* TIMER */}
         <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2 text-sm font-bold">
               <Clock size={16} />
               <span>{formatTime(timeLeft)}</span>
               <span className="font-normal">để tiến hành thanh toán trong</span>
            </div>
            <p className="text-xs text-red-500 font-light italic">
                Cảnh báo: nếu bạn rời trang này, lựa chọn sẽ <span className="font-bold">KHÔNG</span> được giữ lại!
            </p>
         </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl">
          
          {/* --- LEFT COLUMN: INFO SUMMARY --- */}
          <div className="space-y-8">
              
              {/* BOOKING INFO */}
              <div className="bg-white p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-serif text-[#C4A484] mb-6 text-center">Thông tin đặt phòng</h3>
                  
                  {/* Summary Header */}
                  <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 justify-center">
                       <span className="text-black">{selectedRooms.reduce((acc, curr) => acc + curr.quantity, 0)} PHÒNG</span>
                       <span className="text-black">{nights} ĐÊM</span>
                  </div>
                  <div className="text-center text-sm font-medium mb-8">
                      {formatDate(checkIn)} - {formatDate(checkOut)}
                  </div>

                  <div className="flex justify-between text-sm text-gray-600 font-bold mb-6 border-b border-gray-100 pb-4">
                      <div className="flex justify-between w-full">
                          <span>Nhận phòng</span>
                          <span>{formatDate(checkIn)}</span>
                      </div>
                  </div>
                   <div className="flex justify-between text-sm text-gray-600 font-bold mb-6 border-b border-gray-100 pb-4">
                      <div className="flex justify-between w-full">
                          <span>Trả phòng</span>
                          <span>{formatDate(checkOut)}</span>
                      </div>
                  </div>

                  {/* Room Details Breakdown */}
                  <div className="space-y-4 mb-6">
                      {selectedRooms.map(item => {
                          const config = roomConfigs[item.room.id];
                          // Fallback if config is missing (shouldn't happen with correct flow)
                          const adults = config?.adults || item.room.maxPeople;
                          const children = config?.children || 0;
                          const infants = config?.infants || 0;

                          return (
                              <div key={item.room.id} className="pb-4 border-b border-dashed border-gray-200 last:border-0">
                                  <h4 className="text-[#A68A64] font-bold text-sm mb-1">{item.room.name}</h4>
                                  <div className="flex items-center gap-2 text-xs font-light text-gray-500">
                                      <Users size={14} />
                                      <span>{adults < 10 ? `0${adults}` : adults} người lớn</span>
                                      <span>{children < 10 ? `0${children}` : children} trẻ em</span>
                                      <span>{infants < 10 ? `0${infants}` : infants} em bé</span>
                                  </div>
                              </div>
                          );
                      })}
                  </div>
                   
                   <div className="bg-gray-50 p-4 rounded-sm border border-gray-100">
                      <p className="text-[10px] text-gray-400 uppercase font-bold mb-1">Yêu cầu bổ sung (nếu có)</p>
                      <p className="text-sm font-light italic text-gray-600">{customerInfo.note || "Không có"}</p>
                   </div>
                   
                   <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                       <span className="font-bold text-sm">Mã đặt phòng</span>
                       <span className="font-bold text-lg text-[#A68A64]">{bookingId}</span>
                   </div>

                   <div className="flex justify-between items-center mt-2">
                       <span className="font-bold text-sm">Tổng thanh toán</span>
                       <span className="font-bold text-lg text-[#2C2C2C]">{formatCurrency(totalAmount).replace('₫', 'đ')}</span>
                   </div>
                   {weekendNights > 0 && (
                       <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-sm mt-3">
                           <div className="flex items-start gap-2">
                               <AlertTriangle size={14} className="text-yellow-600 mt-0.5 flex-shrink-0" />
                               <div className="text-xs text-yellow-700">
                                   <p className="font-medium mb-1">Phụ phí cuối tuần đã được áp dụng</p>
                                   <p>{weekendNights} đêm cuối tuần × {weekendSurchargeRate}% = <strong>{formatCurrency(weekendSurchargeAmount).replace('₫', 'đ')}</strong></p>
                               </div>
                           </div>
                       </div>
                   )}
                   <div className="text-[10px] text-gray-400 text-right font-light mt-1">(Bao gồm thuế GTGT 10% và phí dịch vụ 5%)</div>
              </div>

              {/* CUSTOMER INFO (READ ONLY) */}
              <div className="bg-white p-8 rounded-sm shadow-sm">
                  <h3 className="text-2xl font-serif text-[#C4A484] mb-8 text-center">Thông tin khách hàng</h3>
                  
                  <div className="space-y-5">
                      <div>
                          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Họ và tên *</label>
                          <input type="text" value={customerInfo.fullName} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                      </div>
                      <div>
                          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Số điện thoại *</label>
                          <div className="flex border border-gray-200 bg-gray-50 rounded-sm">
                              <div className="flex items-center px-3 border-r border-gray-200">
                                  <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="w-5"/>
                              </div>
                              <input type="text" value={customerInfo.phone} disabled className="w-full bg-transparent px-4 py-2 text-sm text-gray-600" />
                          </div>
                      </div>
                      <div>
                          <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Email *</label>
                          <input type="text" value={customerInfo.email} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                           <div>
                               <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">ID/Passport *</label>
                               <input type="text" value={customerInfo.idPassport} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                           </div>
                           <div>
                                <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Giới tính *</label>
                                <div className="relative">
                                    <input type="text" value={customerInfo.gender} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                                    <ChevronDown size={14} className="absolute right-4 top-3 text-gray-400 pointer-events-none"/>
                                </div>
                           </div>
                      </div>
                      <div>
                           <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Ngày sinh *</label>
                           <input type="text" value={customerInfo.dob} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                      </div>
                      <div>
                            <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1">Quốc tịch *</label>
                            <div className="relative">
                                <input type="text" value={customerInfo.nationality} disabled className="w-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600 rounded-sm" />
                                <ChevronDown size={14} className="absolute right-4 top-3 text-gray-400 pointer-events-none"/>
                            </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* --- RIGHT COLUMN: QR PAYMENT --- */}
          <div className="bg-white p-8 rounded-sm shadow-sm h-fit text-center">
              <div className="mb-6 flex justify-center">
                 <img src="https://vietqr.net/img/logo/vietqr+napas.png" alt="VietQR Napas" className="h-8 md:h-10 object-contain" />
              </div>

              <div className="border-2 border-[#A68A64] rounded-lg p-2 inline-block mb-6 relative">
                 <img src={qrUrl} alt="QR Code Payment" className="w-48 h-48 md:w-64 md:h-64 object-contain" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-full shadow-md">
                    <img src="https://img.vietqr.io/image/TCB-logo.png" className="w-8 h-8 object-contain" alt="TCB Logo"/>
                 </div>
              </div>
              
              <div className="flex justify-center items-center gap-4 mb-8">
                 <img src="https://img.vietqr.io/image/napas-logo.png" alt="Napas" className="h-6 object-contain" />
                 <img src="https://img.vietqr.io/image/TCB-logo.png" alt="Techcombank" className="h-6 object-contain" />
              </div>

              <div className="space-y-4 text-sm text-left max-w-xs mx-auto mb-8">
                  <div className="flex justify-between items-center">
                      <span className="text-gray-500">Số tài khoản</span>
                      <div className="flex items-center gap-2">
                          <span className="font-bold text-lg text-black">{bankAccount}</span>
                          <button onClick={copyToClipboard} className="text-[#A68A64] hover:text-[#8e7655]">
                             {copiedAccount ? <Check size={14} /> : <Copy size={14} />}
                          </button>
                      </div>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-500">Chủ tài khoản</span>
                      <span className="font-bold text-black uppercase">THEROSE</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-gray-500">Tổng số tiền</span>
                      <span className="font-bold text-black">{formatCurrency(totalAmount).replace('₫', 'VNĐ')}</span>
                  </div>
                  <div className="flex justify-between items-start">
                      <span className="text-gray-500 whitespace-nowrap mr-4">Nội dung</span>
                      <span className="font-bold text-black text-right break-words">{bookingId} {customerInfo.phone}</span>
                  </div>
              </div>

              <button 
                onClick={onFinish}
                className="w-full bg-[#A68A64] text-white py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-lg"
              >
                 XÁC NHẬN THANH TOÁN
              </button>
          </div>

      </div>
    </div>
  );
};