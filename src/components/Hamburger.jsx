// Editorial hamburger — two thin lines of unequal width (deliberate asymmetry)
// that resolve into a clean X on open. Quiet, precise, architectural.
export default function Hamburger({ open, onClick }) {
  const line =
    'absolute left-0 h-[1.5px] bg-ink transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]'
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      className="relative h-6 w-8 -mr-1"
    >
      <span
        className={line}
        style={{
          top: open ? '50%' : '35%',
          width: open ? '100%' : '100%',
          transform: open ? 'translateY(-50%) rotate(45deg)' : 'none',
        }}
      />
      <span
        className={line}
        style={{
          top: open ? '50%' : '65%',
          width: open ? '100%' : '62%',
          transform: open ? 'translateY(-50%) rotate(-45deg)' : 'none',
        }}
      />
    </button>
  )
}
