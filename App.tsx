import React from 'react';
// Core Types: Removed '.ts' extension for easier resolution
import { SectionId, NavItem } from './types'; 

// Components: Removed '.tsx' extension from all component imports
import Header from './components/Header'; 
import Hero from './components/Hero';
import History from './components/History';
import Reservation from './components/Reservation';
import Prices from './components/Prices';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
import Blog from './components/Blog'; // NEW: Import the Blog component
// import ClubAssistant from './components/ClubAssistant'; // DISABLED
// import GoogleTranslateWidget from './components/GoogleTranslateWidget'; // DISABLED

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
        
      {/* ASSISTANT & WIDGETS (DISABLED) 
      <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
          {/* Google Translate Widget * /}
          <div className="p-2 bg-white rounded-lg shadow-lg border border-gray-100">
              <GoogleTranslateWidget />
          </div>
          {/* Club Assistant Chatbot * /}
          <ClubAssistant />
      </div> */}
    </div>
  );
};

export default App;
