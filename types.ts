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