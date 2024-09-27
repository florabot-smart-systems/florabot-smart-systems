import React from 'react';
import FlorabotLogo from '../components/Logo';
import FlorabotImage from '../components/MainImage';
import FlorabotDescription from '../components/MainDescription';
import ExploreButton from '../components/ExploreButton';

const Florabot: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start px-20 pt-20 pb-32 bg-white bg-opacity-0 max-md:px-5 max-md:pb-24">
      <section className="flex overflow-hidden flex-col items-start px-16 pt-12 max-w-full bg-green-100 rounded-[60px] w-[1223px] max-md:pl-5">
        <div className="overflow-hidden z-10 px-16 pt-16 pb-40 -mr-16 mb-0 bg-white bg-opacity-70 rounded-[60px] max-md:px-5 max-md:pb-24 max-md:mb-2.5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start text-8xl text-black whitespace-nowrap max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                <FlorabotLogo src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d1b3129ba04ff919553f46b35d50bb8f06c9fa5def1c74cb1ec1af368e341b?placeholderIfAbsent=true&apiKey=d1665f86f50647f69b8c26e38ccce489" alt="Florabot logo" />
                <h1 className="mt-0 max-md:text-4xl">Florabot</h1>
                <FlorabotImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/44929976206b876edd2c79e2e281bcacf10a4687b63d6e689a35a228c509f90b?placeholderIfAbsent=true&apiKey=d1665f86f50647f69b8c26e38ccce489" alt="Florabot in action" />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
              <FlorabotDescription
                title="An automated unmanned path following ground robot for plant counting and quality assessment"
                description="Ornamental Nursery has hundreds of thousands of plants in a single nursery, and in a single nursery, hundreds of different varieties of plants can be found. It is difficult to manage these ornamental plants and keep track of them. Their count is essential, especially in the selling season, and their quality has to be estimated sidewise continuously. Moreover, the impending labor shortage and higher wages, ultimately lead to higher plant prices and that, in turn, impacts the market."
              />
              <ExploreButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Florabot;