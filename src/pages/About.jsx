import { recognition, stats, studio, projects } from '../data/projects'
import ProjectImage from '../components/ProjectImage'
import Stats from '../components/Stats'
import PhilosophyList from '../components/PhilosophyList'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'

const PORTRAIT =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'

export default function About() {
  return (
    <>
      {/* Editorial profile intro (§14) */}
      <header className="u-shell pt-32 md:pt-44">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-8">
The Studio, Lagos, Nigeria
          </span>
          <h1 className="u-display col-span-4 md:col-span-11 max-w-[18ch]">
            We design rooms to be lived in slowly.
          </h1>
        </Reveal>
      </header>

      <section className="u-shell mt-16 md:mt-28">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-12 items-start">
          <Reveal className="col-span-4 md:col-span-5">
            <ProjectImage src={PORTRAIT} alt="John Kennedy, founder of Pimpmyhome" ratio="4 / 5" hover={false} />
            <p className="u-caption mt-4">John Kennedy — Founder &amp; Creative Director</p>
          </Reveal>

          <Reveal className="col-span-4 md:col-span-6 md:col-start-7" delay={80}>
            <p className="u-body-lg">
              Pimpmyhome is a Lagos interior design studio built on a simple conviction: that a
              well-made interior is one of the quietest luxuries there is. We work on residential,
              hospitality and commercial spaces that reward long looking.
            </p>
            <p className="u-body text-stone mt-6">
              Our method is unhurried. We begin with the fabric of a space — its light, its
              proportions, the way a person will actually move through it — and only then turn to
              surface and object. We favour a small, honest palette of materials and let them age
              into the room. Nothing here is styled to be photographed; it is designed to be lived
              with.
            </p>
            <p className="u-body text-stone mt-6">
              We keep the studio deliberately small and take on a limited number of projects each
              year, so that the same hands that draw a scheme also see it to completion on site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="mb-14 md:mb-20">
          <span className="u-meta text-stone block mb-6">In numbers</span>
          <h2 className="u-h1 max-w-[16ch]">A practice measured in years, not seasons.</h2>
        </Reveal>
        <Stats />
      </section>

      {/* Philosophy */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="mb-16 md:mb-24">
          <span className="u-meta text-stone block mb-6">Philosophy</span>
          <h2 className="u-h1 max-w-[18ch]">What we return to, project after project.</h2>
        </Reveal>
        <PhilosophyList />
      </section>

      {/* Recognition */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="mb-12 md:mb-16">
          <span className="u-meta text-stone block mb-6">Selected Recognition</span>
        </Reveal>
        <div className="border-t border-line">
          {recognition.map((r, i) => (
            <Reveal
              key={r.body}
              delay={i * 40}
              className="grid grid-cols-4 md:grid-cols-12 gap-x-6 py-6 border-b border-line items-baseline"
            >
              <span className="u-meta text-stone col-span-1 md:col-span-2">{r.year}</span>
              <span className="u-h3 col-span-3 md:col-span-9">{r.body}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand className="mt-24 md:mt-40" statement="Work with the studio." />
    </>
  )
}
