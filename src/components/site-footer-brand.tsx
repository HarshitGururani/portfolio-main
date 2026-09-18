"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 1410

const HARSHIT_MARK = [
  // H
  "M65 1h32v256H65z",
  "M161 1h32v256h-32z",
  "M97 97h64v32H97z",
  // A
  "M257 65h160v32H257z",
  "M257 97h32v160h-32z",
  "M385 97h32v160h-32z",
  "M289 161h96v32H289z",
  // R
  "M449 1h32v256h-32z",
  "M481 1h96v32h-96z",
  "M577 33h32v96h-32z",
  "M481 129h96v32h-96z",
  "M545 161h32v32h-32z",
  "M577 193h32v64h-32z",
  // S
  "M641 33h160v32H641z",
  "M641 65h32v64h-32z",
  "M641 129h160v32H641z",
  "M769 161h32v64h-32z",
  "M641 225h160v32H641z",
  // H
  "M833 1h32v256h-32z",
  "M929 1h32v256h-32z",
  "M865 97h64v32h-64z",
  // I
  "M1025 1h96v32h-96z",
  "M1057 33h32v192h-32z",
  "M1025 225h96v32h-96z",
  // T
  "M1153 1h160v32h-160z",
  "M1217 33h32v224h-32z",
].join("")

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 1410 258"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={HARSHIT_MARK}
              fill="url(#paint0_linear_1145_73)"
            />
            <path
              className="stroke-foreground/10"
              d={HARSHIT_MARK}
              fill="none"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="1"
                x2="705"
                y2="257"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
