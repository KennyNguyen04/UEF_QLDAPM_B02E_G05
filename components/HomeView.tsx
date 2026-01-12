import React from 'react';
import { Wifi, Waves, Bike, Utensils, ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Loader2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { RoomCard } from './RoomCard';
import { GeneralCard } from './GeneralCard';
import { useRooms, useAmenities, useNews, useEvents } from '../services/useApi';
import { Room, News } from '../types';

// Static intro articles (these are special content, not from API)
const introArticles = [
  {
    id: 101,
    title: "Vị trí đắc địa & Không gian xanh",
    category: "Giới thiệu",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200",
    date: "01/01/2024",
    description: "Khám phá vị trí độc bản và kiến trúc xanh tại The Wandering Rose.",
    content: []
  },
  {
    id: 102,
    title: "Hoà mình vào thiên nhiên",
    category: "Trải nghiệm",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    date: "01/01/2024",
    description: "Đánh thức mọi giác quan và chữa lành tâm hồn giữa đại ngàn.",
    content: []
  }
];

interface HomeViewProps {
  onBookRoom?: (room: Room) => void;
  onViewNews?: (news: News) => void;
  onOpenBooking?: () => void;
  onNavigateToServiceBooking?: () => void;
  onViewZoneDetail?: (zone: 'Wooden House' | 'Rose House' | 'Villa') => void;
}

// Loading skeleton component
const SkeletonCard: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`animate-pulse bg-gray-200 rounded-sm ${className}`}></div>
);

