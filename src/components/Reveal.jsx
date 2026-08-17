import { useEffect, useRef, useState } from 'react'

// Intersection-observer reveal. Respects prefers-reduced-motion (CSS handles it).
// Content in view at load still plays its entrance (a smooth reload animation),
// but is triggered directly rather than waiting on the observer, so the hero /
// above-the-fold content can never get stuck hidden.
export default function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  variant = 'up', // 'up' (fade + rise) | 'wipe' (clip-path reveal)
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const inView = rect.top < window.innerHeight && rect.bottom > 0
    if (inView) {
      // paint the hidden state first, then reveal next frame so it animates.
      // setTimeout is a safety net in case rAF is throttled at load — the
      // content can never stay stuck hidden.
      const id = requestAnimationFrame(() => setShown(true))
      const t = setTimeout(() => setShown(true), 150)
      return () => {
        cancelAnimationFrame(id)
        clearTimeout(t)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const base = variant === 'wipe' ? 'reveal-wipe' : 'reveal'
  return (
    <Tag
      ref={ref}
      className={`${base} ${shown ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
