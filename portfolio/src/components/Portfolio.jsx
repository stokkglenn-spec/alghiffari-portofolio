const projects = [
  {
    title: 'Pakai.in',
    description: 'Platform e-commerce fashion online yang menawarkan koleksi lengkap dari brand lokal hingga internasional. Dibangun dengan HTML, CSS, dan JavaScript murni.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://pakaiin.vercel.app',
    github: null,
    placeholder: false,
    preview: '/pakaiin-preview.png',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#7aa3cc] text-sm tracking-widest uppercase font-body mb-2">My work</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Portfolio</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-violet-400 to-pink-400 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 group"
            >
              {/* Project preview */}
              <div className="h-48 bg-[#050a1a] border-b border-[#1a3a5c] overflow-hidden relative group-hover:border-blue-500/40 transition-colors">
                {project.preview ? (
                  <img
                    src={project.preview}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.querySelector('.fallback').style.display = 'flex'
                    }}
                  />
                ) : null}
                <div className={`fallback absolute inset-0 flex-col items-center justify-center gap-2 ${project.preview ? 'hidden' : 'flex'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-[#1a3a5c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-xs text-[#7aa3cc]">Project Preview</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-bold text-lg text-[#e0f0ff] mb-2">{project.title}</h3>
                <p className="text-[#7aa3cc] font-body text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, ti) => {
                    const colors = ['text-blue-400 border-blue-900', 'text-violet-400 border-violet-900', 'text-pink-400 border-pink-900']
                    return (
                      <span key={tag} className={`px-2 py-0.5 bg-[#050a1a] border ${colors[ti % colors.length]} text-xs font-body rounded`}>
                        {tag}
                      </span>
                    )
                  })}
                </div>

                <div className="flex flex-wrap gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white text-xs font-body rounded-full hover:opacity-90 transition-opacity"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#60a5fa] text-sm font-body hover:text-[#93c5fd] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
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
