import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// All pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import DemoProduct from './pages/DemoProduct'

import { useDocTitle } from './components/CustomHook'
import ScrollToTop from './components/ScrollToTop'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Intro from './components/Intro'

function App () {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic'
      })
    }

    window.addEventListener('load', () => {
      aos_init()
    })
  }, [])

  useDocTitle('Codevo')

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/get-demo' element={<DemoProduct />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<Intro />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
