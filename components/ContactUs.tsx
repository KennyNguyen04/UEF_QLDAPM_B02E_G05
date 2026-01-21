import React, { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { useNews } from '../services/useApi';

interface ContactUsProps {
   onGoHome?: () => void;
}

// Skeleton for news cards
const SkeletonNewsCard: React.FC = () => (
   <div className="animate-pulse">
      <div className="h-[400px] bg-gray-300/40 mb-6"></div>
      <div className="h-4 bg-gray-300/40 w-1/4 mb-2"></div>
      <div className="h-8 bg-gray-300/40 w-3/4 mb-4"></div>
   </div>
);

export const ContactUs: React.FC<ContactUsProps> = ({ onGoHome }) => {
   // Form State
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
   });

   // UI State
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitError, setSubmitError] = useState<string | null>(null);

   // Fetch news from API
   const { data: news, loading: newsLoading } = useNews();

   // Error State
   const [errors, setErrors] = useState({
      fullName: '',
      email: '',
      phone: '',
      subject: ''
   });

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      setSubmitError(null);

      // Clear error when user types
      if (name !== 'message' && errors[name as keyof typeof errors]) {
         setErrors(prev => ({ ...prev, [name]: '' }));
      }
   };

   const handleSubmit = async () => {
      // 1. Client-side Validation (Check Empty)
      const newErrors = {
         fullName: !formData.fullName.trim() ? 'Vui lòng điền thông tin bên trên' : '',
         email: !formData.email.trim() ? 'Vui lòng điền thông tin bên trên' : '',
         phone: !formData.phone.trim() ? 'Vui lòng điền thông tin bên trên' : '',
         subject: !formData.subject.trim() ? 'Vui lòng điền thông tin bên trên' : '',
      };

      setErrors(newErrors);

      // If there are errors, stop submission
      if (Object.values(newErrors).some(err => err !== '')) {
         return;
      }

      // 2. Call Real API
      setIsSubmitting(true);
      setSubmitError(null);

      try {
         const result = await api.contact.submit(formData);

         if (result.success) {
            setIsSubmitted(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
         } else {
            setSubmitError(result.message);
         }
      } catch (err) {
         setSubmitError(err instanceof Error ? err.message : 'Có lỗi xảy ra. Vui lòng thử lại.');
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleReset = () => {
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
      setErrors({ fullName: '', email: '', phone: '', subject: '' });
      setIsSubmitted(false);
      setSubmitError(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   if (isSubmitted) {
      return (
         <div className="bg-white min-h-screen flex flex-col">
            {/* Spacer for fixed header */}
            <div className="h-[140px] bg-[#1a1a1a]"></div>

            {/* Success Message */}
            <div className="flex-grow flex flex-col items-center justify-center py-32 px-6 text-center">
               <h2 className="text-4xl md:text-6xl font-serif text-[#C4A484] mb-6 tracking-wide leading-tight">Gửi thông tin thành công</h2>
               <p className="text-sm md:text-base text-[#A68A64] font-light mb-12 tracking-wide">
                  Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!
               </p>
               <div className="flex flex-col md:flex-row gap-4">
                  <button
                     onClick={handleReset}
                     className="bg-[#A68A64] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-md"
                  >
                     Gửi tin nhắn khác
                  </button>
                  <button
                     onClick={onGoHome}
                     className="border border-[#A68A64] text-[#A68A64] px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors flex items-center gap-2 justify-center"
                  >
                     Về trang chủ <ArrowRight size={10} />
                  </button>
               </div>
            </div>

            {/* News Section (Success View) */}
            <section className="bg-[#A68A64] py-24 text-white">
               <div className="container mx-auto px-6">
                  <div className="text-center mb-16">
                     <h2 className="text-4xl md:text-6xl font-serif mb-2 tracking-wide">Tin tức và sự kiện</h2>
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
                                 <h3 className="text-3xl font-serif mb-4 leading-tight">{item.title}</h3>
                                 <button className="text-[9px] border border-white/50 px-5 py-2 uppercase tracking-widest hover:bg-white hover:text-[#A68A64] transition-colors flex items-center gap-2 w-fit">
                                    Tìm hiểu <ArrowRight size={10} />
                                 </button>
                              </div>
                           </div>
                        ))
                     )}
                  </div>

                  <div className="flex justify-center gap-4 mt-16">
                     <button className="w-10 h-10 rounded-full bg-white text-[#A68A64] flex items-center justify-center hover:scale-110 transition-transform"><ArrowLeft size={16} /></button>
                     <button className="w-10 h-10 rounded-full bg-white text-[#A68A64] flex items-center justify-center hover:scale-110 transition-transform"><ArrowRight size={16} /></button>
                  </div>
               </div>
            </section>
         </div>
      );
   }

   return (
      <div className="bg-white pt-[140px]">
         {/* --- HERO SECTION --- */}
         <section className="relative h-[60vh] md:h-[80vh] w-full">
            <img
               src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000"
               alt="Contact Hero"
               className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
               <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-4 drop-shadow-lg">Liên hệ</h1>
               <div className="flex gap-4 text-[9px] font-bold text-white/90 uppercase tracking-[0.2em]">
                  <span>Trang chủ</span>
                  <span>/</span>
                  <span>Liên hệ</span>
               </div>
            </div>
         </section>

         {/* --- CONTACT INFO & MAP --- */}
         <section className="container mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row gap-12">
               {/* Left: Info */}
               <div className="md:w-1/3 space-y-8">
                  <h2 className="text-2xl md:text-3xl font-serif text-[#C4A484] mb-8">Liên hệ với chúng tôi</h2>

                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="mt-1"><MapPin className="text-[#C4A484]" size={20} /></div>
                        <div>
                           <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-1">Địa chỉ</h4>
                           <p className="text-sm font-light text-gray-600">Thôn Mít Mái, Xã Yên Bài, Huyện Ba Vì, Hà Nội</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="mt-1"><Phone className="text-[#C4A484]" size={20} /></div>
                        <div>
                           <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-1">Hotline</h4>
                           <p className="text-sm font-light text-gray-600">092 981 6699</p>
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <div className="mt-1"><Mail className="text-[#C4A484]" size={20} /></div>
                        <div>
                           <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-1">Email</h4>
                           <p className="text-sm font-light text-gray-600">booking@thewanderingrosebavi.com</p>
                        </div>
                     </div>

                     <div className="pt-6 border-t border-gray-100">
                        <h4 className="font-bold text-gray-800 text-xs uppercase tracking-wider mb-4">Mạng xã hội</h4>
                        <div className="flex gap-4 text-gray-600">
                           <a href="#" className="flex items-center gap-2 text-sm font-light hover:text-[#C4A484] transition-colors">
                              <Facebook size={18} /> The Wandering Rose - Eco Resort Ba Vì
                           </a>
                        </div>
                        <div className="flex gap-4 text-gray-600 mt-2">
                           <a href="#" className="flex items-center gap-2 text-sm font-light hover:text-[#C4A484] transition-colors">
                              <Instagram size={18} /> thewanderingrose.bavi
                           </a>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: Map */}
               <div className="md:w-2/3 h-[400px] bg-gray-100 relative">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096814183571!2d105.4195!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31345b4b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sY%C3%AAn%20B%C3%A0i%2C%20Ba%20V%C3%AC%2C%20Hanoi%2C%20Vietnam!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                     width="100%"
                     height="100%"
                     style={{ border: 0, filter: 'grayscale(0.2)' }}
                     allowFullScreen={true}
                     loading="lazy"
                     title="Google Maps"
                  ></iframe>
               </div>
            </div>
         </section>

         {/* --- CONTACT FORM --- */}
         <section className="bg-[#F9F9F9] py-24">
            <div className="container mx-auto px-6 max-w-4xl">
               <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-3xl font-serif text-[#C4A484] mb-3">Gửi tin nhắn cho chúng tôi</h2>
                  <p className="text-sm font-light text-gray-500">Chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất.</p>
               </div>

               {/* Error message */}
               {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm text-center rounded">
                     {submitError}
                  </div>
               )}

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Họ và tên *</label>
                     <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 outline-none font-light bg-white ${errors.fullName ? 'border-[#A68A64]' : 'border-gray-200 focus:border-[#C4A484]'}`}
                        placeholder="Nhập họ và tên"
                        disabled={isSubmitting}
                     />
                     {errors.fullName && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                     <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Email *</label>
                     <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 outline-none font-light bg-white ${errors.email ? 'border-[#A68A64]' : 'border-gray-200 focus:border-[#C4A484]'}`}
                        placeholder="Nhập địa chỉ email"
                        disabled={isSubmitting}
                     />
                     {errors.email && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.email}</p>}
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                     <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Số điện thoại *</label>
                     <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 outline-none font-light bg-white ${errors.phone ? 'border-[#A68A64]' : 'border-gray-200 focus:border-[#C4A484]'}`}
                        placeholder="Nhập số điện thoại"
                        disabled={isSubmitting}
                     />
                     {errors.phone && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                     <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Tiêu đề *</label>
                     <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className={`w-full border px-4 py-3 outline-none font-light bg-white ${errors.subject ? 'border-[#A68A64]' : 'border-gray-200 focus:border-[#C4A484]'}`}
                        placeholder="Nhập tiêu đề"
                        disabled={isSubmitting}
                     />
                     {errors.subject && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.subject}</p>}
                  </div>
               </div>

               <div className="mb-8">
                  <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Tin nhắn (nếu có)</label>
                  <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleInputChange}
                     rows={5}
                     className="w-full border border-gray-200 px-4 py-3 outline-none focus:border-[#C4A484] bg-white font-light resize-none"
                     placeholder="Nhập nội dung tin nhắn"
                     disabled={isSubmitting}
                  ></textarea>
               </div>

               <div className="text-center">
                  <button
                     onClick={handleSubmit}
                     disabled={isSubmitting}
                     className="bg-[#A68A64] text-white py-3 px-10 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
                  >
                     {isSubmitting ? (
                        <>
                           <Loader2 size={14} className="animate-spin" />
                           Đang gửi...
                        </>
                     ) : (
                        'Gửi tin nhắn'
                     )}
                  </button>
               </div>
            </div>
         </section>
      </div>
   );
};