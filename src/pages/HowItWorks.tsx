import React, { useState } from 'react';

const HowItWorks: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1); // State to manage zoom level

  // Open modal with selected image
  const openModal = (image: string) => {
    setCurrentImage(image);
    setIsModalOpen(true);
    setZoomLevel(1); // Reset zoom on open
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
    setZoomLevel(1); // Reset zoom on close
  };

  // Toggle zoom state with multiple levels
  const handleZoom = () => {
    setZoomLevel(prevZoom => (prevZoom >= 3 ? 1 : prevZoom + 0.5)); // Cycles zoom levels: 1x, 1.5x, 2x, 2.5x, 3x
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
        <div className="bg-gradient-to-r from-[#C0E1C7] to-transparent p-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* YouTube Video */}
          <div className="p-4">
            <iframe
              width="100%"
              height="300"
              src="https://www.youtube.com/embed/Nc7T112d3jg?si=Mcdlf6X_pu4496Xh"
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
        <div className="bg-gradient-to-l from-[#C0E1C7] to-transparent p-5 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image Stitching Based Analysis */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold font-madimi text-white">Image Stitching Based Analysis</h2>
            <p className="text-lg font-mplus text-white">
              Our image stitching technique combines multiple camera views to create a complete panorama of nursery beds, allowing accurate plant counting and quality assessment with minimal human intervention.
            </p>
          </div>

          {/* Two Large Images Covering Right Half */}
          <div className="grid grid-cols-2 gap-4">
            {['imgs/stitched3.jpg', 'imgs/stitched4.jpg'].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Stitched ${index + 1}`}
                className="w-full h-80 object-cover cursor-pointer transition transform hover:scale-105"
                onClick={() => openModal(img)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal with Multiple Zoom Levels */}
      {isModalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          {/* Modal Background */}
          <div className="relative max-w-7xl w-full p-4 flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50 bg-gray-800 p-2 rounded-full hover:bg-gray-600"
              onClick={closeModal}
            >
              &times;
            </button>
            {/* Fixed Size Image with Zoom Levels */}
            <div className="overflow-hidden flex items-center justify-center">
              <img
                src={currentImage}
                alt="Expanded view"
                className={`rounded-lg shadow-lg transition-transform duration-300 ease-in-out`}
                style={{
                  transform: `scale(${zoomLevel})`,
                  cursor: zoomLevel < 3 ? 'zoom-in' : 'zoom-out', // Change cursor based on zoom level
                  maxWidth: '90vw',
                  maxHeight: '80vh',
                }}
                onClick={handleZoom}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorks;
