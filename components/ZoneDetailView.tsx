import React from 'react';
import { Room, ZoneInfo } from '../types';
import { ArrowRight, Users, Layout, Home, Bed, Utensils } from 'lucide-react';

interface ZoneDetailViewProps {
  zoneName: 'Wooden House' | 'Rose House' | 'Villa';
  rooms: Room[];
  info: ZoneInfo;
  onBack: () => void;
  onBookRoom: (room: Room) => void;
  onViewRoomDetail: (room: Room) => void;
}

export const ZoneDetailView: React.FC<ZoneDetailViewProps> = ({ zoneName, rooms, info, onBack, onBookRoom, onViewRoomDetail }) => {
  
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isVilla = zoneName === 'Villa';

  const amenitiesList = [
    "Wi-Fi 24/7 - Luôn duy trì sự kết nối mượt mà trong suốt kỳ nghỉ.",
    "Trà và cà phê miễn phí - Được chuẩn bị sẵn để có thể thưởng thức bất cứ lúc nào.",
    "Nệm pillow- top cao cấp - Mang lại giấc ngủ êm ái và trọn vẹn.",
    "Vòi sen mưa & sen cầm tay - Mang lại giấc ngủ êm ái và trọn vẹn.",
    "Điều hòa không khí - Duy trì không gian thoáng mát, dễ chịu.",
    "Ấm đun siêu tốc - Phục vụ nhu cầu pha chế nhanh chóng và tiện lợi.",
    "Smart TV & điều hòa - Mang đến trải nghiệm giải trí đa dạng ngay tại phòng.",
    "Tiện nghi phòng tắm cao cấp - Bao gồm máy sấy tóc cùng sản phẩm chăm sóc tinh chọn.",
    "Áo choàng tắm & dép đi trong phòng - Tôn thêm sự thoải mái và tinh tế.",
    "Phòng không hút thuốc - Giữ không gian trong lành, thoải mái cho mọi khách."
  ];

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] w-full -mt-[180px]">
        <img 
          src={info.heroImage} 
          alt={zoneName} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-12 drop-shadow-lg">{zoneName}</h1>
          
          {isVilla ? (
            <button 
              onClick={() => rooms[0] && onBookRoom(rooms[0])}
              className="mt-4 border border-white px-8 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors"
            >
               ĐẶT PHÒNG &rarr;
            </button>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] font-bold text-white/90 uppercase tracking-[0.2em]">
               <button onClick={() => scrollToId('intro')} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Giới thiệu</button>
               {rooms.map(r => (
                 <button key={r.id} onClick={() => scrollToId(`room-${r.id}`)} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
                   {r.name}
                 </button>
               ))}
            </div>
          )}
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section id="intro" className="container mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-8">{info.introTitle}</h2>
          <div className="space-y-6 text-sm font-light text-gray-500 leading-loose text-justify md:text-center">
            {info.introText.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {info.introImages.map((img, idx) => (
            <div key={idx} className="h-64 overflow-hidden">
               <img src={img} alt="Intro" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/>
            </div>
          ))}
        </div>
      </section>

      {/* --- ROOMS LIST --- */}
      <section className="container mx-auto px-6 pb-24 space-y-24">
        {rooms.map((room) => (
          <div key={room.id} id={`room-${room.id}`} className="flex flex-col">
            {/* Title Centered */}
            <div className="text-center mb-8">
               <h3 className="text-3xl md:text-5xl font-serif text-[#C4A484] mb-3 font-normal tracking-wide">
                 {isVilla ? 'Thông tin' : room.name}
               </h3>
               <p className="text-xs text-gray-400 font-light italic max-w-2xl mx-auto">{room.description}</p>
               {/* Button Text Arrow Link */}
               {!isVilla && (
                <button 
                    onClick={() => onViewRoomDetail(room)}
                    className="mt-4 text-[9px] uppercase font-bold tracking-[0.2em] text-[#C4A484] hover:text-[#8e7655] transition-colors"
                >
                    BUTTON TEXT &rarr;
                </button>
               )}
            </div>

            {/* Layout: Image Left - Info Right */}
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
               <div className="md:w-3/5">
                 <div className="h-[350px] md:h-[450px]">
                    <img src={room.imageUrl} alt={room.name} className="w-full h-full object-cover shadow-lg" />
                 </div>
                 {/* Long Left Arrow Below Image */}
                 <div className="mt-6 text-[#C4A484] font-light text-4xl overflow-hidden leading-none opacity-60">
                    &lt;-----------------------------------------------------------
                 </div>
               </div>

               <div className="md:w-2/5 flex flex-col justify-center items-start">
                  <div className="w-full mb-8">
                      {isVilla ? (
                        /* VILLA SPECIFIC LAYOUT */
                        <div className="text-xs text-gray-500 font-light w-full">
                           <div className="flex items-center gap-3 py-2">
                              <Users size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span className="flex-1">04 người lớn 04 trẻ em (&lt; 6 tuổi)</span>
                           </div>

                           <h4 className="text-3xl font-serif text-[#C4A484] mt-6 mb-4">Tầng 1</h4>
                           <div className="flex items-center gap-3 py-1">
                              <Layout size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>100 m²</span>
                           </div>
                           <div className="flex items-center gap-3 py-1">
                              <Utensils size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>Khu vực bếp, bàn ăn + 01 phòng khách + 01 phòng ngủ</span>
                           </div>
                           <div className="flex items-center gap-3 py-1">
                              <Bed size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>01 giường 1m8 x 2m</span>
                           </div>

                           <h4 className="text-3xl font-serif text-[#C4A484] mt-6 mb-4">Tầng 2</h4>
                           <div className="flex items-center gap-3 py-1">
                              <Layout size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>35 m²</span>
                           </div>
                           <div className="flex items-center gap-3 py-1">
                              <Home size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>01 phòng ngủ</span>
                           </div>
                           <div className="flex items-center gap-3 py-1">
                              <Bed size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                              <span>01 giường 1m8 x 2m</span>
                           </div>
                        </div>
                      ) : (
                        /* STANDARD ROOM LAYOUT */
                        <div className="space-y-4 text-xs text-gray-500 font-light w-full">
                            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                                <Users size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                                <span className="flex-1">{room.maxPeople < 10 ? `0${room.maxPeople}` : room.maxPeople} người lớn</span>
                                <span className="text-gray-400">00 trẻ em (&lt; 6 tuổi)</span>
                            </div>
                            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                                <Layout size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                                <span>{room.area < 10 ? `0${room.area}` : room.area} m²</span>
                            </div>
                            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                                <Home size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                                <span>{room.roomsCount < 10 ? `0${room.roomsCount}` : room.roomsCount} phòng ngủ</span>
                            </div>
                            <div className="flex items-center gap-3 py-2 border-b border-gray-100">
                                <Bed size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                                <span>0{room.bedType.includes('giường') ? room.bedType.split(' ')[0] : '1'} giường 00</span>
                            </div>
                        </div>
                      )}
                  </div>

                  {/* Long Right Arrow Below Info */}
                  <div className="w-full mb-8 text-[#C4A484] font-light text-4xl overflow-hidden leading-none opacity-60 text-right">
                     -----------------------------------------------------------&gt;
                  </div>

                  <div className="flex gap-4 w-full">
                     {isVilla ? (
                         <button 
                            onClick={() => onBookRoom(room)}
                            className="border border-[#A68A64] text-[#A68A64] py-2 px-8 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
                        >
                            ĐẶT PHÒNG &rarr;
                        </button>
                     ) : (
                         <>
                            <button 
                                onClick={() => onBookRoom(room)}
                                className="flex-1 bg-[#A68A64] text-white py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-sm text-center"
                            >
                                Đặt phòng <ArrowRight size={10} className="inline ml-1" />
                            </button>
                            <button 
                                onClick={() => onViewRoomDetail(room)}
                                className="flex-1 border border-[#E0E0E0] text-gray-500 py-3 text-[10px] font-bold uppercase tracking-widest hover:border-[#A68A64] hover:text-[#A68A64] transition-colors text-center"
                            >
                                Xem chi tiết
                            </button>
                         </>
                     )}
                  </div>
               </div>
            </div>
          </div>
        ))}
      </section>

      {/* --- AMENITIES INCLUDED --- */}
      <section className="container mx-auto px-6 pb-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif text-[#C4A484] mb-2 font-normal">Tiện nghi đã bao gồm</h2>
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
    </div>
  );
};