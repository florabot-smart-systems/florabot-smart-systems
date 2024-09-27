import React from 'react';

interface FlorabotDescriptionProps {
  title: string;
  description: string;
}

const FlorabotDescription: React.FC<FlorabotDescriptionProps> = ({ title, description }) => (
  <div className="flex flex-col mt-16 text-2xl text-black max-md:mt-10">
    <h2 className="z-10 -mt-2.5 mr-0">{title}</h2>
    <p className="mt-5 text-base">{description}</p>
  </div>
);

export default FlorabotDescription;