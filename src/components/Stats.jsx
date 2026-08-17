import { stats } from '../data/projects'
import Reveal from './Reveal'

// Experience statistics (§14). Quiet, typographic — not dashboard tiles.
// Left padding keeps the numbers off the vertical dividers.
export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-line">
      {stats.map((s, i) => (
        <Reveal
          key={s.label}
          delay={i * 60}
          className={
            'py-8 md:py-10 ' +
            // mobile (2 cols): right column gets a left divider + padding
            'max-md:[&:nth-child(even)]:pl-6 max-md:[&:nth-child(even)]:border-l max-md:[&:nth-child(even)]:border-line ' +
            // desktop (4 cols): uniform padding + divider on every cell except the first
            'md:pl-8 md:border-l md:border-line md:first:border-l-0 md:first:pl-0'
          }
        >
          <div className="u-h1">{s.value}</div>
          <div className="u-meta text-stone mt-3">{s.label}</div>
        </Reveal>
      ))}
    </div>
  )
}
