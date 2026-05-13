import { useRef } from 'react'

export default function MagneticButton({ children, className, onClick, href, target, rel, download }) {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const btn = btnRef.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.transform = 'translate(0, 0)'
      btnRef.current.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }

  const handleMouseEnter = () => {
    if (btnRef.current) {
      btnRef.current.style.transition = 'transform 0.1s ease'
    }
  }

  const props = {
    ref: btnRef,
    className,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    onMouseEnter: handleMouseEnter,
  }

  if (href) {
    return <a href={href} target={target} rel={rel} download={download} {...props}>{children}</a>
  }
  return <button onClick={onClick} {...props}>{children}</button>
}
