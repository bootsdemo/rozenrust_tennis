export enum SectionId {
    HERO = 'home', // FIX 1: Changed HOME to HERO to resolve TS2339
    HISTORY = 'history',
    RESERVATION = 'reservation',
    PRICES = 'prices',
    LESSONS = 'lessons',
    BLOG = 'blog', 
    CONTACT = 'contact'
}

/**
 * Defines the structure for a single navigation item.
 */
export interface NavItem {
    name: string;
    href: SectionId;
}

// Placeholder Interfaces (for future expansion)

/**
 * Interface for a simple chat message.
 */
export interface ChatMessage {
    role: 'user' | 'model';
    text: string;
}

/**
 * Defines a single time slot for court reservation.
 */
export interface CourtTimeSlot {
    time: string;
    available: boolean;
}

/**
 * Defines the structure of a tennis court.
 */
export interface Court {
    id: number;
    name: string;
    surface: 'Clay' | 'Grass' | 'Hard';
    slots: CourtTimeSlot[];
}

/**
 * Interface defining the structure of a static blog post.
 */
export interface BlogPost {
    id: number;
    date: string; // Format: YYYY-MM-DD (Restored comment)
    title: string;
    content: string; // The main body text
    imageUrl?: string; // Optional URL for a featured image or thumbnail
