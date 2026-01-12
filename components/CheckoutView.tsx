import React, { useState, useEffect } from 'react';
import { Room } from '../types';
import { formatCurrency } from '../utils';
import { Clock, ChevronLeft, CreditCard, CheckCircle, Minus, Plus, ChevronDown, Calendar } from 'lucide-react';

interface CheckoutViewProps {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: { rooms: number, adults: number, children: number };
  selectedRooms: { room: Room; quantity: number }[];
  onBack: () => void;
  // Updated onConfirm signature to pass data
  onConfirm: (data: { customerInfo: any, roomConfigs: any }) => void;
}

export const CheckoutView: React.FC<CheckoutViewProps> = ({
  checkIn,
  checkOut,
  guests,
  selectedRooms,
  onBack,
  onConfirm
}) => {
  // --- STATE ---
  // Timer Countdown (10 minutes)
  const [timeLeft, setTimeLeft] = useState(600); 

  // Customer Info Form
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    idPassport: '',
    gender: 'Nam',
    dob: '',
    nationality: 'Việt Nam',
    note: ''
  });

  // Validation Errors State
  const [errors, setErrors] = useState<{
      customer: { [key: string]: string },
      rooms: { [key: number]: string }
  }>({ customer: {}, rooms: {} });

  // Room Specific Configurations (Guest distribution per room)
  const [roomConfigs, setRoomConfigs] = useState<{ [key: string]: { name: string, adults: number, children: number, infants: number } }>(() => {
    const configs: any = {};
    selectedRooms.forEach(item => {
        configs[item.room.id] = {
            name: '',
            adults: item.room.maxPeople, 
            children: 0,
            infants: 0
        };
    });
    return configs;
  });

  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'card'>('bank');
  const [agreed, setAgreed] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // --- HELPERS ---
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

  // --- HANDLERS ---
  const handleRoomConfigChange = (roomId: number, field: string, value: any) => {
      setRoomConfigs(prev => ({
          ...prev,
          [roomId]: {
              ...prev[roomId],
              [field]: value
          }
      }));

      // Clear room error if name is being typed
      if (field === 'name' && errors.rooms[roomId]) {
          setErrors(prev => {
              const newRoomErrors = { ...prev.rooms };
              delete newRoomErrors[roomId];
              return { ...prev, rooms: newRoomErrors };
          });
      }
  };

  const handleCustomerInfoChange = (field: string, value: string) => {
      setCustomerInfo(prev => ({ ...prev, [field]: value }));
      
      // Clear error for this field
      if (errors.customer[field]) {
          setErrors(prev => {
              const newCustomerErrors = { ...prev.customer };
              delete newCustomerErrors[field];
              return { ...prev, customer: newCustomerErrors };
          });
      }
  };

  const validateForm = () => {
      let isValid = true;
      const newCustomerErrors: { [key: string]: string } = {};
      const newRoomErrors: { [key: number]: string } = {};

      // 1. Validate Customer Info
      if (!customerInfo.fullName.trim()) newCustomerErrors.fullName = 'Vui lòng nhập họ và tên';
      if (!customerInfo.phone.trim()) newCustomerErrors.phone = 'Vui lòng nhập số điện thoại';
      if (!customerInfo.email.trim()) newCustomerErrors.email = 'Vui lòng nhập email';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email)) newCustomerErrors.email = 'Email không hợp lệ';
      
      if (!customerInfo.idPassport.trim()) newCustomerErrors.idPassport = 'Vui lòng nhập ID/Passport';
      if (!customerInfo.dob) newCustomerErrors.dob = 'Vui lòng chọn ngày sinh';

      // 2. Validate Room Configs (Name of representative)
      selectedRooms.forEach(item => {
          if (!roomConfigs[item.room.id]?.name?.trim()) {
              newRoomErrors[item.room.id] = 'Vui lòng nhập tên người đại diện phòng';
          }
      });

      if (Object.keys(newCustomerErrors).length > 0 || Object.keys(newRoomErrors).length > 0) {
          isValid = false;
          setErrors({ customer: newCustomerErrors, rooms: newRoomErrors });
          
          // Scroll to top to show errors
          window.scrollTo({ top: 100, behavior: 'smooth' });
      }

      return isValid;
  };

  const handleConfirmClick = () => {
      if (validateForm()) {
          // Pass data back to parent
          onConfirm({ customerInfo, roomConfigs });
      }
  };

  const calculateTotal = () => {
      let roomTotal = 0;
      selectedRooms.forEach(({ room, quantity }) => {
          roomTotal += room.price * quantity * nights;
      });
      return roomTotal;
  };

  const totalAmount = calculateTotal();


  return (
    <div className="bg-[#F9F9F9] min-h-screen pt-[140px] pb-24 font-sans text-[#4A4A4A]">
      
      {/* --- HEADER TITLE --- */}
      <div className="container mx-auto px-6 mb-8 text-center">
         <button onClick={onBack} className="absolute left-6 md:left-20 top-36 flex items-center text-xs text-gray-500 hover:text-[#A68A64]">
            <ChevronLeft size={14} /> TRỞ VỀ
         </button>
         <h1 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-4">Xác nhận thông tin</h1>
         
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

      {/* --- BOOKING SUMMARY BAR --- */}
      <div className="container mx-auto px-6 mb-8">
         <div className="bg-white p-6 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-sm">
             <div className="flex flex-wrap gap-6 font-bold text-gray-700 uppercase tracking-wider text-[11px]">
                 <div>THÔNG TIN ĐẶT PHÒNG</div>
                 <div><span className="text-black text-sm mx-1">{guests.rooms}</span> PHÒNG</div>
                 <div><span className="text-black text-sm mx-1">{nights}</span> ĐÊM</div>
                 <div><span className="text-black text-sm mx-1">{guests.adults}</span> NGƯỜI LỚN</div>
                 <div><span className="text-black text-sm mx-1">{guests.children}</span> TRẺ EM</div>
             </div>
             
             <div className="w-full md:w-auto text-xs space-y-2 md:space-y-0 md:text-right">
                 <div className="text-gray-500">{formatDate(checkIn)} - {formatDate(checkOut)}</div>
                 <div className="flex justify-between md:justify-end gap-12">
                     <div className="text-[#A68A64]">Nhận phòng <span className="text-black block md:inline md:ml-2">{formatDate(checkIn)}</span></div>
                     <div className="text-[#A68A64]">Trả phòng <span className="text-black block md:inline md:ml-2">{formatDate(checkOut)}</span></div>
                 </div>
                 <button onClick={onBack} className="text-[#A68A64] border border-[#A68A64] px-3 py-1 text-[10px] uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors mt-2">
                     Thay đổi kế hoạch
                 </button>
             </div>
         </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
         
         {/* --- LEFT COLUMN: FORMS --- */}
         <div className="lg:col-span-2 space-y-8">
            
            {/* 1. ROOM DETAILS FORM */}
            <div className="bg-white p-8 rounded-sm shadow-sm">
               <h3 className="text-2xl font-serif text-[#C4A484] mb-8 text-center md:text-left">Phòng đã chọn</h3>
               
               <div className="space-y-10">
                   {selectedRooms.map((item, index) => {
                       const config = roomConfigs[item.room.id];
                       const hasError = !!errors.rooms[item.room.id];
                       
                       return (
                           <div key={item.room.id} className="pb-8 border-b border-gray-100 last:border-0 last:pb-0">
                               <div className="flex justify-between items-center mb-6">
                                   <h4 className="text-lg font-bold text-[#A68A64] font-serif">{item.room.name}</h4>
                                   <div className="flex items-center gap-2 text-xs text-gray-500">
                                       <span className="font-light">Số lượng:</span> 
                                       <span className="font-bold text-black">{item.quantity}</span>
                                   </div>
                               </div>

                               <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
                                   {/* Name Input */}
                                   <div className="md:col-span-5">
                                       <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Họ và tên đại diện *</label>
                                       <input 
                                           type="text" 
                                           className={`w-full border px-4 py-2.5 text-sm outline-none rounded-sm transition-colors ${hasError ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#C4A484]'}`}
                                           placeholder="Nhập họ và tên người ở"
                                           value={config?.name || ''}
                                           onChange={(e) => handleRoomConfigChange(item.room.id, 'name', e.target.value)}
                                       />
                                       {hasError && <span className="text-[10px] text-red-500 italic mt-1 block">{errors.rooms[item.room.id]}</span>}
                                   </div>

                                   {/* Counters */}
                                   <div className="md:col-span-7 flex justify-between gap-2">
                                       {/* Adults */}
                                       <div className="flex flex-col items-center">
                                            <span className="text-[10px] text-gray-500 mb-2">Người lớn</span>
                                            <div className="flex items-center border border-gray-200 h-10 px-2 rounded-sm">
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'adults', Math.max(1, config.adults - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                                                <span className="w-8 text-center text-sm font-serif">{config.adults < 10 ? `0${config.adults}` : config.adults}</span>
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'adults', config.adults + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                                            </div>
                                       </div>
                                       
                                       {/* Children */}
                                       <div className="flex flex-col items-center">
                                            <span className="text-[10px] text-gray-500 mb-2">Trẻ em</span>
                                            <div className="flex items-center border border-gray-200 h-10 px-2 rounded-sm">
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'children', Math.max(0, config.children - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                                                <span className="w-8 text-center text-sm font-serif">{config.children < 10 ? `0${config.children}` : config.children}</span>
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'children', config.children + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                                            </div>
                                       </div>

                                       {/* Infants (Em bé) */}
                                       <div className="flex flex-col items-center">
                                            <span className="text-[10px] text-gray-500 mb-2">Em bé</span>
                                            <div className="flex items-center border border-gray-200 h-10 px-2 rounded-sm">
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'infants', Math.max(0, config.infants - 1))} className="text-gray-400 hover:text-[#A68A64]"><Minus size={12}/></button>
                                                <span className="w-8 text-center text-sm font-serif">{config.infants < 10 ? `0${config.infants}` : config.infants}</span>
                                                <button onClick={() => handleRoomConfigChange(item.room.id, 'infants', config.infants + 1)} className="text-gray-400 hover:text-[#A68A64]"><Plus size={12}/></button>
                                            </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       );
                   })}

                   {/* Extra Requests */}
                   <div>
                       <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Yêu cầu bổ sung (nếu có)</label>
                       <textarea 
                           className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#C4A484] rounded-sm resize-none h-32"
                           placeholder="Nhập tin nhắn"
                           value={customerInfo.note}
                           onChange={(e) => handleCustomerInfoChange('note', e.target.value)}
                       ></textarea>
                   </div>
               </div>
            </div>

            {/* 2. CUSTOMER INFO FORM */}
            <div className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-2xl font-serif text-[#C4A484] mb-8 text-center md:text-left">Thông tin khách hàng</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Họ và tên *</label>
                        <input 
                            type="text" 
                            className={`w-full border px-4 py-2.5 text-sm outline-none rounded-sm transition-colors ${errors.customer.fullName ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#C4A484]'}`}
                            placeholder="Nhập họ và tên"
                            value={customerInfo.fullName}
                            onChange={(e) => handleCustomerInfoChange('fullName', e.target.value)}
                        />
                        {errors.customer.fullName && <span className="text-[10px] text-red-500 italic mt-1">{errors.customer.fullName}</span>}
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Số điện thoại *</label>
                        <div className={`flex border rounded-sm focus-within:border-[#C4A484] transition-colors ${errors.customer.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                             <div className="bg-gray-50 flex items-center px-3 border-r border-gray-200">
                                <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="w-5"/>
                                <ChevronDown size={12} className="ml-1 text-gray-400"/>
                             </div>
                             <input 
                                type="text" 
                                className="w-full px-4 py-2.5 text-sm outline-none bg-transparent"
                                placeholder="Nhập số điện thoại"
                                value={customerInfo.phone}
                                onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                            />
                        </div>
                        {errors.customer.phone && <span className="text-[10px] text-red-500 italic mt-1">{errors.customer.phone}</span>}
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Email *</label>
                        <input 
                            type="email" 
                            className={`w-full border px-4 py-2.5 text-sm outline-none rounded-sm transition-colors ${errors.customer.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#C4A484]'}`}
                            placeholder="Nhập địa chỉ email"
                            value={customerInfo.email}
                            onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                        />
                        {errors.customer.email && <span className="text-[10px] text-red-500 italic mt-1">{errors.customer.email}</span>}
                    </div>

                    <div>
                         <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">ID/Passport *</label>
                         <input 
                            type="text" 
                            className={`w-full border px-4 py-2.5 text-sm outline-none rounded-sm transition-colors ${errors.customer.idPassport ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#C4A484]'}`}
                            placeholder="Nhập số định danh cá nhân"
                            value={customerInfo.idPassport}
                            onChange={(e) => handleCustomerInfoChange('idPassport', e.target.value)}
                        />
                        {errors.customer.idPassport && <span className="text-[10px] text-red-500 italic mt-1">{errors.customer.idPassport}</span>}
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Giới tính theo ID/Passport *</label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#C4A484] rounded-sm appearance-none bg-white"
                                value={customerInfo.gender}
                                onChange={(e) => handleCustomerInfoChange('gender', e.target.value)}
                            >
                                <option>Nam</option>
                                <option>Nữ</option>
                                <option>Khác</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-3 text-gray-400 pointer-events-none"/>
                        </div>
                    </div>
                     
                    <div>
                         <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Ngày sinh *</label>
                         <input 
                            type="date" 
                            className={`w-full border px-4 py-2.5 text-sm outline-none rounded-sm text-gray-500 white-input transition-colors ${errors.customer.dob ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#C4A484]'}`}
                            value={customerInfo.dob}
                            onChange={(e) => handleCustomerInfoChange('dob', e.target.value)}
                        />
                        {errors.customer.dob && <span className="text-[10px] text-red-500 italic mt-1">{errors.customer.dob}</span>}
                    </div>
                    <div>
                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2">Quốc tịch *</label>
                        <div className="relative">
                            <select 
                                className="w-full border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#C4A484] rounded-sm appearance-none bg-white"
                                value={customerInfo.nationality}
                                onChange={(e) => handleCustomerInfoChange('nationality', e.target.value)}
                            >
                                <option>Việt Nam</option>
                                <option>Quốc tế</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-4 top-3 text-gray-400 pointer-events-none"/>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* 3. POLICIES (Visual Only based on previous components) */}
            <div className="mt-12 text-center md:text-left">
                <h3 className="text-3xl font-serif text-[#C4A484] mb-6">Chính sách villa</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs font-light text-gray-500">
                    <div>
                        <h4 className="text-base font-serif text-[#A68A64] mb-2">Thanh toán & huỷ đặt phòng</h4>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Suspendisse iaculis urna nec odio tincidunt.</li>
                            <li>Fusce quis massa ac velit cursus dictum.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-base font-serif text-[#A68A64] mb-2">Thời gian nhận và trả phòng</h4>
                        <ul className="list-disc pl-4 space-y-1">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Suspendisse iaculis urna nec odio tincidunt.</li>
                            <li>Fusce quis massa ac velit cursus dictum.</li>
                        </ul>
                    </div>
                </div>
            </div>

         </div>

         {/* --- RIGHT COLUMN: PAYMENT SUMMARY --- */}
         <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-sm shadow-lg sticky top-36">
                 <h3 className="text-2xl font-serif text-[#C4A484] mb-6 text-center">Thông tin thanh toán</h3>
                 
                 {/* Bill Details */}
                 <div className="space-y-4 mb-6">
                     <div className="flex justify-between font-bold text-sm">
                         <span>Chi tiết</span>
                         <span>Giá (VNĐ)</span>
                     </div>
                     <div className="w-full h-px bg-gray-100"></div>
                     
                     {selectedRooms.map((item) => (
                         <div key={item.room.id} className="flex justify-between text-sm text-[#A68A64]">
                             <span>{item.room.name} <span className="text-xs text-gray-400">x{item.quantity}</span></span>
                             <span>{formatCurrency(item.room.price * item.quantity * nights).replace('₫', 'đ')}</span>
                         </div>
                     ))}
                     
                     <div className="w-full h-px bg-gray-100 my-4"></div>
                     
                     <div className="flex gap-2">
                         <input type="text" placeholder="Nhập mã giảm giá" className="w-full border border-gray-200 px-3 py-2 text-xs outline-none focus:border-[#C4A484] rounded-sm" />
                         <button className="text-[10px] uppercase font-bold text-gray-400 underline hover:text-[#A68A64]">Chọn mã giảm giá</button>
                     </div>
                     
                     <div className="w-full h-px bg-gray-100 my-4"></div>

                     <div className="flex justify-between text-sm font-bold text-gray-700">
                         <span>Tiền phòng</span>
                         <span>{formatCurrency(totalAmount).replace('₫', 'đ')}</span>
                     </div>
                     <div className="flex justify-between text-sm font-bold text-gray-700">
                         <span>Phụ phí</span>
                         <span>0 đ</span>
                     </div>
                     <div className="flex justify-between text-sm font-bold text-gray-700">
                         <span>Dịch vụ</span>
                         <span>0 đ</span>
                     </div>
                     <div className="flex justify-between text-sm font-bold text-gray-700">
                         <span>Khuyến mãi</span>
                         <span>0 đ</span>
                     </div>

                     <div className="w-full h-px bg-black/10 my-4"></div>
                     
                     <div className="flex justify-between items-end">
                         <span className="font-bold text-sm">Tổng thanh toán</span>
                         <span className="font-serif text-xl font-bold text-[#2C2C2C]">{formatCurrency(totalAmount).replace('₫', 'đ')}</span>
                     </div>
                     <div className="text-[10px] text-gray-400 text-right font-light">(Bao gồm thuế GTGT 10% và phí dịch vụ 5%)</div>
                 </div>

                 {/* Payment Method */}
                 <div className="mb-6">
                     <div 
                        className={`border rounded-sm p-3 flex items-center gap-3 cursor-pointer transition-colors ${paymentMethod === 'bank' ? 'border-[#A68A64] bg-[#FDFBF7]' : 'border-gray-200'}`}
                        onClick={() => setPaymentMethod('bank')}
                     >
                         <div className={`w-4 h-4 rounded-sm border flex items-center justify-center ${paymentMethod === 'bank' ? 'border-[#A68A64] bg-[#A68A64]' : 'border-gray-300'}`}>
                             {paymentMethod === 'bank' && <div className="w-2 h-2 bg-white rounded-[1px]"></div>}
                         </div>
                         <span className="text-sm font-light">Thanh toán chuyển khoản</span>
                     </div>
                 </div>

                 {/* Agreement */}
                 <div className="flex items-start gap-2 mb-6 cursor-pointer" onClick={() => setAgreed(!agreed)}>
                      <div className={`w-4 h-4 mt-0.5 rounded-sm border flex items-center justify-center flex-shrink-0 ${agreed ? 'border-[#A68A64] bg-[#A68A64]' : 'border-gray-300'}`}>
                           {agreed && <div className="w-2 h-2 bg-white rounded-[1px]"></div>}
                      </div>
                      <span className="text-xs text-gray-500 font-light select-none">
                          Tôi đã đọc và đồng ý với chính sách của villa
                      </span>
                 </div>

                 {/* Submit Button */}
                 <button 
                    onClick={handleConfirmClick}
                    disabled={!agreed}
                    className="w-full bg-[#A68A64] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                    XÁC NHẬN ĐẾN BƯỚC THANH TOÁN
                 </button>
             </div>
         </div>

      </div>
    </div>
  );
};