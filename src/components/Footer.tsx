import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-3 text-white bg-gradient-to-r from-[#C0E1C7] to-transparent shadow-[0_-2px_5px_rgba(0,0,0,0.1)] text-left rounded-lg">
      {/* First Column: Logo */}
      <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 flex-grow md:flex-grow-0 md:basis-1/3">
        <div className="mb-1">
          <img 
            src="imgs/logo.png" 
            alt="Smart Systems Lab Logo" 
            className="w-full max-w-[150px] rounded-lg" 
          />
        </div>
        <p className="text-sm mb-2">
          <a 
            href="https://www.auburn.edu/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:underline"
          >
            Auburn University
          </a>
          {' | '}
          <a 
            href="https://agriculture.auburn.edu/about/departments/biosystems-engineering/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-black hover:underline"
          >
            Department of Biosystems Engineering
          </a>
        </p>
        <p className="text-sm text-black">
          Dedicated to advancing smart technologies for sustainable solutions.
        </p>
      </div>
      {/* Middle Column: Information */}
      <div className="flex flex-col items-center md:items-start mb-2 md:mb-0 flex-grow md:flex-grow-0 md:basis-2/5">
        <h6 className="text-lg font-semibold mb-2">Smart Systems Lab</h6>
        <p className="text-sm mb-2">© 2024 Auburn University</p>
        <div className="flex items-center mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.362 12.362a4 4 0 100-5.657 4 4 0 000 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 9.879l2.121 2.122m2.122-2.122l-2.121 2.122M12 4.728V12m6.364 3.636l-1.415 1.414m-2.121-2.121l-4.95 4.95m-4.95-4.95l1.415-1.415m2.121 2.122l4.95-4.95" />
          </svg>
          <a 
            href="https://goo.gl/maps/7XQ9ZT3HyRoWph1A6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-1 text-white hover:underline"
          >
            Corley Building, Auburn University
          </a>
        </div>
      </div>
      {/* Third Column: Google Map */}
      <iframe
        title='Footer map' 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.781699646192!2d-85.4841919233418!3d32.60252769482567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888cf56b56ae0025%3A0x48e5271e7d93478b!2sCorley%20Building%2C%20Auburn%2C%20AL%2036830%2C%20USA!5e0!3m2!1sen!2sin!4v1625810192890!5m2!1sen!2sin"
        width="85%" 
        height="100" 
        allowFullScreen={false}
        loading="lazy"
        className="border-none rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.1)] max-w-full md:max-w-[300px] mt-2 md:mt-0 flex-grow md:flex-grow-0 md:basis-1/3"
      />
    </div>
  );
};

export default Footer;
