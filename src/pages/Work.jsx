import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectEditorial from '../components/ProjectEditorial'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'

const categories = ['All', 'Residential', 'Hospitality', 'Commercial']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <header className="u-shell pt-32 md:pt-44">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-8">
Selected Projects, 2023 / 2026
          </span>
          <h1 className="u-display col-span-4 md:col-span-10 max-w-[14ch]">
            A catalogue of considered interiors.
          </h1>
        </Reveal>

        {/* Filter — editorial, not pills */}
        <div className="mt-14 md:mt-20 border-t border-b border-line py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`u-meta u-link transition-colors duration-300 ${
                filter === c ? 'text-ink' : 'text-stone hover:text-ink'
              }`}
            >
              {c}
              {c !== 'All' && (
                <span className="ml-2 text-line">
                  {projects.filter((p) => p.category === c).length}
                </span>
              )}
            </button>
          ))}
          <span className="u-meta text-stone ml-auto">
            {shown.length} {shown.length === 1 ? 'Project' : 'Projects'}
          </span>
        </div>
      </header>

      <section className="u-shell mt-20 md:mt-32">
        <div className="space-y-28 md:space-y-40">
          {shown.map((p, i) => (
            <ProjectEditorial key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <CTABand className="mt-24 md:mt-40" statement="Have a space in mind?" />
    </>
  )
}
