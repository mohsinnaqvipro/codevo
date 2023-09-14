
import React from "react";

const Portfolioes = ({ Portfolio }) => {
  const { name, description, technology, image } = Portfolio;

  return (
    <>
      <div className="flex space-x-9 h-[500px]">
        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl flex flex-col">
          <div>
            <h1 className="font-bold text-center lg:text-left text-black-500 uppercase text-2xl mb-6">
              {name}
            </h1>
            <p className="text-lg font-medium text-gray-700 mb-6">
              {description}
            </p>
          </div>
          <div className="mt-auto">
          <h1 className="text-xl font-semibold text-[#3d5467] font-mono">
              {technology}
            </h1>
          </div>
        </div>

        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl flex items-center justify-center">
          <img src={image} alt="pic" className="max-w-full h-auto" />
        </div>
      </div>
    </>
  );
};

export default Portfolioes;
