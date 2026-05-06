const projects = [
  {
    title: 'Pakai.in',
    description: 'Platform e-commerce fashion online yang menawarkan koleksi lengkap dari brand lokal hingga internasional. Dibangun dengan HTML, CSS, dan JavaScript murni.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://pakaiin.vercel.app',
    github: null,
    preview: '/pakaiin-preview.png',
  },
  {
    title: 'Smart Home Miniature',
    description: 'Miniatur rumah pintar berbasis IoT dengan lampu yang dapat dinyalakan menggunakan sensor suara (tepukan tangan) dan dilengkapi sensor gas/asap untuk keamanan.',
    tags: ['IoT', 'Arduino', 'Sensor'],
    live: null,
    github: null,
    preview: '/project.jpg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#a87070] text-sm tracking-widest uppercase font-body mb-2">My work</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">Portfolio</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}
              className="bg-[#1a0808] border border-[#3d1515] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-200 group">

              <div className="h-48 bg-[#0f0505] border-b border-[#3d1515] overflow-hidden relative">
                {project.preview ? (
                  <img src={project.preview} alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.querySelector('.fallback').style.display = 'flex' }} />
                ) : null}
                <div className={`fallback absolute inset-0 flex-col items-center justify-center gap-2 ${project.preview ? 'hidden' : 'flex'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#3d1515]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-[#a87070]">Project Preview</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#fef2f2] mb-2">{project.title}</h3>
                <p className="text-[#a87070] font-body text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, ti) => {
                    const colors = ['text-red-400 border-red-900', 'text-rose-400 border-rose-900', 'text-orange-400 border-orange-900', 'text-amber-400 border-amber-900']
                    return (
                      <span key={tag} className={`px-2 py-0.5 bg-[#0f0505] border ${colors[ti % colors.length]} text-xs font-body rounded`}>
                        {tag}
                      </span>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-red-500 to-rose-600 text-white text-xs font-body rounded-full hover:opacity-90 transition-opacity">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
