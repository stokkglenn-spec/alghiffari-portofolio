import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ['Aspiring Software Engineer', 'Network Enthusiast', 'Web Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      {/* Rainbow background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-600/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div data-aos="fade-up">
          <p className="text-[#7aa3cc] text-sm font-body mb-3 tracking-widest uppercase">
            Hello, I'm
          </p>
          <h1 className="font-heading font-black text-5xl md:text-7xl leading-none mb-2">
            <span className="text-[#e0f0ff]">Maulana</span><br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Al-Ghiffari
            </span>
          </h1>
          <div className="h-8 mt-4 mb-6">
            <span className="text-[#7aa3cc] text-lg font-body">
              <span ref={typedRef}></span>
            </span>
          </div>``
          <p className="text-[#7aa3cc] font-body text-base leading-relaxed max-w-md mb-8">
            A front-end focused web developer with a strong passion for crafting clean,
            user-friendly interfaces. Driven by curiosity and a love for technology,
            I'm on a journey to grow into a well-rounded software engineer — one line
            of code at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 border border-[#60a5fa] text-[#60a5fa] font-body text-sm rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white hover:border-transparent transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-[#1a3a5c] text-[#7aa3cc] font-body text-sm rounded hover:border-[#60a5fa] hover:text-[#60a5fa] transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Photo */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl border border-[#1a3a5c] bg-[#0a1628] overflow-hidden">
              <img
                src="/photo.jpg"
                alt="Maulana Al-Ghiffari"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Rainbow border glow */}
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10 blur-sm"></div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-blue-500/30 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
