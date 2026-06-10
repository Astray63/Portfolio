"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"

function Char({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <span className="relative inline">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0">
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({
  text,
  className,
  style,
}: {
  text: string
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  })

  const words = text.split(" ")
  let charIndex = 0
  const total = text.length

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const start = charIndex
        charIndex += word.length + 1
        return (
          <span key={wi} className="inline-block whitespace-nowrap">
            {word.split("").map((char, ci) => {
              const index = start + ci
              return (
                <Char
                  key={ci}
                  char={char}
                  progress={scrollYProgress}
                  range={[index / total, Math.min(1, (index + 1) / total)]}
                />
              )
            })}
            {wi < words.length - 1 ? " " : null}
          </span>
        )
      })}
    </p>
  )
}
