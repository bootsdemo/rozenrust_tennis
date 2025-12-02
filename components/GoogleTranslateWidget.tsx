import React, { useEffect } from 'react';

// This component is responsible for loading the Google Translate Website Translator widget.
const GoogleTranslateWidget: React.FC = () => {
  useEffect(() => {
    const initFunctionName = 'googleTranslateElementInit';
    const scriptId = 'google-translate-script';

    // 1. Define the global initialization function required by Google's script.
    // This function will be called by the external script once it finishes loading.
    (window as any)[initFunctionName] = () => {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement(
          {
            // Site's original language (assuming English for content creation)
            pageLanguage: 'en', 
            // Languages offered in the dropdown (English and Dutch)
            includedLanguages: 'en,nl', 
            // Layout: use simple to keep it small
            layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE, 
            autoDisplay: false, 
          },
          'google_translate_element' // The ID of the container div below
        );
      }
    };

    // 2. Load the external Google Translate script only once.
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      // The script URL includes the callback function name defined above
      script.src = `//translate.google.com/translate_a/element.js?cb=${initFunctionName}`;
      script.id = scriptId;
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup: Remove the globally defined function when the component unmounts.
    return () => {
      if ((window as any)[initFunctionName]) {
        delete (window as any)[initFunctionName];
      }
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    // This div is the container where the Google Translate widget will be injected.
    <div 
      id="google_translate_element" 
      // Add minimal styling to prevent the widget from being hidden or collapsing
      style={{ minHeight: '20px', lineHeight: '20px' }}
    />
  );
};

export default GoogleTranslateWidget;
