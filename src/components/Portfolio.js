import React from 'react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <>
      <div className='my-4 py-4' id='portfolio'>
        <h2 className='my-2 text-center text-3xl text-blue-500 uppercase font-bold'>
          Portfolio
        </h2>
        <div className='flex justify-center'>
          <div className='w-44 border-b-4 border-blue-500 mb-8'></div>
        </div>

        <div className='px-4' data-aos='fade-down' data-aos-delay='600'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
            <div className='bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max'>
              <div className='m-2 text-justify text-sm'>
                <h4 className='font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12'>
                  Business Management System
                </h4>
                <p className='text-md font-medium leading-5 h-auto md:h-50'>
                  Our Business Management System is a robust and easily scalable
                  system that streamlines business operations, increases
                  efficiency, and ultimately drives growth and profitability for
                  your business. With features like employee management, finance
                  control, and various modules to effectively oversee all
                  aspects of a business, all data is securely stored in the
                  cloud. This ensures easy accessibility from all devices and
                  locations, fostering seamless collaboration and informed
                  decision-making.
                </p>
                <p className='mt-3 text-sm'>
                  <span className='font-semibold'>Technology Stacks:</span>{' '}
                  React, Node.js, PostgreSQL, Ant Design, styled-components
                </p>
                <div className='flex justify-center my-4'>
                  <Link
                    to='/get-demo'
                    className='text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl'
                  >
                    Schedule Demo
                    <svg
                      className='w-4 h-4 ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className='bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3'>
              <div className='m-2 text-justify text-sm'>
                <h4 className='font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12'>
                  School Management Portal
                </h4>
                <p className='text-md font-medium leading-5 h-auto md:h-50'>
                  Our all encompassing School Management Portal is the only
                  solution needed for any institution. The School Management
                  Portal (SMP) is a tool that can help educational institutions
                  of all kinds manage their administrative tasks, automate
                  processes, and streamline communication between teachers,
                  students, parents, and administrators. The software can be
                  used to manage all aspects of school operations, including
                  student enrollment, attendance, grades, schedules, and more.
                </p>
                <p className='mt-3 text-sm'>
                  <span className='font-semibold'>Technology Stacks:</span>{' '}
                  Nextjs, NestJS, PostgreSQL, Material UI, styled-components
                </p>
                <div className='flex justify-center my-4'>
                  <Link
                    to='/get-demo'
                    className='text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl'
                  >
                    Schedule Demo
                    <svg
                      className='w-4 h-4 ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className='bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3'>
              <div className='m-2 text-justify text-sm'>
                <h4 className='font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12'>
                  Payroll Management System
                </h4>
                <p className='text-md font-medium leading-5 h-auto md:h-50'>
                  The Payroll Management System automates the process of
                  employee payments for businesses and organizations of
                  different sizes. It helps to ensure that your employees get
                  paid accurately and on time, while also reducing the time and
                  effort required to manage payroll manually, with this system
                  in place, you enjoy benefits such as: increased accuracy in
                  employee payments. It can also integrate into an existing
                  management system through well-structured APIs.
                </p>
                <p className='mt-3 text-sm'>
                  <span className='font-semibold'>Technology Stacks:</span>{' '}
                  React, Node.js, MongoDB, Tailwind CSS
                </p>
                <div className='flex justify-center my-4'>
                  <Link
                    to='/get-demo'
                    className='text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl'
                  >
                    Schedule Demo
                    <svg
                      className='w-4 h-4 ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className='bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3'>
              <div className='m-2 text-justify text-sm'>
                <h4 className='font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12'>
                  Event Management System
                </h4>
                <p className='text-md font-medium leading-5 h-auto md:h-50'>
                  Our event management system excels in efficiently managing a
                  wide range of event types, encompassing weddings, burials, and
                  various other occasions. Offering a customizable menu, it
                  empowers you to personalize the user experience, resulting in
                  unforgettable and distinctive events. With a track record of
                  successful implementations across diverse occasions, we
                  confidently assure you of a hassle-free event management
                  platform.
                </p>
                <p className='mt-3 text-sm'>
                  <span className='font-semibold'>Technology Stacks:</span>{' '}
                  Vue.js, Node.js, DynamoDB, Ant Design
                </p>
                <div className='flex justify-center my-4'>
                  <Link
                    to='/get-demo'
                    className='text-white bg-blue-500 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl'
                  >
                    Schedule Demo
                    <svg
                      className='w-4 h-4 ml-1'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio
