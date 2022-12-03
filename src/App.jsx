//rafec -> short
import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonial from './components/testimonials/Testimonials'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experiance />
      <Services/>
      <Portfolio />
      <Testimonial />
      <Footer/>
    </div>
  )
}

export default App