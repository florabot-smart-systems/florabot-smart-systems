import React, { useState, useEffect } from 'react';

const images = ['imgs/Problem_Statement_1.JPG', 'imgs/Problem_Statement_2.JPG', 'imgs/Problem_Statement_3.JPG'];

const ProblemStatement: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Image changing logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* Main skewed card */}
        <div className="relative transform -skew-y-12 bg-gradient-to-r from-[#C0E1C7] to-transparent p-10 h-[600px] w-full">
          
          {/* Inner content container without skew */}
          <div className="absolute inset-0 flex flex-row transform skew-y-12 p-8 h-full w-full">
            
            {/* Left Column */}
            <div className="w-1/2 pr-8 h-full">
              {/* Image changing card with 20% opacity */}
              <div className="bg-white bg-opacity-20 rounded-lg p-4 h-full flex items-center justify-center">
                <img
                  src={images[currentImage]}
                  alt="Rotating content"
                  className="w-full h-72 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="w-1/2 h-full">
              {/* Heading with Madimi font */}
              <h1 className="text-5xl font-bold text-white mb-6 font-madimi">
                The Problem Statement
              </h1>
              {/* Paragraph with M PLUS 2 font */}
              <p className="text-white text-lg font-mplus">
                Ornamental industry has the major issue of keeping track of plant
                counting and quality assessment. But this is laborious,
                time-consuming, and contributes to health problems of the
                laborers due to poor ergonomics. The nature of the job requires
                extensive manual labor and the industry faces a labor shortage
                with rising wages. Due to this, the ornamental worker feels
                overwhelmed and concerned about the sustainability of work and
                the industry’s future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;
