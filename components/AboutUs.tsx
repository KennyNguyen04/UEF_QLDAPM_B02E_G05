import React from 'react';
import { ArrowRight, Play, ArrowLeft, ArrowRight as ArrowRightIcon } from 'lucide-react';

interface AboutUsProps {
  onNavigate: (view: 'gallery') => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white pt-[140px]">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[80vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1628151016020-f57930cb994f?auto=format&fit=crop&q=80&w=2000" 
          alt="About Us Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl md:text-5xl font-serif text-white tracking-widest mb-12 drop-shadow-lg">Về chúng tôi</h1>
          <div className="flex gap-8 md:gap-16 text-[9px] font-bold text-white/90 uppercase tracking-[0.2em]">
            <span className="cursor-pointer hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Câu chuyện hình thành Villa</span>
            <span className="cursor-pointer hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Tầm nhìn & Giá trị</span>
            <span className="cursor-pointer hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">Hình ảnh & Video</span>
          </div>
        </div>
      </section>

      {/* --- STORY SECTION --- */}
      <section className="container mx-auto px-6 py-24">
        {/* Top: Title & Intro */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/3">
             <h2 className="text-3xl md:text-4xl font-serif text-primary leading-tight">Câu chuyện hình <br/> thành Villa</h2>
          </div>
          <div className="md:w-2/3">
             <p className="text-sm font-light text-gray-500 leading-loose text-justify">
               The Wandering Rose Villa ra đời từ giấc mơ về một chốn nghỉ dưỡng bình yên giữa lòng Ba Vì xanh mát. Chúng tôi mong muốn tạo nên một villa gần Hà Nội nơi du khách có thể tìm lại sự tĩnh tại, quên đi nhịp sống ồn ào phố thị. 
               Không chỉ là nơi dừng chân, chúng tôi khao khát mang đến một trải nghiệm sống chậm đúng nghĩa, nơi con người và thiên nhiên giao hòa.
             </p>
          </div>
        </div>

        {/* Middle: 3 Images Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
           <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" alt="Detail 1"/>
           <img src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" alt="Detail 2"/>
           <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600" className="w-full h-64 object-cover" alt="Detail 3"/>
        </div>

        {/* Bottom: 2 Text Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-500 text-xs font-light leading-relaxed text-justify">
           <p>
             Mỗi góc nhỏ của villa đều được chăm chút tỉ mỉ: khu vườn ngập tràn hoa hồng, bể bơi trong xanh, những căn phòng ấm áp với ánh nắng chan hòa. Không chỉ là một biệt thự nghỉ dưỡng ở Ba Vì, nơi đây còn là điểm hẹn của cảm xúc - dành cho cặp đôi tìm sự lãng mạn, gia đình muốn gắn kết, hay nhóm bạn cần khoảng thời gian tái tạo năng lượng.
           </p>
           <p>
             Với khát khao mang lại trải nghiệm trọn vẹn, chúng tôi tin rằng The Wandering Rose Villa sẽ là điểm dừng chân lý tưởng để bạn tận hưởng thiên nhiên, lưu giữ kỷ niệm và tìm lại sự cân bằng trong cuộc sống. Chúng tôi cam kết mang đến dịch vụ tận tâm và không gian hoàn hảo nhất.
           </p>
        </div>
      </section>

      {/* --- VISION & VALUES --- */}
      <section className="py-24 bg-[#FDFBF7]">
         <div className="container mx-auto px-6 mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-primary">Tầm nhìn & giá trị</h2>
         </div>

         {/* Vision: Image Left, Text Right */}
         <div className="container mx-auto px-6 mb-24">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1599809275372-b40c7e937740?auto=format&fit=crop&q=80&w=800" alt="Vision" className="w-full h-[400px] object-cover shadow-lg" />
               </div>
               <div className="md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-serif text-primary mb-6">Tầm nhìn</h3>
                  <p className="text-sm font-light text-gray-500 leading-loose mb-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  </p>
               </div>
            </div>
         </div>

         {/* Values: Text Left, Image Right */}
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
               <div className="md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Values" className="w-full h-[400px] object-cover shadow-lg" />
               </div>
               <div className="md:w-1/2 md:pr-8 text-right">
                  <h3 className="text-2xl font-serif text-primary mb-6">Giá trị</h3>
                  <p className="text-sm font-light text-gray-500 leading-loose mb-6">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                  </p>
               </div>
            </div>
         </div>
      </section>

      {/* --- GALLERY & VIDEO --- */}
      <section className="container mx-auto px-6 py-24">
         <div className="text-center mb-12 relative">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Hình ảnh & video</h2>
            <button 
                onClick={() => onNavigate('gallery')}
                className="bg-[#A68A64] text-white text-[9px] font-bold uppercase tracking-widest px-6 py-2 hover:bg-[#8e7655] transition-colors"
            >
               Xem thêm <ArrowRight size={10} className="inline ml-1" />
            </button>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
            <div className="h-64 overflow-hidden"><img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"/></div>
         </div>
         
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-64 md:h-80 relative group cursor-pointer overflow-hidden">
               <img src="https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white pl-1 group-hover:bg-white group-hover:text-primary transition-all">
                     <Play size={20} fill="currentColor" />
                  </div>
               </div>
            </div>
            <div className="h-64 md:h-80 relative group cursor-pointer overflow-hidden">
               <img src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
               <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white pl-1 group-hover:bg-white group-hover:text-primary transition-all">
                     <Play size={20} fill="currentColor" />
                  </div>
               </div>
            </div>
         </div>
         
         <div className="flex justify-center gap-3 mt-8">
            <button className="w-10 h-10 rounded-full border border-gray-300 text-gray-400 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"><ArrowLeft size={16}/></button>
            <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-[#8e7655] transition-colors"><ArrowRightIcon size={16}/></button>
        </div>
      </section>
    </div>
  );
};