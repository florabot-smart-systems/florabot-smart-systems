import React from 'react';

const Review: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto p-8 bg-[#C0E1C7] bg-opacity-40 text-white">

      {/* Section Title */}
      <div className="w-full text-center mb-12 relative z-10">
        <h1 className="text-5xl font-bold mb-6 font-madimi">Ag Partner Review</h1>
      </div>

      {/* Reviewer Info with Image */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-white bg-opacity-10 rounded-3xl p-8 mb-12 shadow-lg">
        
        {/* Reviewer Image */}
        <div className="w-full h-full flex justify-center md:justify-start">
          <img
            src="imgs/Jeremy_headshot.jpg"
            alt="Dr. Jeremy Pickens"
            className="rounded-full w-40 h-40 object-cover shadow-lg"
          />
        </div>
        
        {/* Reviewer Details */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-4 font-madimi text-white">Dr. Jeremy Pickens</h2>
          <p className="text-lg font-mplus text-gray-300">
            <strong>Assistant Extension Professor</strong><br />
            <strong>Specialty:</strong> Ornamental Nurseries<br />
            <strong>Partnership Capacity:</strong> Testing partner
          </p>
        </div>
      </div>

      {/* Review Text */}
      <div className="relative z-10 bg-white bg-opacity-10 rounded-3xl p-8 shadow-lg">
        <p className="text-lg font-mplus text-gray-300">
          Florabot offers an innovative solution to address several challenges we face in the nursery industry. By automating plant counting, it eliminates the issue of inaccurate counts, providing consistent results. Florabot streamlines plant quality assessment by utilizing imaging and analysis, ensuring that every plant meets our quality standards without the need for manual inspection. The automation also addresses labor shortages by reducing the dependency on human labor, allowing us to operate efficiently with fewer workers. In terms of labor costs, Florabot helps mitigate the impact of rising wages by automating repetitive tasks, lowering overall expenses. Furthermore, by reducing the need for physically demanding tasks, Florabot has the capability to promote better labor health, minimizing the risk of injury and strain for our workforce.
        </p>
      </div>
    </div>
  );
};

export default Review;
