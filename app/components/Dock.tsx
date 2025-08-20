"use client"

import type React from "react"
import { User, Images, Brain, FileText, Palette, ShieldCheck } from "lucide-react"
import type { AppKey } from "@/lib/ui-store"
import { cn } from "@/lib/utils"

const ACCENT = "#FF2E63"

type DockItem = {
  key: Exclude<AppKey, "palette" | null>
  label: string
  icon: React.ComponentType<any>
}

const ITEMS: DockItem[] = [
  { key: "about", label: "About", icon: User },
  { key: "art", label: "Experience", icon: Images },
  { key: "philosophy", label: "Formation", icon: Brain },
  { key: "resume", label: "Skills", icon: FileText },
  { key: "certifications", label: "Certifications", icon: ShieldCheck },
]

export default function Dock({
  activeApp = null,
  onOpen = () => {},
  onOpenPalette = () => {},
}: {
  activeApp?: AppKey | null
  onOpen?: (k: Exclude<AppKey, "palette" | null>) => void
  onOpenPalette?: () => void
}) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 bg-white border-[3px] border-black px-2 py-2 sm:px-3 sm:py-3 rounded-xl shadow-[6px_6px_0_0_#000] max-w-full overflow-x-auto">
      {ITEMS.map((it) => {
        const Icon = it.icon
        const isActive = activeApp === it.key
        return (
          <button
            key={it.key}
            onClick={() => onOpen(it.key)}
            className={cn(
              "relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 grid place-items-center border-[3px] border-black rounded-lg bg-[#FAFAF0] shrink-0",
              "hover:translate-y-[-2px] transition-transform",
              "focus-visible:outline-4",
              isActive ? "shadow-[6px_6px_0_0_#000]" : "shadow-[4px_4px_0_0_#000]",
            )}
            style={{ outlineColor: ACCENT }}
            aria-label={it.label}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black opacity-100" />
            <span className="sr-only">{it.label}</span>
          </button>
        )
      })}
      <div className="mx-1 w-[2px] self-stretch bg-black/20" />
      <button
        onClick={onOpenPalette}
        className={cn(
          "relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 grid place-items-center border-[3px] border-black rounded-lg bg-[#FAFAF0] shrink-0",
          "hover:translate-y-[-2px] transition-transform shadow-[4px_4px_0_0_#000]",
          "focus-visible:outline-4",
        )}
        style={{ outlineColor: ACCENT }}
        aria-label="Command Palette"
        title="Command Palette"
      >
        <Palette className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        <span className="sr-only">Command Palette</span>
      </button>
    </div>
  )
}
