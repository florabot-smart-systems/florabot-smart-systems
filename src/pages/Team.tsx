import React from 'react';

const teamMembers = [
  {
    name: "Hamid Habib Syed",
    role: "Graduate Research Assistant",
    email: "hhs0015@auburn.edu",
    linkedin: "https://www.linkedin.com/in/hamid-habib-syed-74004815a/",
    photo: "imgs/hamid.jpeg",
  },
  {
    name: "Mohtasim Hadi Rafi",
    role: "Graduate Research Assistant",
    email: "mzr0167@auburn.edu",
    linkedin: "https://www.linkedin.com/in/mohtasimhadi/",
    photo: "imgs/mohtasim.png",
  },
  {
    name: "Faraz Ahmed",
    role: "Graduate Research Assistant",
    email: "fza0070@auburn.edu",
    linkedin: "https://www.linkedin.com/in/mfaraz-ahmad/",
    photo: "imgs/faraz.jpeg",
  },
  {
    name: "Mesbahul Maruf",
    role: "Graduate Research Assistant",
    email: "mzm0411@auburn.edu",
    linkedin: "https://www.linkedin.com/in/mesbah-maruf/",
    photo: "imgs/maruf.jpeg",
  },
  {
    name: "Carter Freeman",
    role: "Undergraduate Research Assistant",
    email: "cbf0037@auburn.edu",
    linkedin: "https://www.linkedin.com/in/carter-freeman-biosystem-engineering/",
    photo: "imgs/carter.jpg",
  },
];

const TheTeam: React.FC = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mt-16 mx-auto p-8 text-white">

      {/* Section Title */}
      <div className="w-full text-center mb-12 relative z-10">
        <h1 className="text-5xl font-bold mb-6 font-madimi">The Team</h1>
      </div>

      {/* Advisor Section */}
      <div className="relative z-10 flex flex-col items-center text-center bg-[#C0E1C7] bg-opacity-25 rounded-3xl p-10 mb-16 shadow-lg">
        <img
          src="imgs/rehman.jpg"
          alt="Dr. Tanzeel Rehman"
          className="rounded-full w-40 h-40 mb-6 object-cover shadow-lg border-4 border-white"
        />
        <h2 className="text-3xl font-bold font-madimi mb-2">Dr. Tanzeel Rehman</h2>
        <p className="text-lg font-mplus ">Assistant Professor, Biosystems Engineering</p>
        <p className="text-lg font-mplus ">Auburn University</p>
        <p className="text-lg font-mplus ">tur0001@auburn.edu</p>
      </div>

      {/* Team Members Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative z-10 bg-[#C0E1C7] bg-opacity-25 rounded-3xl p-8 shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-xl text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="rounded-full w-32 h-32 mx-auto mb-4 object-cover shadow-md"
            />
            <h3 className="text-2xl font-bold font-madimi mb-2">{member.name}</h3>
            <p className="text-lg font-mplus text-gray-300">{member.role}</p>
            <p className="text-md font-mplus text-gray-400">{member.email}</p>
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
