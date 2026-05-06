const skillGroups = [
  {
    category: 'Languages',
    color: 'from-blue-400 to-cyan-400',
    items: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
    ],
  },
  {
    category: 'Operating System',
    color: 'from-violet-400 to-pink-400',
    items: [
      { name: 'macOS', icon: '🍎' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#7aa3cc] text-sm tracking-widest uppercase font-body mb-2">What I work with</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">Skills</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 mt-4"></div>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.category} data-aos="fade-up" data-aos-delay={gi * 100}>
              <h3 className={`font-heading font-bold text-lg bg-gradient-to-r ${group.color} bg-clip-text text-transparent mb-6`}>
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {group.items.map((item, i) => (
                  <div
                    key={item.name}
                    data-aos="fade-up"
                    data-aos-delay={gi * 100 + i * 60}
                    className="bg-[#050a1a] border border-[#1a3a5c] rounded-xl p-4 flex flex-col items-center gap-2 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-[#e0f0ff] font-body text-sm text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
