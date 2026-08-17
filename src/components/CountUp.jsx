import { useEffect, useRef, useState } from 'react'

// Counts up to a value when scrolled into view. Preserves leading zeros ("08")
// and suffixes ("60+"). Respects reduced motion.
export default function CountUp({ value, duration = 1500, className = '' }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(String(value))

  useEffect(() => {
    const m = String(value).match(/^(\d+)(\D*)$/)
    if (!m) {
      setDisplay(String(value))
      return
    }
    const target = parseInt(m[1], 10)
    const pad = m[1].length
    const suffix = m[2]
    const format = (n) => String(n).padStart(pad, '0') + suffix

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(format(target))
      return
    }

    setDisplay(format(0))
    const el = ref.current
    if (!el) return

    let raf = 0
    const run = () => {
      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setDisplay(format(Math.round(eased * target)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
