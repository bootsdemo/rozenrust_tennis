import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';

const Reservation: React.FC = () => {
  // Default height that allows the widget to render comfortably before resizing
  const [iframeHeight, setIframeHeight] = useState(900);

  useEffect(() => {
    // Listen for height messages from SuperSaaS to auto-resize
    const handleResize = (e: MessageEvent) => {
      // SuperSaaS sends the height as the message data
      if (e.origin.includes('supersaas')) {
        const newHeight = parseInt(e.data, 10);
        if (!isNaN(newHeight) && newHeight > 0) {
          setIframeHeight(newHeight);
        }
      }
    };

    window.addEventListener('message', handleResize);
    return () => window.removeEventListener('message', handleResize);
  }, []);

  return (
    <section id={SectionId.RESERVATION} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-tennis-clay uppercase tracking-widest text-xs md:text-sm font-bold mb-2 block">Membership</span>
          <h2 className="font-serif text-3xl md:text-5xl text-stone-800 mb-4 md:mb-6">Book Your Court</h2>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Members can book up to 7 days in advance. Guests are welcome during off-peak hours.
            Please check the schedule below for availability.
          </p>
        </div>

        {/* New Descriptive Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h3 className="font-serif text-2xl text-tennis-green font-semibold mb-3">
                A Green Oasis in Leidschendam
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Tennispark Rozenrust is located in the municipality of Leidschendam-Voorburg next to the lovely Park Rozenrust, a stone's throw from the Vliet. You literally play between the greenery and always hear the birds chirping in the park. Next to the park there is a beautiful, municipal playground, where kids can enjoy themselves in between matches. Our tennis park is completely fenced, offering a nice, green, and safe ambiance!
              </p>
            </div>
            
            <div>
              <h3 className="font-serif text-xl text-tennis-clay font-semibold mb-2">
                Rent Your Own Private Court
              </h3>
              <p className="text-stone-600 leading-relaxed font-light">
                Imagine owning your own tennis court at Tennispark Rozenrust! The park has two <strong>red artificial turf courts</strong> (completely renewed in 2020 with the very best materials). You can rent a court at a fixed time during the summer and winter season, so no one can bump you off and you never have to wait.
              </p>
            </div>

            <p className="text-stone-600 leading-relaxed font-light">
              Come with your tennis partner, the whole family, or put together your own club – be sporty and have fun in your own chosen setting at Rozenrust. Please note that in winter, play is limited to daylight hours as the park does not have floodlights due to its natural location.
            </p>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-[4/3] group">
              <img 
                src="https://lh3.googleusercontent.com/pw/AP1GczODRk-JHFb0oVgFV4PLXAeMW91SMi_GMq9MyLf7HGPKMe-pnICe2m2uwjpgZN1maCWfo2BcAQNae4CKk5zj88436KpgErw16n3p4pPNDDAB95pBgUP6LDFa04j7g49mGDb7To5sUXilvDlc6YDs1lF_=w1346-h898-s-no"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to the known working Rozenrust image if the user-provided link expires or fails
                  const target = e.currentTarget;
                  // Prevent infinite loop if fallback also fails
                  target.onerror = null; 
                  target.src = "https://rozenrust.nl/wp-content/uploads/2020/04/tennisbaan-rozenrust-2.jpg";
                }}
                alt="Tennispark Rozenrust Red Artificial Turf Courts" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              <div className="absolute bottom-6 left-6 text-white">
                 <p className="font-serif italic text-lg">"Play between the green."</p>
              </div>
            </div>
          </div>
        </div>

        {/* SuperSaaS Widget Embed */}
        {/* Mobile Optimization:
            - Negative margins (-mx-4) pull the iframe to the screen edges, maximizing width.
            - w-[calc(100%+2rem)] ensures it fills the void created by the negative margin.
            - Removed mobile padding (p-0) and border radius for a seamless full-width look.
        */}
        <div className="-mx-4 md:mx-0 w-[calc(100%+2rem)] md:w-full flex justify-center bg-stone-50 md:p-4 rounded-none md:rounded-xl md:border border-stone-100 md:shadow-sm overflow-hidden">
           <iframe
             src="https://www.supersaas.com/schedule/Bootsdemo/Court_Reservation?view=free&autoselect=first_available"
             width="100%"
             height={iframeHeight}
             style={{ border: 0, maxWidth: '100%', overflow: 'hidden', minHeight: '600px' }}
             title="Rozenrust Court Reservation"
             loading="lazy"
           ></iframe>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
             <p className="text-xs md:text-sm text-stone-400 italic px-4">
               Note: You may be asked to log in to finalize your booking.
             </p>
        </div>
      </div>
    </section>
  );
};

export default Reservation;