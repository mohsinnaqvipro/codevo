import React from "react";

const Portfolioes = ({ Portfolio }) => {
  const { name, description, technology, image } = Portfolio;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 h-auto min-h-[400px] mb-10">
        <div className="w-full bg-white p-4 md:p-8 my-4 md:my-0 md:px-12 lg:w-1/2 lg:pr-20 mr-auto rounded-2xl shadow-2xl">
          <h1 className="font-bold text-center lg:text-left text-black-500 uppercase text-2xl md:text-3xl mb-4">
            {name}
          </h1>
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
            {description}
          </p>
          <h1 className="text-xl font-semibold text-[#3d5467] font-mono">
            {technology}
          </h1>
        </div>

        <div className="w-full bg-white p-4 md:p-8 my-4 md:my-0 md:px-12 lg:w-1/2 lg:pl-20 mr-auto rounded-2xl shadow-2xl">
          <img src={image} alt="pic" className="max-w-full" />
        </div>
      </div>
    </>
  );
};

export default Portfolioes;
