import React from 'react';
import { SectionId } from '../types';
import { Calendar, Clock, CheckCircle2 } from 'lucide-react';

const Prices: React.FC = () => {
  return (
    <section id={SectionId.PRICES} className="py-16 md:py-24 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tennis-clay uppercase tracking-widest text-xs md:text-sm font-bold mb-2 block">
            Rates
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-800 mb-6">
            Season & Court Rental
          </h2>
          <div className="w-16 h-1 bg-tennis-green mx-auto rounded-full mb-6"></div>
          <p className="text-stone-600 font-light leading-relaxed">
            At Rozenrust, we offer fixed court rentals for the summer and winter seasons. 
            Enjoy the certainty of your own private court at a fixed time every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Summer Season Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-tennis-clay group-hover:h-2 transition-all"></div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl font-semibold text-stone-800">Summer Season</h3>
              <Calendar className="text-tennis-clay opacity-80" size={24} />
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">April 1st to October 1st (26 weeks)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">Fixed weekly time slot</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">Unlimited play during your hour</span>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <p className="text-xs uppercase tracking-wide text-stone-400 mb-1">Starting from</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-serif font-bold text-stone-800">€ 160,-</span>
                <span className="text-stone-500 ml-2 font-light">/ hour per season</span>
              </div>
            </div>
          </div>

          {/* Winter Season Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-tennis-green group-hover:h-2 transition-all"></div>
             <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-2xl font-semibold text-stone-800">Winter Season</h3>
              <Calendar className="text-tennis-green opacity-80" size={24} />
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">October 1st to April 1st (26 weeks)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">Daylight hours only (No floodlights)</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 size={18} className="text-tennis-green mt-1 flex-shrink-0" />
                <span className="text-stone-600 font-light">All-weather artificial turf</span>
              </div>
            </div>

            <div className="border-t border-stone-100 pt-6">
              <p className="text-xs uppercase tracking-wide text-stone-400 mb-1">Starting from</p>
              <div className="flex items-baseline">
                <span className="text-3xl font-serif font-bold text-stone-800">€ 160,-</span>
                <span className="text-stone-500 ml-2 font-light">/ hour per season</span>
              </div>
            </div>
          </div>
        </div>

        {/* Single Rental Info */}
        <div className="max-w-4xl mx-auto mt-12 bg-white rounded-xl p-6 md:p-8 border border-stone-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
             <div className="bg-stone-50 p-3 rounded-full text-tennis-clay">
               <Clock size={24} />
             </div>
             <div>
               <h4 className="font-serif text-lg font-semibold text-stone-800 mb-1">Single Court Rental</h4>
               <p className="text-stone-600 font-light text-sm">
                 Want to play once? Book a loose court via our reservation system.
               </p>
             </div>
          </div>
          <div className="text-right flex-shrink-0">
             <span className="block text-2xl font-serif font-bold text-stone-800">€ 15,-</span>
             <span className="text-xs text-stone-500">per hour</span>
          </div>
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-stone-400 italic">
              * Prices are indicative. Please contact us for the most current rates and availability.
            </p>
        </div>

      </div>
    </section>
  );
};

export default Prices;