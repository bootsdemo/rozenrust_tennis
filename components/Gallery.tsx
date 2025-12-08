import React from 'react';

// NOTE: This array is currently used to display placeholders.
// All external 'src' URLs have been removed as requested.
// When integrating Instagram, this array will be removed, and the
// content will be replaced with the Instagram embed code.
const galleryItems = [
    { alt: "Bright all weather court", caption: "Our newly resurfaced clay courts." },
    { alt: "Clubhouse patio with seating", caption: "Relaxing patio area overlooking the main courts." },
    { alt: "A tennis coach giving a lesson", caption: "Group lessons in progress on court 5." },
    { alt: "Tennis team celebrating a victory", caption: "Our successful Rozenrust Men's team!" },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-extrabold text-center mb-4 text-stone-800">
          Club Gallery
        </h2>
        <p className="text-xl text-center mb-16 text-stone-600 max-w-3xl mx-auto">
          Follow us on Instagram for the latest updates and photos from the club!
        </p>

        {/* *** INSTAGRAM EMBED AREA START ***
          
          When you have an Instagram feed widget or embed code from a third-party service 
          (like LightWidget, SnapWidget, or a custom API solution), you will replace the 
          JSX below (the grid of placeholder images) with that embed code.
          
          If the embed provides an HTML snippet (like a <div> with a script), you might 
          need to use dangerouslySetInnerHTML on a parent <div>, or use a React library 
          designed for social media feeds.
        */}
        
        {/* Current Placeholder Content (To be replaced by Instagram Feed) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl">
              {/* This div serves as a plain gray placeholder box instead of an image */}
              <div className="w-full h-56 bg-stone-200 flex items-center justify-center border-b border-stone-300 p-4">
                <p className="text-sm font-semibold text-stone-500 text-center">
                    Gallery Item Placeholder {index + 1}
                </p>
              </div>
              <div className="p-4">
                <p className="text-sm font-medium text-stone-700">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* *** INSTAGRAM EMBED AREA END ***
        */}
        
        {/* Optional: Add a link to your Instagram profile */}
        <div className="text-center mt-12">
            <a 
                href="YOUR_INSTAGRAM_PROFILE_LINK"
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
