import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { galleryImages, galleryVideos, news } from '../constants';
import { SectionTitle } from './SectionTitle';
import { handleImageError } from '../utils';

export const GalleryView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'images' | 'videos'>('images');

  const toggleView = () => {
    setViewMode(prev => prev === 'images' ? 'videos' : 'images');
  };

  return (
    <div className="bg-white">
       {/* --- HERO SECTION --- */}
       <section className="relative h-[80vh] w-full -mt-[180px]">
        <img 
          src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=2000" 
          alt="Gallery Hero" 
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24">
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest drop-shadow-lg">Gallery hình ảnh & video</h1>
        </div>
      </section>

      {/* --- CONTENT SECTION (IMAGES/VIDEOS) --- */}
      <section className="container mx-auto px-6 py-24">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-4">
              {viewMode === 'images' ? 'Hình ảnh' : 'Video'}
            </h2>
            <button 
              onClick={toggleView}
              className="bg-[#A68A64] text-white py-1.5 px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
            >
               {viewMode === 'images' ? 'VIDEO' : 'HÌNH ẢNH'} <ArrowRight size={10} className="inline ml-1" />
            </button>
         </div>

         {viewMode === 'images' ? (
           /* --- IMAGES GRID --- */
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.map((imgUrl, index) => (
                  <div key={index} className="h-64 md:h-80 overflow-hidden group cursor-pointer">
                      <img 
                        src={imgUrl} 
                        alt={`Gallery ${index + 1}`} 
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                  </div>
              ))}
           </div>
         ) : (
           /* --- VIDEOS GRID --- */
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryVideos.map((video) => (
                  <div key={video.id} className="h-64 md:h-[400px] relative group cursor-pointer overflow-hidden">
                      <img 
                        src={video.thumbnailUrl} 
                        alt={`Video Thumbnail ${video.id}`} 
                        onError={handleImageError}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                           <Play size={24} className="text-white fill-white ml-1" />
                        </div>
                      </div>
                  </div>
              ))}
           </div>
         )}
      </section>

       {/* --- NEWS --- */}
       <section className="py-24 bg-[#C4A484]/80">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-serif text-white text-center mb-16 tracking-wide">Tin tức và sự kiện</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {news.map(n => (
               <div key={n.id} className="group cursor-pointer">
                  <div className="h-64 overflow-hidden mb-5 relative">
                    <img src={n.imageUrl} alt={n.title} onError={handleImageError} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                    <div className="absolute top-0 right-0 bg-white text-primary px-3 py-1.5 text-[10px] font-bold font-serif tracking-wider">
                       24/10
                    </div>
                  </div>
                  <div className="text-left">
                     <p className="text-[9px] text-white/80 font-bold uppercase tracking-[0.2em] mb-2">{n.category}</p>
                     <h3 className="text-xl font-serif text-white mb-2 leading-snug tracking-wide">{n.title}</h3>
                     <button className="text-[9px] text-white font-bold uppercase tracking-[0.2em] border border-white px-4 py-2 mt-4 hover:bg-white hover:text-primary transition-colors">
                       Tìm hiểu <ArrowRight size={10} className="inline ml-1"/>
                     </button>
                  </div>
               </div>
             ))}
          </div>

          <div className="flex justify-center gap-4 mt-12">
             <button className="w-10 h-10 rounded-full bg-white text-[#C4A484] flex items-center justify-center hover:scale-110 transition-transform"><ArrowRight size={16} className="rotate-180"/></button>
             <button className="w-10 h-10 rounded-full bg-white text-[#C4A484] flex items-center justify-center hover:scale-110 transition-transform"><ArrowRight size={16}/></button>
          </div>
        </div>
      </section>
    </div>
  );
};