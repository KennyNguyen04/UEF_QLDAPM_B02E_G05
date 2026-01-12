// API Service Layer for The Wandering Rose
// Connects React frontend to ASP.NET Core backend

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Types matching backend DTOs
interface RoomDto {
    id: number;
    name: string;
    maxPeople: number;
    area: number;
    roomsCount: number;
    bedType: string;
    price: number;
    imageUrl: string;
    zone: string;
    description?: string;
    features: string[];
    subImages: string[];
}

interface ZoneDto {
    id: number;
    name: string;
    heroImage: string;
    introTitle: string;
    introText: string[];
    introImages: string[];
    rooms: RoomSummaryDto[];
}

interface RoomSummaryDto {
    id: number;
    name: string;
    maxPeople: number;
    price: number;
    imageUrl: string;
}

interface BookingRequest {
    fullName: string;
    email: string;
    phone: string;
    checkIn: string;
    checkOut: string;
    rooms: { roomId: number; quantity: number }[];
}

interface BookingResponse {
    id: number;
    bookingCode: string;
    checkIn: string;
    checkOut: string;
    totalPrice: number;
    status: string;
    customer: {
        id: number;
        fullName: string;
        email: string;
        phone: string;
    };
    rooms: {
        roomId: number;
        roomName: string;
        quantity: number;
        unitPrice: number;
    }[];
}

interface TourDto {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    slug: string;
    detailedContent: string[];
    highlights: string[];
}

interface EventServiceDto {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    slug: string;
    detailedContent: string[];
    highlights: string[];
}

interface NewsDto {
    id: number;
    title: string;
    category: string;
    imageUrl: string;
    date?: string;
    description?: string;
    content: string[];
}

interface FaqDto {
    id: number;
    question: string;
    answer: string;
}

interface AmenityDto {
    id: number;
    title: string;
    description: string;
    iconName: string;
}

interface ContactRequest {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

interface EventBookingRequest {
    fullName: string;
    email: string;
    phone: string;
    eventType: string;
    message: string;
}

interface TourBookingRequest {
    fullName: string;
    email: string;
    phone: string;
    tourName: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
}

// Helper function for API calls
async function fetchApi<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${API_BASE}${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
    });

    if (!response.ok) {
        const error = await response.json().catch(() => ({ message: 'An error occurred' }));
        throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
}

// ====== API ENDPOINTS ======

export const api = {
    // --- ZONES ---
    zones: {
        getAll: (): Promise<ZoneDto[]> => fetchApi('/zones'),
        getById: (id: number): Promise<ZoneDto> => fetchApi(`/zones/${id}`),
        getByName: (name: string): Promise<ZoneDto> => fetchApi(`/zones/name/${encodeURIComponent(name)}`),
    },

    // --- ROOMS ---
    rooms: {
        getAll: (zone?: string): Promise<RoomDto[]> => {
            const params = zone ? `?zone=${encodeURIComponent(zone)}` : '';
            return fetchApi(`/rooms${params}`);
        },
        getById: (id: number): Promise<RoomDto> => fetchApi(`/rooms/${id}`),
        getAvailable: (checkIn: Date, checkOut: Date, guests: number = 1): Promise<RoomDto[]> => {
            const params = new URLSearchParams({
                checkIn: checkIn.toISOString(),
                checkOut: checkOut.toISOString(),
                guests: guests.toString(),
            });
            return fetchApi(`/rooms/available?${params}`);
        },
    },

    // --- BOOKINGS ---
    bookings: {
        create: (data: BookingRequest): Promise<BookingResponse> =>
            fetchApi('/bookings', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
        getByCode: (code: string): Promise<BookingResponse> => fetchApi(`/bookings/${encodeURIComponent(code)}`),
        updateStatus: (code: string, status: string): Promise<ApiResponse> =>
            fetchApi(`/bookings/${encodeURIComponent(code)}/status`, {
                method: 'PATCH',
                body: JSON.stringify(status),
            }),
    },

    // --- TOURS ---
    tours: {
        getAll: (): Promise<TourDto[]> => fetchApi('/tours'),
        getById: (id: number): Promise<TourDto> => fetchApi(`/tours/${id}`),
        getBySlug: (slug: string): Promise<TourDto> => fetchApi(`/tours/slug/${encodeURIComponent(slug)}`),
        book: (data: TourBookingRequest): Promise<ApiResponse> =>
            fetchApi('/tour-bookings', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },

    // --- EVENTS ---
    events: {
        getAll: (): Promise<EventServiceDto[]> => fetchApi('/events'),
        getById: (id: number): Promise<EventServiceDto> => fetchApi(`/events/${id}`),
        getBySlug: (slug: string): Promise<EventServiceDto> => fetchApi(`/events/slug/${encodeURIComponent(slug)}`),
        book: (data: EventBookingRequest): Promise<ApiResponse> =>
            fetchApi('/event-bookings', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },

    // --- NEWS ---
    news: {
        getAll: (): Promise<NewsDto[]> => fetchApi('/news'),
        getById: (id: number): Promise<NewsDto> => fetchApi(`/news/${id}`),
    },

    // --- FAQS ---
    faqs: {
        getAll: (): Promise<FaqDto[]> => fetchApi('/faqs'),
    },

    // --- AMENITIES ---
    amenities: {
        getAll: (): Promise<AmenityDto[]> => fetchApi('/amenities'),
    },

    // --- CONTACT ---
    contact: {
        submit: (data: ContactRequest): Promise<ApiResponse> =>
            fetchApi('/contact', {
                method: 'POST',
                body: JSON.stringify(data),
            }),
    },
};

// Export types for use in components
export type {
    RoomDto,
    ZoneDto,
    RoomSummaryDto,
    BookingRequest,
    BookingResponse,
    TourDto,
    EventServiceDto,
    NewsDto,
    FaqDto,
    AmenityDto,
    ContactRequest,
    EventBookingRequest,
    TourBookingRequest,
    ApiResponse,
};
