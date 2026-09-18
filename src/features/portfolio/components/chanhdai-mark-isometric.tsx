"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

type Pt = {
  x: number
  y: number
}

const STEP_X = 55.425
const STEP_Y = 32

// Adjusted origin to center HG inside the SVG.
const ORIGIN_X = 55
const ORIGIN_Y = 20

const DEPTH = 32

function project(letterX: number, letterY: number, ox: number, oy: number): Pt {
  const gx = letterX + letterY + ox
  const gy = letterY - letterX + oy

  return {
    x: ORIGIN_X + gx * STEP_X,
    y: ORIGIN_Y + gy * STEP_Y,
  }
}

function fmt(point: Pt) {
  return `${point.x.toFixed(2)} ${point.y.toFixed(2)}`
}

function shift(point: Pt, dy: number): Pt {
  return {
    x: point.x,
    y: point.y + dy,
  }
}

function rect(
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  ox: number,
  oy: number
) {
  return [
    project(x0, y0, ox, oy),
    project(x1, y0, ox, oy),
    project(x1, y1, ox, oy),
    project(x0, y1, ox, oy),
  ]
}

function facePath(points: Pt[]) {
  return `M${points.map(fmt).join("L")}Z`
}

function sidePath(a: Pt, b: Pt, depth: number) {
  return `M${fmt(a)}L${fmt(b)}L${fmt(shift(b, depth))}L${fmt(shift(a, depth))}Z`
}

function visibleSides(points: Pt[], depth: number) {
  const centerY =
    points.reduce((sum, point) => sum + point.y, 0) / points.length

  return points.flatMap((point, index) => {
    const next = points[(index + 1) % points.length]

    if ((point.y + next.y) / 2 < centerY - 0.01) {
      return []
    }

    return [sidePath(point, next, depth)]
  })
}

function outlinePath(points: Pt[]) {
  return `M${points.map(fmt).join("L")}Z`
}

function verticals(points: Pt[], depth: number) {
  const centerY =
    points.reduce((sum, point) => sum + point.y, 0) / points.length

  return points.flatMap((point, index) => {
    const next = points[(index + 1) % points.length]

    if ((point.y + next.y) / 2 < centerY - 0.01) {
      return []
    }

    return [
      `M${fmt(point)}V${shift(point, depth).y.toFixed(2)}`,
      `M${fmt(next)}V${shift(next, depth).y.toFixed(2)}`,
    ]
  })
}

/* -------------------------------------------------------
   HG LETTER GEOMETRY
------------------------------------------------------- */

// H position
const H_OX = 0
const H_OY = 2

// G position
const G_OX = 3.6
const G_OY = -1.6

const H_FACES = [
  // Left vertical
  rect(0, 0, 1.05, 4.8, H_OX, H_OY),

  // Right vertical
  rect(2.75, 0, 3.8, 4.8, H_OX, H_OY),

  // Middle bridge
  rect(1.05, 1.9, 2.75, 2.9, H_OX, H_OY),
]

const G_FACES = [
  // Top
  rect(0, 0, 3.3, 1.05, G_OX, G_OY),

  // Left
  rect(0, 0, 1.05, 4.8, G_OX, G_OY),

  // Bottom
  rect(0, 3.75, 3.3, 4.8, G_OX, G_OY),

  // Right lower section
  rect(2.25, 2.45, 3.3, 4.8, G_OX, G_OY),

  // G horizontal bar
  rect(1.65, 2.45, 3.3, 3.4, G_OX, G_OY),
]

const LETTER_FACES = [...H_FACES, ...G_FACES]

const VIEW_W = 556
const VIEW_H = 354
const VIEW_PAD = 28

const LETTER_BOUNDS = LETTER_FACES.flat().reduce(
  (bounds, point) => {
    const bottom = shift(point, DEPTH)
    return {
      minX: Math.min(bounds.minX, point.x, bottom.x),
      maxX: Math.max(bounds.maxX, point.x, bottom.x),
      minY: Math.min(bounds.minY, point.y, bottom.y),
      maxY: Math.max(bounds.maxY, point.y, bottom.y),
    }
  },
  {
    minX: Number.POSITIVE_INFINITY,
    maxX: Number.NEGATIVE_INFINITY,
    minY: Number.POSITIVE_INFINITY,
    maxY: Number.NEGATIVE_INFINITY,
  }
)

