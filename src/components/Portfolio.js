import React from "react";
import NavBar from "./Navbar/NavBar";
import { profileData } from "../utilities/constants";
import Portfolioes from "./Portfolioes";


const Portfolio = () => {
  
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200">
        <div
          className="container mx-auto my-8 px-4 lg:px-20"
          data-aos="zoom-in"
        >
          {profileData.map((Portfolio) => (
            <Portfolioes Portfolio={Portfolio} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
