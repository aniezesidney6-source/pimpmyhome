import { Link } from 'react-router-dom'
import ProjectImage from './ProjectImage'
import ProjectMeta from './ProjectMeta'
import Reveal from './Reveal'

// Editorial project component (§10). Four layouts (a/b/c/d) for rhythm.
// Content-driven — layout comes from project.layout.
export default function ProjectEditorial({ project, index = 0 }) {
  const to = `/work/${project.id}`

  const Title = ({ className = '' }) => (
    <h2 className={`u-h1 transition-colors duration-300 group-hover:text-terracotta ${className}`}>
      {project.title}
    </h2>
  )

  const Cta = () => (
    <span className="inline-block u-meta u-link mt-6">View Project</span>
  )

  const Number = () => (
    <span className="u-display block leading-none text-line">{project.number}</span>
  )

  // ---- Layout A: large image left (7), meta right (5) ----
  if (project.layout === 'a') {
    return (
      <Reveal as="article">
        <Link to={to} className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8 items-center" data-cursor="View">
          <div className="col-span-4 md:col-span-7">
            <ProjectImage src={project.featuredImage} alt={project.title} ratio="4 / 3" priority={index === 0} parallax />
          </div>
          <div className="col-span-4 md:col-span-4 md:col-start-9">
            <Number />
            <Title className="mt-4" />
            <div className="mt-4">
              <ProjectMeta project={project} showNumber={false} />
            </div>
            <p className="u-body text-stone mt-6 max-w-md">{project.description}</p>
            <Cta />
          </div>
        </Link>
      </Reveal>
    )
  }

  // ---- Layout B: meta left (5), large image right (7) ----
  if (project.layout === 'b') {
    return (
      <Reveal as="article">
        <Link to={to} className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8 items-center" data-cursor="View">
          <div className="col-span-4 md:col-span-4 md:order-1 order-2">
            <Number />
            <Title className="mt-4" />
            <div className="mt-4">
              <ProjectMeta project={project} showNumber={false} />
            </div>
            <p className="u-body text-stone mt-6 max-w-md">{project.description}</p>
            <Cta />
          </div>
          <div className="col-span-4 md:col-span-7 md:col-start-6 md:order-2 order-1">
            <ProjectImage src={project.featuredImage} alt={project.title} ratio="4 / 3" parallax />
          </div>
        </Link>
      </Reveal>
    )
  }

  // ---- Layout C: full-width image, text below ----
  if (project.layout === 'c') {
    return (
      <Reveal as="article">
        <Link to={to} className="group block" data-cursor="View">
          <ProjectImage src={project.featuredImage} alt={project.title} ratio="16 / 10" parallax />
          <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 mt-8 items-start">
            <div className="col-span-4 md:col-span-7">
              <div className="flex items-baseline gap-5">
                <span className="u-meta text-stone">{project.number}</span>
                <Title />
              </div>
            </div>
            <div className="col-span-4 md:col-span-4 md:col-start-9 mt-4 md:mt-2">
              <ProjectMeta project={project} showNumber={false} />
              <p className="u-body text-stone mt-4 max-w-md">{project.description}</p>
              <Cta />
            </div>
          </div>
        </Link>
      </Reveal>
    )
  }

  // ---- Layout D: offset composition (image indented, meta hangs left) ----
  return (
    <Reveal as="article">
      <Link to={to} className="group grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-8 items-center" data-cursor="View">
        <div className="col-span-4 md:col-span-3 md:pt-8 order-2 md:order-1">
          <Number />
          <div className="mt-4">
            <ProjectMeta project={project} showNumber={false} />
          </div>
          <p className="u-body text-stone mt-6">{project.description}</p>
          <Cta />
        </div>
        <div className="col-span-4 md:col-span-8 md:col-start-5 order-1 md:order-2">
          <Title className="mb-6 md:hidden" />
          <ProjectImage src={project.featuredImage} alt={project.title} ratio="3 / 2" parallax />
          <Title className="mt-6 hidden md:block" />
        </div>
      </Link>
    </Reveal>
  )
}
