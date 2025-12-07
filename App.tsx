import React from 'react';
// Core Types: Removing '.ts' extension to aid resolution
import { SectionId, NavItem } from './types'; 

// Components: Removing '.tsx' extension from all component imports
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

// Define navigation items, including the new 'Blog' link
const navItems: NavItem[] = [
  { name: 'Home', href: SectionId.HERO },
  { name: 'Our History', href: SectionId.HISTORY },
  { name: 'Blog', href: SectionId.BLOG }, // UPDATED: Link name is 'Blog'
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
