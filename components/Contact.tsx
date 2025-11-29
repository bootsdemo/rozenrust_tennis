import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
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

          <div className="h-64 md:h-auto min-h-[250px] md:min-h-[300px] w-full bg-stone-200 rounded-lg overflow-hidden relative">
             <img 
               src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2940&auto=format&fit=crop"
               alt="Map placeholder"
               className="w-full h-full object-cover opacity-80"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-white text-tennis-green px-6 py-3 rounded-full shadow-lg font-semibold hover:scale-105 transition-transform text-sm md:text-base"
                >
                  View on Google Maps
                </a>
             </div>
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