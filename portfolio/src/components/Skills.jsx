import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-red-400 to-rose-400',
    items: [
      { name: 'HTML', icon: '🌐', percent: 85, color: 'from-red-500 to-rose-400' },
      { name: 'CSS', icon: '🎨', percent: 80, color: 'from-rose-500 to-pink-400' },
      { name: 'JavaScript', icon: '⚡', percent: 60, color: 'from-orange-500 to-red-400' },
    ],
  },
  {
    category: 'Operating System',
    color: 'from-rose-400 to-red-300',
    items: [
      { name: 'macOS', icon: '🍎', percent: 90, color: 'from-red-400 to-rose-300' },
    ],
  },
]

function SkillBar({ skill, animate }) {
  return (
    <div className="bg-[#0f0505] border border-[#3d1515] rounded-xl p-4 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.icon}</span>
          <span className="text-[#fef2f2] font-body text-sm font-medium">{skill.name}</span>
        </div>
        <span className="text-[#a87070] font-body text-xs font-semibold">{skill.percent}%</span>
      </div>
      <div className="h-1.5 bg-[#3d1515] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: animate ? `${skill.percent}%` : '0%' }}
        ></div>
      </div>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 bg-[#1a0808]">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#a87070] text-sm tracking-widest uppercase font-body mb-2">What I work with</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">Skills</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-red-400 to-rose-500 mt-4"></div>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, gi) => (
            <div key={group.category} data-aos="fade-up" data-aos-delay={gi * 100}>
              <h3 className={`font-heading font-bold text-lg bg-gradient-to-r ${group.color} bg-clip-text text-transparent mb-6`}>
                {group.category}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <SkillBar key={item.name} skill={item} animate={animate} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
