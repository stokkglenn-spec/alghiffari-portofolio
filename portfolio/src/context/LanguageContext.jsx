import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  id: {
    // Navbar
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      portfolio: 'Portofolio',
      certificates: 'Sertifikat',
      experience: 'Pengalaman',
      contact: 'Kontak',
    },
    // Hero
    hero: {
      greeting: 'Halo, Saya',
      available: 'Terbuka untuk kesempatan',
      typed: ['Calon Software Engineer', 'Penggemar Jaringan', 'Pengembang Web'],
      bio: 'Seorang pelajar SMK yang antusias di bidang teknologi, jaringan, dan pengembangan web. Aktif di kegiatan pramuka, pernah mendaki tiga gunung, dan terus belajar untuk mewujudkan impian berkarir di dunia pelayaran dan teknologi.',
      viewWork: 'Lihat Karya Saya',
      contact: 'Hubungi Saya',
      scroll: 'Gulir',
      stats: { certs: 'Sertifikat', projects: 'Proyek', since: 'Mulai' },
    },
    // About
    about: {
      subtitle: 'Kenali Saya',
      title: 'Tentang Saya',
      background: 'Latar Belakang',
      bio: 'Saya <b>Maulana Al-Ghiffari</b>, anak ketiga dari tiga bersaudara, lahir dan besar di <b>Kota Semarang</b>. Saya memiliki minat yang besar di bidang jaringan dan teknologi, serta bercita-cita berkarir di industri pelayaran sambil terus mengembangkan kemampuan di bidang pengembangan perangkat lunak.',
      education: 'Pendidikan',
      school: 'SMK Negeri 7 Semarang',
      major: 'Sistem Informasi, Jaringan, dan Aplikasi',
      period: '2024 – 2028',
      hobbies: 'Hobi & Minat',
      hobbyList: ['Bermain Bola', 'Networking', 'Web Development'],
      careerGoal: 'Tujuan Karir',
      careerBio: 'Bercita-cita masuk ke industri <b>pelayaran</b> sambil membangun fondasi yang kuat di bidang rekayasa perangkat lunak.',
      softSkills: 'Soft Skill',
      hardSkills: 'Hard Skill',
      softList: ['Tanggung Jawab', 'Disiplin', 'Tepat Waktu'],
      hardList: ['Web Development', 'Networking', 'Graphic Design'],
      viewCV: 'Lihat CV',
      download: 'Unduh',
    },
    // Skills
    skills: {
      title: 'Keahlian',
      categories: { Languages: 'Languages', 'Operating System': 'Operating System' },
    },
    // Portfolio
    portfolio: {
      subtitle: 'Karya Saya',
      title: 'Portofolio',
      liveDemo: 'Demo Langsung',
      noPreview: 'Pratinjau Proyek',
      projects: [
        {
          title: 'Pakai.in',
          description: 'Platform e-commerce fashion online yang menawarkan koleksi lengkap dari brand lokal hingga internasional. Dibangun dengan HTML, CSS, dan JavaScript murni.',
        },
        {
          title: 'Smart Home Miniature',
          description: 'Miniatur rumah pintar berbasis IoT dengan lampu yang dapat dinyalakan menggunakan sensor suara (tepukan tangan) dan dilengkapi sensor gas/asap untuk keamanan.',
        },
      ],
    },
    // Certificates
    certificates: {
      subtitle: 'Pencapaian',
      title: 'Sertifikat',
      count: (n) => `${n} sertifikat diperoleh`,
      noPreview: 'Belum Ada Pratinjau',
      clickToView: 'Klik untuk lihat',
      completed: 'Selesai',
    },
    // Experience
    experience: {
      subtitle: 'Perjalanan Saya',
      title: 'Pengalaman',
      count: (n) => `${n} pengalaman`,
      clickToView: 'Klik untuk lihat',
    },
    // Contact
    contact: {
      subtitle: 'Mari Terhubung',
      title: 'Hubungi Saya',
      copied: '✓ Copied!',
      toastCopied: 'Email berhasil disalin! 📋',
    },
    // Footer
    footer: {
      rights: 'Hak cipta dilindungi.',
      builtWith: 'Dibuat dengan React + Vite + Tailwind CSS',
    },
  },

  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      portfolio: 'Portfolio',
      certificates: 'Certificates',
      experience: 'Experience',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      available: 'Open to opportunities',
      typed: ['Aspiring Software Engineer', 'Network Enthusiast', 'Web Developer'],
      bio: 'A vocational student passionate about technology, networking, and web development. Active in scouting, summited three mountains, and continuously learning to pursue a career in maritime and technology.',
      viewWork: 'View My Work',
      contact: 'Contact Me',
      scroll: 'Scroll',
      stats: { certs: 'Certificates', projects: 'Projects', since: 'Since' },
    },
    about: {
      subtitle: 'Get to Know Me',
      title: 'About Me',
      background: 'Background',
      bio: "I'm <b>Maulana Al-Ghiffari</b>, the third of three siblings, born and raised in <b>Semarang City</b>. I have a strong interest in networking and technology, and aspire to build a career in the maritime industry while developing my software engineering skills.",
      education: 'Education',
      school: 'SMK Negeri 7 Semarang',
      major: 'Information Systems, Networking & Applications',
      period: '2024 – 2028',
      hobbies: 'Hobbies & Interests',
      hobbyList: ['Football', 'Networking', 'Web Development'],
      careerGoal: 'Career Goal',
      careerBio: 'Aspiring to enter the <b>maritime industry</b> while building a strong foundation in software engineering.',
      softSkills: 'Soft Skills',
      hardSkills: 'Hard Skills',
      softList: ['Responsibility', 'Discipline', 'Punctuality'],
      hardList: ['Web Development', 'Networking', 'Graphic Design'],
      viewCV: 'View CV',
      download: 'Download',
    },
    skills: {
      title: 'Skills',
      categories: { Languages: 'Languages', 'Operating System': 'Operating System' },
    },
    portfolio: {
      subtitle: 'My Work',
      title: 'Portfolio',
      liveDemo: 'Live Demo',
      noPreview: 'Project Preview',
      projects: [
        {
          title: 'Pakai.in',
          description: 'An online fashion e-commerce platform offering a complete collection from local to international brands. Built with pure HTML, CSS, and JavaScript.',
        },
        {
          title: 'Smart Home Miniature',
          description: 'An IoT-based smart home miniature with lights controllable via sound sensor (clapping) and equipped with a gas/smoke sensor for safety.',
        },
      ],
    },
    certificates: {
      subtitle: 'Achievements',
      title: 'Certificates',
      count: (n) => `${n} certificates earned`,
      noPreview: 'No Preview Yet',
      clickToView: 'Click to view',
      completed: 'Completed',
    },
    experience: {
      subtitle: 'My Journey',
      title: 'Experience',
      count: (n) => `${n} experiences`,
      clickToView: 'Click to view',
    },
    contact: {
      subtitle: 'Get In Touch',
      title: 'Contact Me',
      copied: '✓ Copied!',
      toastCopied: 'Email copied! 📋',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React + Vite + Tailwind CSS',
    },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('id')
  const t = translations[lang]
  const toggleLang = () => setLang(l => l === 'id' ? 'en' : 'id')
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
