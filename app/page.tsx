"use client"

import type React from "react"

import { useEffect, useMemo, useState } from "react"
import { useUIStore, type AppKey } from "@/lib/ui-store"
import ShaderBackground from "./components/ShaderBackground"
import Dock from "./components/Dock"
import DesktopWindow from "./components/Window"
import CommandPalette from "./components/CommandPalette"

type WindowSpec = {
  key: Exclude<AppKey, "palette" | null>
  title: string
  content: React.ReactNode
}

function AboutContent() {
  return (
    <div className="p-5 md:p-6 bg-card">
      <div className="mb-4 text-secondary font-mono text-sm">$ whoami</div>
      <h1 className="font-black leading-none text-primary neon-text" style={{ fontSize: 52 }}>
        Elijah Lasserre
      </h1>
      <p className="mt-4 text-lg text-muted-foreground font-mono">
        &gt; Développeur Full-Stack | Cybersécurité Enthusiast
      </p>
      <div className="mt-6 space-y-2 font-mono text-sm">
        <div className="text-secondary">📧 elijahlasserre63@gmail.com</div>
        <div className="text-secondary">🌐 elijahlasserre.netlify.com</div>
        <div className="text-secondary">📱 0618476231</div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {["TypeScript", "React", "Java", "Cybersécurité", "CTF", "Next.js"].map((chip) => (
          <span
            key={chip}
            className="text-sm font-semibold px-3 py-1 rounded-md border-2 border-primary bg-primary/10 text-primary neon-glow font-mono"
          >
            {chip}
          </span>
        ))}
      </div>
    </div>
  )
}

function ExperienceContent() {
  const experiences = [
    {
      title: "S2E Groupe",
      role: "Stagiaire Développement Web",
      period: "Janvier 2025 - 1 mois",
      description: "Développement front-end (HTML, CSS, TypeScript, React)",
    },
    {
      title: "Maison des citoyens",
      role: "Médiation Numérique",
      period: "Octobre 2024",
      description: "Accompagnement outils numériques et cybersécurité",
    },
  ]

  return (
    <div className="p-5 md:p-6 bg-card space-y-4">
      <div className="text-secondary font-mono text-sm mb-4">$ cat experience.log</div>
      {experiences.map((exp, i) => (
        <div key={i} className="p-4 border-2 border-primary bg-card/50 rounded-md neon-glow">
          <div className="text-xl font-black text-primary font-mono">{exp.title}</div>
          <div className="text-secondary font-mono">{exp.role}</div>
          <div className="text-accent text-sm font-mono">{exp.period}</div>
          <div className="mt-2 text-muted-foreground">{exp.description}</div>
        </div>
      ))}
    </div>
  )
}

function FormationContent() {
  const formations = [
    {
      title: "Human Booster",
      degree: "Concepteur Développeur d'Applications",
      period: "2025 - 2026",
      level: "BAC+3/+4",
    },
    {
      title: "École 42 - Lyon",
      degree: "Bootcamp Programmation C",
      period: "2022 - 2023",
      level: "Bootcamp",
    },
    {
      title: "Université",
      degree: "Licence 1 Math-Info",
      period: "2022 - 2023",
      level: "BAC+1",
    },
  ]

  return (
    <div className="p-5 md:p-6 bg-card space-y-4">
      <div className="text-secondary font-mono text-sm mb-4">$ ls -la education/</div>
      {formations.map((formation, i) => (
        <div key={i} className="p-4 border-2 border-accent bg-card/50 rounded-md">
          <div className="text-xl font-black text-accent font-mono">{formation.title}</div>
          <div className="text-primary font-mono">{formation.degree}</div>
          <div className="text-secondary text-sm font-mono">{formation.period}</div>
          <div className="text-muted-foreground text-sm">{formation.level}</div>
        </div>
      ))}
    </div>
  )
}

