import React, { useEffect } from 'react';
// Corrected import path to ensure SectionId is resolvable within the components directory
import { SectionId } from './Navigation.tsx'; 

// NOTE: The placeholder 'galleryItems' array has been removed as it is replaced by the Instagram widget.

const Gallery: React.FC = () => {
  
  // 1. Script Loading Logic
  // This useEffect dynamically loads the Elfsight platform script only once.
  useEffect(() => {
    // Check if the script is already loaded to prevent duplicates
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      return;
    }

    // Create the script element
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Note: In a real-world production build, you'd ensure this script loads before React attempts to hydrate.
    // For this single-file React component, dynamic loading via useEffect is the simplest method.
  }, []);

  // 2. HTML Container for the Widget
  // This string holds the required HTML structure for the Elfsight widget.
  // The actual Instagram widget will render inside this div.
  const elfsightWidgetHtml = '<div class="elfsight-app-54ade070-15e7-4b65-8588-9489a157378b" data-elfsight-app-lazy></div>';

  return (
    // Ensure the ID matches the SectionId enum for navigation anchors
    <section id={SectionId.GALLERY} className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-extrabold text-center mb-4 text-stone-800">
          Club Gallery
        </h2>
        <p className="text-xl text-center mb-16 text-stone-600 max-w-3xl mx-auto">
          See the latest action! Follow us on Instagram for the latest updates and photos from the club!
        </p>

        {/* *** INSTAGRAM EMBED AREA START *** */}
        
        {/*
          The div below replaces the old placeholder grid.
          It uses dangerouslySetInnerHTML to inject the Elfsight widget's HTML container.
        */}
        <div 
          className="w-full mx-auto max-w-5xl"
          // Adjust the height and minimum height of the container to ensure the widget has space before it loads
          style={{ minHeight: '400px' }} 
          dangerouslySetInnerHTML={{ __html: elfsightWidgetHtml }}
        />
        
        {/* *** INSTAGRAM EMBED AREA END *** */}
        
        {/* Optional: Add a link to your Instagram profile */}
        <div className="text-center mt-12">
            <a 
                href="YOUR_INSTAGRAM_PROFILE_LINK" // Don't forget to update this link!
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-tennis-green hover:bg-tennis-clay transition duration-150 ease-in-out shadow-lg"
            >
                View our Profile on Instagram
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
