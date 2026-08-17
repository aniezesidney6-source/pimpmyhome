import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { studio } from '../data/projects'
import { PrimaryCTA } from './CTA'
import MobileMenu from './MobileMenu'
import Hamburger from './Hamburger'

const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
        style={{
          backgroundColor: scrolled || open ? 'rgba(245,243,238,0.92)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(8px)' : 'none',
          borderBottom:
            scrolled ? '1px solid var(--color-line)' : '1px solid transparent',
        }}
        data-cursor=""
      >
        <nav className="u-shell flex items-center justify-between h-[68px] md:h-[76px]">
          <Link to="/" className="u-h3 leading-none tracking-tight" aria-label={`${studio.name}, home`}>
            {studio.name}
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-9">
            <ul className="flex items-center gap-8">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `u-meta u-link ${isActive ? 'text-ink' : 'text-stone'} hover:text-ink`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <PrimaryCTA className="!h-[44px] !px-5" />
          </div>

          {/* Mobile trigger — editorial hamburger */}
          <div className="md:hidden">
            <Hamburger open={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </nav>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} links={links} />
    </>
  )
}
