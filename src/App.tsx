import React from 'react';
import HomePage from './pages/Home';
import ProblemStatement from './pages/ProblemStatement';
import WorkFlow from './pages/WorkFlow';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* You can add navigation or render both pages sequentially */}
      <HomePage />
      <ProblemStatement />
      <WorkFlow/>
    </div>
  );
};

export default App;
