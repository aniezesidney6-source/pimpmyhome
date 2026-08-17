// Small uppercase metadata block (§12).
export default function ProjectMeta({ project, className = '', showNumber = true }) {
  return (
    <div className={`u-meta text-stone flex flex-wrap gap-x-1.5 gap-y-1 ${className}`}>
      {showNumber && <span className="text-ink">{project.number},</span>}
      <span>{project.location},</span>
      <span>{project.category},</span>
      <span>{project.year}</span>
    </div>
  )
}
