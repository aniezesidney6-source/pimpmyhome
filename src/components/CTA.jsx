import { Link } from 'react-router-dom'

// Buttons (§9). Minimal, near-rectangular. No arrow glyphs.
const base =
  'group inline-flex items-center justify-center u-meta transition-colors duration-300 select-none'

export function PrimaryCTA({ to = '/contact', children = 'Start a Project', className = '' }) {
  return (
    <Link
      to={to}
      className={`${base} bg-ink text-canvas px-6 h-[52px] rounded-[2px] hover:bg-terracotta ${className}`}
    >
      <span>{children}</span>
    </Link>
  )
}

export function SecondaryCTA({ to = '/work', children = 'Explore Work', className = '' }) {
  return (
    <Link
      to={to}
      className={`${base} border border-ink text-ink px-6 h-[52px] rounded-[2px] hover:bg-ink hover:text-canvas ${className}`}
    >
      <span>{children}</span>
    </Link>
  )
}

// Quiet inline text link (underline reveals on hover).
export function TextArrow({ children, className = '' }) {
  return (
    <span className={`group inline-flex items-center u-meta ${className}`}>
      <span className="u-link">{children}</span>
    </span>
  )
}
