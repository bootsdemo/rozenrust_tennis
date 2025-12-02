import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-tennis-green"
    >
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          // 🚨 FIX: Replaced problematic external Unsplash URL with local, absolute path
          src="/rozenrust_tennis/assets/CourtPicture5.jpeg" 
          alt="tennis court with net"
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-tennis-green/90" />
      </div>

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
            Experience the tradition of clay in the heart of Leidschendam. 
            A sanctuary for sport, leisure, and community.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6 md:pt-8 animate-fade-in-up delay-100 w-full max-w-md md:max-w-none mx-auto">
           <button 
             onClick={() => document.getElementById(SectionId.RESERVATION)?.scrollIntoView({ behavior: 'smooth'})}
             className="px-8 py-3 bg-tennis-clay text-white rounded-full font-medium tracking-wide hover:bg-orange-800 transition-colors shadow-lg shadow-orange-900/20 w-full md:w-auto text-sm md:text-base"
           >
             Book a Court
           </button>
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
