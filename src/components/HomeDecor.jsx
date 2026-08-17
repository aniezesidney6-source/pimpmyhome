import { useRef, useState } from 'react'
import statueBronze from '../assets/decor/statue-bronze.svg'
import statueZeus from '../assets/decor/statue-zeus.png'
import chairOrange from '../assets/decor/chair-orange.png'
import chairBurgundy from '../assets/decor/chair-burgundy.png'
import sofaYellow from '../assets/decor/sofa-yellow.png'

// Draggable decor layer — the pasted PNGs as objects the visitor can pick up
// and move anywhere on the home page. Sits above content but only the images
// capture pointer events, so links in the gutters stay clickable.
//
// Each piece has a default resting spot (top %, and a left/right margin offset).
// On first drag we seed from its current px position, then follow the pointer.
const pieces = [
  // Around the hero — used exactly as uploaded (no rotation, no shadow effect)
  { src: statueBronze,  top: '5%',  right: '-1vw',   w: 'clamp(120px, 17vw, 290px)', rot: 0, raw: true },
  { src: statueZeus,    top: '24%', left: '-3vw',    w: 'clamp(120px, 15vw, 240px)', rot: 0 },
  { src: chairOrange,   top: '40%', right: '-3.5vw', w: 'clamp(130px, 16vw, 260px)', rot: 3 },
  { src: sofaYellow,    top: '60%', left: '-3.5vw',  w: 'clamp(160px, 21vw, 340px)', rot: 0 },
  { src: chairBurgundy, top: '80%', right: 'calc(-2.5vw + 20px)', w: 'clamp(130px, 15vw, 250px)', rot: 3 },
]

export default function HomeDecor() {
  const layerRef = useRef(null)
  const drag = useRef(null) // { i, startX, startY, baseX, baseY }
  const [pos, setPos] = useState({}) // i -> {x, y} once moved
  const [dragging, setDragging] = useState(null)

  const onPointerDown = (e, i) => {
    const el = e.currentTarget
    el.setPointerCapture(e.pointerId)
    drag.current = {
      i,
      startX: e.clientX,
      startY: e.clientY,
      baseX: el.offsetLeft, // current px position within the (positioned) layer
      baseY: el.offsetTop,
      w: el.offsetWidth,
      h: el.offsetHeight,
    }
    setDragging(i)
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d) return
    const layer = layerRef.current
    const maxX = layer.clientWidth - d.w
    const maxY = layer.clientHeight - d.h
    const clamp = (v, max) => Math.max(-d.w * 0.5, Math.min(v, max + d.w * 0.5))
    const x = Math.min(Math.max(d.baseX + (e.clientX - d.startX), -d.w * 0.4), maxX + d.w * 0.4)
    const y = Math.max(0, Math.min(d.baseY + (e.clientY - d.startY), maxY))
    setPos((p) => ({ ...p, [d.i]: { x, y } }))
  }

  const endDrag = () => {
    drag.current = null
    setDragging(null)
  }

  return (
    <div
      ref={layerRef}
      className="hidden md:block pointer-events-none absolute inset-0 overflow-hidden select-none"
      style={{ zIndex: 40 }}
    >
      {pieces.map((p, i) => {
        const moved = pos[i]
        return (
          <img
            key={i}
            src={p.src}
            alt=""
            draggable={false}
            onPointerDown={(e) => onPointerDown(e, i)}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            className="pointer-events-auto absolute"
            style={{
              top: moved ? moved.y : p.top,
              left: moved ? moved.x : p.left,
              right: moved ? undefined : p.right,
              width: p.w,
              transform: `rotate(${p.rot}deg) scale(${dragging === i ? 1.04 : 1})`,
              filter: p.raw
                ? 'none'
                : `drop-shadow(0 ${dragging === i ? 40 : 26}px ${
                    dragging === i ? 55 : 38
                  }px rgba(23,23,21,${dragging === i ? 0.22 : 0.14}))`,
              cursor: dragging === i ? 'grabbing' : 'grab',
              touchAction: 'none',
              transition: dragging === i ? 'none' : 'transform 0.35s cubic-bezier(0.16,1,0.3,1), filter 0.35s',
              zIndex: dragging === i ? 2 : 1,
              userSelect: 'none',
              WebkitUserSelect: 'none',
            }}
          />
        )
      })}
    </div>
  )
}
