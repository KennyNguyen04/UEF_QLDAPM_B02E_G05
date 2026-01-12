import React, { useState, useEffect } from 'react';
import { ArrowRight, Phone, ArrowRight as ArrowRightIcon, MapPin, Mail, Flower2, Calendar, User } from 'lucide-react';
import { bookingController } from './services/mockController';
import { HomeView } from './components/HomeView';
import { AboutUs } from './components/AboutUs';
import { RoomCategories } from './components/RoomCategories';
import { ServicesEvents } from './components/ServicesEvents';
import { ExperiencesTours } from './components/ExperiencesTours';
import { ContactUs } from './components/ContactUs';
import { GalleryView } from './components/GalleryView';
import { RoomDetailView } from './components/RoomDetailView';
import { ZoneDetailView } from './components/ZoneDetailView';
import { NewsDetailView } from './components/NewsDetailView';
import { ServiceDetailView } from './components/ServiceDetailView';
import { TourDetailView } from './components/TourDetailView';
import { BookingCalendar } from './components/BookingCalendar';
import { BookingResultView } from './components/BookingResultView';
import { CheckoutView } from './components/CheckoutView';
import { PaymentView } from './components/PaymentView';
import { ConfirmationView } from './components/ConfirmationView';
import { FAQView } from './components/FAQView';
import { Room, News, EventServiceItem, Tour } from './types';
import { rooms as allRooms, zonesData } from './constants';

// Define View Types
type ViewState = 'home' | 'about' | 'rooms' | 'services' | 'tours' | 'contact' | 'gallery' | 'faq' | 'room-detail' | 'zone-detail' | 'news-detail' | 'service-detail' | 'tour-detail' | 'booking-result' | 'checkout' | 'payment' | 'confirmation';

