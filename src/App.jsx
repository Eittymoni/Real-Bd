import React from 'react'
import Navbar from './component/Navbar'
import HeroSection from './component/HeroSection'
import RealEstateHeader from './component/RealEstateHeader'
import PropertyListing from './component/PropertyListing'

const App = () => {
  return (
    <div className='font-red'>
      <Navbar/>
      <HeroSection/>
      <RealEstateHeader/>
      <PropertyListing/>
    </div>
  )
}

export default App
