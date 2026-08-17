import { useState } from 'react'

// Minimal contact form (§16). Underlined fields, accessible labels.
const Field = ({ label, id, type = 'text', ...rest }) => (
  <label htmlFor={id} className="block">
    <span className="u-meta text-stone">{label}</span>
    <input
      id={id}
      name={id}
      type={type}
      className="mt-3 w-full bg-transparent border-b border-line pb-3 u-body-lg text-ink placeholder:text-[#b6b2a8] focus:border-ink focus:outline-none transition-colors duration-300"
      {...rest}
    />
  </label>
)

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo only — no data leaves the browser.
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border-t border-line pt-10">
        <p className="u-h3">Thank you — we’ll be in touch shortly.</p>
        <p className="u-body text-stone mt-3">
          Your enquiry has been noted. This is a demonstration form; connect it to your inbox or a
          service like Formspree to receive messages.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
      <Field label="Name" id="name" placeholder="Your name" required autoComplete="name" />
      <Field label="Email" id="email" type="email" placeholder="you@email.com" required autoComplete="email" />
      <Field label="Location" id="loc" placeholder="City" autoComplete="off" />
      <Field label="Project type" id="ptype" placeholder="Residential, hospitality…" />
      <label htmlFor="message" className="block sm:col-span-2">
        <span className="u-meta text-stone">Tell us about the project</span>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A few lines on the space, scope and timeline."
          className="mt-3 w-full bg-transparent border-b border-line pb-3 u-body-lg text-ink placeholder:text-[#b6b2a8] focus:border-ink focus:outline-none transition-colors duration-300 resize-none"
        />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center u-meta bg-ink text-canvas px-6 h-[52px] rounded-[2px] hover:bg-terracotta transition-colors duration-300"
        >
          Send Enquiry
        </button>
      </div>
    </form>
  )
}
