export const ACUITY_BOOKING_URL = 'https://app.acuityscheduling.com/schedule.php?owner=40154215';

export interface Dress {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  additionalImages?: string[];
  silhouette: string;
  fabric: string;
  neckline: string;
  style: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  weddingYear: string;
  rating: number;
  location?: string;
  brideImage?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Gowns' | 'Details' | 'Accessories' | 'Boutique' | 'Real Brides';
  image: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

export interface AppointmentFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  guestCount: number;
  interestedDress?: string;
  message: string;
}
