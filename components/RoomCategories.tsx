import React from 'react';
import { ArrowRight, Users, Layout, Home, Bed, Loader2 } from 'lucide-react';
import { useRooms } from '../services/useApi';
import { Room } from '../types';

interface RoomCategoriesProps {
  onViewDetail?: (room: Room) => void;
  onViewZoneDetail?: (zone: 'Wooden House' | 'Rose House' | 'Villa') => void;
  onBookRoom?: (room: Room) => void;
}

interface RoomCardProps {
  room: Room;
  onViewDetail?: (room: Room) => void;
  onBookRoom?: (room: Room) => void;
}

// Loading skeleton
const SkeletonCard: React.FC = () => (
  <div className="bg-white animate-pulse">
    <div className="h-64 w-full bg-gray-200 mb-4"></div>
    <div className="h-6 bg-gray-200 w-3/4 mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 w-1/2"></div>
      <div className="h-4 bg-gray-200 w-1/3"></div>
      <div className="h-4 bg-gray-200 w-1/2"></div>
    </div>
  </div>
);

const CategoryRoomCard: React.FC<RoomCardProps> = ({ room, onViewDetail, onBookRoom }) => {
  return (
    <div className="bg-white group">
      <div className="overflow-hidden h-64 w-full mb-4 cursor-pointer" onClick={() => onViewDetail && onViewDetail(room)}>
        <img
          src={room.imageUrl}
          alt={room.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="text-left">
        <h3
          className="text-xl font-serif text-[#C4A484] mb-3 font-medium tracking-wide cursor-pointer hover:text-[#8e7655]"
          onClick={() => onViewDetail && onViewDetail(room)}
        >
          {room.name}
        </h3>

        <div className="space-y-2 text-[11px] text-gray-500 font-light mb-5">
          <div className="flex items-center gap-2">
            <Users size={14} className="text-[#C4A484]" strokeWidth={1.5} />
            <span>{room.maxPeople < 10 ? `0${room.maxPeople}` : room.maxPeople} người lớn</span>
          </div>
          <div className="flex items-center gap-2">
            <Layout size={14} className="text-[#C4A484]" strokeWidth={1.5} />
            <span>{room.area} m²</span>
          </div>
          <div className="flex items-center gap-2">
            <Home size={14} className="text-[#C4A484]" strokeWidth={1.5} />
            <span>{room.roomsCount < 10 ? `0${room.roomsCount}` : room.roomsCount} phòng</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed size={14} className="text-[#C4A484]" strokeWidth={1.5} />
            <span>{room.bedType}</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => onBookRoom && onBookRoom(room)}
            className="bg-[#A68A64] text-white py-1.5 px-4 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
          >
            Đặt phòng <ArrowRight size={10} className="inline ml-1" />
          </button>
          <button
            onClick={() => onViewDetail && onViewDetail(room)}
            className="border border-[#A68A64] text-[#A68A64] py-1.5 px-4 text-[9px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};

export const RoomCategories: React.FC<RoomCategoriesProps> = ({ onViewDetail, onViewZoneDetail, onBookRoom }) => {
  // Fetch rooms from API
  const { data: rooms, loading, error } = useRooms();

  // Map API response to Room type
  const mapRoom = (r: any): Room => ({
    id: r.id,
    name: r.name,
    maxPeople: r.maxPeople,
    area: r.area,
    roomsCount: r.roomsCount,
    bedType: r.bedType,
    price: r.price,
    imageUrl: r.imageUrl,
    zone: r.zone as 'Wooden House' | 'Rose House' | 'Villa',
    description: r.description,
    features: r.features,
    subImages: r.subImages
  });

  // Filter rooms by zone
  const woodenRooms = rooms?.filter(r => r.zone === 'Wooden House').map(mapRoom) || [];
  const roseRooms = rooms?.filter(r => r.zone === 'Rose House').map(mapRoom) || [];
  const villaRoom = rooms?.find(r => r.zone === 'Villa');
  const mappedVillaRoom = villaRoom ? mapRoom(villaRoom) : null;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white pb-24 pt-[140px]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80&w=2000"
          alt="Room Categories Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-12 drop-shadow-lg">Hạng phòng</h1>
          <div className="flex gap-8 md:gap-16 text-[9px] font-bold text-white/90 uppercase tracking-[0.2em]">
            <button onClick={() => scrollToSection('wooden')} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Khu Wooden House</button>
            <button onClick={() => scrollToSection('rose')} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Khu Rose House</button>
            <button onClick={() => scrollToSection('villa')} className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Khu Villa</button>
          </div>
        </div>
      </section>

      {/* --- Error State --- */}
      {error && (
        <div className="container mx-auto px-6 py-24 text-center">
          <p className="text-red-500">Không thể tải danh sách phòng. Vui lòng thử lại sau.</p>
        </div>
      )}

      {/* --- WOODEN HOUSE SECTION --- */}
      <section id="wooden" className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-serif text-[#C4A484] mb-6">Wooden House</h2>
        <p className="text-sm font-light text-gray-500 max-w-3xl mx-auto mb-8 leading-loose">
          Wooden House tại The Wandering Rose Villa là chốn dừng chân lý tưởng cho những ai đang kiếm tìm sự ấm áp, bình yên và một nhịp sống chậm rãi hơn. Không gian được thiết kế theo phong cách mộc mạc, kết hợp hài hòa giữa sắc mộc mạc và gỗ thơm, tạo nên sự gần gũi và thư giãn...
        </p>
        <button
          onClick={() => onViewZoneDetail && onViewZoneDetail('Wooden House')}
          className="bg-[#A68A64] text-white py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] mb-16"
        >
          Xem chi tiết <ArrowRight size={10} className="inline ml-1" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : (
            woodenRooms.map(room => <CategoryRoomCard key={room.id} room={room} onViewDetail={onViewDetail} onBookRoom={onBookRoom} />)
          )}
        </div>
      </section>

      {/* --- ROSE HOUSE SECTION --- */}
      <section id="rose" className="bg-[#FDFBF7] py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-[#C4A484] mb-6">Rose House</h2>
          <p className="text-sm font-light text-gray-500 max-w-3xl mx-auto mb-8 leading-loose">
            Khu Rose House mang đến một không gian nghỉ dưỡng đậm chất thơ, nơi mỗi căn nhà là một màu sắc riêng biệt, hòa quyện tuyệt đối với thiên nhiên Ba Vì. Được thiết kế theo phong cách tối giản nhưng đầy đủ tiện nghi, Rose House là lựa chọn hoàn hảo cho các cặp đôi hoặc gia đình nhỏ.
          </p>
          <button
            onClick={() => onViewZoneDetail && onViewZoneDetail('Rose House')}
            className="bg-[#A68A64] text-white py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] mb-16"
          >
            Xem chi tiết <ArrowRight size={10} className="inline ml-1" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {loading ? (
              <>
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </>
            ) : (
              roseRooms.map(room => <CategoryRoomCard key={room.id} room={room} onViewDetail={onViewDetail} onBookRoom={onBookRoom} />)
            )}
          </div>
        </div>
      </section>

      {/* --- VILLA SECTION --- */}
      <section id="villa" className="container mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-serif text-[#C4A484] mb-6">The Wandering Rose villa</h2>
        <p className="text-sm font-light text-gray-500 max-w-3xl mx-auto mb-8 leading-loose">
          Biệt thự The Wandering Rose là biểu tượng của sự sang trọng và đẳng cấp. Với diện tích 100m2, bể bơi riêng, phòng khách rộng lớn và bếp đầy đủ tiện nghi, đây là lựa chọn hàng đầu cho các kỳ nghỉ dưỡng cao cấp.
        </p>
        <button
          onClick={() => onViewZoneDetail && onViewZoneDetail('Villa')}
          className="bg-[#A68A64] text-white py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] mb-16"
        >
          Xem chi tiết <ArrowRight size={10} className="inline ml-1" />
        </button>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="h-[400px] bg-gray-200 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 w-1/3 animate-pulse"></div>
            </div>
          </div>
        ) : mappedVillaRoom && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
            <div className="h-[400px]">
              <img src={mappedVillaRoom.imageUrl} alt={mappedVillaRoom.name} className="w-full h-full object-cover shadow-lg" />
            </div>
            <div>
              <h3 className="text-2xl font-serif text-[#C4A484] mb-4 tracking-wide">{mappedVillaRoom.name}</h3>

              <div className="space-y-3 text-xs text-gray-500 font-light mb-8">
                <div className="flex items-center gap-3">
                  <Users size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                  <span>{mappedVillaRoom.maxPeople < 10 ? `0${mappedVillaRoom.maxPeople}` : mappedVillaRoom.maxPeople} người lớn</span>
                </div>
                <div className="flex items-center gap-3">
                  <Layout size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                  <span>Tầng 1: 100 m²; Tầng 2: 35 m²</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                  <span>{mappedVillaRoom.roomsCount < 10 ? `0${mappedVillaRoom.roomsCount}` : mappedVillaRoom.roomsCount} phòng ngủ</span>
                </div>
                <div className="flex items-center gap-3">
                  <Bed size={16} className="text-[#C4A484]" strokeWidth={1.5} />
                  <span>{mappedVillaRoom.bedType}</span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => onBookRoom && onBookRoom(mappedVillaRoom)}
                  className="bg-[#A68A64] text-white py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
                >
                  Đặt phòng <ArrowRight size={10} className="inline ml-1" />
                </button>
                <button
                  onClick={() => onViewDetail && onViewDetail(mappedVillaRoom)}
                  className="border border-[#A68A64] text-[#A68A64] py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- AMENITIES INCLUDED --- */}
      <section className="container mx-auto px-6 pt-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-2">Tiện nghi đã bao gồm</h2>
          <div className="w-24 h-px bg-[#C4A484] mx-auto mt-6 mb-8 opacity-50"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-0">
          {[
            { name: "Wi-Fi 24/7", desc: "Luôn duy trì sự kết nối mượt mà trong suốt kỳ nghỉ." },
            { name: "Trà và cà phê miễn phí", desc: "Được chuẩn bị sẵn để có thể thưởng thức bất cứ lúc nào." },
            { name: "Nệm pillow-top cao cấp", desc: "Mang lại giấc ngủ êm ái và trọn vẹn." },
            { name: "Vòi sen mưa & sen cầm tay", desc: "Mang lại giấc ngủ êm ái và trọn vẹn." },
            { name: "Điều hòa không khí", desc: "Duy trì không gian thoáng mát, dễ chịu." },
            { name: "Ấm đun siêu tốc", desc: "Phục vụ nhu cầu pha chế nhanh chóng và tiện lợi." },
            { name: "Smart TV & điều hòa", desc: "Mang đến trải nghiệm giải trí đa dạng ngay tại phòng." },
            { name: "Tiện nghi phòng tắm cao cấp", desc: "Bao gồm máy sấy tóc cùng sản phẩm chăm sóc tinh chọn." },
            { name: "Áo choàng tắm & dép đi trong phòng", desc: "Tôn thêm sự thoải mái và tinh tế." },
            { name: "Phòng không hút thuốc", desc: "Giữ không gian trong lành, thoải mái cho mọi khách." },
          ].map((item, index) => (
            <div key={index} className="text-center py-4 border-b border-[#EFEFEF] last:border-none">
              <h4 className="text-lg font-serif text-[#C4A484] mb-1">{item.name}</h4>
              <p className="text-xs font-light text-gray-400 italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};