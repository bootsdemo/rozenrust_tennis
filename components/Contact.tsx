import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  // Direct Google Maps embed URL for Tennispark Rozenrust (Veursestraatweg 14)
  // The 'q' parameter sets the center point and pin location.
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1416.7126131464376!2d4.412495910375681!3d52.0838965997235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c59a35e72d2503%3A0xc665191833777f98!2sVeursestraatweg%2014%2C%202265%20CD%20Leidschendam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1701379200000!5m2!1sen!2sus";

  return (
    <footer id={SectionId.CONTACT} className="bg-tennis-green text-white pt-16 md:pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mb-12 md:mb-20">
          
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-4 md:mb-6">Get in Touch</h2>
              <p className="text-green-100 font-light max-w-md leading-relaxed text-sm md:text-base">
                We are located in the beautiful green heart of Leidschendam. 
                Stop by for a coffee or contact us to learn more about our membership options.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-tennis-clay mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-green-100 font-light text-sm md:text-base">Veursestraatweg 14<br/>2265 CD Leidschendam<br/>Netherlands</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="text-tennis-clay flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-green-100 font-light text-sm md:text-base">+31 70 123 4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="text-tennis-clay flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-green-100 font-light text-sm md:text-base">info@rozenrust.nl</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-6 pt-4">
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-tennis-clay transition-colors"><Instagram size={20}/></a>
                <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-tennis-clay transition-colors"><Facebook size={20}/></a>
            </div>
          </div>

          {/* MAP EMBED BLOCK: Replaced static image with live iframe */}
          <div className="h-64 md:h-auto min-h-[250px] md:min-h-[300px] w-full bg-stone-200 rounded-lg overflow-hidden relative shadow-xl">
            <iframe
              title="Google Map of Tennispark Rozenrust"
              src={mapEmbedUrl}
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
            {/* Overlay link for accessibility and better mobile experience */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=Veursestraatweg+14%2C+2265+CD+Leidschendam%2C+Netherlands`}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10 opacity-0"
              aria-label="View Tennispark Rozenrust on Google Maps"
            ></a>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-green-300/60 text-center md:text-left space-y-4 md:space-y-0">
          <p>&copy; {new Date().getFullYear()} Tennispark Rozenrust. All rights reserved.</p>
          <div className="flex space-x-6">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
