import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { studio } from '../data/projects'
import { PrimaryCTA } from './CTA'

// Editorial side drawer (§8). Slides in from the right beneath the top bar, so
// the morphing hamburger stays on top to close it. Quiet, paper-like, serif.
export default function MobileMenu({ open, onClose, links }) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      style={{ pointerEvents: open ? 'auto' : 'none' }}
      aria-hidden={!open}
    >
      {/* Scrim */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-ink/35"
        style={{
          opacity: open ? 1 : 0,
          transition: 'opacity 0.5s var(--ease-out)',
        }}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className="absolute top-0 right-0 h-full bg-canvas border-l border-line flex flex-col"
        style={{
          width: 'min(86vw, 360px)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.55s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: open ? '-24px 0 60px rgba(23,23,21,0.10)' : 'none',
        }}
      >
        <div className="flex-1 flex flex-col pt-24 px-7">
          <span className="u-meta text-stone mb-8">Menu</span>
          <nav className="flex flex-col border-t border-line">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={onClose}
                className={({ isActive }) =>
                  `u-h1 py-4 border-b border-line flex items-baseline gap-4 ${
                    isActive ? 'text-terracotta' : 'text-ink'
                  }`
                }
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateX(24px)',
                  transition: `opacity 0.5s ${0.12 + i * 0.07}s var(--ease-out), transform 0.5s ${
                    0.12 + i * 0.07
                  }s var(--ease-out)`,
                }}
              >
                <span className="u-meta text-stone">0{i + 1}</span>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-10">
            <PrimaryCTA className="w-full" />
          </div>
        </div>

        {/* Contact footer */}
        <div className="px-7 pb-10 pt-6 border-t border-line flex flex-col gap-3">
          <a href={`tel:${studio.phoneRaw}`} className="u-meta text-stone">
            {studio.phone}
          </a>
          <div className="flex items-center gap-5">
            <a
              href={studio.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="u-meta inline-flex items-center gap-1"
            >
              Instagram <ArrowUpRight size={14} />
            </a>
            <a
              href={studio.tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="u-meta inline-flex items-center gap-1"
            >
              TikTok <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}
