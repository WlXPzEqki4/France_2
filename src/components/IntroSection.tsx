
// import React from "react";
// import { ChevronDown } from "lucide-react";

// export const IntroSection: React.FC = () => {
//   const scrollToContent = () => {
//     const firstSection = document.getElementById("political-diplomatic");
//     if (firstSection) {
//       firstSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
//       {/* Background pattern */}
//       <div className="absolute inset-0 opacity-5 pointer-events-none">
//         <div className="absolute top-0 left-0 w-1/3 h-screen bg-uae/10"></div>
//         <div className="absolute top-0 right-0 w-1/3 h-screen bg-france/10"></div>
//       </div>

//       <div className="text-center max-w-5xl mx-auto animate-fade-in w-full px-4">
//       <div className="inline-flex items-center mb-6">
//         <span className="h-px w-8 bg-uae"></span>
//         <span className="px-3 py-1 text-xs font-medium bg-white/80 rounded-full mx-3">2019–2025</span>
//         <span className="h-px w-8 bg-uae"></span>
//       </div>
        
//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
//           UAE–France Relations
//         </h1>
        
//         <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
//           An interactive analysis of the diplomatic, economic, and strategic relationship 
//           between the United Arab Emirates and France over the past five years.
//         </p>
        
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
//           <button 
//             onClick={scrollToContent}
//             className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-dark transition-all duration-300 hover-lift font-medium"
//           >
//             Explore the Analysis
//           </button>
//           <a 
//             href="#conclusion"
//             className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift font-medium"
//           >
//             Jump to Conclusion
//           </a>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
//         <button 
//           onClick={scrollToContent}
//           className="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors"
//           aria-label="Scroll down"
//         >
//           <span className="text-sm mb-2">Scroll to begin</span>
//           <ChevronDown size={24} />
//         </button>
//       </div>
//     </section>
//   );
// };







import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import backgroundImage from "/src/assets/images/uae-france-background.png";


export const IntroSection = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      const opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.6));
      setScrollOpacity(opacity);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const firstSection = document.getElementById("political-diplomatic");
    if (firstSection) {
      firstSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20">
      {/* Background image with dynamic opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-200"
        style={{
          // backgroundImage: "url('/src/assets/images/uae-france-background.png')",
          backgroundImage: `url(${backgroundImage})`,
          opacity: scrollOpacity,
          filter: "opacity(0.75)" // Added filter to make image slightly opaque from the start

        }}
      />

      {/* Image attribution in pill shape */}
      <div 
        className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-gray-700/30 text-gray-500 text-xs"
        style={{ opacity: 1 }} // Slightly faded attribution
      >
        Photo: President Sheikh Mohammad Bin Zayed meets French President Emmanuel Macron on 11 May 2023 during an official visit to Paris.
      </div>


      <div className="text-center max-w-5xl mx-auto animate-fade-in w-full px-4 relative z-10">
        <div className="inline-flex items-center mb-6">
          <span className="h-px w-8 bg-uae"></span>
          <span className="px-3 py-1 text-xs font-medium bg-white/80 rounded-full mx-3">2019–2025</span>
          <span className="h-px w-8 bg-uae"></span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
          UAE–France Relations
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          An interactive analysis of the diplomatic, economic, and strategic relationship 
          between the United Arab Emirates and France over the past five years.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={scrollToContent}
            className="px-6 py-3 bg-navy text-white rounded-lg hover:bg-navy-dark transition-all duration-300 hover-lift font-medium"
          >
            Explore the Analysis
          </button>
          
          <a
            href="#conclusion"
            className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 hover-lift font-medium"
          >
            Jump to Conclusion
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <button
          onClick={scrollToContent}
          className="flex flex-col items-center text-gray-500 hover:text-gray-800 transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll to begin</span>
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};