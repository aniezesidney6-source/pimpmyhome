import { Link } from 'react-router-dom'
import { projects, studio } from '../data/projects'
import ProjectEditorial from '../components/ProjectEditorial'
import ProjectImage from '../components/ProjectImage'
import PhilosophyList from '../components/PhilosophyList'
import ServicesHome from '../components/ServicesHome'
import HeroVideo from '../components/HeroVideo'
import CountUp from '../components/CountUp'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import HomeDecor from '../components/HomeDecor'

const DESIGNER_IMG =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80'

export default function Home() {
  const featured = projects.slice(0, 4)

  return (
    <div className="relative">
      <HomeDecor />
      <div className="relative z-10">
      {/* ---------------- HERO ---------------- */}
      <section className="u-shell pt-32 md:pt-44">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <div className="col-span-4 md:col-span-12 flex items-center justify-between">
            <span className="u-meta text-stone">{studio.tagline}</span>
            <span className="u-meta text-stone hidden sm:block">
              {studio.location}
            </span>
          </div>
        </div>

        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 mt-8 md:mt-12">
          <h1 className="u-display col-span-4 md:col-span-11">
            Interiors composed for{' '}
            <br className="hidden md:block" />
            light, material and time.
          </h1>
        </Reveal>

        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8 mt-10 md:mt-14 items-end">
          <p className="u-body-lg text-stone col-span-4 md:col-span-5">
            A Lagos interior design studio shaping residential,
            <br className="hidden md:block" /> hospitality and commercial spaces — built to last.
          </p>
          <div className="col-span-4 md:col-span-4 md:col-start-9 flex flex-wrap gap-4 md:justify-end">
            <Link
              to="/work"
              className="inline-flex items-center justify-center u-meta border border-ink px-6 h-[52px] rounded-[2px] hover:bg-ink hover:text-canvas transition-colors duration-300"
            >
              Explore Work
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center u-meta bg-ink text-canvas px-6 h-[52px] rounded-[2px] hover:bg-terracotta transition-colors duration-300"
            >
              Start a Project
            </Link>
          </div>
        </div>

        <Reveal className="mt-16 md:mt-24" delay={80}>
          <HeroVideo />
        </Reveal>
      </section>

      {/* ---------------- SELECTED WORK ---------------- */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 items-baseline mb-16 md:mb-24">
          <h2 className="u-h2 col-span-4 md:col-span-6 flex items-baseline gap-4">
            <span className="u-meta text-stone">01</span>
            Selected Work
          </h2>
          <div className="col-span-4 md:col-span-3 md:col-start-10 md:justify-self-end">
            <Link to="/work" className="u-meta u-link">
              All Projects
            </Link>
          </div>
        </Reveal>

        <div className="space-y-28 md:space-y-40">
          {featured.map((p, i) => (
            <ProjectEditorial key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* ---------------- SERVICES ---------------- */}
      <ServicesHome />

      {/* ---------------- PHILOSOPHY ---------------- */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 mb-16 md:mb-24">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-6">
            <span className="text-ink">03</span>&nbsp;&nbsp;&nbsp;Approach
          </span>
          <h2 className="u-h1 col-span-4 md:col-span-9 max-w-[18ch]">
            Four ideas hold every project we make.
          </h2>
        </Reveal>
        <PhilosophyList />
      </section>

      {/* ---------------- ABOUT THE DESIGNER ---------------- */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="u-meta text-stone block mb-10 md:mb-14">
          <span className="text-ink">04</span>&nbsp;&nbsp;&nbsp;The Designer
        </Reveal>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-10 items-start">
          <Reveal className="col-span-4 md:col-span-5">
            <ProjectImage src={DESIGNER_IMG} alt="John Kennedy, founder of Pimpmyhome" ratio="4 / 5" hover={false} parallax parallaxStrength={0.08} />
            <p className="u-caption mt-4">John Kennedy — Founder &amp; Creative Director</p>
          </Reveal>

          <Reveal className="col-span-4 md:col-span-6 md:col-start-7" delay={80}>
            <h2 className="u-h1 max-w-[16ch]">Designing spaces with intention.</h2>
            <p className="u-body-lg text-stone mt-8 max-w-xl">
              John Kennedy founded Pimpmyhome to make interiors that feel considered rather than
              decorated. He works closely with a small number of clients each year, shaping light,
              material and proportion into rooms that are calm, tactile and built to last.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-x-6 mt-12 border-t border-line pt-8">
              {[
                ['15+', 'Years'],
                ['48', 'Projects'],
                ['08', 'Cities'],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="u-h1"><CountUp value={v} /></div>
                  <div className="u-meta text-stone mt-2">{l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/about" className="u-meta u-link">
                More about the designer
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- CLOSING CTA ---------------- */}
      <CTABand className="mt-24 md:mt-40" />
      </div>
    </div>
  )
}
