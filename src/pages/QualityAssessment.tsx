import React from 'react';

const QualityAssessment: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto p-8">
      {/* Section Title */}
      <div className="w-full text-center mb-12 relative z-10">
        <h2 className="text-5xl font-bold mb-6 font-madimi text-white">Quality Assessment</h2>
      </div>

      {/* First Row: Gradient background with content */}
      <div className="relative z-10 mb-12">
        <div className="bg-white bg-opacity-10 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Image and Text */}
          <div className="space-y-6 bg-white p-4 rounded-lg">
            <img
              src="imgs/QualityAssessmentCombined.png"
              alt="Quality Assessment"
              className="w-full object-cover rounded-lg"
            />
            <p className="text-lg font-mplus">
              The SHAP plots for test data indicate that Area and Perimeter are the most influential features, followed by Circularity and Eccentricity. This suggests that canopy size and shape are critical factors in determining the model’s output. The order of importance is consistent between the tests (Area &gt; Perimeter &gt; Circularity &gt; Eccentricity).
            </p>
          </div>

          {/* Right Column: Rounded Card with Paragraph */}
          <div className="p-6 shadow-lg">
            <p className="text-xl font-mplus text-gray-200">
              The general pattern of feature importance remains consistent, indicating that models for test data rely heavily on canopy size and shape for predicting plant ratings.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row: Images and Ratings */}
      <div className="relative z-10 mb-12">
        <div className="bg-white bg-opacity-10 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Two Images */}
          <div className="space-y-6">
            <img
              src="imgs/Shapley_Feature_contrib.png"
              alt="Rating 1"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src="imgs/Shapley_Impact.png"
              alt="Rating 2"
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Column: Ratings Description */}
          <div className="space-y-4 text-right text-gray-200 font-mplus">
            <div>
              <strong>Rating 1</strong><br />
              Grade A – Marketable plants: 60-100% coverage<br />
              <em>Canopy extends beyond pot evenly and canopy is full</em>
            </div>
            <div>
              <strong>Rating 2</strong><br />
              Grade B – Marketable plants: 30-60% coverage<br />
              <em>Canopy is not even but is full or undersized</em>
            </div>
            <div>
              <strong>Rating 3</strong><br />
              Grade C – Marketable plants: 0-30% coverage<br />
              <em>Canopy is not full or even and plant is not marketable</em>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row: Geometric Parameters vs Rating */}
      <div className="relative z-10">
        <div className="bg-white bg-opacity-10 rounded-3xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column: Geometric Parameters Description */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-madimi text-white">Geometric parameters vs Rating</h3>
            <p className="text-lg font-mplus text-gray-200">
              Marketable plants (Grade A) have larger areas and perimeters, suggesting fuller and more evenly distributed canopies. Their eccentricity is lower, indicating a more symmetric and circular appearance. Non-marketable plants (Grade C) have smaller areas and perimeters, with higher eccentricity, reflecting uneven or incomplete canopies. The geometric parameters align with marketability criteria, where size and symmetry are key indicators of a higher quality, marketable plant.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="space-y-6">
            <img
              src="imgs/GeometricParam_vs_Rating.png"
              alt="Geometric vs Rating"
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityAssessment;
