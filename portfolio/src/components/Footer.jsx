import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="border-t border-[#3d1515] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a87070] font-body text-sm">
          © 2026 <span className="bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">Maulana Al-Ghiffari</span>. {t.footer.rights}
        </p>
        <p className="text-[#a87070] font-body text-xs">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  )
}
