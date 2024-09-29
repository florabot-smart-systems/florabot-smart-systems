import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLightbulb, faCogs, faChartBar, faUserTie, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/Home';
import ProblemStatement from './pages/ProblemStatement';
import WorkFlow from './pages/WorkFlow';
import HowItWorks from './pages/HowItWorks';
import QualityAssessment from './pages/QualityAssessment';
import Review from './pages/Review';
import TheTeam from './pages/Team';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  const handleScroll = () => {
    const sections = ['home', 'problem-statement', 'workflow', 'how-it-works', 'quality-assessment', 'review', 'team'];
    const scrollPosition = window.scrollY + 100; // Adjust for highlighting

    const currentSection = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black min-h-screen relative">
      
      {/* Navigation Menu */}
      <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 z-50 bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 shadow-lg rounded-xl w-14 hover:w-44 p-2">
        <ul className="space-y-4 h-full flex flex-col items-center hover:items-start transition-all duration-300">
          <li className="w-full">
            <a href="#home" className={`flex items-center group transition ${activeSection === 'home' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faHome} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">Home</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#problem-statement" className={`flex items-center group transition ${activeSection === 'problem-statement' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faLightbulb} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">Problem</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#workflow" className={`flex items-center group transition ${activeSection === 'workflow' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faCogs} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">Workflow</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#how-it-works" className={`flex items-center group transition ${activeSection === 'how-it-works' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faChartBar} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">How It Works</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#quality-assessment" className={`flex items-center group transition ${activeSection === 'quality-assessment' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faUserTie} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">Quality</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#review" className={`flex items-center group transition ${activeSection === 'review' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faStar} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">Review</span>
            </a>
          </li>
          <li className="w-full">
            <a href="#team" className={`flex items-center group transition ${activeSection === 'team' ? 'text-green-400' : 'text-white'}`}>
              <FontAwesomeIcon icon={faUsers} className="w-6 h-6 mr-0 group-hover:mr-2 transition" />
              <span className="opacity-0 group-hover:opacity-100 group-hover:inline-block transition ml-2">The Team</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Sections with IDs for navigation */}
      <section id="home" className="relative">
        <HomePage />
      </section>
      <section id="problem-statement" className="relative">
        <ProblemStatement />
      </section>
      <section id="workflow" className="relative">
        <WorkFlow />
      </section>
      <section id="how-it-works" className="relative">
        <HowItWorks />
      </section>
      <section id="quality-assessment" className="relative">
        <QualityAssessment />
      </section>
      <section id="review" className="relative">
        <Review />
      </section>
      <section id="team" className="relative">
        <TheTeam />
      </section>
    </div>
  );
};

export default App;
