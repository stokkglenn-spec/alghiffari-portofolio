import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [time, setTime] = useState('')

  const navLinks = [
    { label: t.nav.home,         href: '#home' },
    { label: t.nav.about,        href: '#about' },
    { label: t.nav.skills,       href: '#skills' },
    { label: t.nav.portfolio,    href: '#portfolio' },
    { label: t.nav.certificates, href: '#certificates' },
    { label: t.nav.experience,   href: '#experience' },
    { label: t.nav.contact,      href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
      })
      setTime(now)
    }
    tick()
    const interval = setInterval(tick, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md bg-[#0f0505]/80 border-b border-[#3d1515]' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-xl tracking-tight bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
          Alghiffari
        </a>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-[#a87070] hover:text-[#ef4444] transition-colors duration-200 text-sm font-body">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          {/* Semarang Clock */}
          <div className="flex items-center gap-1.5 text-[#a87070] font-body text-xs border border-[#3d1515] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
            <span>Semarang</span>
            <span className="text-[#fef2f2] font-mono">{time}</span>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            title="Toggle language"
            className="flex items-center gap-1.5 border border-[#3d1515] px-3 py-1.5 rounded-full text-[#a87070] hover:text-[#ef4444] hover:border-red-500/50 transition-all text-xs font-body"
          >
            <span className="text-base leading-none">{lang === 'id' ? '🇮🇩' : '🇬🇧'}</span>
            <span className="font-semibold">{lang === 'id' ? 'ID' : 'EN'}</span>
          </button>

          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className="w-8 h-8 rounded-full border border-[#3d1515] flex items-center justify-center text-[#a87070] hover:text-[#ef4444] hover:border-red-500/50 transition-all"
          >
            {isDark ? (
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button onClick={toggleLang} className="text-lg">
            {lang === 'id' ? '🇮🇩' : '🇬🇧'}
          </button>
          <button onClick={toggleTheme} className="text-[#a87070]">
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            className="text-[#ef4444]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1a0808] border-t border-[#3d1515] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)}
                  className="text-[#a87070] hover:text-[#ef4444] transition-colors text-sm font-body block">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
