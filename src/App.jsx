import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Selectedwork from './Components/Selectedwork'
import Ourprocess from './Components/Ourprocess'
import Tecnologies from './Components/Tecnologies'
import Clients from './Components/Clients'
import Faq from './Components/Faq'
import StartProject from './Components/StartProject'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Selectedwork/>
    <Ourprocess/>
    <Tecnologies/>
    <Clients/>
    <Faq/>
    <StartProject/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
