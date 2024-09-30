import React, { useState } from 'react';

const QualityAssessment: React.FC = () => {
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
    <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto p-8">
      {/* Section Title */}
      <div className="w-full text-center mb-12 relative z-10">
        <h2 className="text-5xl font-bold mb-6 font-madimi text-white">Quality Assessment</h2>
      </div>

      {/* First Row: Gradient background with content */}
      <div className="relative z-10 mb-12">
        <div className="bg-gradient-to-r from-[#C0E1C7] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Image and Text */}
          <div className="space-y-6 bg-white p-4 rounded-lg relative cursor-pointer" onClick={() => openModal('imgs/QualityAssessmentCombined.png')}>
            <img
              src="imgs/QualityAssessmentCombined.png"
              alt="Quality Assessment"
              className="w-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-bold">Click to view image</span>
            </div>
            <p className="text-lg font-mplus">
              The SHAP plots for test data indicate that Area and Perimeter are the most influential features, followed by Circularity and Eccentricity. This suggests that canopy size and shape are critical factors in determining the model’s output. The order of importance is consistent between the tests (Area &gt; Perimeter &gt; Circularity &gt; Eccentricity).
            </p>
          </div>

          {/* Right Column: Rounded Card with Paragraph */}
          <div className="p-6 h-full flex items-center justify-center">
            <p className="text-2xl font-mplus text-white">
              The general pattern of feature importance remains consistent, indicating that models for test data rely heavily on canopy size and shape for predicting plant ratings.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row: Images and Ratings */}
      <div className="relative z-10 mb-12">
        <div className="bg-gradient-to-r from-[#C0E1C7] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Two Images */}
          <div className="space-y-4">
            <div className="relative cursor-pointer" onClick={() => openModal('imgs/Shapley_Feature_contrib.png')}>
              <img
                src="imgs/Shapley_Feature_contrib.png"
                alt="Rating 1"
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-bold">Click to view image</span>
              </div>
            </div>
            <div className="relative cursor-pointer" onClick={() => openModal('imgs/Shapley_Impact.png')}>
              <img
                src="imgs/Shapley_Impact.png"
                alt="Rating 2"
                className="w-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-lg font-bold">Click to view image</span>
              </div>
            </div>
          </div>

          {/* Right Column: Ratings Description */}
          <div className="h-full flex flex-col items-center justify-center space-y-6 text-gray-200 font-mplus">
            <div className="text-center">
              <p><strong>Rating 1</strong></p>
              <p>Grade A – Marketable plants: 60-100% coverage</p>
              <p><em>Canopy extends beyond pot evenly and canopy is full</em></p>
            </div>
            <div className="text-center">
              <p><strong>Rating 2</strong></p>
              <p>Grade B – Marketable plants: 30-60% coverage</p>
              <p><em>Canopy is not even but is full or undersized</em></p>
            </div>
            <div className="text-center">
              <p><strong>Rating 3</strong></p>
              <p>Grade C – Marketable plants: 0-30% coverage</p>
              <p><em>Canopy is not full or even and plant is not marketable</em></p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Geometric Parameters vs Rating */}
      <div className="relative z-10">
        <div className="bg-gradient-to-l from-[#C0E1C7] rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Geometric Parameters Description */}
          <div className="space-y-6 flex flex-col items-center justify-center">
            <h3 className="text-3xl font-bold font-madimi text-white text-left">Geometric parameters vs Rating</h3>
            <p className="text-lg font-mplus text-gray-200 text-left">
              Marketable plants (Grade A) have larger areas and perimeters, suggesting fuller and more evenly distributed canopies. Their eccentricity is lower, indicating a more symmetric and circular appearance. Non-marketable plants (Grade C) have smaller areas and perimeters, with higher eccentricity, reflecting uneven or incomplete canopies. The geometric parameters align with marketability criteria, where size and symmetry are key indicators of a higher quality, marketable plant.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="space-y-6 relative cursor-pointer" onClick={() => openModal('imgs/GeometricParam_vs_Rating.png')}>
            <img
              src="imgs/GeometricParam_vs_Rating.png"
              alt="Geometric vs Rating"
              className="w-full object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white text-lg font-bold">Click to view image</span>
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

export default QualityAssessment;