const LETTER_WIDTH = LETTER_BOUNDS.maxX - LETTER_BOUNDS.minX
const LETTER_HEIGHT = LETTER_BOUNDS.maxY - LETTER_BOUNDS.minY
const LETTER_SCALE = Math.min(
  (VIEW_W - VIEW_PAD * 2) / LETTER_WIDTH,
  (VIEW_H - VIEW_PAD * 2) / LETTER_HEIGHT
)
const LETTER_TX =
  (VIEW_W - LETTER_WIDTH * LETTER_SCALE) / 2 - LETTER_BOUNDS.minX * LETTER_SCALE
const LETTER_TY =
  (VIEW_H - LETTER_HEIGHT * LETTER_SCALE) / 2 -
  LETTER_BOUNDS.minY * LETTER_SCALE
const LETTER_TRANSFORM = `translate(${LETTER_TX} ${LETTER_TY}) scale(${LETTER_SCALE})`

function dropFaces(faces: Pt[][], dy: number) {
  return faces.map((face) => face.map((point) => shift(point, dy)))
}

const FACES_NORMAL = LETTER_FACES
const FACES_PRESSED = dropFaces(LETTER_FACES, 16)

const FACE_FILL = FACES_NORMAL.map((face) => facePath(face))

const SIDES_NORMAL = FACES_NORMAL.flatMap((face) => visibleSides(face, DEPTH))

const SIDES_PRESSED = FACES_PRESSED.flatMap((face) =>
  visibleSides(face, DEPTH - 16)
)

const STROKE_NORMAL = [
  ...FACES_NORMAL.map((face) => outlinePath(face)),
  ...FACES_NORMAL.flatMap((face) => verticals(face, DEPTH)),
].join("")

const STROKE_PRESSED = [
  ...FACES_PRESSED.map((face) => outlinePath(face)),
  ...FACES_PRESSED.flatMap((face) => verticals(face, DEPTH - 16)),
].join("")

/**
 * Isometric HG Mark
 */
export function ChanhDaiMarkIsometric() {
  const id = useId()

  const ids = {
    facePattern: `hg-face-pattern-${id}`,
    faceFill: `hg-face-fill-${id}`,
    stroke: `hg-stroke-${id}`,
    radialGradient: `hg-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()

  const isInView = useInView(ref, {
    margin: "80px",
  })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full overflow-hidden [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))]"
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        {/* Face pattern */}
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        {/* Top surfaces */}
        <motion.g
          id={ids.faceFill}
          variants={{
            normal: {
              y: 0,
            },
            pressed: {
              y: 16,
            },
          }}
          transition={transition}
        >
          {FACE_FILL.map((d, index) => (
            <path key={`${d}-${index}`} d={d} />
          ))}
        </motion.g>

        {/* HG outline */}
        <motion.path
          id={ids.stroke}
          variants={{
            normal: {
              d: STROKE_NORMAL,
            },
            pressed: {
              d: STROKE_PRESSED,
            },
          }}
          transition={transition}
        />

        {/* Mouse-following highlight */}
        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />

          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      {/* Isometric background grid */}
      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
        <path d="M977.37 788.58L-754.67 -211.42" />
        <path d="M1143.65 692.58L-588.39 -307.42" />
      </g>

      <g transform={LETTER_TRANSFORM}>
        <g className="fill-background" fillRule="evenodd" clipRule="evenodd">
          {SIDES_NORMAL.map((d, index) => (
            <motion.path
              key={`${d}-${index}`}
              variants={{
                normal: {
                  d,
                },
                pressed: {
                  d: SIDES_PRESSED[index] ?? d,
                },
              }}
              transition={transition}
            />
          ))}
        </g>

        <use href={`#${ids.faceFill}`} className="fill-background" />
        <use href={`#${ids.faceFill}`} fill={`url(#${ids.facePattern})`} />
        <use href={`#${ids.stroke}`} stroke="var(--stroke)" />
        <use href={`#${ids.stroke}`} stroke={`url(#${ids.radialGradient})`} />
      </g>
    </motion.svg>
  )
}
