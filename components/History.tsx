import React from 'react';
import { SectionId } from '../types';

const History: React.FC = () => {
  return (
    <section id={SectionId.HISTORY} className="py-16 md:py-24 bg-stone-50 text-stone-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          <div className="md:w-1/2 space-y-6 md:space-y-8 order-2 md:order-1">
            <h2 className="font-serif text-3xl md:text-5xl text-tennis-green font-semibold">
              Small scale. <br/> Big tradition.
            </h2>
            <div className="w-16 h-1 bg-tennis-clay"></div>
            <p className="text-base md:text-lg leading-loose text-stone-600 font-light">
              Tennispark Rozenrust is a hidden gem in the Dutch tennis community.
              Nestled amongst ancient trees and lush greenery, our intimate park offers a private escape from the daily rush.
            </p>
            <p className="text-base md:text-lg leading-loose text-stone-600 font-light">
              Our two meticulously maintained all-weather courts provide an authentic and personal tennis experience with consistent playability year-round. 
              With a close-knit group of members, Rozenrust welcomes you with a friendly, neighborhood atmosphere where everyone knows your name.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-tennis-green">2</span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-stone-500">All-Weather Courts</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-serif font-bold text-tennis-green">50+</span>
                <span className="text-xs md:text-sm uppercase tracking-wider text-stone-500">Members</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative w-full order-1 md:order-2">
            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg shadow-2xl">
              <img 
                               // 🚨 UPDATED SRC TO NEW FILE IN PUBLIC/ASSETS 🚨
                  src="/rozenrust_tennis/assets/CourtPicture8.jpeg" 
                  alt="Rozenrust players"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Quote Card - Static on Mobile, Floating on Desktop */}
            <div className="mt-6 md:mt-0 md:absolute md:-bottom-10 md:-left-10 bg-white p-6 md:p-8 rounded-lg shadow-xl w-full md:max-w-xs relative z-10">
              <p className="font-serif italic text-base md:text-lg text-stone-700">
                "The most charming 2-court park in the region. Pure tranquility."
              </p>
              <p className="mt-4 text-xs md:text-sm font-bold text-tennis-clay uppercase tracking-widest">
                — Member since 1998
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default History;
