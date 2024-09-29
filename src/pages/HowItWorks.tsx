import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Open modal with selected image
  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-r from-[#000000] to-transparent">
      
      {/* Page Title */}
      <div className="w-full text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 font-madimi text-white">How It Works</h1>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-6xl space-y-16">

        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* YouTube Video */}
          <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Realtime Analysis */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-madimi text-white">Realtime Analysis</h2>
            <p className="text-lg font-mplus text-white">
              Our system uses video-based tracking for plant counting and assessment in real-time. Segmentation algorithms monitor plants and precisely count them in dense nursery settings, reducing manual errors and enhancing productivity.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Stitching Based Analysis */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-madimi text-white">Image Stitching Based Analysis</h2>
            <p className="text-lg font-mplus text-white">
              Our image stitching technique combines multiple camera views to create a complete panorama of nursery beds, allowing accurate plant counting and quality assessment with minimal human intervention.
            </p>
          </div>

          {/* Four Large Images Side by Side */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['imgs/stitched1.jpg', 'imgs/stitched2.jpg', 'imgs/stitched3.jpg', 'imgs/stitched4.jpg'].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Stitched ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg cursor-pointer transition transform hover:scale-105"
                onClick={() => openModal(img)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {isModalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full p-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="overflow-auto max-h-screen">
              <img
                src={currentImage}
                alt="Expanded view"
                className="w-full h-auto rounded-lg shadow-lg object-contain cursor-zoom-in hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
