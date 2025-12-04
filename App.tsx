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
      
      {/* 🚨 NEW STYLE BLOCK FOR TRANSLATE WIDGET CLEANUP 🚨 */}
      <style>{`
        /* Hide the ugly default Google branding bar */
        .goog-te-banner-frame.skiptranslate {
          display: none !important;
        }

        /* Adjust the page body's top padding after the banner is hidden */
        body {
          top: 0px !important; 
        }

        /* Style the main translate element (the dropdown) */
        #google_translate_element {
            /* Ensures it doesn't take up excessive space */
            line-height: 0;
        }

        /* Style the dropdown menu itself to match modern UI */
        .goog-te-combo {
          border: none !important;
          background: transparent !important;
          color: #3f3f46; /* text-stone-700 */
          font-size: 14px;
          padding: 4px 8px; 
          border-radius: 6px;
          box-shadow: none !important;
        }

        /* Force the whole container to float nicely */
        .goog-te-gadget {
          font-family: inherit !important;
          text-align: right;
          white-space: nowrap;
        }
      `}</style>

      
      {/* Google Translate Widget Container 
           Positioned absolutely in the top right corner to be always visible.
      */}
      <div className="absolute top-4 right-4 z-50 p-2 rounded-lg bg-white/90 backdrop-blur-md shadow-lg border border-stone-100 transition-shadow hover:shadow-xl">
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
