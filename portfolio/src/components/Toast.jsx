import { useEffect } from 'react'

export default function Toast({ message, show, type = 'success', onHide }) {
  useEffect(() => {
    if (!show) return
    const timer = setTimeout(onHide, 3000)
    return () => clearTimeout(timer)
  }, [show, onHide])

  if (!show || !message) return null

  const colors = {
    success: 'bg-green-500/20 border-green-500/40 text-green-400',
    error: 'bg-red-500/20 border-red-500/40 text-red-400',
    info: 'bg-blue-500/20 border-blue-500/40 text-blue-400',
  }

  const icons = {
    success: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }

  return (
    <div className={`fixed bottom-20 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 px-5 py-3 rounded-2xl border backdrop-blur-sm shadow-xl font-body text-sm animate-fade-in-up ${colors[type]}`}>
      {icons[type]}
      <span>{message}</span>
    </div>
  )
}
