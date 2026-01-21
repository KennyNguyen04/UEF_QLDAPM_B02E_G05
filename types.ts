// MODEL LAYER
// Naming Convention: Singular for Model definitions

export interface ZoneInfo {
  name: string;
  heroImage: string;
  introTitle: string;
  introText: string[]; // Array of paragraphs for the intro section
  introImages: string[]; // Array of 3 images for the intro section
}

export interface Room {
  id: number;
  name: string;
  maxPeople: number;
  area: number;
  roomsCount: number;
  bedType: string;
  price: number;
  imageUrl: string;
  zone: 'Wooden House' | 'Rose House' | 'Villa'; // Added zone for categorization
  description?: string; // New: Detailed description
  features?: string[]; // New: List of specific room features
  subImages?: string[]; // New: Gallery images for the room
}

export interface Amenity {
  id: number;
  title: string;
  description: string;
  iconName: 'wifi' | 'pool' | 'bike' | 'bbq';
}

export interface Service {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

export interface Tour {
  id: number;
  title: string;
  description: string; // Added description
  imageUrl: string;
  slug: string; // Added for navigation
  detailedContent?: string[]; // Nội dung bài viết chi tiết cho Tour
  highlights?: string[]; // Các điểm nổi bật của Tour
}

export interface News {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date?: string;
  description?: string;
  content?: string[]; // Full article paragraphs
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface BookingRequest {
  checkIn: string;
  checkOut: string;
}

export interface EventServiceItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  slug: string; // for anchor scrolling
  detailedContent?: string[]; // Nội dung bài viết chi tiết
  highlights?: string[]; // Các hạng mục bao gồm trong sự kiện
}

export interface EventBookingRequest {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export interface TourBookingRequest {
  fullName: string;
  email: string;
  phone: string;
  tourName: string;
  message: string;
}

export interface ContactRequest {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// ====== WEEKEND SURCHARGE ======
export interface WeekendSurchargeInfo {
  weekendNights: number;
  surchargeRate: number; // 0-100 (percent)
  surchargeAmount: number;
}

export interface BookingPriceBreakdown {
  basePrice: number;
  weekendSurcharge: WeekendSurchargeInfo;
  totalPrice: number;
}

export interface SystemConfig {
  configKey: string;
  configValue: string;
  description: string;
}