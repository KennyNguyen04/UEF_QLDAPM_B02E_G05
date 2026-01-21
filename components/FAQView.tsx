import React, { useState } from 'react';
import { ChevronDown, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { useFaqs, useNews } from '../services/useApi';

// Loading skeleton
const SkeletonFaq: React.FC = () => (
   <div className="border-b border-gray-200 pb-4 animate-pulse">
      <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
   </div>
);

const SkeletonNewsCard: React.FC = () => (
   <div className="animate-pulse">
      <div className="h-[400px] bg-gray-300 mb-6"></div>
      <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
      <div className="h-8 bg-gray-300 w-3/4 mb-4"></div>
      <div className="h-10 bg-gray-300 w-1/3"></div>
   </div>
);

export const FAQView: React.FC = () => {
   const [openIndex, setOpenIndex] = useState<number | null>(null);

   // Fetch from API
   const { data: faqs, loading: faqsLoading, error: faqsError } = useFaqs();
   const { data: news, loading: newsLoading } = useNews();

   const toggleFAQ = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <div className="bg-white">
         {/* --- HERO SECTION --- */}
         <section className="relative h-[60vh] md:h-[80vh] w-full -mt-[180px]">
            <img
               src="https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&q=80&w=2000"
               alt="FAQ Hero"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
               <h1 className="text-5xl md:text-8xl font-serif text-white/90 tracking-widest font-thin drop-shadow-lg">FAQ</h1>
            </div>
         </section>

         {/* --- FAQ LIST --- */}
         <section className="container mx-auto px-6 py-24 max-w-4xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-5xl font-serif text-[#C4A484] mb-4">Các câu hỏi thường gặp</h2>
            </div>

            {faqsError && (
               <div className="text-center text-red-500 mb-8">
                  Không thể tải danh sách FAQ. Vui lòng thử lại sau.
               </div>
            )}

            <div className="space-y-6">
               {faqsLoading ? (
                  <>
                     <SkeletonFaq />
                     <SkeletonFaq />
                     <SkeletonFaq />
                     <SkeletonFaq />
                     <SkeletonFaq />
                  </>
               ) : (
                  faqs?.map((item, index) => (
                     <div key={item.id} className="border-b border-gray-200 pb-4">
                        <button
                           onClick={() => toggleFAQ(index)}
                           className="w-full flex justify-between items-center py-2 text-left group"
                        >
                           <span className="text-lg md:text-xl font-serif text-[#C4A484] group-hover:text-[#8e7655] transition-colors font-light">
                              {item.question}
                           </span>
                           <ChevronDown
                              size={20}
                              className={`text-[#C4A484] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                           />
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                           <p className="text-sm font-light text-gray-500 leading-relaxed pl-2">
                              {item.answer}
                           </p>
                        </div>
                     </div>
                  ))
               )}
            </div>
         </section>

         {/* --- NEWS SECTION (Brown Background) --- */}
         <section className="bg-[#A68A64] py-24 text-white">
            <div className="container mx-auto px-6">
               <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-6xl font-serif mb-2 tracking-wide font-normal">Tin tức và sự kiện</h2>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {newsLoading ? (
                     <>
                        <SkeletonNewsCard />
                        <SkeletonNewsCard />
                        <SkeletonNewsCard />
                     </>
                  ) : (
                     news?.map(item => (
                        <div key={item.id} className="group cursor-pointer">
                           <div className="h-[400px] overflow-hidden mb-6 relative">
                              <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                              {/* Text Overlay for Concert Poster Effect */}
                              {item.id === 1 && (
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full">
                                    <span className="block text-4xl font-serif font-bold text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>MUSIC</span>
                                    <span className="block text-4xl font-serif font-bold text-white">CONCERT</span>
                                 </div>
                              )}
                              {item.id === 1 && (
                                 <div className="absolute bottom-8 left-8 right-8 flex justify-between text-[8px] font-bold uppercase tracking-widest">
                                    <div>Saturday<br />20 Oct 23</div>
                                    <div>Open Gate<br />08:00 PM</div>
                                 </div>
                              )}
                           </div>
                           <div className="text-left">
                              <p className="text-[9px] text-white/70 font-light mb-2">{item.category}</p>
                              <h3 className="text-3xl font-serif mb-4 leading-tight font-normal">{item.title}</h3>
                              <button className="text-[9px] border border-white/50 px-5 py-2 uppercase tracking-widest hover:bg-white hover:text-[#A68A64] transition-colors flex items-center gap-2 w-fit">
                                 TÌM HIỂU <ArrowRight size={10} />
                              </button>
                           </div>
                        </div>
                     ))
                  )}
               </div>

               <div className="flex justify-center gap-4 mt-16">
                  <button className="w-10 h-10 rounded-full bg-white text-[#C4A484] flex items-center justify-center hover:scale-110 transition-transform"><ArrowLeft size={16} /></button>
                  <button className="w-10 h-10 rounded-full bg-white text-[#C4A484] flex items-center justify-center hover:scale-110 transition-transform"><ArrowRight size={16} /></button>
               </div>
            </div>
         </section>
      </div>
   );
};