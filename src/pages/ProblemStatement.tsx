import React, { useState, useEffect } from 'react';

const images = ['imgs/Problem_Statement_1.JPG', 'imgs/Problem_Statement_2.JPG', 'imgs/Problem_Statement_3.JPG'];

const ProblemStatement: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Image changing logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* Main skewed card */}
        <div className="relative transform -skew-y-12 bg-gradient-to-r from-[#C0E1C7] to-transparent p-10 h-[600px] w-full rounded-full">
          {/* Inner content container without skew */}
          <div className="absolute inset-0 flex flex-row transform skew-y-12 p-8 h-full w-full">
            {/* Left Column */}
            <div className="w-3/4 pr-8 pt-[15%] h-full">
              {/* Image changing card with hover tooltip */}
              <div
                className="bg-white bg-opacity-20 p-4 rounded-lg flex items-center justify-center relative cursor-pointer"
                onClick={openModal}
                title="Click to view image"
              >
                <img
                  src={images[currentImage]}
                  alt="Rotating content"
                  className="w-full h-80 object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                  <span className="text-white text-lg font-bold">Click to view image</span>
                </div>
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
                The ornamental industry faces significant challenges in tracking plant counts and quality assessments, which are labor-intensive, time-consuming, and contribute to health issues among workers due to poor ergonomics. The work demands extensive manual labor, and the industry struggles with a labor shortage and rising wages, leaving workers feeling overwhelmed and concerned about the sustainability of their jobs and the industry’s future.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing image */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={images[currentImage]}
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProblemStatement;
