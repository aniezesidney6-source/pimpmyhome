import { philosophy } from '../data/projects'
import Reveal from './Reveal'

// Philosophy (§15). Large editorial words + supporting text. No cards.
export default function PhilosophyList() {
  return (
    <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-16 md:gap-y-24">
      {philosophy.map((p, i) => (
        <Reveal
          key={p.number}
          delay={i * 60}
          className="col-span-4 md:col-span-6 flex flex-col"
        >
          <span className="u-meta text-stone mb-5">{p.number}</span>
          <span className="u-display leading-[0.95] mb-5">{p.word}</span>
          <p className="u-body-lg text-stone max-w-md">{p.body}</p>
        </Reveal>
      ))}
    </div>
  )
}
