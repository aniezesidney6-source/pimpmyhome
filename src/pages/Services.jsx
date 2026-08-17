import { Link } from 'react-router-dom'
import ServiceList from '../components/ServiceList'
import CTABand from '../components/CTABand'
import Reveal from '../components/Reveal'
import ProjectImage from '../components/ProjectImage'
import { projects } from '../data/projects'

const process = [
  { number: '01', title: 'Enquiry & Brief', body: 'We listen first — to how you live or work, and to the space itself.' },
  { number: '02', title: 'Concept', body: 'A spatial narrative, material direction and the first drawings.' },
  { number: '03', title: 'Design Development', body: 'Detailed plans, elevations, FF&E and technical documentation.' },
  { number: '04', title: 'Delivery', body: 'Procurement, site coordination and styling through to handover.' },
]

export default function Services() {
  return (
    <>
      <header className="u-shell pt-32 md:pt-44">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-8">Services</span>
          <h1 className="u-display col-span-4 md:col-span-10 max-w-[15ch]">
            From first sketch to final object.
          </h1>
          <p className="u-body-lg text-stone col-span-4 md:col-span-6 mt-10">
            A complete design service, held end to end by one studio. We take a small number of
            projects each year and see each one through in full.
          </p>
        </Reveal>
      </header>

      <section className="u-shell mt-16 md:mt-28">
        <ServiceList />
      </section>

      {/* Process */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 mb-14 md:mb-20">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-6">How we work</span>
          <h2 className="u-h1 col-span-4 md:col-span-8 max-w-[16ch]">A calm, four-part process.</h2>
        </Reveal>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-12 border-t border-line pt-12">
          {process.map((s, i) => (
            <Reveal key={s.number} delay={i * 60} className="col-span-4 md:col-span-3">
              <span className="u-meta text-stone">{s.number}</span>
              <h3 className="u-h3 mt-4">{s.title}</h3>
              <p className="u-body text-stone mt-3">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Editorial image break */}
      <section className="u-shell mt-24 md:mt-40">
        <Reveal>
          <ProjectImage
            src={projects[1].images[1]}
            alt="Detail of a completed interior"
            ratio="16 / 9"
            hover={false}
            parallax
          />
        </Reveal>
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 mt-10">
          <p className="u-h3 col-span-4 md:col-span-7 max-w-2xl">
            “The best interiors don’t announce themselves. They simply feel resolved — as though the
            room could not have been any other way.”
          </p>
          <div className="col-span-4 md:col-span-3 md:col-start-10 md:justify-self-end mt-6 md:mt-2">
            <Link to="/work" className="u-meta u-link">
              See the Work
            </Link>
          </div>
        </div>
      </section>

      <CTABand className="mt-24 md:mt-40" statement="Tell us about your project." />
    </>
  )
}
