import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const typedRef = useRef(null)
  const typedInstance = useRef(null)

  useEffect(() => {
    if (typedInstance.current) typedInstance.current.destroy()
    typedInstance.current = new Typed(typedRef.current, {
      strings: t.hero.typed,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    })
    return () => typedInstance.current?.destroy()
  }, [t.hero.typed])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-800/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-red-500/10 text-8xl font-mono animate-pulse">&lt;/&gt;</div>
        <div className="absolute bottom-32 right-20 text-rose-500/10 text-6xl font-mono">{ }</div>
        <div className="absolute top-1/3 right-10 w-20 h-20 border-2 border-red-500/20 rounded-lg rotate-12" style={{animation: 'spin 20s linear infinite'}}></div>
        <div className="absolute bottom-1/4 left-20 w-16 h-16 border-2 border-rose-500/20 rounded-full"></div>
        <div className="absolute top-40 right-1/4 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-red-500/20 rounded-full"></div>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
        <div className="absolute bottom-1/3 right-0 w-40 h-px bg-gradient-to-l from-transparent via-rose-500/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <div data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-green-400 text-xs font-body font-medium">{t.hero.available}</span>
          </div>

          <p className="text-[#a87070] text-sm font-body mb-3 tracking-widest uppercase">{t.hero.greeting}</p>
          <h1 className="font-heading font-black text-5xl md:text-7xl leading-none mb-2">
            <span className="text-[#fef2f2]">Maulana</span><br />
            <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
              Al-Ghiffari
            </span>
          </h1>
          <div className="h-8 mt-4 mb-6">
            <span className="text-[#a87070] text-lg font-body">
              <span ref={typedRef}></span>
            </span>
          </div>
          <p className="text-[#a87070] font-body text-base leading-relaxed max-w-md mb-6">
            {t.hero.bio}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['HTML', 'CSS', 'JavaScript', 'IoT'].map(tech => (
              <span key={tech} className="px-3 py-1 bg-[#1a0808] border border-[#3d1515] text-[#a87070] text-xs font-body rounded-full hover:border-red-500/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-[#ef4444]">10+</p>
              <p className="text-xs text-[#a87070] font-body">{t.hero.stats.certs}</p>
            </div>
            <div className="text-center border-x border-[#3d1515]">
              <p className="text-2xl font-heading font-bold text-[#ef4444]">2</p>
              <p className="text-xs text-[#a87070] font-body">{t.hero.stats.projects}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-heading font-bold text-[#ef4444]">2024</p>
              <p className="text-xs text-[#a87070] font-body">{t.hero.stats.since}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#portfolio"
              className="px-6 py-3 border border-[#ef4444] text-[#ef4444] font-body text-sm rounded hover:bg-[#ef4444] hover:text-white transition-all duration-200">
              {t.hero.viewWork}
            </a>
            <a href="#contact"
              className="px-6 py-3 border border-[#3d1515] text-[#a87070] font-body text-sm rounded hover:border-[#ef4444] hover:text-[#ef4444] transition-all duration-200">
              {t.hero.contact}
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 mt-8">
            <a href="https://github.com/Maulan1" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1a0808] border border-[#3d1515] flex items-center justify-center text-[#a87070] hover:border-red-500/50 hover:text-[#ef4444] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/maulana-al-ghiffari-832495396" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1a0808] border border-[#3d1515] flex items-center justify-center text-[#a87070] hover:border-red-500/50 hover:text-[#ef4444] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://instagram.com/alghiffarii._" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-[#1a0808] border border-[#3d1515] flex items-center justify-center text-[#a87070] hover:border-red-500/50 hover:text-[#ef4444] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Photo */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-2xl border border-[#3d1515] bg-[#1a0808] overflow-hidden">
              <img src="/photo.jpg" alt="Maulana Al-Ghiffari" className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/10 -z-10 blur-sm"></div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-red-500/30 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#a87070] text-xs font-body">{t.hero.scroll}</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#ef4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
