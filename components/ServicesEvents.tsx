import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';
import { api } from '../services/api';
import { useEvents, useNews } from '../services/useApi';
import { EventServiceItem } from '../types';
import { handleImageError } from '../utils';

interface ServicesEventsProps {
  onGoHome?: () => void;
  onViewDetail?: (service: EventServiceItem) => void;
}

// Skeleton components
const SkeletonService: React.FC = () => (
  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12 md:py-24 animate-pulse">
    <div className="md:w-1/2">
      <div className="h-10 bg-gray-200 w-3/4 mb-6"></div>
      <div className="h-4 bg-gray-200 w-full mb-2"></div>
      <div className="h-4 bg-gray-200 w-full mb-2"></div>
      <div className="h-4 bg-gray-200 w-2/3 mb-8"></div>
      <div className="flex gap-4">
        <div className="h-10 bg-gray-200 w-32"></div>
        <div className="h-10 bg-gray-200 w-24"></div>
      </div>
    </div>
    <div className="md:w-1/2 w-full h-[300px] md:h-[400px] bg-gray-200"></div>
  </div>
);

const SkeletonNewsCard: React.FC = () => (
  <div className="animate-pulse">
    <div className="h-[400px] bg-gray-300/40 mb-6"></div>
    <div className="h-4 bg-gray-300/40 w-1/4 mb-2"></div>
    <div className="h-8 bg-gray-300/40 w-3/4 mb-4"></div>
  </div>
);

