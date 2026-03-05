"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileteRule } from "./filete-porteno"

// shape drives both the image container dimensions and card layout
const labels = [
  {
    name: "Buenos Alfajores",
    description: "Alfajor de algarroba relleno a dulce de leche",
    image: "/images/etiquetas/buenos-alfajores.png",
    // circular sticker → square responsive container
    imgStyle: "object-contain rounded-full",
  },
  {
    name: "Buenos Llaveros",
    description: "Llaveros artesanales de mate",
    image: "/images/etiquetas/buenos-llaveros.png",
    // tall rectangular label → square aspect keeps it contained
    imgStyle: "object-contain",
  },
  {
    name: "Buenos Filtros",
    description: "Filtros premium para bombilla",
    image: "/images/etiquetas/buenos-filtros.png",
    imgStyle: "object-contain",
  },
  {
    name: "Buenos Bocados",
    description: "Producto artesanal - Frutos secos",
    image: "/images/etiquetas/buenos-bocados.png",
    imgStyle: "object-contain",
  },
]
const imgClass = "relative w-full max-w-[18rem] mx-auto aspect-square"

export function EtiquetasSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
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
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <p className="text-xs font-medium tracking-[0.4em] uppercase text-primary">
            Branding
          </p>
          <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Etiquetas
          </h3>
          <FileteRule width={160} />
        </div>

        {/* Top row: 2 individual labels */}
        <div className="grid gap-6 sm:grid-cols-2">
          {labels.map((label, i) => (
            <div
              key={label.name}
              className="group flex flex-col items-center gap-5 rounded-lg border border-border p-8 transition-all duration-500 hover:border-primary/40"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`${imgClass} transition-transform duration-500 group-hover:scale-110`}
              >
                <Image
                  src={label.image}
                  alt={label.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={label.imgStyle}
                />
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="font-serif text-base font-bold text-foreground">
                  {label.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
