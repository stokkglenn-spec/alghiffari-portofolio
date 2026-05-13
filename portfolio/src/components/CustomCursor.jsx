import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let raf

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
      }
      // Ring follows with slight lag
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 14}px, ${ringY - 14}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    const handleHover = (e) => {
      const isHoverable = e.target.closest('a, button')
      if (dotRef.current) {
        dotRef.current.style.width = isHoverable ? '12px' : '8px'
        dotRef.current.style.height = isHoverable ? '12px' : '8px'
      }
      if (ringRef.current) {
        ringRef.current.style.width = isHoverable ? '40px' : '28px'
        ringRef.current.style.height = isHoverable ? '40px' : '28px'
      }
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleHover)
    document.body.style.cursor = 'none'
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleHover)
      document.body.style.cursor = 'auto'
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full border border-red-500/50"
        style={{ width: 28, height: 28, transition: 'width 0.15s, height 0.15s' }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full bg-red-500"
        style={{
          width: 8,
          height: 8,
          boxShadow: '0 0 6px rgba(239,68,68,0.9)',
          transition: 'width 0.15s, height 0.15s',
        }}
      />
    </>
  )
}
