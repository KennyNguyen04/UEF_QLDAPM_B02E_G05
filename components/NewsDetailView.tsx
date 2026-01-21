import React from 'react';
import { News } from '../types';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

interface NewsDetailViewProps {
  news: News;
  onBack: () => void;
}

export const NewsDetailView: React.FC<NewsDetailViewProps> = ({ news, onBack }) => {
  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Image */}
       <div className="relative h-[50vh] md:h-[60vh] w-full">
           <img src={news.imageUrl} alt={news.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute top-24 left-6 md:left-20 z-20">
               <button onClick={onBack} className="flex items-center gap-2 text-white/90 hover:text-white text-xs uppercase tracking-widest transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                   <ArrowLeft size={16} /> Quay lại
               </button>
           </div>
           <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 pb-8 md:pb-16 px-6 md:px-20">
               <div className="container mx-auto">
                   <span className="bg-[#A68A64] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider mb-4 inline-block shadow-sm">
                       {news.category}
                   </span>
                   <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight drop-shadow-md">
                       {news.title}
                   </h1>
                   <div className="flex flex-wrap items-center gap-6 text-white/90 text-xs font-light">
                       <div className="flex items-center gap-2">
                           <Calendar size={14} className="text-[#A68A64]" />
                           <span>{news.date || '24/10/2023'}</span>
                       </div>
                       <div className="flex items-center gap-2">
                           <User size={14} className="text-[#A68A64]" />
                           <span>Admin</span>
                       </div>
                   </div>
               </div>
           </div>
       </div>

       {/* Content */}
       <div className="container mx-auto px-6 py-12 md:py-16 max-w-5xl">
           <div className="flex flex-col md:flex-row gap-16">
               {/* Main Article */}
               <div className="md:w-3/4">
                   <div className="prose prose-lg text-gray-600 font-light leading-relaxed text-justify">
                       {news.content && news.content.map((paragraph, idx) => (
                           <p key={idx} className="mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-[#A68A64] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                             {paragraph}
                           </p>
                       ))}
                       {!news.content && <p>Nội dung đang được cập nhật...</p>}
                   </div>

                   {/* Tags & Share */}
                   <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                       <div className="flex items-center gap-2 text-gray-400 text-xs">
                           <Tag size={14} />
                           <span>Tags: Ba Vì, Resort, {news.category}, Nghỉ dưỡng</span>
                       </div>
                       <div className="flex items-center gap-4">
                           <span className="text-xs text-gray-400 uppercase tracking-widest">Chia sẻ bài viết</span>
                           <button className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-[#A68A64] hover:text-white transition-colors hover:border-[#A68A64]">
                               <Share2 size={14} />
                           </button>
                       </div>
                   </div>
               </div>

               {/* Sidebar */}
               <div className="md:w-1/4 space-y-8">
                   <div className="bg-[#FDFBF7] p-6 rounded-sm border border-[#A68A64]/10 sticky top-24">
                       <h4 className="font-serif text-lg text-[#2C2C2C] mb-6 pb-2 border-b border-gray-200">Bài viết nổi bật</h4>
                       <ul className="space-y-4">
                           <li className="text-xs text-gray-500 hover:text-[#A68A64] cursor-pointer pb-2 flex gap-3 group">
                               <span className="text-[#A68A64] font-serif italic">01.</span>
                               <span className="group-hover:translate-x-1 transition-transform">Top 5 địa điểm check-in đẹp nhất Ba Vì</span>
                           </li>
                           <li className="text-xs text-gray-500 hover:text-[#A68A64] cursor-pointer pb-2 flex gap-3 group">
                               <span className="text-[#A68A64] font-serif italic">02.</span>
                               <span className="group-hover:translate-x-1 transition-transform">Kinh nghiệm du lịch nghỉ dưỡng gia đình</span>
                           </li>
                           <li className="text-xs text-gray-500 hover:text-[#A68A64] cursor-pointer pb-2 flex gap-3 group">
                               <span className="text-[#A68A64] font-serif italic">03.</span>
                               <span className="group-hover:translate-x-1 transition-transform">Thực đơn mùa đông ấm áp tại nhà hàng</span>
                           </li>
                           <li className="text-xs text-gray-500 hover:text-[#A68A64] cursor-pointer flex gap-3 group">
                               <span className="text-[#A68A64] font-serif italic">04.</span>
                               <span className="group-hover:translate-x-1 transition-transform">Lợi ích của việc tắm khoáng nóng</span>
                           </li>
                       </ul>
                   </div>
                   
                   <div className="bg-[#2C2C2C] text-white p-6 text-center">
                      <h4 className="font-serif text-lg mb-2">Đăng ký nhận tin</h4>
                      <p className="text-[10px] text-white/60 mb-4 font-light">Nhận thông tin ưu đãi mới nhất</p>
                      <input type="email" placeholder="Email của bạn..." className="w-full bg-white/10 border-none outline-none px-3 py-2 text-xs mb-3 text-white placeholder-white/40" />
                      <button className="w-full bg-[#A68A64] py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#A68A64] transition-colors">Đăng ký</button>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};