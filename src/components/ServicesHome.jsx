import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { services, projects } from '../data/projects'
import Reveal from './Reveal'

// Editorial services list with hover-reveal (§13). Hovering a row reveals the
// related project image in the panel on the right. Desktop interaction only;
// the list stands on its own on mobile.
export default function ServicesHome() {
  const [active, setActive] = useState(0)

  return (
    <section className="u-shell mt-24 md:mt-40">
      <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 items-baseline mb-12 md:mb-16">
        <span className="u-meta text-stone col-span-4 md:col-span-6">Services</span>
        <div className="col-span-4 md:col-span-3 md:col-start-10 md:justify-self-end mt-2 md:mt-0">
          <Link to="/services" className="u-meta u-link">
            All Services
          </Link>
        </div>
      </Reveal>

      <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
        {/* List */}
        <div className="col-span-4 md:col-span-7 border-t border-line">
          {services.map((s, i) => (
            <Link
              key={s.number}
              to="/services"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex items-center gap-5 md:gap-8 py-6 md:py-7 border-b border-line"
            >
              <span className="u-meta text-stone w-6 shrink-0">{s.number}</span>
              <span className="u-h2 flex-1 transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:text-terracotta">
                {s.title}
              </span>
              <Plus
                size={20}
                className="text-ink shrink-0 transition-transform duration-500 ease-out group-hover:rotate-90"
              />
            </Link>
          ))}
        </div>

        {/* Hover-reveal image panel (desktop) */}
        <div className="hidden md:block md:col-span-4 md:col-start-9">
          <div className="sticky top-28">
            <div className="img-frame relative" style={{ aspectRatio: '4 / 5' }}>
              {services.map((s, i) => {
                const p = projects[i % projects.length]
                return (
                  <img
                    key={s.number}
                    src={p.featuredImage}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{
                      opacity: active === i ? 1 : 0,
                      transform: active === i ? 'scale(1)' : 'scale(1.04)',
                      transition: 'opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
                    }}
                  />
                )
              })}
            </div>
            <div className="u-meta text-stone mt-4 flex justify-between">
              <span>{services[active].title}</span>
              <span>{projects[active % projects.length].location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
