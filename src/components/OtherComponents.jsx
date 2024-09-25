import React from 'react'
import Hero from './Heo/hero'
import Perform from './Perform/perform'
import Discover from './Discover/discover'
import Platform from './Platform/platform'
import Community from './Community/community'
import Latest from './Latest/latest'
import Started from './Started/started'
import Footer from './Footer/footer'

const OtherComponents = () => {
  return (
    <div className='otherComponentsContainer'>
      <Hero />
      <Perform />
      <Discover />
      <Platform />
      <Community />
      <Latest />
      <Started />
      <Footer />
    </div>
  )
}

export default OtherComponents