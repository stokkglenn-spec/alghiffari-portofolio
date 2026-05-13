import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const [showCV, setShowCV] = useState(false)

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#a87070] text-sm tracking-widest uppercase font-body mb-2">{t.about.subtitle}</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">{t.about.title}</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-4">{t.about.background}</h3>
            <p className="text-[#a87070] font-body leading-relaxed mb-6"
              dangerouslySetInnerHTML={{ __html: t.about.bio.replace(/<b>/g, '<span class="text-[#fef2f2]">').replace(/<\/b>/g, '</span>') }} />

            <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-4">{t.about.education}</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#3d1515] pl-4 hover:border-[#ef4444] transition-colors">
                <p className="text-[#fef2f2] font-body font-medium">{t.about.school}</p>
                <p className="text-[#a87070] text-sm font-body">{t.about.major}</p>
                <p className="text-[#a87070] text-xs font-body mt-1">{t.about.period}</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-3">{t.about.hobbies}</h3>
              <div className="flex flex-wrap gap-2">
                {t.about.hobbyList.map((item) => (
                  <span key={item} className="px-3 py-1 border border-[#3d1515] text-[#a87070] text-sm font-body rounded-full hover:border-[#ef4444] hover:text-[#ef4444] transition-colors">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-2">{t.about.careerGoal}</h3>
              <p className="text-[#a87070] font-body text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.about.careerBio.replace(/<b>/g, '<span class="text-[#fef2f2]">').replace(/<\/b>/g, '</span>') }} />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-4">{t.about.softSkills}</h3>
            <div className="space-y-3 mb-8">
              {t.about.softList.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                  <span className="text-[#fef2f2] font-body">{skill}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-xl text-[#ef4444] mb-4">{t.about.hardSkills}</h3>
            <div className="space-y-3 mb-10">
              {t.about.hardList.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                  <span className="text-[#fef2f2] font-body">{skill}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowCV(true)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#ef4444] text-[#ef4444] font-body text-sm rounded hover:bg-[#ef4444] hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {t.about.viewCV}
            </button>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showCV && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowCV(false)}>
          <div className="bg-[#1a0808] border border-[#3d1515] rounded-2xl overflow-hidden max-w-4xl w-full h-[90vh] shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 flex items-center justify-between border-b border-[#3d1515] bg-red-900/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#fef2f2] font-body font-semibold text-sm">Curriculum Vitae</p>
                  <p className="text-[#a87070] font-body text-xs">Maulana Al-Ghiffari</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a href="/cv.pdf" download="CV_Maulana_Al-Ghiffari.pdf"
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-body rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  {t.about.download}
                </a>
                <button onClick={() => setShowCV(false)} className="text-[#a87070] hover:text-[#fef2f2] transition-colors p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto bg-[#0f0505]">
              <iframe src="/cv.pdf" className="w-full h-full" title="CV Preview" />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
