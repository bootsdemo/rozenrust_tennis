import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import History from './components/History';
import Reservation from './components/Reservation';
import Prices from './components/Prices';
import Lessons from './components/Lessons';
import Contact from './components/Contact';
// Import the Google Translate Widget for integration
import GoogleTranslateWidget from './components/GoogleTranslateWidget.tsx'; 

const App: React.FC = () => {
  return (
    // FIX FOR EDGE-TO-EDGE: Removed any potential max-width or center-alignment
    // from the root container to ensure child components like Hero (w-screen) can stretch fully.
    <div className="relative min-h-screen bg-stone-50 overflow-x-hidden">
      
      {/* NEW: Google Translate Widget Container 
           Positioned absolutely in the top right corner to be always visible.
      */}
      <div className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-white/70 backdrop-blur-sm shadow-md">
        <GoogleTranslateWidget />
      </div>
      
      <Navigation />
      
      <main>
        <Hero />
        <History />
        <Reservation />
        <Prices />
        <Lessons />
      </main>

      <Contact />
      
    </div>
  );
};

export default App;
