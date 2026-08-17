import { useEffect, useRef } from 'react'

// Thin terracotta hairline at the very top that fills with scroll progress.
export default function ScrollProgress() {
  const ref = useRef(null)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const p = max > 0 ? window.scrollY / max : 0
      if (ref.current) ref.current.style.transform = `scaleX(${p})`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="scroll-progress"
      style={{ width: '100%', transform: 'scaleX(0)' }}
      aria-hidden="true"
    />
  )
}
