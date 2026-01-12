// React Hooks for API Data Fetching
// Provides loading states and error handling

import { useState, useEffect, useCallback } from 'react';
import { api, RoomDto, ZoneDto, TourDto, EventServiceDto, NewsDto, FaqDto, AmenityDto } from './api';

// Generic hook for fetching data
function useApiData<T>(
    fetchFn: () => Promise<T>,
    deps: unknown[] = []
): { data: T | null; loading: boolean; error: string | null; refetch: () => void } {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            const result = await fetchFn();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, deps);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error, refetch: fetchData };
}

// ====== SPECIFIC HOOKS ======

export function useRooms(zone?: string) {
    return useApiData<RoomDto[]>(() => api.rooms.getAll(zone), [zone]);
}

export function useRoom(id: number) {
    return useApiData<RoomDto>(() => api.rooms.getById(id), [id]);
}

export function useAvailableRooms(checkIn: Date | null, checkOut: Date | null, guests: number = 1) {
    const [data, setData] = useState<RoomDto[] | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchAvailable = useCallback(async () => {
        if (!checkIn || !checkOut) {
            setData(null);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const result = await api.rooms.getAvailable(checkIn, checkOut, guests);
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    }, [checkIn?.toISOString(), checkOut?.toISOString(), guests]);

    useEffect(() => {
        fetchAvailable();
    }, [fetchAvailable]);

    return { data, loading, error, refetch: fetchAvailable };
}

export function useZones() {
    return useApiData<ZoneDto[]>(() => api.zones.getAll(), []);
}

export function useZone(id: number) {
    return useApiData<ZoneDto>(() => api.zones.getById(id), [id]);
}

export function useZoneByName(name: string) {
    return useApiData<ZoneDto>(() => api.zones.getByName(name), [name]);
}

export function useTours() {
    return useApiData<TourDto[]>(() => api.tours.getAll(), []);
}

export function useTour(id: number) {
    return useApiData<TourDto>(() => api.tours.getById(id), [id]);
}

export function useEvents() {
    return useApiData<EventServiceDto[]>(() => api.events.getAll(), []);
}

export function useEvent(id: number) {
    return useApiData<EventServiceDto>(() => api.events.getById(id), [id]);
}

export function useNews() {
    return useApiData<NewsDto[]>(() => api.news.getAll(), []);
}

export function useNewsById(id: number) {
    return useApiData<NewsDto>(() => api.news.getById(id), [id]);
}

export function useFaqs() {
    return useApiData<FaqDto[]>(() => api.faqs.getAll(), []);
}

export function useAmenities() {
    return useApiData<AmenityDto[]>(() => api.amenities.getAll(), []);
}

// ====== MUTATION HOOKS ======

export function useCreateBooking() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const createBooking = async (data: Parameters<typeof api.bookings.create>[0]) => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.bookings.create(data);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { createBooking, loading, error };
}

export function useSubmitContact() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submitContact = async (data: Parameters<typeof api.contact.submit>[0]) => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.contact.submit(data);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { submitContact, loading, error };
}

export function useBookEvent() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const bookEvent = async (data: Parameters<typeof api.events.book>[0]) => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.events.book(data);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { bookEvent, loading, error };
}

export function useBookTour() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const bookTour = async (data: Parameters<typeof api.tours.book>[0]) => {
        try {
            setLoading(true);
            setError(null);
            const result = await api.tours.book(data);
            return result;
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'An error occurred';
            setError(errorMessage);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { bookTour, loading, error };
}
