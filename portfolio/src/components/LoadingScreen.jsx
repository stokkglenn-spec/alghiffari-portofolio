import { useState, useEffect } from 'react'

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(onDone, 500)
          }, 300)
          return 100
        }
        return prev + 2
      })
    }, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0f0505] flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
      {/* Logo / Name */}
      <div className="mb-8 text-center">
        <h1 className="font-heading font-black text-4xl md:text-6xl bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent tracking-tight">
          Maulana
        </h1>
        <h1 className="font-heading font-black text-4xl md:text-6xl text-[#fef2f2] tracking-tight">
          Al-Ghiffari
        </h1>
        <p className="text-[#a87070] font-body text-sm mt-2 tracking-widest uppercase">Portofolio</p>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-0.5 bg-[#3d1515] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 to-rose-400 rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-[#a87070] font-body text-xs mt-3">{progress}%</p>
    </div>
  )
}
