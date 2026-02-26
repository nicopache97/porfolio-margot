"use client"

import { useEffect, useRef, useState } from "react"
import { FileteRule } from "./filete-porteno"

const labels = [
  {
    name: "Buenos Alfajores",
    color: "bg-accent",
    textColor: "text-accent-foreground",
    description: "Alfajor de algarroba relleno a dulce de leche",
    shape: "rounded-full",
  },
  {
    name: "Buenos Llaveros",
    color: "bg-card",
    textColor: "text-card-foreground",
    description: "Llaveros artesanales de mate",
    shape: "rounded-lg",
  },
  {
    name: "Buenos Filtros",
    color: "bg-card",
    textColor: "text-card-foreground",
    description: "Filtros premium para bombilla",
    shape: "rounded-lg",
  },
  {
    name: "Buenos Bocados",
    color: "bg-primary/20",
    textColor: "text-foreground",
    description: "Producto artesanal - Frutos secos",
    shape: "rounded-lg",
  },
]

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
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {labels.map((label, i) => (
            <div
              key={label.name}
              className={`group flex flex-col items-center gap-4 border border-border ${label.shape} p-8 transition-all duration-500 hover:border-primary/40`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className={`flex h-24 w-24 items-center justify-center ${label.shape} ${label.color} transition-transform duration-500 group-hover:scale-110`}
              >
                <span className={`text-center text-[10px] font-bold tracking-wider uppercase ${label.textColor}`}>
                  {label.name}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <h4 className="font-serif text-base font-bold text-foreground">
                  {label.name}
                </h4>
                <p className="text-xs text-muted-foreground">{label.description}</p>
                <span className="mt-1 text-[10px] tracking-wider text-muted-foreground">
                  BUENOSMATES87
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
