export type StoryCategory =
  | "Weddings"
  | "Couples"
  | "Events"
  | "Portraits"
  | "Commercial"
  | "Films"
  | "Pre-Weddings"
  | "Engagements"
  | "Receptions";

export interface WeddingImage {
  id: string;
  story_id: string;
  image_url: string;
  public_id?: string;
  alt_text?: string;
  caption?: string;
  sort_order?: number;
  display_order?: number;
  created_at?: string;
}

export interface WeddingStory {
  id: string;
  title: string;
  slug: string;
  couple_names: string;
  event_date?: string;
  wedding_date: string;
  location: string;
  category: StoryCategory;
  wedding_type?: string;
  cover_image: string;
  description: string;
  featured: boolean;
  published?: boolean;
  film_url?: string;
  gallery?: WeddingImage[];
  created_at?: string;
  updated_at?: string;
}

export interface Film {
  id: string;
  title: string;
  couple_names?: string;
  location: string;
  duration?: string;
  thumbnail_url: string;
  video_url: string;
  public_id?: string;
  category: string;
  description?: string;
  featured: boolean;
  published?: boolean;
  display_order?: number;
  sort_order?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  description?: string;
  image_url: string;
  image?: string;
  features: string[];
  items?: string[];
  sort_order?: number;
  display_order?: number;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Testimonial {
  id: string;
  client_name: string;
  wedding_event?: string;
  shoot_type?: string;
  location?: string;
  rating: number;
  review_text: string;
  review?: string;
  photo_url?: string;
  featured?: boolean;
  published?: boolean;
  sort_order?: number;
  created_at?: string;
}

export type EnquiryStatus =
  | "new"
  | "contacted"
  | "in_progress"
  | "completed"
  | "archived";

export interface Enquiry {
  id: string;
  name: string;
  partner_name?: string;
  email: string;
  phone: string;
  wedding_date: string;
  event_type: string;
  location: string;
  estimated_budget: string;
  message?: string;
  status: EnquiryStatus;
  created_at: string;
}

export interface AdminStats {
  totalEnquiries: number;
  newEnquiries: number;
  totalStories: number;
  totalFilms: number;
  totalTestimonials: number;
}

