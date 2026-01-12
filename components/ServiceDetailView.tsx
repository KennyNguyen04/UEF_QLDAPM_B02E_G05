import React from 'react';
import { EventServiceItem } from '../types';
import { ArrowLeft, Check, Calendar, Star } from 'lucide-react';

interface ServiceDetailViewProps {
  service: EventServiceItem;
  onBack: () => void;
  onBook: () => void;
}

export const ServiceDetailView: React.FC<ServiceDetailViewProps> = ({ service, onBack, onBook }) => {
  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Image */}
       <div className="relative h-[60vh] w-full">
           <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute top-24 left-6 md:left-20 z-20">
               <button onClick={onBack} className="flex items-center gap-2 text-white/90 hover:text-white text-xs uppercase tracking-widest transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                   <ArrowLeft size={16} /> Quay lại
               </button>
           </div>
           <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 px-6">
                <span className="bg-[#A68A64] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm animate-fade-in-up">
                    Dịch vụ sự kiện
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg text-center max-w-4xl animate-fade-in-up delay-100">
                    {service.title}
                </h1>
                <div className="w-24 h-px bg-white/70 mb-8 animate-fade-in-up delay-200"></div>
                <button 
                    onClick={onBook}
                    className="bg-white text-[#A68A64] px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors shadow-lg animate-fade-in-up delay-300"
                >
                    Đặt lịch ngay
                </button>
           </div>
       </div>

       {/* Main Content */}
       <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
           <div className="flex flex-col lg:flex-row gap-16">
               
               {/* Content Left */}
               <div className="lg:w-2/3">
                   <h2 className="text-3xl font-serif text-[#C4A484] mb-8">Giới thiệu dịch vụ</h2>
                   
                   <div className="prose prose-lg text-gray-600 font-light leading-relaxed text-justify space-y-6">
                       {service.detailedContent ? (
                           service.detailedContent.map((paragraph, idx) => (
                               <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:text-[#A68A64] first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""}>
                                   {paragraph}
                               </p>
                           ))
                       ) : (
                           <p>{service.description}</p>
                       )}
                   </div>

                   {/* Gallery Mockup (Optional - Small grid of 3 images) */}
                   <div className="grid grid-cols-3 gap-4 mt-12">
                        <div className="h-40 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                        <div className="h-40 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                        <div className="h-40 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                   </div>
               </div>

               {/* Sidebar Right */}
               <div className="lg:w-1/3 space-y-10">
                   {/* Highlights Box */}
                   <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#A68A64]/20 shadow-sm relative overflow-hidden">
                       {/* Decorative Circle */}
                       <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#A68A64]/5 rounded-full pointer-events-none"></div>
                       
                       <h3 className="text-xl font-serif text-[#2C2C2C] mb-6 flex items-center gap-2">
                           <Star size={18} className="text-[#A68A64] fill-[#A68A64]" /> 
                           Dịch vụ bao gồm
                       </h3>
                       
                       <ul className="space-y-4">
                           {service.highlights ? (
                               service.highlights.map((item, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-sm font-light text-gray-600">
                                       <Check size={16} className="text-[#A68A64] mt-0.5 flex-shrink-0" />
                                       <span>{item}</span>
                                   </li>
                               ))
                           ) : (
                               <li className="text-sm font-light text-gray-500 italic">Chi tiết vui lòng liên hệ tư vấn viên.</li>
                           )}
                       </ul>
                   </div>

                   {/* Booking CTA Box */}
                   <div className="bg-[#2C2C2C] text-white p-8 text-center rounded-sm shadow-lg">
                       <h3 className="text-2xl font-serif mb-4">Bạn đã sẵn sàng?</h3>
                       <p className="text-xs text-white/70 mb-6 font-light leading-relaxed">
                           Liên hệ ngay với đội ngũ tổ chức sự kiện chuyên nghiệp của The Wandering Rose để nhận tư vấn và báo giá chi tiết.
                       </p>
                       <button 
                           onClick={onBook}
                           className="w-full bg-[#A68A64] py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#A68A64] transition-colors"
                       >
                           Nhận tư vấn ngay
                       </button>
                       <p className="text-[10px] text-white/50 mt-4">Hotline: 092 981 6699</p>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};