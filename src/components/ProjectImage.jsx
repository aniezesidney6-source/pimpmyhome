import { useEffect, useRef, useState } from 'react'
import { registerParallax } from '../lib/parallax'

// Editorial image (§7). object-fit: cover, near-square corners, graceful
// fallback to a neutral field if the source fails to load.
// `parallax` makes the image drift within its frame as you scroll.
export default function ProjectImage({
  src,
  alt,
  ratio = '3 / 2',
  hover = true,
  priority = false,
  parallax = false,
  parallaxStrength = 0.08,
  className = '',
  imgClassName = '',
}) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)
  // Pre-scale so the parallax handler taking over never causes a visible jump.
  const parallaxScale = 1 + parallaxStrength * 2 + 0.02

  useEffect(() => {
    if (!parallax || !imgRef.current) return
    return registerParallax(imgRef.current, { strength: parallaxStrength })
  }, [parallax, parallaxStrength])

  return (
    <div
      className={`img-frame ${hover && !parallax ? 'img-hover' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {!failed && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={imgClassName}
          style={{
            opacity: loaded ? 1 : 0,
            transition: parallax
              ? 'opacity 0.8s cubic-bezier(0.16,1,0.3,1)'
              : 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
            transform: parallax ? `scale(${parallaxScale})` : undefined,
            willChange: parallax ? 'transform' : undefined,
          }}
        />
      )}
      {failed && (
        <div
          aria-label={alt}
          role="img"
          style={{
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, var(--color-line) 0%, #cfccc3 100%)',
          }}
        />
      )}
    </div>
  )
}
