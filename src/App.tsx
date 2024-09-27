import React from 'react';
import HomePage from './pages/Home';
import ProblemStatement from './pages/ProblemStatement';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* You can add navigation or render both pages sequentially */}
      <HomePage />
      <ProblemStatement />
    </div>
  );
};

export default App;
