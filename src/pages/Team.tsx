import React from 'react';

const teamMembers = [
  {
    name: "Hamid Habib Syed",
    role: "Graduate Research Assistant",
    email: "hhs0015@auburn.edu",
    linkedin: "https://linkedin.com/in/hamid-habib-syed",
    photo: "imgs/hamid.jpeg",
  },
  {
    name: "Mohtasim Hadi Rafi",
    role: "Graduate Research Assistant",
    email: "mzr0167@auburn.edu",
    linkedin: "https://linkedin.com/in/mohtasim-hadi-rafi",
    photo: "imgs/mohtasim.png",
  },
  {
    name: "Faraz Ahmed",
    role: "Graduate Research Assistant",
    email: "fza0070@auburn.edu",
    linkedin: "https://linkedin.com/in/faraz-ahmed",
    photo: "imgs/faraz.jpeg",
  },
  {
    name: "Mesbahul Maruf",
    role: "Graduate Research Assistant",
    email: "mzm0411@auburn.edu",
    linkedin: "https://linkedin.com/in/mesbahul-maruf",
    photo: "imgs/maruf.jpeg",
  },
  {
    name: "Carter Freeman",
    role: "Undergraduate Research Assistant",
    email: "cbf0037@auburn.edu",
    linkedin: "https://linkedin.com/in/carter-freeman",
    photo: "imgs/carter.jpg",
  },
];

const TheTeam: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto p-8 bg-gray-900 text-white">

      {/* Section Title */}
      <div className="w-full text-center mb-12 relative z-10">
        <h1 className="text-5xl font-bold mb-6 font-madimi">The Team</h1>
      </div>

      {/* Advisor Section */}
      <div className="relative z-10 bg-white bg-opacity-10 rounded-3xl p-8 mb-12 shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4 font-madimi text-white">Dr. Tanzeel Rehman</h2>
        <p className="text-lg font-mplus text-gray-300">Assistant Professor, Biosystems Engineering</p>
        <p className="text-lg font-mplus text-gray-300">tur0001@auburn.edu</p>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative z-10 bg-white bg-opacity-10 rounded-3xl p-8 shadow-lg text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-lg"
            />
            <h3 className="text-xl font-bold font-madimi text-white mb-2">{member.name}</h3>
            <p className="text-lg font-mplus text-gray-300">{member.role}</p>
            <p className="text-lg font-mplus text-gray-300">{member.email}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
