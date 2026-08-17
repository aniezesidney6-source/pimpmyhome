import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProject, getNextProject } from '../data/projects'
import ProjectImage from '../components/ProjectImage'
import NextProject from '../components/NextProject'
import Reveal from '../components/Reveal'
import CTABand from '../components/CTABand'
import NotFound from './NotFound'

// Detail spec (§11): number → title → meta → hero → intro → details →
// concept → materials → image sequence → gallery → closing → next.
export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  useEffect(() => {
    if (project) document.title = `${project.title} — Pimpmyhome`
  }, [project])

  if (!project) return <NotFound />
  const next = getNextProject(id)

  const facts = [
    ['Location', project.location],
    ['Category', project.category],
    ['Year', project.year],
    ['Area', project.area],
  ]

  return (
    <article>
      {/* Back */}
      <div className="u-shell pt-28 md:pt-36">
        <Link to="/work" className="group inline-flex items-center gap-2 u-meta text-stone hover:text-ink">
          <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
          All Work
        </Link>
      </div>

      {/* Title block */}
      <header className="u-shell mt-10 md:mt-16">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6 items-end">
          <span className="u-display text-line col-span-4 md:col-span-2 leading-none">
            {project.number}
          </span>
          <h1 className="u-h1 col-span-4 md:col-span-8 md:col-start-3">{project.title}</h1>
        </Reveal>
      </header>

      {/* Hero */}
      <div className="u-shell mt-12 md:mt-16">
        <Reveal>
          <ProjectImage src={project.featuredImage} alt={project.title} ratio="16 / 9" priority hover={false} parallax />
        </Reveal>
      </div>

      {/* Facts + intro */}
      <section className="u-shell mt-16 md:mt-24">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-12 items-start">
          <Reveal className="col-span-4 md:col-span-3">
            <dl className="border-t border-line">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-4 border-b border-line">
                  <dt className="u-meta text-stone">{k}</dt>
                  <dd className="u-meta text-ink text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className="col-span-4 md:col-span-7 md:col-start-6" delay={80}>
            <span className="u-meta text-stone block mb-6">Introduction</span>
            <p className="u-h3 max-w-2xl">{project.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* Image */}
      <div className="u-shell mt-20 md:mt-32">
        <Reveal>
          <ProjectImage src={project.images[1]} alt={`${project.title} — interior detail`} ratio="16 / 10" />
        </Reveal>
      </div>

      {/* Concept (text) */}
      <section className="u-shell mt-20 md:mt-32">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8">
          <Reveal className="col-span-4 md:col-span-3">
            <span className="u-meta text-stone">Design Concept</span>
          </Reveal>
          <Reveal className="col-span-4 md:col-span-8 md:col-start-4" delay={60}>
            <p className="u-h2 max-w-3xl">{project.concept}</p>
          </Reveal>
        </div>
      </section>

      {/* Two-image sequence */}
      <section className="u-shell mt-20 md:mt-32">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8 items-center">
          <Reveal className="col-span-4 md:col-span-6">
            <ProjectImage src={project.images[2]} alt={`${project.title} — view`} ratio="4 / 5" />
          </Reveal>
          <Reveal className="col-span-4 md:col-span-6" delay={80}>
            <ProjectImage src={project.images[3]} alt={`${project.title} — view`} ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {/* Materials (§ material story) */}
      <section className="u-shell mt-20 md:mt-32">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-10">
          <Reveal className="col-span-4 md:col-span-3">
            <span className="u-meta text-stone">Material Story</span>
          </Reveal>
          <div className="col-span-4 md:col-span-8 md:col-start-4">
            <div className="border-t border-line">
              {project.materials.map((m, i) => (
                <Reveal
                  key={m}
                  delay={i * 40}
                  className="flex items-baseline gap-6 py-5 border-b border-line"
                >
                  <span className="u-meta text-stone w-8">0{i + 1}</span>
                  <span className="u-h3">{m}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Full-width closing image */}
      <div className="u-shell mt-20 md:mt-32">
        <Reveal>
          <ProjectImage src={project.images[4]} alt={`${project.title} — interior`} ratio="16 / 9" parallax />
        </Reveal>
      </div>

      {/* Closing statement */}
      <section className="u-shell mt-20 md:mt-32">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <p className="u-h2 col-span-4 md:col-span-9 max-w-[20ch]">{project.description}</p>
        </Reveal>
        <Reveal className="mt-10">
          <span className="u-meta text-stone">
            Services, {project.services.join(', ')}
          </span>
        </Reveal>
      </section>

      {/* Next project */}
      <NextProject project={next} />

      <CTABand className="mt-24 md:mt-40" statement="Start a project like this one." />
    </article>
  )
}
