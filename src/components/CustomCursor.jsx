import { useEffect, useRef, useState } from 'react'

// Custom cursor (§20). Desktop pointer only. Shows "VIEW" over project images.
// Disabled entirely for touch and prefers-reduced-motion — never harms a11y.
export default function CustomCursor() {
  const dotRef = useRef(null)
  const [label, setLabel] = useState('')
  const [active, setActive] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    document.body.classList.add('has-cursor')
    setActive(true)

    let raf = 0
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (dotRef.current) {
            dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
          }
          raf = 0
        })
      }
    }

    const over = (e) => {
      const t = e.target.closest('[data-cursor]')
      setLabel(t ? t.getAttribute('data-cursor') : '')
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerover', over)
    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      document.body.classList.remove('has-cursor')
      cancelAnimationFrame(raf)
    }
  }, [])

  if (!active) return null

  const isLabel = label.length > 0

  return (
    <div
      ref={dotRef}
      className="cursor-dot flex items-center justify-center"
      aria-hidden="true"
      style={{
        width: isLabel ? 72 : 9,
        height: isLabel ? 72 : 9,
        borderRadius: '50%',
        background: '#ffffff',
      }}
    >
      {isLabel && (
        <span
          className="u-meta"
          style={{ color: '#000', fontSize: 10, letterSpacing: '0.14em' }}
        >
          {label}
        </span>
      )}
    </div>
  )
}
