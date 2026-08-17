import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { studio } from '../data/projects'

// Minimal editorial footer (§17).
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line mt-24 md:mt-40">
      <div className="u-shell py-16 md:py-20">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-12">
          {/* Studio */}
          <div className="col-span-4 md:col-span-5">
            <Link to="/" className="u-h3 block leading-none tracking-tight">
              {studio.name}
            </Link>
            <p className="u-caption mt-4 max-w-xs">
              {studio.tagline}. Composing considered, material-led interiors across residential,
              hospitality and commercial work.
            </p>
          </div>

          <div className="col-span-2 md:col-span-2 md:col-start-7">
            <p className="u-meta text-stone mb-5">Menu</p>
            <ul className="space-y-3">
              {[
                ['Work', '/work'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Contact', '/contact'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="u-body u-link">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <p className="u-meta text-stone mb-5">Connect</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${studio.email}`} className="u-body u-link break-all">
                  {studio.email}
                </a>
              </li>
              <li>
                <a href={`tel:${studio.phoneRaw}`} className="u-body u-link">
                  {studio.phone}
                </a>
              </li>
              <li>
                <a
                  href={studio.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="u-body u-link inline-flex items-center gap-1"
                >
                  Instagram <ArrowUpRight size={15} />
                </a>
              </li>
              <li>
                <a
                  href={studio.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="u-body u-link inline-flex items-center gap-1"
                >
                  TikTok <ArrowUpRight size={15} />
                </a>
              </li>
              <li>
                <a
                  href={studio.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="u-body u-link inline-flex items-center gap-1"
                >
                  WhatsApp <ArrowUpRight size={15} />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 md:col-span-2">
            <p className="u-meta text-stone mb-5">Studio</p>
            <p className="u-body">{studio.location}</p>
          </div>
        </div>

        {/* Oversized wordmark — stretches edge to edge; SVG textLength avoids
            descender clipping and lets it fill the full width responsively. */}
        <Link
          to="/"
          aria-label={`${studio.name}, home`}
          className="group block mt-16 md:mt-24 text-ink transition-colors duration-500 hover:text-terracotta"
        >
          <svg
            viewBox="0 0 1000 232"
            width="100%"
            preserveAspectRatio="xMidYMid meet"
            role="img"
            aria-label={studio.name}
            className="block w-full overflow-visible"
          >
            <text
              x="0"
              y="184"
              textLength="1000"
              lengthAdjust="spacingAndGlyphs"
              fill="currentColor"
              fontFamily="'Neue Montreal','Helvetica Neue','Inter',system-ui,Arial,sans-serif"
              fontWeight="500"
              fontSize="205"
            >
              {studio.name}
            </text>
          </svg>
        </Link>

        <div className="mt-14 md:mt-20 pt-8 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="u-meta text-stone">
            © {year} {studio.name}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="u-meta text-stone u-link">
              Privacy
            </a>
            <span className="u-meta text-stone">{studio.location}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
