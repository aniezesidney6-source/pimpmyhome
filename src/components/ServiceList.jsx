import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { services } from '../data/projects'
import Reveal from './Reveal'

// Editorial services list (§13). Rows with separators; expand for detail.
export default function ServiceList() {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-line">
      {services.map((s, i) => {
        const isOpen = open === i
        return (
          <Reveal
            key={s.number}
            as="div"
            delay={i * 40}
            className="border-b border-line"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full text-left group py-7 md:py-9 flex items-start gap-5 md:gap-10"
            >
              <span className="u-meta text-stone pt-2 md:pt-3 w-8 shrink-0">
                {s.number}
              </span>
              <span className="flex-1">
                <span className="u-h2 block transition-colors duration-300 group-hover:text-terracotta">
                  {s.title}
                </span>
                <span
                  className="grid transition-[grid-template-rows] duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <span className="overflow-hidden">
                    <span className="u-body-lg text-stone block max-w-xl pt-4">
                      {s.body}
                    </span>
                  </span>
                </span>
              </span>
              <span className="pt-2 md:pt-3 text-ink shrink-0">
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
              </span>
            </button>
          </Reveal>
        )
      })}
    </div>
  )
}
