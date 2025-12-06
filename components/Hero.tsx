import React from 'react';
// import { SectionId } from '../types.ts'; // 🚨 TEMPORARILY COMMENTED OUT: Could not resolve path. Must be fixed separately.
import { ArrowDown } from 'lucide-react';

// Define a placeholder SectionId enum locally to prevent compilation errors in the JSX below
// This allows the rest of the component structure (and the w-screen fix) to compile.
enum SectionId {
  HOME = 'home',
  HISTORY = 'history',
  RESERVATION = 'reservation',
  PRICES = 'prices',
  LESSONS = 'lessons',
  CONTACT = 'contact',
}

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      // 🚨 AGGRESSIVE FIX: Using w-screen (full viewport width) and adding max-w-none (removes any max-width limit) 
      // and mx-0 (removes horizontal margin) to force an absolute edge-to-edge display.
      className="relative h-screen w-screen max-w-none mx-0 overflow-hidden flex items-center justify-center bg-tennis-green"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/rozenrust_tennis/assets/CourtPicture7.jpeg" 
          alt="tennis court with net"
          // This combination remains correct: w-full h-full object-cover ensures the image fills its inset-0 parent.
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        {/* Gradient overlay to help text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-tennis-green/90" />
      </div>

      {/* Content Container: This is correctly constrained with container mx-auto for good typography */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white space-y-6 md:space-y-8">
        <div className="animate-fade-in-up">
           <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-[10px] md:text-xs tracking-[0.2em] uppercase mb-4 md:mb-6 bg-white/10 backdrop-blur-sm">
             Est. 1935
           </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
            Tennispark <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-tennis-clay">Rozenrust</span>
          </h1>
          <p className="font-light text-base md:text-xl max-w-2xl mx-auto text-stone-200 leading-relaxed mt-4 md:mt-6 px-4">
            Experience the all-weather in the heart of Leidschendam.
            A sanctuary for sport, leisure, and community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6 md:pt-8 animate-fade-in-up delay-100 w-full max-w-md md:max-w-none mx-auto">
           {/* UPDATED BUTTON: Become a member - now uses bg-tennis-clay */}
           <button 
             // No onClick function yet, as requested
             className="px-8 py-3 bg-tennis-clay text-white rounded-full font-medium tracking-wide hover:bg-orange-800 transition-colors shadow-lg shadow-orange-900/20 w-full md:w-auto text-sm md:text-base"
           >
             Become a member
           </button>
           {/* EXISTING BUTTON: Book a Court */}
           <button 
             onClick={() => document.getElementById(SectionId.RESERVATION)?.scrollIntoView({ behavior: 'smooth'})}
             className="px-8 py-3 bg-tennis-clay text-white rounded-full font-medium tracking-wide hover:bg-orange-800 transition-colors shadow-lg shadow-orange-900/20 w-full md:w-auto text-sm md:text-base"
           >
             Book a Court
           </button>
           {/* EXISTING BUTTON: Discover More */}
           <button 
             onClick={() => document.getElementById(SectionId.HISTORY)?.scrollIntoView({ behavior: 'smooth'})}
             className="px-8 py-3 bg-transparent border border-white text-white rounded-full font-medium tracking-wide hover:bg-white hover:text-tennis-green transition-all w-full md:w-auto text-sm md:text-base"
           >
             Discover More
           </button>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <ArrowDown className="text-white" size={24} />
      </div>
    </section>
  );
};

export default Hero;