export const ServicesEvents: React.FC<ServicesEventsProps> = ({ onGoHome, onViewDetail }) => {
  // Fetch data from API
  const { data: eventServices, loading: eventsLoading } = useEvents();
  const { data: news, loading: newsLoading } = useNews();

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  // UI State
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Error State
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: ''
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      eventType: !formData.eventType ? 'Vui lòng điền thông tin bên trên' : '',
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
      const result = await api.events.book(formData);

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
    setFormData({ fullName: '', email: '', phone: '', eventType: '', message: '' });
    setErrors({ fullName: '', email: '', phone: '', eventType: '' });
    setIsSubmitted(false);
    setSubmitError(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Map API event to EventServiceItem type
  const mapEvent = (e: any): EventServiceItem => ({
    id: e.id,
    title: e.title,
    description: e.description,
    imageUrl: e.imageUrl,
    slug: e.slug,
    detailedContent: e.detailedContent,
    highlights: e.highlights
  });

  if (isSubmitted) {
    return (
      <div className="bg-white min-h-screen flex flex-col">
        {/* Spacer for fixed header */}
        <div className="h-[140px] bg-[#1a1a1a]"></div>

        {/* Success Message */}
        <div className="flex-grow flex flex-col items-center justify-center py-32 px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-serif text-[#C4A484] mb-6 tracking-wide leading-tight">Gửi thông tin thành công</h2>
          <p className="text-sm md:text-base text-[#A68A64] font-light mb-12 tracking-wide">
            Chúng tôi sẽ chủ động liên hệ lại trong thời gian ngắn nhất !
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleReset}
              className="bg-[#A68A64] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors shadow-md"
            >
              Trở lại trang trước
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
                      <img src={item.imageUrl} alt={item.title} onError={handleImageError} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
      <section className="relative h-[80vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1519225421980-715cb0202128?auto=format&fit=crop&q=80&w=2000"
          alt="Services Events Hero"
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-widest mb-12 drop-shadow-lg">Dịch vụ và sự kiện</h1>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[9px] font-bold text-white/90 uppercase tracking-[0.2em]">
            {eventsLoading ? (
              <span className="text-white/50">Đang tải...</span>
            ) : (
              eventServices?.map(service => (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.slug)}
                  className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                >
                  {service.title}
                </button>
              ))
            )}
            <button
              onClick={() => scrollToSection('booking-form')}
              className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
            >
              Đặt lịch
            </button>
          </div>
        </div>
      </section>

      {/* --- EVENT SERVICES LIST (ZIG-ZAG) --- */}
      <div className="container mx-auto px-6 py-12">
        {eventsLoading ? (
          <>
            <SkeletonService />
            <SkeletonService />
          </>
        ) : (
          eventServices?.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 py-12 md:py-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Text Side */}
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'text-right' : 'text-left'}`}>
                <h2 className="text-3xl md:text-5xl font-serif text-[#C4A484] mb-6 tracking-wide">{service.title}</h2>
                <p className="text-sm font-light text-gray-500 leading-loose mb-8 text-justify">
                  {service.description}
                </p>
                <div className={`flex gap-4 ${index % 2 !== 0 ? 'justify-end' : 'justify-start'}`}>
                  <button
                    onClick={() => onViewDetail && onViewDetail(mapEvent(service))}
                    className="bg-[#A68A64] text-white py-2 px-6 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors"
                  >
                    Xem chi tiết
                  </button>
                  <button
                    onClick={() => scrollToSection('booking-form')}
                    className="border border-[#A68A64] text-[#A68A64] py-2 px-6 text-[9px] font-bold uppercase tracking-widest hover:bg-[#A68A64] hover:text-white transition-colors"
                  >
                    Đặt lịch <ArrowRight size={10} className="inline ml-1" />
                  </button>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:w-1/2 w-full h-[300px] md:h-[400px]">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover shadow-lg"
                />
              </div>
            </div>
          ))
        )}
      </div>

      {/* --- BOOKING FORM SECTION --- */}
      <section id="booking-form" className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="h-[500px] md:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=800"
              alt="Event Booking"
              onError={handleImageError}
              className="w-full h-full object-cover shadow-xl"
            />
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#C4A484] mb-8 tracking-wide">Đặt lịch sự kiện</h2>

            {/* Error message */}
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded">
                {submitError}
              </div>
            )}

            <div className="space-y-6 text-xs text-gray-600">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Họ và tên *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Nhập họ và tên"
                  disabled={isSubmitting}
                  className={`w-full border px-4 py-3 outline-none font-light disabled:bg-gray-50 ${errors.fullName ? 'border-[#A68A64]' : 'border-gray-300 focus:border-[#C4A484]'}`}
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
                  placeholder="Nhập địa chỉ email"
                  disabled={isSubmitting}
                  className={`w-full border px-4 py-3 outline-none font-light disabled:bg-gray-50 ${errors.email ? 'border-[#A68A64]' : 'border-gray-300 focus:border-[#C4A484]'}`}
                />
                {errors.email && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Số điện thoại *</label>
                <div className={`flex border disabled:bg-gray-50 ${errors.phone ? 'border-[#A68A64]' : 'border-gray-300 focus-within:border-[#C4A484]'}`}>
                  <div className="bg-gray-50 flex items-center px-3 border-r border-gray-300">
                    <img src="https://flagcdn.com/w20/vn.png" alt="VN" className="w-5" />
                  </div>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Nhập số điện thoại"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 outline-none font-light disabled:bg-gray-50"
                  />
                </div>
                {errors.phone && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Chọn dịch vụ *</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full border px-4 py-3 outline-none font-light bg-white disabled:bg-gray-50 ${errors.eventType ? 'border-[#A68A64]' : 'border-gray-300 focus:border-[#C4A484]'}`}
                >
                  <option value="">Chọn</option>
                  {eventServices?.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                  <option value="Khác">Khác</option>
                </select>
                {errors.eventType && <p className="text-[#A68A64] text-[10px] font-bold mt-1">{errors.eventType}</p>}
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2">Tin nhắn (nếu có)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Nhập tin nhắn"
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#C4A484] font-light resize-none disabled:bg-gray-50"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-[#A68A64] text-white py-3 px-8 text-[10px] font-bold uppercase tracking-widest hover:bg-[#8e7655] transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Đang gửi...
                  </>
                ) : (
                  'Gửi tin nhắn đặt lịch'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};