import React from 'react';
// Core Types: Added '.ts' extension and ensured NavItem is imported
import { SectionId, NavItem } from './types.ts';

// Components: Added '.tsx' extension to all component imports
import Header from './components/Header.tsx'; 
import Hero from './components/Hero.tsx';
import History from './components/History.tsx';
import Reservation from './components/Reservation.tsx';
import Prices from './components/Prices.tsx';
import Lessons from './components/Lessons.tsx';
import Contact from './components/Contact.tsx';
import Blog from './components/Blog.tsx'; // NEW: Import the Blog component
import ClubAssistant from './components/ClubAssistant.tsx'; 
import GoogleTranslateWidget from './components/GoogleTranslateWidget.tsx'; 

// Define navigation items with correct types
const navItems: NavItem[] = [
  { name: 'Home', href: SectionId.HERO },
  { name: 'Our History', href: SectionId.HISTORY },
  { name: 'News', href: SectionId.BLOG }, // ADDED: Blog link
  // Note: Assuming 'prices' is an ID used in the Prices component for navigation
  { name: 'Prices', href: SectionId.PRICES }, 
  { name: 'Contact & Map', href: SectionId.CONTACT },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-stone-50 overflow-x-hidden">
        
      {/* Renders the header with the updated navigation links */}
      <Header navItems={navItems} />
      
      <main>
        <Hero />
        <History />
        
        {/* NEW: Blog Section Integration */}
        <Blog /> 

        <Reservation />
        <Prices />
        <Lessons />
      </main>

      <Contact />
        
      {/* ASSISTANT & WIDGETS */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
          {/* Google Translate Widget */}
          <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-100">
              <GoogleTranslateWidget />
          </div>
          {/* Club Assistant Chatbot */}
          <ClubAssistant />
      </div>
    </div>
  );
};

export default App;
