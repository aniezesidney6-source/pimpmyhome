import { useEffect, useState } from 'react'

// Quiet editorial cookie notice — a small paper card, not a full-screen wall.
// Choice is stored so it never nags again. Declines non-essential by default.
const KEY = 'pmh_cookie_choice'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let stored = null
    try {
      stored = localStorage.getItem(KEY)
    } catch {
      stored = null
    }
    if (!stored) {
      const t = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value)
    } catch {
      /* ignore */
    }
    setShow(false)
  }

  return (
    <div
      className="fixed z-[80] bottom-5 left-5 right-5 sm:right-auto sm:w-[380px]"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: show ? 'auto' : 'none',
        transition: 'opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out)',
      }}
      role="region"
      aria-label="Cookie notice"
      aria-hidden={!show}
    >
      <div className="bg-canvas border border-line p-6 shadow-[0_20px_50px_rgba(23,23,21,0.10)]">
        <p className="u-meta text-stone mb-3">Cookies</p>
        <p className="u-body text-ink">
          We use a few cookies to understand how the studio’s work is explored. You can accept, or
          keep only what’s essential.
        </p>
        <div className="flex items-center gap-5 mt-5">
          <button
            type="button"
            onClick={() => choose('accepted')}
            className="u-meta bg-ink text-canvas px-5 h-[44px] rounded-[2px] hover:bg-terracotta transition-colors duration-300"
          >
            Accept
          </button>
          <button
            type="button"
            onClick={() => choose('essential')}
            className="u-meta u-link text-stone hover:text-ink transition-colors duration-300"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  )
}
