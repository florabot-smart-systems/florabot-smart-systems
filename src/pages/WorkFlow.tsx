import React from 'react';

const WorkFlow: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      
      {/* Top Card with headline and paragraph */}
      <div className="relative transform -skew-x-6 bg-[#96AF98] text-white rounded-3xl p-10 w-full max-w-5xl mb-12">
        
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
                <img
                  src="imgs/Path_Planning_1.png"
                  alt="Wide Image 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <img
                  src="imgs/Path_Planning_2.png"
                  alt="Wide Image 2"
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
