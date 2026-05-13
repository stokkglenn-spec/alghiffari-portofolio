import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import useTilt from '../hooks/useTilt'

const certificates = [
  {
    label: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    org: 'SMK Negeri 7 Semarang',
    date: '13 Feb 2025',
    icon: '🌐',
    gradient: 'from-red-500 to-rose-500',
    border: 'hover:border-red-500/50 hover:shadow-red-500/10',
    badge: 'bg-red-500/20 border-red-500/40 text-red-400',
    preview: '/certs/cisco-it-essentials.pdf.png',
  },
  {
    label: 'Dinus Rover Scout Competition IX',
    issuer: 'Universitas Dian Nuswantoro',
    org: 'DINUSFEST 2026 — Peserta',
    date: '18 Jan – 14 Feb 2026',
    icon: '🏕️',
    gradient: 'from-amber-500 to-yellow-500',
    border: 'hover:border-amber-500/50 hover:shadow-amber-500/10',
    badge: 'bg-amber-500/20 border-amber-500/40 text-amber-400',
    preview: '/certs/dinus-scout.pdf.png',
  },
  {
    label: 'Juara II — Kejuaraan SSB KU-13',
    issuer: 'PSSI Kota Semarang',
    org: 'SSB Romeo — Nov 2021',
    date: '12 Nov 2021',
    icon: '⚽',
    gradient: 'from-indigo-500 to-blue-600',
    border: 'hover:border-indigo-500/50 hover:shadow-indigo-500/10',
    badge: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-400',
    preview: '/certs/pssi-juara2.jpg',
  },
  {
    label: 'AI for Oceans — Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Amazon',
    gradient: 'from-cyan-500 to-teal-500',
    border: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    badge: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-400',
    preview: '/certs/code-ai-oceans.jpg',
  },
  {
    label: 'Music Lab: Jam Session — Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Salesforce',
    date: '—',
    icon: '🎵',
    gradient: 'from-pink-500 to-rose-500',
    border: 'hover:border-pink-500/50 hover:shadow-pink-500/10',
    badge: 'bg-pink-500/20 border-pink-500/40 text-pink-400',
    preview: '/certs/code-music-lab.jpg',
  },
  {
    label: 'The Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh AT&T',
    date: '—',
    icon: '📡',
    gradient: 'from-violet-500 to-purple-500',
    border: 'hover:border-violet-500/50 hover:shadow-violet-500/10',
    badge: 'bg-violet-500/20 border-violet-500/40 text-violet-400',
    preview: '/certs/code-att.jpg',
  },
  {
    label: 'The Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Blizzard',
    date: '—',
    icon: '🎮',
    gradient: 'from-orange-500 to-amber-500',
    border: 'hover:border-orange-500/50 hover:shadow-orange-500/10',
    badge: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
    preview: '/certs/blizzard.jpg',
  },
  {
    label: 'The Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Microsoft',
    date: '—',
    icon: '🪟',
    gradient: 'from-green-500 to-emerald-500',
    border: 'hover:border-green-500/50 hover:shadow-green-500/10',
    badge: 'bg-green-500/20 border-green-500/40 text-green-400',
    preview: '/certs/code-microsoft.jpg',
  },
  {
    label: 'The Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Infosys Foundation USA',
    date: '—',
    icon: '⚡',
    gradient: 'from-yellow-500 to-lime-500',
    border: 'hover:border-yellow-500/50 hover:shadow-yellow-500/10',
    badge: 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400',
    preview: '/certs/code-infosys.jpg',
  },
  {
    label: 'The Hour of Code',
    issuer: 'Code.org',
    org: 'Disponsori oleh Amazon',
    date: '—',
    icon: '☁️',
    gradient: 'from-sky-500 to-blue-500',
    border: 'hover:border-sky-500/50 hover:shadow-sky-500/10',
    badge: 'bg-sky-500/20 border-sky-500/40 text-sky-400',
    preview: '/certs/code-amazon.jpg',
  },
]

function CertCard({ cert, onClick, clickLabel, noPreview, completedLabel }) {
  const [imgError, setImgError] = useState(false)
  const { ref, onMouseMove, onMouseLeave } = useTilt(8)

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(cert)}
      className={`glass rounded-2xl overflow-hidden hover:shadow-xl ${cert.border} transition-shadow duration-200 cursor-pointer`}
      style={{ willChange: 'transform' }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${cert.gradient}`}></div>
      <div className="h-36 bg-[#0f0505]/60 overflow-hidden relative group">
        {!imgError ? (
          <img src={cert.preview} alt={cert.label}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)} />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className="text-3xl">{cert.icon}</span>
            <span className="text-xs text-[#a87070] font-body">{noPreview}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <span className="text-white text-xs font-body bg-black/50 px-3 py-1 rounded-full">{clickLabel}</span>
        </div>
      </div>
      <div className="p-4">
        <span className={`text-xs px-2 py-0.5 rounded-full border font-body ${cert.badge}`}>{cert.issuer}</span>
        <p className="text-[#fef2f2] font-body text-sm font-semibold leading-snug mt-2 mb-1">{cert.label}</p>
        <p className="text-[#a87070] font-body text-xs">{cert.org}</p>
        {cert.date && cert.date !== '—' && <p className="text-[#fef2f2] font-body text-xs mt-1">{cert.date}</p>}
        <div className="flex items-center gap-1 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-green-400 font-body text-xs">{completedLabel}</span>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const { t } = useLang()
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-24 px-6 bg-[#1a0808]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#a87070] text-sm tracking-widest uppercase font-body mb-2">{t.certificates.subtitle}</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">{t.certificates.title}</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 mt-4"></div>
          <p className="text-[#a87070] font-body text-sm mt-3">{t.certificates.count(certificates.length)}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certificates.map((cert, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 50}>
              <CertCard
                cert={cert}
                onClick={setSelected}
                clickLabel={t.certificates.clickToView}
                noPreview={t.certificates.noPreview}
                completedLabel={t.certificates.completed}
              />
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <div className="bg-[#1a0808] border border-[#3d1515] rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className={`h-1 w-full bg-gradient-to-r ${selected.gradient}`}></div>
            <div className="p-4 flex items-center justify-between border-b border-[#3d1515]">
              <div>
                <p className="text-[#fef2f2] font-body font-semibold text-sm">{selected.label}</p>
                <p className="text-[#a87070] font-body text-xs">{selected.org}</p>
              </div>
              <button onClick={() => setSelected(null)} className="text-[#a87070] hover:text-[#fef2f2] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <img src={selected.preview} alt={selected.label} className="w-full object-contain max-h-[70vh]" />
          </div>
        </div>
      )}
    </section>
  )
}
