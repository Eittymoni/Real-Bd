import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import RealEstateHeader from './component/RealEstateHeader'
import PropertyListing from './component/PropertyListing'
import RealEstateServices from './component/RealEstateServices'
import PropertyShowcase from './component/PropertyShowcase'
import TestimonialSlider from './component/TestimonialSlider'
import Footer from './component/footer'

const App = () => {
  return (
    <div className='font-red'>
      <Navbar/>
      <HeroSection/>
      <RealEstateHeader/>
      <PropertyListing/>
      <RealEstateServices/>
      <PropertyShowcase/>
      <TestimonialSlider/>
      <Footer/>
    </div>
  )
}

export default App