function SkillsContent() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "TypeScript", "React", "Next.js"],
    },
    {
      category: "Backend",
      skills: ["Java", "Node.js", "API REST"],
    },
    {
      category: "Cybersécurité",
      skills: ["CTF", "Pentest", "Sécurité Web"],
    },
    {
      category: "Langues",
      skills: ["Français (Natif)", "Anglais (B2)"],
    },
  ]

  return (
    <div className="p-5 md:p-6 bg-card space-y-6">
      <div className="text-secondary font-mono text-sm mb-4">$ ./scan_skills.sh</div>
      {skillCategories.map((cat, i) => (
        <div key={i} className="space-y-2">
          <h3 className="text-lg font-bold text-primary font-mono neon-text">{cat.category}</h3>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="text-sm px-2 py-1 rounded border border-secondary text-secondary bg-secondary/10 font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function CertificationsContent() {
  const items = [
    {
      title: "MOOC SecNumAcadémie",
      org: "ANSSI - Agence nationale de la sécurité des systèmes d’information",
      date: "Novembre 2023 → Janvier 2034",
      desc:
        "Certification complète en cybersécurité couvrant la sécurité des réseaux, la cryptographie et les fondamentaux de la sécurité de l’information.",
    },
    {
      title: "Dante",
      org: "Hack The Box",
      date: "Février 2024",
      desc: "Certification avancée en techniques d’exploitation et sécurité des applications web.",
      id: "HTBCERT-B59E651961",
    },
    {
      title: "Aperçu des menaces de cybersécurité",
      org: "LinkedIn",
      date: "Février 2024",
      desc: "Fondamentaux de la gestion des menaces et des vulnérabilités",
    },
    {
      title: "Les fondements de la sécurité informatique et de la cybersécurité",
      org: "LinkedIn",
      date: "Février 2024",
    },
    {
      title: "Préparer votre carrière dans la cybersécurité",
      org: "Microsoft",
      date: "Février 2024",
    },
    {
      title: "Sensibilisation à la cybersécurité : La terminologie",
      org: "LinkedIn",
      date: "Février 2024",
      desc:
        "Sensibilisation à la sécurité de l’information et fondamentaux de la cybersécurité",
    },
    {
      title: "Professional Scrum Master I (PSM I)",
      org: "Scrum.org",
      date: "Juin 2025",
    },
  ]

  return (
    <div className="p-5 md:p-6 bg-card space-y-4">
      <div className="text-secondary font-mono text-sm mb-4">$ cat certifications.txt</div>
      <h2 className="text-2xl font-black text-primary font-mono neon-text">Certifications</h2>
      <div className="grid gap-4">
        {items.map((c, i) => (
          <div key={i} className="p-4 border-2 border-primary bg-card/50 rounded-md neon-glow">
            <div className="text-xl font-black text-primary font-mono">{c.title}</div>
            <div className="text-secondary font-mono">{c.org}</div>
            <div className="text-accent text-sm font-mono">📅 {c.date}</div>
            {c.desc ? <div className="mt-2 text-muted-foreground">{c.desc}</div> : null}
            {c.id ? (
              <div className="mt-1 text-xs text-muted-foreground font-mono">ID: {c.id}</div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Page() {
  // Windows order doubles as z-order; last is topmost
  const [openApps, setOpenApps] = useState<Exclude<AppKey, "palette" | null>[]>(["about"])
  const [paletteOpen, setPaletteOpen] = useState(false)
  const setActiveApp = useUIStore((s) => s.setActiveApp)
  const activeApp = useUIStore((s) => s.activeApp)

  // Initialize active app (About by default)
  useEffect(() => {
    setActiveApp("about")
  }, [setActiveApp])

  // Global key handling: Esc closes palette or topmost window
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (paletteOpen) {
          setPaletteOpen(false)
          setActiveApp(null)
          return
        }
        if (openApps.length > 0) {
          const top = openApps[openApps.length - 1]
          closeApp(top)
          return
        }
      }
      // Enter on focused dock item is native click; no interception necessary.
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [paletteOpen, openApps])

  const windows: WindowSpec[] = useMemo(
    () => [
      { key: "about", title: "About.exe", content: <AboutContent /> },
      { key: "art", title: "Experience.log", content: <ExperienceContent /> },
      { key: "philosophy", title: "Formation.db", content: <FormationContent /> },
      { key: "resume", title: "Skills.sh", content: <SkillsContent /> },
  { key: "certifications", title: "Certifications.txt", content: <CertificationsContent /> },
    ],
    [],
  )

  function openApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      if (prev.includes(app)) {
        const without = prev.filter((a) => a !== app)
        return [...without, app]
      }
      return [...prev, app]
    })
    setActiveApp(app)
  }

  function closeApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => prev.filter((a) => a !== app))
    setActiveApp((s) => {
      return null
    })
  }

  function focusApp(app: Exclude<AppKey, "palette" | null>) {
    setOpenApps((prev) => {
      const without = prev.filter((a) => a !== app)
      return [...without, app]
    })
    setActiveApp(app)
  }

  function resetAll() {
    setOpenApps(["about"])
    setPaletteOpen(false)
    setActiveApp("about")
  }

  return (
    <main className="fixed inset-0 overflow-hidden bg-black">

  {/* Shader Background (background-recreate) */}
  <ShaderBackground />

      {/* Windows */}
      <div className="absolute inset-0 z-10">
        {windows
          .filter((w) => openApps.includes(w.key))
          .map((w) => {
            const zIndex = 100 + openApps.indexOf(w.key)
            return (
              <DesktopWindow
                key={w.key}
                appKey={w.key}
                title={w.title}
                zIndex={zIndex}
                onClose={() => closeApp(w.key)}
                onFocus={() => focusApp(w.key)}
              >
                {w.content}
              </DesktopWindow>
            )
          })}
      </div>

      {/* Dock */}
  <div className="absolute left-0 right-0 bottom-4 sm:bottom-6 z-20 flex justify-center px-3 pb-[env(safe-area-inset-bottom)]">
        <Dock
          activeApp={activeApp ?? null}
          onOpen={(k) => openApp(k)}
          onOpenPalette={() => {
            setPaletteOpen(true)
            setActiveApp("palette")
          }}
        />
      </div>

      {/* Command Palette */}
      <CommandPalette
        open={paletteOpen}
        onOpenChange={(o) => {
          setPaletteOpen(o)
          if (!o) setActiveApp(null)
          if (o) setActiveApp("palette")
        }}
        onAction={(k) => {
          openApp(k)
          setPaletteOpen(false)
        }}
        onReset={resetAll}
      />
    </main>
  )
}
