import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30'>
          {/* Top area: Blocks */}
          <div className='grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11'>
            {/* 1st block */}
            <div className='col-span-12 lg:col-span-4'>
              <div className='box-border border-b-4 border-blue-500 p-8 bg-gray-200 text-black-500 text-center rounded-lg xl:w-80 mx-auto'>
                <h3 className='font-bold text-2xl mb-4'>Codevo Technologies</h3>
                <div className='text-md font-medium text-black-500'>
                  <h5>607, Q Block</h5>
                  <p>Johar town</p>
                  <p>Lahore,</p>
                  <p>Pakistan.</p>
                </div>
              </div>
            </div>

            {/* 2nd block */}
            <div className='col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto'>
              <h6 className='text-[#0052D4] text-xl font-bold mb-4'>LINKS</h6>
              <ul className='text-md'>
                <li className='mb-2'>
                  <HashLink
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    About
                  </HashLink>
                </li>
                <li className='mb-2'>
                  <HashLink
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    Services
                  </HashLink>
                </li>
                <li className='mb-2'>
                  <HashLink
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className='col-span-6 md:col-span-6 lg:col-span-4 mx-auto'>
              <h6 className='text-[#0052D4] text-xl font-bold mb-4'>
                OUR SERVICES
              </h6>
              <ul className='text-md'>
                <li className='mb-2'>
                  <Link
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    Web Development
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    Web Designing
                  </Link>
                </li>
                <li className='mb-2'>
                  <Link
                    to='#'
                    className='text-[#0052D4] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out'
                  >
                    General IT Consultations
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className='col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase text-blue-500'>
              <div className='text-xl mb-6'>Social Media Links.</div>

              <div className='text-md font-medium mb-6'>
                Follow us on social media.
              </div>
              <div className='mx-auto text-center mt-2'>
                <ul className='flex justify-center mb-4 md:mb-0'>
                  <li>
                    <a
                      href='https://www.linkedin.com/company/codevo-technologies/'
                      target='_blank'
                      class='flex justify-center items-center text-blue-500 hover:text-black-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                      aria-label='LinkedIn'
                    >
                      <svg
                        class='w-8 h-8 fill-current'
                        viewBox='0 0 24 30'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M20.53 20.53h-3.47V14.8c0-1.31-.02-3.01-1.83-3.01-1.84 0-2.12 1.44-2.12 2.94v5.8H9.47V8.71h3.28v1.56h.05c.46-.87 1.57-1.79 3.23-1.79 3.45 0 4.08 2.27 4.08 5.23v6.82zM4.22 8.71h3.28v11.82H4.22z' />
                      </svg>
                    </a>
                  </li>
                  <li className='ml-4'>
                    <a
                      href='https://www.facebook.com/codevotechnologies/'
                      target='_blank'
                      class='flex justify-center items-center text-blue-500 hover:text-black-500 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out'
                      aria-label='Facebook'
                    >
                      <svg
                        className='w-8 h-8 fill-current'
                        viewBox='0 0 32 32'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z' />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex flex-wrap items-center md:justify-between justify-center mx-auto px-4'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center py-2'>
              <div className='text-sm text-gray-200 font-semibold py-1'>
                Copyright &copy; {new Date().getFullYear()}
                {'  '}
                <HashLink to='#' className=' hover:text-gray-900'>
                  Molad e Konsult
                </HashLink>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer
