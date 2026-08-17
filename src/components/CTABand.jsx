import Reveal from './Reveal'
import { PrimaryCTA } from './CTA'

// Closing editorial statement + CTA (§16). Reused on home, work, about, services.
export default function CTABand({
  statement = 'Let’s create something considered.',
  className = '',
}) {
  return (
    <section className={`u-shell ${className}`}>
      <Reveal className="border-t border-line pt-16 md:pt-24">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-x-6 gap-y-10 items-center">
          <h2 className="u-display col-span-4 md:col-span-9 max-w-[22ch]">{statement}</h2>
          <div className="col-span-4 md:col-span-3 md:justify-self-end">
            <PrimaryCTA />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
