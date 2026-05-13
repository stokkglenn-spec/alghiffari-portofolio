import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Toast from './components/Toast'

function App() {
  const [loading, setLoading] = useState(true)
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = (message) => setToast({ show: true, message })
  const hideToast = () => setToast(t => ({ ...t, show: false }))

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' })
  }, [])

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Toast message={toast.message} show={toast.show} onHide={hideToast} />
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div className={`dark transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-[#0f0505] min-h-screen relative">
          <Particles />
          <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Portfolio />
            <Certificates />
            <Experience />
            <Contact showToast={showToast} />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
