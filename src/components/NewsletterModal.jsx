import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { studio } from '../data/projects'

// Editorial newsletter invite — appears once, after a pause. Serif statement,
// underlined field, quiet close. Dismissal/subscription is remembered.
const KEY = 'pmh_newsletter'

export default function NewsletterModal() {
  const [show, setShow] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    let stored = null
    try {
      stored = localStorage.getItem(KEY)
    } catch {
      stored = 'seen'
    }
    if (stored) return
    const t = setTimeout(() => setShow(true), 15000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && close()
    if (show) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show])

  const remember = (v) => {
    try {
      localStorage.setItem(KEY, v)
    } catch {
      /* ignore */
    }
  }

  const close = () => {
    remember('dismissed')
    setShow(false)
  }

  const submit = (e) => {
    e.preventDefault()
    remember('subscribed') // demo only — wire to your email provider
    setSent(true)
    setTimeout(() => setShow(false), 2600)
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center px-5"
      style={{
        pointerEvents: show ? 'auto' : 'none',
        visibility: show ? 'visible' : 'hidden',
        transition: 'visibility 0.4s',
      }}
      aria-hidden={!show}
    >
      {/* Scrim */}
      <div
        onClick={close}
        className="absolute inset-0 bg-ink/40"
        style={{ opacity: show ? 1 : 0, transition: 'opacity 0.45s var(--ease-out)' }}
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Newsletter"
        className="relative bg-canvas border border-line w-full max-w-md p-8 md:p-10 shadow-[0_30px_80px_rgba(23,23,21,0.18)]"
        style={{
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
          transition: 'opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out)',
        }}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute top-5 right-5 text-stone hover:text-ink transition-colors duration-300"
        >
          <X size={18} />
        </button>

        {sent ? (
          <div className="py-6">
            <p className="u-h3">Thank you — you’re on the list.</p>
            <p className="u-body text-stone mt-3">
              We’ll write only occasionally, when there’s something considered to share.
            </p>
          </div>
        ) : (
          <>
            <span className="u-meta text-stone">The Studio Letter</span>
            <h2 className="u-h2 mt-4">Considered, once in a while.</h2>
            <p className="u-body text-stone mt-4">
              New projects, material studies and the occasional note from {studio.name}. No noise.
            </p>
            <form onSubmit={submit} className="mt-7">
              <label htmlFor="nl-email" className="block">
                <span className="u-meta text-stone">Email</span>
                <input
                  id="nl-email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full bg-transparent border-b border-line pb-3 u-body-lg text-ink placeholder:text-[#b6b2a8] focus:border-ink focus:outline-none transition-colors duration-300"
                />
              </label>
              <button
                type="submit"
                className="mt-6 w-full u-meta bg-ink text-canvas h-[52px] rounded-[2px] hover:bg-terracotta transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
