"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion"
import FadeIn from "./FadeIn"
import LiveProjectButton from "./LiveProjectButton"

type Project = {
  number: string
  category: string
  name: string
  href?: string
  preview: string
}

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "E-commerce — Matériel de nettoyage professionnel",
    name: "Solution Haute Pression",
    href: "https://boutique.solution-hautepression.fr/",
    preview: "/projects/solution-haute-pression-preview.jpg",
  },
  {
    number: "02",
    category: "Site vitrine — Distribution alimentaire B2B",
    name: "Perlla Distrib",
    href: "https://perlla-distrib.fr/",
    preview: "/projects/perlla-distrib-preview.jpg",
  },
  {
    number: "03",
    category: "Site vitrine — Boulangerie, pâtisserie & traiteur",
    name: "Fraise & Farine",
    href: "https://www.fraiseetfarine.fr/",
    preview: "/projects/fraise-et-farine-preview.jpg",
  },
]

function ProjectCard({
  project,
  index,
  totalCards,
  progress,
}: {
  project: Project
  index: number
  totalCards: number
  progress: MotionValue<number>
}) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(progress, [index / totalCards, 1], [1, targetScale])

  return (
    <div className="h-[85vh] sticky top-24 md:top-32">
      <motion.div
        className="relative rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
        style={{ scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-4 sm:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D7E2EA] font-light uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <span
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="aspect-[3/2] sm:aspect-[16/9] overflow-hidden rounded-[32px] sm:rounded-[44px] md:rounded-[56px] border border-[#D7E2EA]/10 bg-black">
          <img
            src={project.preview}
            alt={project.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Projets
        </h2>
      </FadeIn>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  )
}