export const App: React.FC = () => {
    // MVC View State
    const [scrolled, setScrolled] = useState(false);
    const [currentView, setCurrentView] = useState<ViewState>('home');
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
    const [selectedZone, setSelectedZone] = useState<'Wooden House' | 'Rose House' | 'Villa' | null>(null);
    const [selectedNews, setSelectedNews] = useState<News | null>(null);
    const [selectedService, setSelectedService] = useState<EventServiceItem | null>(null);
    const [selectedTour, setSelectedTour] = useState<Tour | null>(null);

    // --- BOOKING STATE ---
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [guests, setGuests] = useState({ rooms: 1, adults: 2, children: 0 });

    // Checkout Data State
    const [checkoutData, setCheckoutData] = useState<{ selectedRooms: { room: Room; quantity: number }[] }>({ selectedRooms: [] });

    // Confirmed Data for Payment State
    const [confirmedBookingData, setConfirmedBookingData] = useState<{
        customerInfo: any,
        roomConfigs: any,
        bookingId: string
    } | null>(null);

    // Handle Scroll for Header Styling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Navigation Handler
    const navigateTo = (view: ViewState) => {
        setCurrentView(view);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleViewRoomDetail = (room: Room) => {
        setSelectedRoom(room);
        navigateTo('room-detail');
    };

    const handleViewZoneDetail = (zone: 'Wooden House' | 'Rose House' | 'Villa') => {
        // NEW LOGIC: Navigate to Room Categories and Scroll to Section
        setCurrentView('rooms');

        // Determine section ID based on zone name
        let sectionId = '';
        if (zone === 'Wooden House') sectionId = 'wooden';
        if (zone === 'Rose House') sectionId = 'rose';
        if (zone === 'Villa') sectionId = 'villa';

        // Wait for view transition then scroll
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleViewNewsDetail = (news: News) => {
        setSelectedNews(news);
        navigateTo('news-detail');
    };

    const handleViewServiceDetail = (service: EventServiceItem) => {
        setSelectedService(service);
        navigateTo('service-detail');
    };

    const handleViewTourDetail = (tour: Tour) => {
        setSelectedTour(tour);
        navigateTo('tour-detail');
    };

    const handleBookingApply = (start: Date, end: Date, guestInfo: any) => {
        setCheckIn(start);
        setCheckOut(end);
        setGuests(guestInfo);
        setIsCalendarOpen(false);

        // Navigate to Booking Result View
        navigateTo('booking-result');
    };

    // --- LOGIC ĐẶT PHÒNG CỤ THỂ ---
    const handleBookSpecificRoom = (room: Room) => {
        // Set guests state based on the selected room capacity
        setGuests({
            rooms: room.roomsCount,
            adults: room.maxPeople,
            children: 0
        });
        // Open Calendar
        setIsCalendarOpen(true);
    };

    const handleProceedToCheckout = (selectedRooms: { room: Room; quantity: number }[]) => {
        setCheckoutData({ selectedRooms });
        navigateTo('checkout');
    };

    const handleConfirmCheckout = (data: { customerInfo: any, roomConfigs: any }) => {
        // Generate Booking ID
        const bookingId = '#OL' + Math.floor(10000000 + Math.random() * 90000000);
        setConfirmedBookingData({
            ...data,
            bookingId
        });
        navigateTo('payment');
    };

    const handleNavigateToServiceBooking = () => {
        setCurrentView('services');
        setTimeout(() => {
            const element = document.getElementById('booking-form');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const handleNavigateToTourBooking = () => {
        setCurrentView('tours');
        setTimeout(() => {
            const element = document.getElementById('tour-booking');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    // Helper to format date display in header
    const formatDateDisplay = (date: Date | null) => {
        if (!date) return 'Chọn ngày';
        return `${date.getDate()} Th${date.getMonth() + 1}`;
    };

    // Filter rooms for the selected zone
    const zoneRooms = selectedZone ? allRooms.filter(r => r.zone === selectedZone) : [];
    // Get Zone Info
    const zoneInfo = selectedZone ? zonesData.find(z => z.name === selectedZone) : null;

    return (
        <div className="min-h-screen bg-white font-sans text-gray-600">

            {/* --- CALENDAR MODAL --- */}
            <BookingCalendar
                isOpen={isCalendarOpen}
                onClose={() => setIsCalendarOpen(false)}
                onApply={handleBookingApply}
                initialCheckIn={checkIn || undefined}
                initialCheckOut={checkOut || undefined}
                initialGuests={guests}
            />

            {/* --- HEADER --- */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || ['booking-result', 'checkout', 'payment', 'confirmation', 'tours', 'services', 'rooms', 'about', 'contact', 'service-detail', 'tour-detail'].includes(currentView) ? 'bg-[#1a1a1a] shadow-xl pb-2' : 'bg-gradient-to-b from-black/90 via-black/40 to-transparent pb-2'}`}>
                <div className="container mx-auto px-8 pt-2">

                    {/* Row 1: Top Bar (Booking) - Hide in Checkout/Payment/Confirmation */}
                    {!['checkout', 'payment', 'confirmation'].includes(currentView) && (
                        <div className="flex flex-col md:flex-row justify-between items-center text-white mb-2 border-b border-white/10 pb-2">
                            <div className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] opacity-80 mb-2 md:mb-0 font-light">
                                Đặt lịch với giá tốt nhất
                            </div>

                            {/* CUSTOM BOOKING BAR */}
                            <div className="flex gap-4 items-center bg-white/10 backdrop-blur-md px-4 py-1 rounded-sm border border-white/20">
                                <div
                                    className="flex items-center gap-3 cursor-pointer group"
                                    onClick={() => setIsCalendarOpen(true)}
                                >
                                    <div className="flex items-center gap-2 border-r border-white/30 pr-4">
                                        <Calendar size={12} className="text-white/80" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] text-white/60 uppercase tracking-widest">Check In</span>
                                            <span className="text-[10px] font-bold font-serif uppercase tracking-wider">{formatDateDisplay(checkIn)}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 border-r border-white/30 pr-4">
                                        <Calendar size={12} className="text-white/80" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] text-white/60 uppercase tracking-widest">Check Out</span>
                                            <span className="text-[10px] font-bold font-serif uppercase tracking-wider">{formatDateDisplay(checkOut)}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 pr-2">
                                        <User size={12} className="text-white/80" />
                                        <div className="flex flex-col">
                                            <span className="text-[7px] text-white/60 uppercase tracking-widest">Khách</span>
                                            <span className="text-[10px] font-bold font-serif uppercase tracking-wider">{guests.adults} Lớn, {guests.children} Bé</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsCalendarOpen(true)}
                                    className="bg-white text-black px-4 py-1 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all ml-2"
                                >
                                    Đặt ngay
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Row 2: Logo & Utility */}
                    <div className="flex justify-between items-center text-white mb-3 relative">
                        {/* Left: Language */}
                        <div className="w-1/4 flex justify-start">
                            <button className="border border-white/40 px-2 py-1 text-[9px] font-serif tracking-widest hover:border-white transition-colors">
                                EN
                            </button>
                        </div>

                        {/* Center: Logo */}
                        <div className="w-1/2 flex flex-col items-center justify-center text-center">
                            <a
                                href="/"
                                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                                className="flex flex-col items-center group cursor-pointer"
                            >
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

                        {/* Right: Phone */}
                        <div className="w-1/4 flex justify-end items-center gap-2">
                            <Phone size={12} className="fill-white text-white" />
                            <span className="text-xs tracking-wider font-light">092 981 6699</span>
                        </div>
                    </div>

                    {/* Row 3: Navigation - Hidden in Checkout/Payment/Confirmation */}
                    {!['checkout', 'payment', 'confirmation'].includes(currentView) && (
                        <nav className="flex justify-center flex-wrap gap-x-6 gap-y-2 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-[0.25em] opacity-90">
                            <button onClick={() => navigateTo('home')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'home' ? 'text-primary border-primary' : 'border-transparent'}`}>Trang chủ</button>
                            <button onClick={() => navigateTo('about')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'about' ? 'text-primary border-primary' : 'border-transparent'}`}>Về chúng tôi</button>
                            <button onClick={() => navigateTo('rooms')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'rooms' || currentView === 'room-detail' || currentView === 'zone-detail' ? 'text-primary border-primary' : 'border-transparent'}`}>Hạng phòng</button>
                            <button onClick={() => navigateTo('services')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'services' || currentView === 'service-detail' ? 'text-primary border-primary' : 'border-transparent'}`}>Dịch vụ sự kiện</button>
                            <button onClick={() => navigateTo('tours')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'tours' || currentView === 'tour-detail' ? 'text-primary border-primary' : 'border-transparent'}`}>Trải nghiệm & Tour</button>
                            <button onClick={() => navigateTo('contact')} className={`hover:text-primary transition-colors border-b hover:border-primary pb-0.5 ${currentView === 'contact' ? 'text-primary border-primary' : 'border-transparent'}`}>Liên hệ</button>
                        </nav>
                    )}

                </div>
            </header>

            {/* --- MAIN CONTENT SWITCHER --- */}
            {currentView === 'home' && (
                <HomeView
                    onBookRoom={handleBookSpecificRoom}
                    onViewNews={handleViewNewsDetail}
                    onOpenBooking={() => setIsCalendarOpen(true)}
                    onNavigateToServiceBooking={handleNavigateToServiceBooking}
                    onViewZoneDetail={handleViewZoneDetail}
                />
            )}
            {currentView === 'about' && <AboutUs onNavigate={navigateTo} />}
            {currentView === 'rooms' && (
                <RoomCategories
                    onViewDetail={handleViewRoomDetail}
                    onViewZoneDetail={handleViewZoneDetail}
                    onBookRoom={handleBookSpecificRoom}
                />
            )}
            {currentView === 'services' && (
                <ServicesEvents
                    onGoHome={() => navigateTo('home')}
                    onViewDetail={handleViewServiceDetail}
                />
            )}
            {currentView === 'service-detail' && selectedService && (
                <ServiceDetailView
                    service={selectedService}
                    onBack={() => navigateTo('services')}
                    onBook={handleNavigateToServiceBooking}
                />
            )}
            {currentView === 'tours' && (
                <ExperiencesTours
                    onGoHome={() => navigateTo('home')}
                    onViewDetail={handleViewTourDetail}
                />
            )}
            {currentView === 'tour-detail' && selectedTour && (
                <TourDetailView
                    tour={selectedTour}
                    onBack={() => navigateTo('tours')}
                    onBook={handleNavigateToTourBooking}
                />
            )}
            {currentView === 'contact' && <ContactUs onGoHome={() => navigateTo('home')} />}
            {currentView === 'gallery' && <GalleryView />}
            {currentView === 'faq' && <FAQView />}
            {currentView === 'room-detail' && selectedRoom && (
                <RoomDetailView
                    room={selectedRoom}
                    onBack={() => navigateTo('rooms')}
                    onViewRoomDetail={handleViewRoomDetail}
                    onBookRoom={handleBookSpecificRoom}
                />
            )}
            {currentView === 'zone-detail' && selectedZone && zoneInfo && (
                <ZoneDetailView
                    zoneName={selectedZone}
                    rooms={zoneRooms}
                    info={zoneInfo}
                    onBack={() => navigateTo('rooms')}
                    onBookRoom={handleBookSpecificRoom}
                    onViewRoomDetail={handleViewRoomDetail}
                />
            )}
            {currentView === 'news-detail' && selectedNews && (
                <NewsDetailView
                    news={selectedNews}
                    onBack={() => navigateTo('home')}
                />
            )}
            {currentView === 'booking-result' && (
                <BookingResultView
                    checkIn={checkIn}
                    checkOut={checkOut}
                    guests={guests}
                    onOpenCalendar={() => setIsCalendarOpen(true)}
                    onProceedToCheckout={handleProceedToCheckout}
                />
            )}
            {currentView === 'checkout' && (
                <CheckoutView
                    checkIn={checkIn}
                    checkOut={checkOut}
                    guests={guests}
                    selectedRooms={checkoutData.selectedRooms}
                    onBack={() => navigateTo('booking-result')}
                    onConfirm={handleConfirmCheckout}
                />
            )}
            {currentView === 'payment' && confirmedBookingData && (
                <PaymentView
                    checkIn={checkIn}
                    checkOut={checkOut}
                    selectedRooms={checkoutData.selectedRooms}
                    customerInfo={confirmedBookingData.customerInfo}
                    roomConfigs={confirmedBookingData.roomConfigs}
                    bookingId={confirmedBookingData.bookingId}
                    onBack={() => navigateTo('checkout')}
                    onFinish={() => navigateTo('confirmation')}
                />
            )}
            {currentView === 'confirmation' && confirmedBookingData && (
                <ConfirmationView
                    checkIn={checkIn}
                    checkOut={checkOut}
                    guests={guests}
                    selectedRooms={checkoutData.selectedRooms}
                    customerInfo={confirmedBookingData.customerInfo}
                    roomConfigs={confirmedBookingData.roomConfigs}
                    bookingId={confirmedBookingData.bookingId}
                    onBackHome={() => navigateTo('home')}
                />
            )}

            {/* --- FOOTER --- */}
            <footer className="bg-[#2C2C2C] text-white/80 pt-16 pb-8 border-t border-white/10">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-xs font-light leading-6">
                    <div className="md:col-span-1">
                        <h2 className="font-serif text-lg tracking-[0.15em] text-white mb-2">THE WANDERING ROSE</h2>
                        <p className="text-[10px] italic font-serif opacity-60 mb-6">~ Eco Resort Ba Vì ~</p>
                        <p className="text-[11px] leading-loose mb-5">
                            Một điểm đến lý tưởng cho những ai yêu thiên nhiên, muốn tìm về sự bình yên và thư thái.
                        </p>
                        <div className="flex gap-3">
                            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><span className="text-[10px]">F</span></div>
                            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><span className="text-[10px]">I</span></div>
                            <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer"><span className="text-[10px]">Y</span></div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-[11px]">
                            <li><button onClick={() => navigateTo('home')} className="hover:text-primary transition-colors">Trang chủ</button></li>
                            <li><button onClick={() => navigateTo('about')} className="hover:text-primary transition-colors">Về chúng tôi</button></li>
                            <li><button onClick={() => navigateTo('rooms')} className="hover:text-primary transition-colors">Hạng phòng</button></li>
                            <li><button onClick={() => navigateTo('services')} className="hover:text-primary transition-colors">Dịch vụ & Tiện ích</button></li>
                            <li><button onClick={() => navigateTo('tours')} className="hover:text-primary transition-colors">Trải nghiệm & Tours</button></li>
                            <li><button onClick={() => navigateTo('faq')} className="hover:text-primary transition-colors">FAQ</button></li>
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