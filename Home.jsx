import React from 'react'
import SectionOne from '../Home-components/SectionOne'
import SectionTwo from '../Home-components/SectionTwo'
import Footer from '../Home-components/Footer.jsx'
import Categories from '../Home-components/Categories.jsx'
import Navbar from '../Home-components/Navbar'

import'./Home.css'

function Home() {
  return (
    <div className='trnks'>
      <Navbar/>
      <SectionOne/> 
      <SectionTwo/>
      <Categories/>
      <Footer/> 
      
    </div>
  )
}

export default Home
