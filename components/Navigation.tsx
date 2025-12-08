import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// The import below caused the error and has been removed:
// import { SectionId } from '../types'; 

/**
 * Defines the available section IDs used for navigation and anchor links.
 * This enum is now defined here to resolve the "Could not resolve" error.
 */
export enum SectionId {
    HOME = 'home', // This is used by the logo link
    HISTORY = 'history',
    RESERVATION = 'reservation',
    PRICES = 'prices',
    LESSONS = 'lessons',
    GALLERY = 'gallery', // <--- NEW: Gallery ID added
    CONTACT = 'contact',
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinkClass = `text-sm font-medium tracking-wide uppercase transition-colors hover:text-tennis-clay ${
    isScrolled ? 'text-stone-600' : 'text-stone-100'
  }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* The Logo acts as the HOME link */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToSection(SectionId.HOME); }}
          className={`font-serif text-2xl font-bold tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-tennis-green' : 'text-white'}`}
        >
          ROZENRUST
        </a>

        {/* Desktop Menu: Only includes your specified buttons */}
        <div className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection(SectionId.HISTORY)} className={navLinkClass}>
            History
          </button>

          <button
            onClick={() => scrollToSection(SectionId.RESERVATION)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              isScrolled 
                ? 'bg-tennis-green text-white hover:bg-tennis-clay' 
                : 'bg-white text-tennis-green hover:bg-stone-100'
            }`}
          >
            Book a Court
          </button>

          <button onClick={() => scrollToSection(SectionId.PRICES)} className={navLinkClass}>
            Prices
          </button>

          <button onClick={() => scrollToSection(SectionId.LESSONS)} className={navLinkClass}>
            Lessons
          </button>
          {/* --- NEW GALLERY BUTTON --- */}
          <button onClick={() => scrollToSection(SectionId.GALLERY)} className={navLinkClass}>
            Gallery
          </button>
          {/* --------------------------- */}
          <button onClick={() => scrollToSection(SectionId.CONTACT)} className={navLinkClass}>
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-stone-800" size={28} />
          ) : (
            <Menu className={isScrolled ? 'text-stone-800' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay: Only includes your specified menu items */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col py-8 px-6 space-y-6 animate-fade-in-down border-t border-stone-100">
           {[
            { id: SectionId.HISTORY, label: 'History' },
            { id: SectionId.RESERVATION, label: 'Reservations' },
            { id: SectionId.PRICES, label: 'Prices' },
            { id: SectionId.LESSONS, label: 'Lessons' },
            // --- NEW GALLERY MOBILE ITEM ---
            { id: SectionId.GALLERY, label: 'Gallery' }, 
            // -------------------------------
            { id: SectionId.CONTACT, label: 'Contact Us' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-left text-lg font-serif text-stone-800 hover:text-tennis-clay"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
