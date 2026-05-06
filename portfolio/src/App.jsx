import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <div className="dark">
      <div className="bg-[#0f0505] min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
