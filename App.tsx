import React, { useState, useEffect } from 'react';
import { Phone, Flower2, MapPin, Mail, ArrowRight as ArrowRightIcon } from 'lucide-react';
import { HomeView } from './components/HomeView';

export const App: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans text-gray-600">

            {/* --- HEADER --- */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#1a1a1a] shadow-xl pb-2' : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent pb-2'}`}>
                <div className="container mx-auto px-8 pt-2">

                    {/* Row 1: Top Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-white mb-2 border-b border-white/10 pb-2">
                        <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-80 mb-2 md:mb-0 font-light">
                            Đặt lịch với giá tốt nhất
                        </div>
                    </div>

                    {/* Row 2: Logo */}
                    <div className="flex justify-between items-center text-white mb-3 relative">
                        <div className="w-1/4 flex justify-start">
                            <button className="border border-white/40 px-2 py-1 text-[9px] font-serif tracking-widest hover:border-white transition-colors">
                                EN
                            </button>
                        </div>

                        <div className="w-1/2 flex flex-col items-center justify-center text-center">
                            <a href="/" className="flex flex-col items-center group cursor-pointer">
                                <Flower2 size={12} className="text-white mb-1 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
                                <h1 className="font-serif text-lg md:text-xl tracking-[0.2em] mb-0 leading-none">
                                    THE WANDERING ROSE
                                </h1>
                                <div className="flex items-center gap-2 text-[9px] tracking-widest opacity-90 mt-0.5">
                                    <span className="opacity-60 font-serif italic">EST.</span>
                                    <span className="font-script text-xl transform translate-y-0.5">Ba Vì</span>
                                    <span className="opacity-60 font-serif italic">2025</span>
                                </div>
                            </a>
                        </div>

                        <div className="w-1/4 flex justify-end items-center gap-2">
                            <Phone size={12} className="fill-white text-white" />
                            <span className="text-xs tracking-wider font-light">092 981 6699</span>
                        </div>
                    </div>

                    {/* Row 3: Navigation */}
                    <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] opacity-90">
                        <button className="text-primary border-primary border-b pb-0.5">Trang chủ</button>
                        <button className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">Về chúng tôi</button>
                        <button className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">Hạng phòng</button>
                        <button className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">Dịch vụ sự kiện</button>
                        <button className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">Trải nghiệm & Tour</button>
                        <button className="hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5">Liên hệ</button>
                    </nav>

                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            <HomeView
                onBookRoom={() => { }}
                onViewNews={() => { }}
                onOpenBooking={() => { }}
                onNavigateToServiceBooking={() => { }}
                onViewZoneDetail={() => { }}
            />

            {/* --- FOOTER --- */}
            <footer className="bg-[#2C2C2C] text-white/80 pt-16 pb-8 border-t border-white/10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs font-light leading-6">
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-lg tracking-[0.15em] text-white mb-2">THE WANDERING ROSE</h2>
                        <p className="text-[10px] italic font-serif opacity-60 mb-6">~ Eco Resort Ba Vì ~</p>
                        <p className="text-[11px] leading-loose mb-5">
                            Một điểm đến lý tưởng cho những ai yêu thiên nhiên, muốn tìm về sự bình yên và thư thái.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-[11px]">
                            <li><button className="hover:text-primary transition-colors">Trang chủ</button></li>
                            <li><button className="hover:text-primary transition-colors">Về chúng tôi</button></li>
                            <li><button className="hover:text-primary transition-colors">Hạng phòng</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Thông tin liên hệ</h4>
                        <ul className="space-y-3 text-[11px]">
                            <li className="flex items-start gap-2">
                                <MapPin size={14} className="mt-0.5 text-primary shrink-0" />
                                <span>Thôn Mít Mái, Xã Yên Bài, Huyện Ba Vì, Hà Nội</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-primary shrink-0" />
                                <span>092 981 6699</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-primary shrink-0" />
                                <span>booking@thewanderingrose.com</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Đăng ký nhận tin</h4>
                        <p className="text-[11px] mb-3">Nhận thông tin ưu đãi mới nhất từ chúng tôi.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email của bạn..." className="bg-white/10 border-none outline-none px-3 py-1.5 text-[10px] w-full focus:bg-white/20 text-white" />
                            <button className="bg-primary px-3 py-1.5 text-white hover:bg-[#8e7655]"><ArrowRightIcon size={12} /></button>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[9px] opacity-50">
                    <p>© 2025 The Wandering Rose. All rights reserved.</p>
                    <div className="flex gap-4 mt-3 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};
