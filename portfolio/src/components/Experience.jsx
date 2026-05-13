import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import useTilt from '../hooks/useTilt'

const experiences = [
  {
    title: 'Summit Gunung Slamet',
    org: 'Bersama Teman SSB Romeo',
    year: '2024',
    badge: '🏔️',
    badgeColor: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400',
    gradient: 'from-emerald-500 to-green-500',
    desc: '⚡ Pendakian PERTAMA langsung ke Gunung Slamet — gunung tertinggi di Jawa Tengah (3.428 mdpl). Berhasil summit bersama teman-teman SSB Romeo.',
    photos: ['/experience/pendakian-1.jpg', '/experience/pendakian-2.jpg'],
  },
  {
    title: 'Summit Gunung Sindoro',
    org: 'Bersama Teman Sekolah',
    year: '2024',
    badge: '⛰️',
    badgeColor: 'bg-teal-500/20 border-teal-500/40 text-teal-400',
    gradient: 'from-teal-500 to-cyan-500',
    desc: 'Berhasil summit Gunung Sindoro (3.153 mdpl) bersama teman-teman sekolah. Pendakian kedua setelah menaklukkan Slamet.',
    photos: ['/experience/sindoro-1.jpg', '/experience/sindoro-2.jpg'],
  },
  {
    title: 'Summit Gunung Ungaran',
    org: 'Bersama Teman Sekolah',
    year: '2025',
    badge: '🌄',
    badgeColor: 'bg-sky-500/20 border-sky-500/40 text-sky-400',
    gradient: 'from-sky-500 to-blue-500',
    desc: 'Berhasil summit Gunung Ungaran (2.050 mdpl) bersama teman-teman sekolah. Melengkapi trilogi pendakian: Slamet → Sindoro → Ungaran.',
    photos: ['/experience/ungaran-1.jpg', '/experience/ungaran-2.jpg'],
  },
  {
    title: 'Juara 1 Konten Kreatif Pramuka',
    org: 'Universitas Dian Nuswantoro (UDINUS)',
    year: '2026',
    badge: '🏆',
    badgeColor: 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400',
    gradient: 'from-yellow-500 to-amber-500',
    desc: 'Meraih Juara 1 lomba konten kreatif tingkat Jawa Tengah yang diselenggarakan oleh Universitas Dian Nuswantoro dalam rangkaian DINUSFEST 2026.',
    photos: ['/experience/lomba-konten-1.jpg', '/experience/lomba-konten-2.jpg'],
  },
  {
    title: 'Ketua Proker Pelantikan Bantara',
    org: 'Pramuka SMK Negeri 7 Semarang',
    year: '2026',
    badge: '👑',
    badgeColor: 'bg-red-500/20 border-red-500/40 text-red-400',
    gradient: 'from-red-500 to-rose-500',
    desc: 'Menjabat sebagai Ketua Program Kerja Pelantikan Bantara dengan 47 peserta. Kegiatan meliputi hiking di Semarang Selatan dan Semarang Tengah.',
    photos: ['/experience/bantara-1.jpg', '/experience/bantara-2.jpg'],
  },
  {
    title: 'Danton Pasukan — Hari Pramuka',
    org: 'SMK Negeri 7 Semarang',
    year: '2024',
    badge: '🥁',
    badgeColor: 'bg-rose-500/20 border-rose-500/40 text-rose-400',
    gradient: 'from-rose-500 to-pink-500',
    desc: 'Menjadi Komandan Peleton (Danton) pasukan dalam peringatan Hari Pramuka 14 Agustus 2024.',
    photos: ['/experience/danton-1.jpg', '/experience/danton-2.jpg'],
  },
  {
    title: 'Pinup — Perjusa',
    org: 'SMK Negeri 7 Semarang',
    year: '2024',
    badge: '⛺',
    badgeColor: 'bg-orange-500/20 border-orange-500/40 text-orange-400',
    gradient: 'from-orange-500 to-amber-500',
    desc: 'Menjadi Pemimpin Upacara (Pinup) dalam kegiatan Perkemahan Jumat Sabtu (Perjusa) di SMK Negeri 7 Semarang tahun 2024.',
    photos: ['/experience/pinup-1.jpg', '/experience/pinup-2.jpg'],
  },
]

