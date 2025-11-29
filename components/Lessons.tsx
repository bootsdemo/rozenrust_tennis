import React from 'react';
import { SectionId } from '../types';
import { Mail, Phone } from 'lucide-react';

const Lessons: React.FC = () => {
  return (
    <section id={SectionId.LESSONS} className="py-16 md:py-24 bg-white border-t border-stone-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          
          {/* Header */}
          <div className="space-y-4">
             <span className="text-tennis-clay uppercase tracking-widest text-xs md:text-sm font-bold block">
               Coaching
             </span>
             <h2 className="font-serif text-3xl md:text-5xl text-stone-800">
               Tennis Lessons
             </h2>
             <div className="w-16 h-1 bg-tennis-green mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Intro */}
          <div className="text-stone-600 font-light leading-relaxed text-base md:text-lg space-y-4">
            <h3 className="text-xl font-semibold text-stone-800">RuRaSports</h3>
            <p>
              RuRaSports (Rutger Racket Sports) was founded by tennis and badminton teacher 
              <span className="font-medium text-stone-800"> Rutger Hendriks</span>. 
              Rutger offers professional tennis lessons right here at Tennispark Rozenrust.
            </p>
          </div>

          {/* Quote Block */}
          <div className="bg-stone-50 p-8 rounded-xl shadow-sm border border-stone-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-tennis-clay"></div>
            <p className="font-serif italic text-lg md:text-xl text-stone-700 mb-4 relative z-10">
              "Learning tennis in a fun way is the basis of my teaching."
            </p>
            <div className="text-sm font-bold text-tennis-green uppercase tracking-wider">
              — Rutger’s Vision
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-6 space-y-6">
            <p className="text-stone-500 font-medium">
              For more information about teaching opportunities and prices:
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
              <a 
                href="mailto:info@rurasports.nl" 
                className="group flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-200 hover:border-tennis-clay hover:shadow-md transition-all duration-300"
              >
                <div className="bg-stone-100 p-2 rounded-full group-hover:bg-tennis-clay group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-stone-700 group-hover:text-tennis-clay font-medium transition-colors">
                  info@rurasports.nl
                </span>
              </a>

              <a 
                href="tel:0641797953" 
                className="group flex items-center space-x-3 bg-white px-6 py-3 rounded-full shadow-sm border border-stone-200 hover:border-tennis-clay hover:shadow-md transition-all duration-300"
              >
                 <div className="bg-stone-100 p-2 rounded-full group-hover:bg-tennis-clay group-hover:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-stone-700 group-hover:text-tennis-clay font-medium transition-colors">
                  06-41797953
                </span>
              </a>
            </div>
            <p className="text-xs text-stone-400">Call Rutger Hendriks</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lessons;