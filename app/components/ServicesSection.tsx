"use client"

import FadeIn from "./FadeIn"

const SERVICES = [
  {
    number: "01",
    name: "Développement Frontend",
    description:
      "Création d'interfaces modernes, réactives et performantes avec React, Next.js, Angular et TypeScript, pensées pour offrir la meilleure expérience utilisateur.",
  },
  {
    number: "02",
    name: "Développement Backend",
    description:
      "Conception d'API REST robustes et évolutives avec Node.js, Supabase et PostgreSQL, avec une attention particulière portée à la performance et à la fiabilité.",
  },
  {
    number: "03",
    name: "Applications Mobiles",
    description:
      "Développement d'apps iOS natives en Swift et cross-platform en React Native, de la conception jusqu'à la publication sur l'App Store.",
  },
  {
    number: "04",
    name: "E-commerce & CMS",
    description:
      "Livraison de plateformes e-commerce complètes et de sites administrables avec Next.js, Sanity (headless CMS) et WordPress, du design à la mise en production.",
  },
  {
    number: "05",
    name: "Méthodologie Agile",
    description:
      "Certifié Professional Scrum Master I (PSM I) : organisation de projets en sprints, collaboration efficace et livraisons itératives de valeur.",
  },
]

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
              style={{ borderTop: i === 0 ? "none" : "1px solid rgba(12, 12, 12, 0.15)" }}
            >
              <span
                className="font-black text-[#0C0C0C] leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-3 pt-2">
                <h3
                  className="text-[#0C0C0C] font-medium uppercase"
                  style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#0C0C0C] font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
