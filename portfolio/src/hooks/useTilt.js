import { useRef, useCallback } from 'react'

/**
 * useTilt — 3D tilt effect on hover
 * Returns { ref, onMouseMove, onMouseLeave }
 */
export default function useTilt(maxDeg = 12) {
  const ref = useRef(null)

  const onMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -maxDeg
    const rotateY = ((x - cx) / cx) * maxDeg
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`
    el.style.transition = 'transform 0.1s ease-out'
  }, [maxDeg])

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    el.style.transition = 'transform 0.4s ease-out'
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
