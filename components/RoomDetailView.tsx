import React, { useMemo } from 'react';
import { Room } from '../types';
import { rooms as allRooms } from '../constants';
import { ArrowLeft, ArrowRight, Users, Layout, Home, Bed, Utensils } from 'lucide-react';
import { handleImageError } from '../utils';

interface RoomDetailViewProps {
  room: Room;
  onBack: () => void;
  onViewRoomDetail?: (room: Room) => void;
  onBookRoom?: (room: Room) => void;
}

export const RoomDetailView: React.FC<RoomDetailViewProps> = ({ room, onBack, onViewRoomDetail, onBookRoom }) => {
  
  // OPTIMIZATION: Use useMemo to prevent reshuffling on every render
  const otherRooms = useMemo(() => {
    return allRooms
      .filter(r => r.id !== room.id)
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, 3); // Take 3
  }, [room.id]); // Only re-calculate when the current room changes

  const amenitiesList = [
    "Wi-Fi 24/7 - Luôn duy trì sự kết nối mượt mà trong suốt kỳ nghỉ.",
    "Trà và cà phê miễn phí - Được chuẩn bị sẵn để có thể thưởng thức bất cứ lúc nào.",
    "Nệm pillow- top cao cấp - Mang lại giấc ngủ êm ái và trọn vẹn.",
    "Vòi sen mưa & sen cầm tay - Thư giãn tối đa dưới làn nước ấm áp.",
    "Điều hòa không khí - Duy trì không gian thoáng mát, dễ chịu.",
    "Ấm đun siêu tốc - Phục vụ nhu cầu pha chế nhanh chóng và tiện lợi.",
    "Smart TV & giải trí - Mang đến trải nghiệm giải trí đa dạng ngay tại phòng.",
    "Tiện nghi phòng tắm cao cấp - Bao gồm máy sấy tóc cùng sản phẩm chăm sóc tinh chọn.",
    "Áo choàng tắm & dép đi trong phòng - Tôn thêm sự thoải mái và tinh tế.",
    "Phòng không hút thuốc - Giữ không gian trong lành, thoải mái cho mọi khách."
  ];

  return (
    <div className="bg-white">
       {/* --- HERO IMAGE --- */}
       <section className="relative h-[60vh] w-full -mt-[180px]">
        <img 
          src={room.imageUrl} 
          alt={room.name} 
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
             <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-8 drop-shadow-lg text-center px-4">{room.name}</h1>
             <button 
                onClick={() => onBookRoom && onBookRoom(room)}
                className="border border-white px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
             >
                ĐẶT PHÒNG &rarr;
            </button>
        </div>
      </section>

      {/* --- INTRO SECTION (Giới thiệu) --- */}
      <section className="container mx-auto px-6 py-24">
         <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-8">Giới thiệu</h2>
            <p className="text-sm font-light text-gray-500 leading-loose text-justify md:text-center">
               {room.description}
            </p>
         </div>
         {/* 2 Sub Images */}
         {room.subImages && room.subImages.length >= 2 && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="h-64 md:h-80 overflow-hidden">
                    <img src={room.subImages[0]} onError={handleImageError} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Sub 1"/>
                 </div>
                 <div className="h-64 md:h-80 overflow-hidden">
                    <img src={room.subImages[1]} onError={handleImageError} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Sub 2"/>
                 </div>
             </div>
         )}
      </section>

      {/* --- AMENITIES INCLUDED --- */}
      <section className="container mx-auto px-6 pb-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-2 font-normal">Tiện nghi đã bao gồm</h2>
            <div className="w-full h-px bg-[#EFEFEF] mt-8"></div>
         </div>

         <div className="max-w-4xl mx-auto">
            {amenitiesList.map((item, index) => {
               const [title, desc] = item.split(' - ');
               return (
                  <div key={index} className="py-5 border-b border-[#EFEFEF] last:border-none text-center">
                     <h4 className="text-lg font-serif text-[#C4A484] mb-2">{title}</h4>
                     <p className="text-xs font-light text-gray-400 italic">{desc}</p>
                  </div>
               );
            })}
         </div>
      </section>

       {/* --- ROOM INFO / DESCRIPTION (Mô tả) --- */}
       <section className="container mx-auto px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div className="h-[400px]">
                    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover shadow-lg" />
                 </div>

                 <div className="md:pl-10">
                    <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-8">Mô tả</h2>
                    
                    <div className="space-y-4 text-xs text-gray-500 font-light w-full mb-8">
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Users size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                            <span className="flex-1">{room.maxPeople < 10 ? `0${room.maxPeople}` : room.maxPeople} người lớn</span>
                            <span className="text-gray-400">Miễn phí cho trẻ em &lt; 6 tuổi</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Layout size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                            <span>{room.area < 10 ? `0${room.area}` : room.area} m²</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Home size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                            <span>{room.roomsCount < 10 ? `0${room.roomsCount}` : room.roomsCount} phòng</span>
                        </div>
                        <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                            <Bed size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                            <span>{room.bedType}</span>
                        </div>
                    </div>

                    <button 
                        onClick={() => onBookRoom && onBookRoom(room)}
                        className="bg-[#A68A64] text-white py-3 px-8 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
                    >
                        ĐẶT PHÒNG &rarr;
                    </button>
                 </div>
            </div>
       </section>

      {/* --- OTHER ROOMS (Các hạng phòng khác) --- */}
      <section className="bg-[#FDFBF7] py-24">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] text-center mb-12">Các hạng phòng khác</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherRooms.map(r => (
                    <div key={r.id} className="bg-white group shadow-sm hover:shadow-lg transition-all duration-300">
                        <div className="overflow-hidden h-64 w-full mb-4 cursor-pointer" onClick={() => onViewRoomDetail && onViewRoomDetail(r)}>
                            <img 
                            src={r.imageUrl} 
                            alt={r.name} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="text-left px-4 pb-6">
                            <h3 
                            className="text-xl font-serif text-[#C4A484] mb-3 font-medium tracking-wide cursor-pointer hover:text-[#8e7655]"
                            onClick={() => onViewRoomDetail && onViewRoomDetail(r)}
                            >
                                {r.name}
                            </h3>
                            
                            <div className="space-y-2 text-[10px] text-gray-500 font-light mb-5">
                                <div className="flex items-center gap-2">
                                    <Users size={12} className="text-[#C4A484]" strokeWidth={1.5} />
                                    <span>{r.maxPeople < 10 ? `0${r.maxPeople}` : r.maxPeople} người lớn</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Layout size={12} className="text-[#C4A484]" strokeWidth={1.5} />
                                    <span>{r.area} m²</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Bed size={12} className="text-[#C4A484]" strokeWidth={1.5} />
                                    <span className="truncate">{r.bedType}</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button 
                                    onClick={() => onBookRoom && onBookRoom(r)}
                                    className="bg-[#A68A64] text-white py-1.5 px-4 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
                                >
                                    ĐẶT PHÒNG &rarr;
                                </button>
                                <button 
                                    onClick={() => onViewRoomDetail && onViewRoomDetail(r)}
                                    className="border border-[#A68A64] text-[#A68A64] py-1.5 px-4 text-[9px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
                                >
                                    XEM CHI TIẾT
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
                 <button className="w-10 h-10 rounded-full bg-[#A68A64] text-white flex items-center justify-center hover:bg-[#8e7655] transition-colors"><ArrowLeft size={16} /></button>
                 <button className="w-10 h-10 rounded-full bg-[#A68A64] text-white flex items-center justify-center hover:bg-[#8e7655] transition-colors"><ArrowRight size={16} /></button>
            </div>
         </div>
      </section>

    </div>
  );
};