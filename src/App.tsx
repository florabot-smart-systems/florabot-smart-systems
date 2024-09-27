import React from 'react';
import HomePage from './pages/Home';
import ProblemStatement from './pages/ProblemStatement';
import WorkFlow from './pages/WorkFlow';
import HowItWorks from './pages/HowItWorks';
import QualityAssessment from './pages/QualityAssessment';
import Review from './pages/Review';
import TheTeam from './pages/Team';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* You can add navigation or render both pages sequentially */}
      <HomePage />
      <ProblemStatement />
      <WorkFlow/>
      <HowItWorks/>
      <QualityAssessment/>
      <Review/>
      <TheTeam/>
    </div>
  );
};

export default App;
