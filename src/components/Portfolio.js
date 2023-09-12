import React from 'react'
import Hero from './Hero'
import NavBar from './Navbar/NavBar'
import MyImage from '../images/demo.png'

const Portfolio = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24 bg-gray-200'>
        <div
          className='container mx-auto my-8 px-4 lg:px-20'
          data-aos='zoom-in'
        >
          <div className='flex space-x-9'>
            <div className='w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl flex flex-col'>
              <div>
                <h1 className='font-bold text-center lg:text-left text-black-500 uppercase text-2xl mb-6'>
                  Sparq
                </h1>
                <p className='text-lg font-medium text-gray-700 mb-6'>
                  A next-generation mobile application powered by AI that
                  enables users to operate using voice commands, including
                  account opening, utility bills payment, and business
                  transactions.
                </p>
              </div>
              <div className='mt-auto'>
                <h1 className='text-xl font-semibold text-[#3d5467]'>
                  Flutter
                </h1>
              </div>
            </div>

            <div className='w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-20 mr-auto rounded-2xl shadow-2xl flex items-center justify-center'>
              <img
                src={MyImage}
                alt='Picture Here'
                className='max-w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