export const HomeView: React.FC<HomeViewProps> = ({
  onBookRoom,
  onViewNews,
  onOpenBooking,
  onNavigateToServiceBooking,
  onViewZoneDetail
}) => {
  // Fetch data from API
  const { data: rooms, loading: roomsLoading } = useRooms();
  const { data: amenities, loading: amenitiesLoading } = useAmenities();
  const { data: newsData, loading: newsLoading } = useNews();
  const { data: events, loading: eventsLoading } = useEvents();

  // Map API room to types.Room format
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

  // Map API news to types.News format
  const mapNews = (n: any): News => ({
    id: n.id,
    title: n.title,
    category: n.category,
    imageUrl: n.imageUrl,
    date: n.date ? new Date(n.date).toLocaleDateString('vi-VN') : undefined,
    description: n.description,
    content: n.content
  });

  return (
    <>
      {/* --- HERO --- */}
      <section className="relative h-[100vh] w-full -mt-[180px]">
        <img
          src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2000"
          alt="Resort Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-60 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
      </section>

      {/* --- ZIG ZAG INTRO --- */}
      <section className="container mx-auto px-6 py-12 md:py-24 relative z-10 bg-white rounded-t-3xl -mt-20">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-24">
          <div className="md:w-1/2 relative">
            <div className="absolute top-3 -left-3 w-full h-full border border-primary/20 z-0 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
              alt="Mountain View"
              className="w-full h-auto shadow-lg relative z-10 rounded-sm"
            />
          </div>
          <div className="md:w-1/2 md:pl-10 text-center md:text-left">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Giới thiệu</h4>
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-4 leading-normal tracking-wide">Vị trí đắc địa & <br /> Không gian xanh</h2>
            <div className="w-12 h-px bg-primary mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-500 font-light text-sm mb-6 leading-loose text-justify">
              Nằm ẩn mình giữa sườn núi Ba Vì hùng vĩ, The Wandering Rose sở hữu vị trí đắc địa với tầm nhìn bao quát núi rừng.
              Không gian được thiết kế mở, tận dụng tối đa ánh sáng tự nhiên và gió trời, mang lại cảm giác thư thái tuyệt đối cho du khách.
              Từng góc nhỏ đều được chăm chút tỉ mỉ, kết hợp hài hòa giữa kiến trúc hiện đại và nét đẹp hoang sơ của thiên nhiên.
            </p>
            <button
              onClick={() => onViewNews && onViewNews(introArticles[0] as News)}
              className="border border-primary text-primary px-6 py-2 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors"
            >
              Xem thêm →
            </button>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 relative">
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 z-0 hidden md:block"></div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800"
              alt="Garden View"
              className="w-full h-auto shadow-lg relative z-10 rounded-sm"
            />
          </div>
          <div className="md:w-1/2 md:pr-10 text-center md:text-right">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Trải nghiệm</h4>
            <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-4 leading-normal tracking-wide">Hoà mình vào <br /> thiên nhiên</h2>
            <div className="w-12 h-px bg-primary mb-6 mx-auto md:ml-auto md:mr-0"></div>
            <p className="text-gray-500 font-light text-sm mb-6 leading-loose text-justify md:text-right">
              Hãy để thiên nhiên chữa lành tâm hồn bạn. Tận hưởng bầu không khí trong lành của núi rừng Ba Vì, lắng nghe tiếng suối chảy róc rách và đánh thức mọi giác quan.
              Tại đây, bạn có thể tản bộ dưới tán cây cổ thụ, đọc sách bên hiên nhà đầy nắng hay thưởng thức tiệc trà chiều giữa vườn hoa hồng ngát hương.
              Một hành trình tìm về sự an yên và cân bằng trong cuộc sống.
            </p>
            <div className="flex justify-center md:justify-end">
              <button
                onClick={() => onViewNews && onViewNews(introArticles[1] as News)}
                className="border border-primary text-primary px-6 py-2 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-colors"
              >
                Xem thêm →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- AMENITIES (Quyền lợi) --- */}
      <section className="relative py-24 bg-scroll md:bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle title="Tiện ích & Dịch vụ" subtitle="Chúng tôi mang đến những trải nghiệm tốt nhất cho kỳ nghỉ của bạn" light centered />

          {amenitiesLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4].map(i => <SkeletonCard key={i} className="h-40" />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {amenities?.map((item) => (
                <div key={item.id} className="bg-white/95 backdrop-blur-sm p-6 md:p-8 text-center shadow-xl group hover:-translate-y-2 transition-all duration-300 rounded-sm">
                  <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {item.iconName === 'wifi' && <Wifi size={28} strokeWidth={1} />}
                    {item.iconName === 'pool' && <Waves size={28} strokeWidth={1} />}
                    {item.iconName === 'bike' && <Bike size={28} strokeWidth={1} />}
                    {item.iconName === 'bbq' && <Utensils size={28} strokeWidth={1} />}
                  </div>
                  <h3 className="text-sm md:text-base font-serif text-secondary mb-2 font-bold tracking-wide">{item.title}</h3>
                  <p className="text-gray-500 text-[10px] md:text-xs font-light leading-relaxed hidden md:block">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- ROOMS --- */}
      <section className="container mx-auto px-6 py-24 bg-surface overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="text-left w-full md:w-auto">
            <h4 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Lựa chọn nghỉ dưỡng</h4>
            <h2 className="text-xl md:text-2xl font-serif text-secondary tracking-wide">Các hạng phòng</h2>
            <div className="w-16 h-px bg-primary mt-4"></div>
          </div>
          <button className="hidden md:block border-b border-primary text-primary text-[10px] uppercase tracking-[0.2em] pb-1 hover:text-[#8e7655] transition-colors">Xem tất cả phòng →</button>
        </div>

        {roomsLoading ? (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {[1, 2, 3, 4].map(i => <SkeletonCard key={i} className="min-w-[280px] h-80 md:min-w-0" />)}
          </div>
        ) : (
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
            {rooms?.map(room => (
              <div key={room.id} className="min-w-[280px] snap-center md:min-w-0">
                <RoomCard room={mapRoom(room)} onBook={onBookRoom} />
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center md:hidden mt-4">
          <button className="border-b border-primary text-primary text-[10px] uppercase tracking-[0.2em] pb-1">Xem tất cả phòng →</button>
        </div>
      </section>

      {/* --- ZONES (Các khu) --- */}
      <section className="bg-secondary py-24 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-serif text-[#e0cfb1] mb-4 tracking-wide">Khám phá các khu</h2>
            <p className="text-white/60 font-light max-w-2xl mx-auto text-sm leading-relaxed">
              Khám phá 3 phân khu nghỉ dưỡng độc đáo tại The Wandering Rose: <strong className="text-white">Rose House</strong> lãng mạn, <strong className="text-white">Wooden House</strong> ấm cúng giữa rừng thông và <strong className="text-white">Villa</strong> sang trọng đẳng cấp.
              Mỗi không gian là một tuyệt tác kiến trúc hòa quyện cùng thiên nhiên Ba Vì, mang đến trải nghiệm nghỉ dưỡng riêng tư và trọn vẹn nhất.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 'Rose House', name: "KHU ROSE HOUSE", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600", desc: "Lãng mạn & Riêng tư" },
              { id: 'Wooden House', name: "KHU WOODEN HOUSE", img: "https://images.unsplash.com/photo-1449156493391-d2cfa28e468b?auto=format&fit=crop&q=80&w=600", desc: "Ấm cúng & Gần gũi" },
              { id: 'Villa', name: "KHU VILLA", img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&q=80&w=600", desc: "Sang trọng & Đẳng cấp" },
            ].map((zone, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden h-[400px] cursor-pointer rounded-sm"
                onClick={() => onViewZoneDetail && onViewZoneDetail(zone.id as any)}
              >
                <img src={zone.img} alt={zone.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100" />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-black/40 md:bg-black/20 md:group-hover:bg-transparent transition-colors">
                  <div className="border border-white/30 p-6 w-full h-full flex flex-col items-center justify-center backdrop-blur-[1px] md:group-hover:backdrop-blur-none transition-all">
                    <h3 className="text-lg font-serif mb-2 tracking-widest text-center md:group-hover:-translate-y-2 transition-transform">{zone.name}</h3>
                    <p className="text-[10px] italic font-serif opacity-80 mb-6 md:group-hover:-translate-y-2 transition-transform text-center">{zone.desc}</p>

                    <button className="opacity-100 md:opacity-0 md:group-hover:opacity-100 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 border border-white px-5 py-1.5 text-[9px] uppercase tracking-[0.2em] hover:bg-white hover:text-black">
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="container mx-auto px-6 py-24">
        <SectionTitle title="Dịch vụ & Sự kiện" subtitle="Không gian lý tưởng cho những bữa tiệc ấm cúng và sự kiện đáng nhớ" centered />

        {eventsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => <SkeletonCard key={i} className="h-64" />)}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events?.slice(0, 3).map(s => (
              <GeneralCard
                key={s.id}
                title={s.title}
                imageUrl={s.imageUrl}
                onClick={onNavigateToServiceBooking}
              />
            ))}
          </div>
        )}

        <div className="flex justify-center gap-3 mt-12">
          <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-400 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><ArrowLeft size={16} /></button>
          <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#8e7655] transition-colors"><ArrowRightIcon size={16} /></button>
        </div>
      </section>

      {/* --- CTA BOOKING --- */}
      <section className="py-24 text-center bg-[#FDFBF7] border-y border-[#EFEFEF]">
        <div className="container mx-auto px-6">
          <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Bạn đã sẵn sàng?</span>
          <h2 className="text-2xl md:text-3xl font-serif text-secondary mb-8 tracking-wide">Bắt đầu kỳ nghỉ trong mơ <br /> tại The Wandering Rose</h2>
          <button
            onClick={onOpenBooking}
            className="bg-primary text-white px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#8e7655] transition-transform hover:-translate-y-1 shadow-lg"
          >
            ĐẶT PHÒNG NGAY
          </button>
        </div>
      </section>

      {/* --- NEWS --- */}
      <section className="py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle title="Tin tức & Sự kiện" centered />

          {newsLoading ? (
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
              {[1, 2, 3].map(i => <SkeletonCard key={i} className="min-w-[280px] h-96 md:min-w-0" />)}
            </div>
          ) : (
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
              {newsData?.map(n => {
                const news = mapNews(n);
                return (
                  <div key={n.id} className="min-w-[280px] snap-center md:min-w-0 group cursor-pointer" onClick={() => onViewNews && onViewNews(news)}>
                    <div className="h-64 overflow-hidden mb-5 relative rounded-sm">
                      <img src={n.imageUrl} alt={n.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1.5 text-[10px] font-bold font-serif tracking-wider">
                        {news.date || '24/10'}
                      </div>
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] text-primary font-bold uppercase tracking-[0.2em] mb-2">{n.category}</p>
                      <h3 className="text-lg font-serif text-secondary mb-2 leading-snug group-hover:text-primary transition-colors tracking-wide">{n.title}</h3>
                      <p className="text-gray-500 text-xs font-light line-clamp-2 mb-3">
                        {n.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."}
                      </p>
                      <button className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-0.5 hover:text-primary hover:border-primary transition-colors">
                        Đọc thêm
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};