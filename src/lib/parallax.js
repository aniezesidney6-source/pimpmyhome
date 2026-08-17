// Single shared scroll loop that drives parallax on registered elements.
// Positions are cached (measured once, re-measured on load/resize) so the
// scroll loop never calls getBoundingClientRect — no per-frame layout reflow,
// which is what keeps it smooth instead of janky.

const items = new Map() // el -> { amp, scale, top, height }
let bound = false
let raf = 0

const reduce =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

function measure(el, e) {
  const frame = el.parentElement
  if (!frame) return
  const r = frame.getBoundingClientRect()
  e.top = r.top + window.scrollY // document-relative
  e.height = r.height
}

function positionOne(el, e) {
  const vh = window.innerHeight
  const center = e.top + e.height / 2 - window.scrollY // viewport-relative
  const progress = (center - vh / 2) / (vh / 2 + e.height / 2)
  const y = -progress * e.amp
  el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0) scale(${e.scale})`
}

function update() {
  raf = 0
  const vh = window.innerHeight
  const sy = window.scrollY
  items.forEach((e, el) => {
    const top = e.top - sy
    if (top + e.height < -200 || top > vh + 200) return // offscreen — skip
    positionOne(el, e)
  })
}

function onScroll() {
  if (!raf) raf = requestAnimationFrame(update)
}

function remeasure() {
  items.forEach((e, el) => measure(el, e))
  onScroll()
}

export function registerParallax(el, { strength = 0.08 } = {}) {
  if (!el || reduce) return () => {}

  const e = { amp: 0, scale: 1, top: 0, height: 0 }
  measure(el, e)
  e.amp = e.height * strength
  e.scale = 1 + strength * 2 + 0.02
  items.set(el, e)
  positionOne(el, e) // synchronous initial placement — no jump before first rAF

  if (!bound) {
    bound = true
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', remeasure)
    window.addEventListener('load', remeasure)
  }

  return () => {
    items.delete(el)
    el.style.transform = ''
  }
}
