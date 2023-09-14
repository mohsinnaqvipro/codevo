import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { getPathname } from "../../utilities/helper";

const NavLinks = () => {
  const { pathname } = window.location;
  const status = getPathname(pathname)
  return (
    <>
      {status ? (
        <Link
          className="px-4 font-extrabold text-black-500 hover:text-blue-500"
          smooth
          to="/"
        >
          About
        </Link>
      ) : (
        <Scroll
          className="px-4 font-extrabold text-black-500 hover:text-blue-500 cursor-pointer"
          to="about"
          smooth={true}
          duration={1000}
          offset={-140}
        >
          About
        </Scroll>
      )}
      {status ? (
        <Link
          className="px-4 font-extrabold text-black-500 hover:text-blue-500"
          smooth
          to="/"
        >
          Services
        </Link>
      ) : (
        <Scroll
          className="px-4 font-extrabold text-black-500 hover:text-blue-500 cursor-pointer"
          to="services"
          smooth={true}
          duration={1000}
          offset={-140}
        >
          Services
        </Scroll>
      )}
      <Link
        className="px-4 font-extrabold text-black-500 hover:text-blue-500"
        smooth
        to="/portfolio"
      >
        Portfolio
      </Link>
      <Link
        className="px-4 font-extrabold text-black-500 hover:text-blue-500"
        smooth
        to="/contact"
      >
        Contact Us
      </Link>
      <Link
        className="text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl"
        smooth
        to="/get-demo"
      >
        Demo our products
      </Link>
    </>
  );
};

export default NavLinks;
