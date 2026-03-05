"use client"

import { useEffect, useRef, useState } from "react"
import { FileteHierbas } from "./filete-hierbas"
import { HerbalCarousel } from "./herbal-carousel"

const herbs = [
  {
    name: "Peperina",
    color: "#FFEF9C",
    etiquetaSrc: "/images/hierbas/peperina.png",
  },
  {
    name: "Manzanilla",
    color: "#FFD860",
    etiquetaSrc: "/images/hierbas/manzanilla.png",
  },
  {
    name: "Cedrón",
    color: "#BBE2F5",
    etiquetaSrc: "/images/hierbas/cedron.png",
  },
  {
    name: "Burrito",
    color: "#FDE8B0",
    etiquetaSrc: "/images/hierbas/burrito.png",
  },
  {
    name: "Tilo",
    color: "#AC86A6",
    etiquetaSrc: "/images/hierbas/tilo.png",
  },
  {
    name: "Cola de Caballo",
    color: "#E17C3E",
    etiquetaSrc: "/images/hierbas/cola-de-caballo.png",
  },
]

export function HerbalSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <div className="mb-4 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-primary">
            Buenos Mates
          </p>
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Hierbas para el Mate
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            {"Calmate y tomate unos Buenos Mates. Cada hierba seleccionada con beneficios únicos para tu bienestar."}
          </p>
          <FileteHierbas width={350} className="mt-2" herbColor={herbs[selectedIndex].color} />
        </div>

        <div className="mt-8">
          <HerbalCarousel herbs={herbs} onSelectHerb={setSelectedIndex} />
        </div>
      </div>
    </section>
  )
}
