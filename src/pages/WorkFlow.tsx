import React, { useState } from 'react';

const WorkFlow: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);

  // Open and close modal
  const openModal = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setCurrentImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      
      {/* Top Card with headline and paragraph */}
      <div className="relative transform -skew-x-6 bg-[#96AF98] bg-opacity-60 text-white rounded-3xl p-10 w-full max-w-5xl mb-12">
        
        {/* Inner content that is straight */}
        <div className="transform skew-x-6">
          <h1 className="text-4xl font-bold mb-6 font-madimi">It is autonomous!</h1>
          <p className="text-lg font-mplus">
            FloraBot is capable of autonomously following paths between nursery beds. This innovative solution allows farmers and nursery managers to delegate repetitive tasks to FloraBot, freeing up their time to focus on strategic activities.
          </p>
        </div>

        <div className="flex justify-between w-full max-w-6xl transform skew-x-6 mt-12"> 
          {/* Left Card (YouTube video) */}
          <div className='pt-20 w-1/2 mr-4 relative'>
            <div className="bg-white bg-opacity-20 rounded-3xl w-full">
              <div className="p-4">
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
            </div>
          </div>

          {/* Right Card (Images) */}
          <div className='pb-20 w-1/2 ml-4 relative'>
            <div className="bg-white bg-opacity-20 rounded-3xl w-full">
              <div className="p-4">
                <div className="mb-4">
                  <div
                    className="relative cursor-pointer mb-4"
                    onClick={() => openModal('imgs/Path_Planning_1.png')}
                    title="Click to view image"
                  >
                    <img
                      src="imgs/Path_Planning_1.png"
                      alt="Wide 1"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white text-lg font-bold">Click to view image</span>
                    </div>
                  </div>

                  <div
                    className="relative cursor-pointer"
                    onClick={() => openModal('imgs/Path_Planning_2.png')}
                    title="Click to view image"
                  >
                    <img
                      src="imgs/Path_Planning_2.png"
                      alt="Wide 2"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                      <span className="text-white text-lg font-bold">Click to view image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for viewing image */}
      {isModalOpen && currentImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-4xl w-full">
            <button
              className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
              onClick={closeModal}
            >
              ✖
            </button>
            <img
              src={currentImage}
              alt="Full view"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkFlow;
