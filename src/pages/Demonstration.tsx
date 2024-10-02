import React from 'react';

const Demonstration: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      
      {/* Page Title */}
      <div className="relative transform skew-x-6 bg-[#C0E1C7] bg-opacity-60 text-white rounded-3xl p-10 w-full max-w-5xl mb-12">
        
        {/* Inner content that is straight */}
        <div className="transform -skew-x-6">
          <h1 className="text-4xl font-bold mb-6 font-madimi text-white">Video Demonstration</h1>
        </div>

        {/* Content Container */}
        <div className="flex justify-center w-full max-w-6xl transform -skew-x-6 mt-12">
          {/* Video Content */}
          <div className="w-full relative">
            <div className="bg-white bg-opacity-20 rounded-3xl p-8 w-full">
              {/* YouTube Video */}
              <div className="p-4">
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/ureWGHHNJK4?si=jtq3PDU5bmSqfvii"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Explanation */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold font-madimi text-white">Watch Our System in Action</h2>
                <p className="text-lg font-mplus text-white">
                  This video provides an in-depth overview of our plant tracking and quality assessment system. Learn how our technology leverages advanced segmentation techniques to count and assess plants in real-time, minimizing human error.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demonstration;
