import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="u-shell min-h-[70vh] flex flex-col justify-center pt-32">
      <span className="u-meta text-stone mb-6">Error 404</span>
      <h1 className="u-display max-w-[14ch]">This page was left unfurnished.</h1>
      <p className="u-body-lg text-stone mt-8 max-w-md">
        The page you’re looking for doesn’t exist — or has moved to another room.
      </p>
      <div className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center justify-center u-meta bg-ink text-canvas px-6 h-[52px] rounded-[2px] hover:bg-terracotta transition-colors duration-300"
        >
          Back Home
        </Link>
      </div>
    </section>
  )
}