// Global lightbox state
function Lightbox({ photos, startIndex, title, org, gradient, onClose }) {
  const [current, setCurrent] = useState(startIndex)
  const prev = () => setCurrent((current - 1 + photos.length) % photos.length)
  const next = () => setCurrent((current + 1) % photos.length)

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}>
      <div className="bg-[#1a0808] border border-[#3d1515] rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={e => e.stopPropagation()}>

        {/* Gradient bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${gradient}`}></div>

        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-[#3d1515]">
          <div>
            <p className="text-[#fef2f2] font-body font-semibold text-sm">{title}</p>
            <p className="text-[#a87070] font-body text-xs">{org} · {current + 1}/{photos.length}</p>
          </div>
          <button onClick={onClose} className="text-[#a87070] hover:text-[#fef2f2] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="relative bg-[#0f0505]">
          <img src={photos[current]} alt="preview"
            className="w-full object-contain max-h-[70vh]" />
          {photos.length > 1 && (
            <>
              <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Dots */}
        {photos.length > 1 && (
          <div className="flex justify-center gap-2 py-3 border-t border-[#3d1515]">
            {photos.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? `w-6 bg-gradient-to-r ${gradient}` : 'w-1.5 bg-white/20'}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function PhotoCarousel({ photos, gradient, onOpenLightbox }) {
  const [current, setCurrent] = useState(0)

  const prev = (e) => { e.stopPropagation(); setCurrent((current - 1 + photos.length) % photos.length) }
  const next = (e) => { e.stopPropagation(); setCurrent((current + 1) % photos.length) }

  return (
    <div className="relative h-48 bg-[#0a0202] overflow-hidden group cursor-pointer"
      onClick={() => onOpenLightbox(current)}>
      <img src={photos[current]} alt="experience photo"
        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />

      {/* Hover overlay — same as Certificates */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
        <span className="text-white text-xs font-body bg-black/50 px-3 py-1 rounded-full">Klik untuk lihat</span>
      </div>

      {/* Arrows */}
      {photos.length > 1 && (
        <>
          <button onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots */}
      {photos.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5" onClick={e => e.stopPropagation()}>
          {photos.map((_, i) => (
            <button key={i} onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? `w-4 bg-gradient-to-r ${gradient}` : 'w-1.5 bg-white/30'}`} />
          ))}
        </div>
      )}

      {/* Counter */}
      <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full font-body">
        {current + 1}/{photos.length}
      </div>
    </div>
  )
}

function ExperienceCard({ exp, index, onOpenLightbox }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt(8)
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      data-aos="fade-up"
      data-aos-delay={index * 80}
      className="glass rounded-2xl overflow-hidden cursor-pointer"
      style={{ willChange: 'transform' }}
      onClick={() => onOpenLightbox(0)}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${exp.gradient}`}></div>
      <div className="h-36 bg-[#0f0505]/60 overflow-hidden relative">
        <PhotoCarousel
          photos={exp.photos}
          gradient={exp.gradient}
          onOpenLightbox={onOpenLightbox}
        />
      </div>
      <div className="p-4">
        <span className={`text-xs px-2 py-0.5 rounded-full border font-body ${exp.badgeColor}`}>
          {exp.badge} {exp.year}
        </span>
        <h3 className="text-[#fef2f2] font-body font-semibold text-sm leading-snug mt-2 mb-1">{exp.title}</h3>
        <p className="text-[#ef4444] font-body text-xs mb-2">{exp.org}</p>
        <p className="text-[#a87070] font-body text-xs leading-relaxed">{exp.desc}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const { t } = useLang()
  const [lightbox, setLightbox] = useState(null) // { photos, startIndex }

  return (
    <section id="experience" className="py-24 px-6 bg-[#1a0808]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#a87070] text-sm tracking-widest uppercase font-body mb-2">{t.experience.subtitle}</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">{t.experience.title}</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 mt-4"></div>
          <p className="text-[#a87070] font-body text-sm mt-3">{t.experience.count(experiences.length)}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={i}
              exp={exp}
              index={i}
              onOpenLightbox={(idx) => setLightbox({ photos: exp.photos, startIndex: idx, title: exp.title, org: exp.org, gradient: exp.gradient })}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          startIndex={lightbox.startIndex}
          title={lightbox.title}
          org={lightbox.org}
          gradient={lightbox.gradient}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
