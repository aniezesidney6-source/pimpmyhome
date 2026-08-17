import { useEffect, useRef, useState } from 'react'

// Hero background: three muted videos that crossfade into one another.
// Sets the muted *property* for autoplay policies and honors reduced-motion
// (no cycling — shows the first clip only).
const SOURCES = ['/hero-1.mp4', '/hero-2.mp4', '/hero-3.mp4']
const HOLD_MS = 6500 // time each clip is shown before crossfading

export default function HeroVideo() {
  const refs = [useRef(null), useRef(null), useRef(null)]
  const [active, setActive] = useState(0)

  // mount: mute all, play the first, start the cycle (unless reduced motion)
  useEffect(() => {
    refs.forEach((r) => {
      if (r.current) r.current.muted = true
    })
    const first = refs[0].current
    if (first) {
      const p = first.play()
      if (p && p.catch) p.catch(() => {})
    }
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setActive((a) => (a + 1) % SOURCES.length), HOLD_MS)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // on switch: play the incoming clip from the start, pause the others after
  // the crossfade so we never keep three 4K streams decoding at once.
  useEffect(() => {
    const v = refs[active].current
    if (v) {
      v.currentTime = 0
      const p = v.play()
      if (p && p.catch) p.catch(() => {})
    }
    const t = setTimeout(() => {
      refs.forEach((r, i) => {
        if (i !== active && r.current) r.current.pause()
      })
    }, 1400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  return (
    <div
      className="img-frame relative"
      style={{ aspectRatio: '16 / 9', backgroundColor: 'var(--color-ink)' }}
    >
      {SOURCES.map((src, i) => (
        <video
          key={src}
          ref={refs[i]}
          src={src}
          muted
          loop
          playsInline
          preload={i === 0 ? 'auto' : 'metadata'}
          aria-label="Interior spaces by Pimpmyhome"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            opacity: active === i ? 1 : 0,
            transition: 'opacity 1.3s ease-in-out',
          }}
        />
      ))}
    </div>
  )
}
