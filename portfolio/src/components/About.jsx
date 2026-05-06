const softSkills = ['Tanggung Jawab', 'Disiplin', 'Tepat Waktu']
const hardSkills = ['Web Development', 'Networking', 'Graphic Design']

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <p className="text-[#7aa3cc] text-sm tracking-widest uppercase font-body mb-2">Get to know me</p>
          <h2 className="font-heading font-black text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-heading font-bold text-xl text-[#60a5fa] mb-4">Background</h3>
            <p className="text-[#7aa3cc] font-body leading-relaxed mb-6">
              I'm <span className="text-[#e0f0ff]">Maulana Al-Ghiffari</span>, the third child of three siblings,
              born and raised in <span className="text-[#e0f0ff]">Kota Semarang</span>. I have a deep interest
              in networking and technology, and I aspire to pursue a career in the maritime industry while
              continuing to grow my skills in software development.
            </p>

            <h3 className="font-heading font-bold text-xl text-[#60a5fa] mb-4">Education</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-[#1a3a5c] pl-4 hover:border-[#60a5fa] transition-colors">
                <p className="text-[#e0f0ff] font-body font-medium">SMK Negeri 7 Semarang</p>
                <p className="text-[#7aa3cc] text-sm font-body">Sistem Informasi, Jaringan, dan Aplikasi</p>
                <p className="text-[#7aa3cc] text-xs font-body mt-1">2024 – 2028</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-heading font-bold text-xl text-[#60a5fa] mb-3">Hobbies & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {['Bermain Bola', 'Networking', 'Web Development'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 border border-[#1a3a5c] text-[#7aa3cc] text-sm font-body rounded-full hover:border-[#60a5fa] hover:text-[#60a5fa] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-heading font-bold text-xl text-[#60a5fa] mb-2">Career Goal</h3>
              <p className="text-[#7aa3cc] font-body text-sm leading-relaxed">
                Aiming to enter the <span className="text-[#e0f0ff]">maritime / pelayaran</span> industry
                while building a strong foundation in software engineering.
              </p>
            </div>
          </div>

          {/* Right */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="font-heading font-bold text-xl text-[#a78bfa] mb-4">Soft Skills</h3>
            <div className="space-y-3 mb-8">
              {softSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-violet-400"></div>
                  <span className="text-[#e0f0ff] font-body">{skill}</span>
                </div>
              ))}
            </div>

            <h3 className="font-heading font-bold text-xl text-[#f472b6] mb-4">Hard Skills</h3>
            <div className="space-y-3 mb-10">
              {hardSkills.map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-pink-400 to-violet-400"></div>
                  <span className="text-[#e0f0ff] font-body">{skill}</span>
                </div>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download="CV_Maulana_Al-Ghiffari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#60a5fa] text-[#60a5fa] font-body text-sm rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 hover:text-white hover:border-transparent transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
