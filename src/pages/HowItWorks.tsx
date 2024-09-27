import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Page Title */}
        <div className="w-full text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 font-madimi">How it works?</h1>
        </div>

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Top Left: YouTube video */}
          <div className="bg-white bg-opacity-20 rounded-3xl p-6">
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="YouTube video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          {/* Top Right: Realtime Analysis */}
          <div>
            <h2 className="text-3xl font-bold mb-4 font-madimi">Realtime Analysis</h2>
            <p className="text-lg font-mplus">
              A video-based tracking system for plant counting and assessment utilizes segmentation algorithms to track and count plants in real-time. By continuously capturing video data, the system monitors plants and accurately identifies individual plants, ensuring precise counts even in dense nursery settings. In addition to counting, the system evaluates important quality parameters, providing a comprehensive overview of plant conditions. This automated approach eliminates manual errors, improves data accuracy, and allows for ongoing monitoring, helping managers make informed decisions and optimize nursery operations.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bottom Left: Image Stitching Based Analysis */}
          <div>
            <h2 className="text-3xl font-bold mb-4 font-madimi">Image Stitching Based Analysis</h2>
            <p className="text-lg font-mplus">
              A multi-camera system is deployed to capture panoramic images of the nursery beds using a feature-based image stitching technique, ensuring complete coverage of the entire bed. Plant counts are determined by tallying the masks generated through state-of-the-art instance segmentation algorithm, which accurately identify and separate individual plants. This automated process minimizes human errors associated with manual counting, ensuring reliable results. The system is capable of handling large-scale operations, reducing labor costs and increasing productivity.
            </p>
          </div>

          {/* Bottom Right: Four Large Images Side by Side */}
          <div className="bg-white bg-opacity-20 rounded-3xl p-6">
            <div className="grid grid-cols-4 gap-4">
              <img
                src="imgs/stitched1.jpg"
                alt="Long Image 1"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img
                src="imgs/stitched2.jpg"
                alt="Long Image 2"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img
                src="imgs/stitched3.jpg"
                alt="Long Image 3"
                className="w-full h-80 object-cover rounded-lg"
              />
              <img
                src="imgs/stitched4.jpg"
                alt="Long Image 4"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
