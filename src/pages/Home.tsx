import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* First large card with rounded corners and color #EAF6E4 */}
        <div className="bg-[#C0E1C7] rounded-3xl p-10 h-[600px]">
          {/* Placeholder content */}
        </div>

        {/* Second large card overlayed */}
        <div className="absolute top-8 left-6 bg-white bg-opacity-70 rounded-3xl p-10 h-[600px] w-full flex shadow-lg">
          {/* Left Column */}
          <div className="w-1/2 pr-8">
            {/* Logo */}
            <div className="mb-4">
              <img
                src="imgs/logo.png"
                alt="Logo"
                className="w-20 h-20"
              />
            </div>
            {/* Heading */}
            <h1 className="text-5xl font-bold mb-6 font-madimi">Florabot</h1>
            {/* Image */}
            <img
              src="imgs/main.png"
              alt="main"
              className="w-full h-56 object-cover rounded-lg"
            />
          </div>

          {/* Right Column */}
          <div className="w-1/2">
            {/* Small Headline */}
            <h2 className="text-2xl font-semibold mb-4 font-madimi">An automated unmanned path-following ground robot for plant counting and quality assessment</h2>
            {/* Paragraph */}
            <p className="text-gray-700 font-mplus">
              Ornamental Nursery has hundreds of thousands of plants in a single nursery, and in a single nursery, hundreds of different varieties of plants can be found. It is difficult to manage these ornamental plants and keep track of them. Their count is essential, especially in the selling season, and their quality has to be estimated sidewise continuously. Moreover, the impending labor shortage and higher wages, ultimately lead to higher plant prices and that, in turn, impacts the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
