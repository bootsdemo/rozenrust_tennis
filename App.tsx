import React from 'react';
// Core Types: Adding '.ts' extension back, as type files often require it for resolution
import { SectionId, NavItem } from './types.ts'; 

// Components: Using no extension for .tsx files, which sometimes helps resolution
import Navigation from './components/Navigation'; 
import Hero from './components/Hero';
import History from './components/History';
import Reservation from './components/Reservation';
import Prices from './components/Prices';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
import Blog from './components/Blog'; // NEW: Import the Blog component
// import ClubAssistant from './components/ClubAssistant'; // DISABLED
// import GoogleTranslateWidget from './components/GoogleTranslateWidget'; // DISABLED

// Define navigation items, including the new 'News' (Blog) link
const navItems: NavItem[] = [
  { name: 'Home', href: SectionId.HERO },
  { name: 'Our History', href: SectionId.HISTORY },
  { name: 'News', href: SectionId.BLOG }, // ADDED: Blog link
  { name: 'Prices', href: SectionId.PRICES }, 
  { name: 'Contact & Map', href: SectionId.CONTACT },
];

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-stone-50 overflow-x-hidden">
        
      {/* Renders the navigation component, passing the items.
          This assumes Navigation component now accepts a 'navItems' prop. */}
      <Navigation navItems={navItems} />
      
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
        
      {/* ASSISTANT & WIDGETS (DISABLED) */}
    </div>
  );
};

export default App;
