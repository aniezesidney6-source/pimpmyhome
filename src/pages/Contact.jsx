import { ArrowUpRight } from 'lucide-react'
import { studio } from '../data/projects'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'

const detail = [
  { label: 'Email', value: studio.email, href: `mailto:${studio.email}` },
  { label: 'Phone', value: studio.phone, href: `tel:${studio.phoneRaw}` },
  { label: 'WhatsApp', value: '+234 703 270 1763', href: studio.whatsapp, external: true },
  { label: 'Studio', value: studio.location, href: null },
  { label: 'Instagram', value: `@${studio.instagram}`, href: studio.instagramUrl, external: true },
  { label: 'TikTok', value: `@${studio.tiktok}`, href: studio.tiktokUrl, external: true },
]

export default function Contact() {
  return (
    <>
      <header className="u-shell pt-32 md:pt-44">
        <Reveal className="grid grid-cols-4 md:grid-cols-12 gap-x-6">
          <span className="u-meta text-stone col-span-4 md:col-span-12 mb-8">Contact</span>
          <h1 className="u-display col-span-4 md:col-span-11 max-w-[15ch]">
            Let’s create something considered.
          </h1>
          <p className="u-body-lg text-stone col-span-4 md:col-span-6 mt-10">
            Tell us a little about your space and how you’d like to use it. We take on a small number
            of projects each year and would be glad to hear about yours.
          </p>
        </Reveal>
      </header>

      <section className="u-shell mt-16 md:mt-28">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-16 items-start">
          {/* Details */}
          <Reveal className="col-span-4 md:col-span-3">
            <ul className="space-y-8">
              {detail.map((d) => (
                <li key={d.label}>
                  <span className="u-meta text-stone block mb-2">{d.label}</span>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.external ? '_blank' : undefined}
                      rel={d.external ? 'noreferrer' : undefined}
                      className="u-body-lg u-link inline-flex items-center gap-1 break-all"
                    >
                      {d.value}
                      {d.external && <ArrowUpRight size={15} />}
                    </a>
                  ) : (
                    <span className="u-body-lg">{d.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal className="col-span-4 md:col-span-8 md:col-start-5" delay={80}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
