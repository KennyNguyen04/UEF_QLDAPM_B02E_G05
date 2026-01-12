import React from 'react';
import { Tour } from '../types';
import { ArrowLeft, Check, Star, Map } from 'lucide-react';

interface TourDetailViewProps {
  tour: Tour;
  onBack: () => void;
  onBook: () => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({ tour, onBack, onBook }) => {
  return (
    <div className="bg-white min-h-screen pb-24">
       {/* Hero Image */}
       <div className="relative h-[60vh] w-full">
           <img src={tour.imageUrl} alt={tour.title} className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-black/40"></div>
           <div className="absolute top-24 left-6 md:left-20 z-20">
               <button onClick={onBack} className="flex items-center gap-2 text-white/90 hover:text-white text-xs uppercase tracking-widest transition-colors bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                   <ArrowLeft size={16} /> Quay lại
               </button>
           </div>
           <div className="absolute inset-0 flex flex-col items-center justify-center pt-16 px-6">
                <span className="bg-[#A68A64] text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider mb-4 shadow-sm animate-fade-in-up">
                    Trải nghiệm & Tour
                </span>
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight drop-shadow-lg text-center max-w-4xl animate-fade-in-up delay-100">
                    {tour.title}
                </h1>
                <div className="w-24 h-px bg-white/70 mb-8 animate-fade-in-up delay-200"></div>
                <button 
                    onClick={onBook}
                    className="bg-white text-[#A68A64] px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors shadow-lg animate-fade-in-up delay-300"
                >
                    Đặt tour ngay
                </button>
           </div>
       </div>

       {/* Main Content */}
       <div className="container mx-auto px-6 py-16 md:py-24 max-w-6xl">
           <div className="flex flex-col lg:flex-row gap-16">
               
               {/* Content Left */}
               <div className="lg:w-2/3">
                   <h2 className="text-3xl font-serif text-[#C4A484] mb-8">Hành trình khám phá</h2>
                   
                   <div className="prose prose-lg text-gray-600 font-light leading-relaxed text-justify space-y-6">
                       {tour.detailedContent ? (
                           tour.detailedContent.map((paragraph, idx) => (
                               <p key={idx} className={idx === 0 ? "first-letter:text-5xl first-letter:font-serif first-letter:text-[#A68A64] first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""}>
                                   {paragraph}
                               </p>
                           ))
                       ) : (
                           <p>{tour.description}</p>
                       )}
                   </div>

                   {/* Gallery Mockup */}
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                        <div className="h-48 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                        <div className="h-48 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1506434304575-afbb9622d130?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                        <div className="h-48 overflow-hidden rounded-sm"><img src="https://images.unsplash.com/photo-1533035332515-56456f481a5a?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/></div>
                   </div>
               </div>

               {/* Sidebar Right */}
               <div className="lg:w-1/3 space-y-10">
                   {/* Highlights Box */}
                   <div className="bg-[#FDFBF7] p-8 rounded-sm border border-[#A68A64]/20 shadow-sm relative overflow-hidden">
                       {/* Decorative Circle */}
                       <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#A68A64]/5 rounded-full pointer-events-none"></div>
                       
                       <h3 className="text-xl font-serif text-[#2C2C2C] mb-6 flex items-center gap-2">
                           <Map size={18} className="text-[#A68A64]" /> 
                           Điểm nổi bật
                       </h3>
                       
                       <ul className="space-y-4">
                           {tour.highlights ? (
                               tour.highlights.map((item, idx) => (
                                   <li key={idx} className="flex items-start gap-3 text-sm font-light text-gray-600">
                                       <Check size={16} className="text-[#A68A64] mt-0.5 flex-shrink-0" />
                                       <span>{item}</span>
                                   </li>
                               ))
                           ) : (
                               <li className="text-sm font-light text-gray-500 italic">Vui lòng liên hệ để biết thêm chi tiết.</li>
                           )}
                       </ul>
                   </div>

                   {/* Booking CTA Box */}
                   <div className="bg-[#2C2C2C] text-white p-8 text-center rounded-sm shadow-lg">
                       <h3 className="text-2xl font-serif mb-4">Bạn muốn trải nghiệm?</h3>
                       <p className="text-xs text-white/70 mb-6 font-light leading-relaxed">
                           Hãy để The Wandering Rose đồng hành cùng bạn trong hành trình khám phá vẻ đẹp Ba Vì. Liên hệ ngay để đặt tour.
                       </p>
                       <button 
                           onClick={onBook}
                           className="w-full bg-[#A68A64] py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-[#A68A64] transition-colors"
                       >
                           Liên hệ đặt tour
                       </button>
                       <p className="text-[10px] text-white/50 mt-4">Hotline: 092 981 6699</p>
                   </div>
               </div>
           </div>
       </div>
    </div>
  );
};