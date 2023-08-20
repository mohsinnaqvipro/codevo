import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'

const NavLinks = () => {
  return (
    <>
      <Scroll
        className='px-4 font-extrabold text-black-500 hover:text-blue-500'
        to='about'
        smooth={true}
        duration={1000}
        offset={-140}
      >
        About
      </Scroll>
      <Scroll
        className='px-4 font-extrabold text-black-500 hover:text-blue-500'
        to='services'
        smooth={true}
        duration={1000}
        offset={-70}
      >
        Services
      </Scroll>
      <Scroll
        className='px-4 font-extrabold text-black-500 hover:text-blue-500'
        to='portfolio'
        smooth={true}
        duration={1000}
        offset={-130}
      >
        Portfolio
      </Scroll>
      <Link
        className='px-4 font-extrabold text-black-500 hover:text-blue-500'
        smooth
        to='/contact'
      >
        Contact Us
      </Link>
      <Link
        className='text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl'
        smooth
        to='/get-demo'
      >
        Demo our products
      </Link>
    </>
  )
}

export default NavLinks
