import { useEffect, useState } from 'react'

export default function SemarangClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      // Semarang = WIB = UTC+7
      const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }))
      const h = String(wib.getHours()).padStart(2, '0')
      const m = String(wib.getMinutes()).padStart(2, '0')
      const s = String(wib.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="hidden md:flex items-center gap-1.5 text-[#a87070] font-body text-xs">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>Semarang</span>
      <span className="text-[#fef2f2] font-mono">{time}</span>
    </div>
  )
}
