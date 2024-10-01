import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      {/* Main Container */}
      <div className="w-full max-w-7xl flex flex-col items-center space-y-12">

        {/* Hero Section with Emphasis on Image */}
        <div className="relative w-full">
          {/* Large Image */}
          <img
            src="imgs/main.png"
            alt="main"
            className="w-full max-h-[80vh] object-cover rounded-3xl shadow-2xl"
          />
          {/* Logo and Heading overlaying the image */}
          <div className="absolute top-[45%] flex items-center space-x-4 bg-white bg-opacity-40 w-full">
            {/* Logo */}
            <img
              src="imgs/logo.png"
              alt="Logo"
              className="h-20 sm:h-28"
            />
            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl font-black font-madimi drop-shadow-lg">
              Florabot
            </h1>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#C0E1C7] bg-opacity-20 rounded-3xl p-8 lg:p-16 w-full shadow-lg text-center lg:text-left text-white">
          {/* Headline */}
          <h2 className="text-3xl sm:text-3xl font-semibold mb-4 font-madimi">
            Automated Path-Following Ground Robot for Plant Counting and Quality Assessment
          </h2>
          {/* Paragraph */}
          <p className="text-lg sm:text-xl font-mplus">
          Ornamental nurseries contain hundreds of thousands of plants across various varieties, making their counting, quality assessment and continuous management challenging. Florabot offers a solution to address these issues by tackling labor shortages, optimizing costs, and ensuring high-quality standards in nurseries
          </p>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
