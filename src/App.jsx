import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquee from './Components/Marquee.'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Featured from './Components/Featured'
import Card from './Components/Card'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Card/>
      <Footer/>
    </div>
  )
}

export default App