import { Link } from 'react-router-dom'
import ProjectImage from './ProjectImage'
import ProjectMeta from './ProjectMeta'

// Next project (§11.13). Full-bleed editorial hand-off.
export default function NextProject({ project }) {
  return (
    <section aria-label="Next project" className="mt-24 md:mt-40">
      <div className="u-shell">
        <div className="u-meta text-stone mb-8">Next Project</div>
      </div>
      <Link
        to={`/work/${project.id}`}
        className="group block"
        data-cursor="View"
      >
        <div className="u-shell">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 items-end mb-8">
            <div className="col-span-4 md:col-span-8">
              <span className="u-meta text-stone">{project.number}</span>
              <h2 className="u-h1 mt-3 transition-colors duration-300 group-hover:text-terracotta">
                {project.title}
              </h2>
            </div>
            <div className="col-span-4 md:col-span-4 md:justify-self-end">
              <span className="inline-block u-meta u-link">View Project</span>
              <div className="mt-4">
                <ProjectMeta project={project} showNumber={false} />
              </div>
            </div>
          </div>
        </div>
        <div className="u-shell">
          <ProjectImage src={project.featuredImage} alt={project.title} ratio="16 / 10" />
        </div>
      </Link>
    </section>
  )
}
