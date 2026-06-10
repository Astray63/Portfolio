import type React from "react"
import type { Metadata } from "next"
import { Kanit } from "next/font/google"
import "./globals.css"

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
})

export const metadata: Metadata = {
  title: "Elijah Lasserre — Développeur Full-Stack",
  description:
    "Portfolio d'Elijah Lasserre, développeur full-stack et mobile, co-fondateur de MEFLabs — Next.js, React, React Native, Swift, Supabase.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={kanit.variable}>
      <body>{children}</body>
    </html>
  )
}
