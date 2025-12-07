export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HOME = 'home',
  HISTORY = 'history',
  RESERVATION = 'reservation',
  PRICES = 'prices',
  LESSONS = 'lessons',
  BLOG = 'blog', // Added for the new Blog section
  CONTACT = 'contact'
}

export interface CourtTimeSlot {
  time: string;
  available: boolean;
}

export interface Court {
  id: number;
  name: string;
  surface: 'Clay' | 'Grass' | 'Hard';
  slots: CourtTimeSlot[];
}

/**
 * Interface defining the structure of a static blog post (for Option 1: Data Array Method).
 */
export interface BlogPost {
    id: number;
    date: string; // Format: YYYY-MM-DD
    title: string;
    content: string; // The main body text (can contain basic HTML if needed)
    imageUrl?: string; // NEW: Optional URL for a featured image or thumbnail
}
