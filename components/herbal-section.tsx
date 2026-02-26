"use client"

import { useEffect, useRef, useState } from "react"
import { MateShape } from "./mate-shape"
import { FileteHierbas } from "./filete-hierbas"

const herbs = [
  {
    name: "Peperina",
    benefits: [
      "Analgésico natural",
      "Alivia dolores de cabeza",
      "Refuerza el sistema inmunológico",
      "Alivia la ansiedad",
    ],
  },
  {
    name: "Manzanilla",
    benefits: [
      "Propiedades antiinflamatorias",
      "Propiedades digestivas",
      "Ayuda a conciliar el sueño",
      "Alivia el estrés",
    ],
  },
  {
    name: "Cedrón",
    benefits: [
      "Mejora los ciclos del sueño",
      "Alivia dolores estomacales",
      "Propiedades antioxidantes",
      "Función antiinflamatoria",
    ],
  },
  {
    name: "Burrito",
    benefits: [
      "Propiedades digestivas y sedantes",
      "Propiedades ansiolíticas",
      "Elimina pesadez estomacal",
      "Efecto antidepresivo",
    ],
  },
  {
    name: "Tilo",
    benefits: [
      "Relajante e inductora del sueño",
      "Alivia la presión arterial",
      "Calma la ansiedad",
      "Efectos diuréticos",
    ],
  },
  {
    name: "Cola de Caballo",
    benefits: [
      "Agente diurético y depurativo",
      "Regenerador celular",
      "Elimina toxinas del hígado",
      "Alivia la fatiga",
    ],
  },
]

export function HerbalSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
          <FileteHierbas width={180} className="mt-2" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-2 sm:gap-x-6 lg:grid-cols-3">
          {herbs.map((herb, i) => (
            <div
              key={herb.name}
              className="group relative transition-all duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <MateShape
                className="aspect-[3/4] w-full cursor-default"
                active={hoveredIndex === i}
              >
                <div className="flex flex-col items-center">
                  <FileteHierbas
                    width={80}
                    className={`mb-2 transition-all duration-500 ${hoveredIndex === i ? "opacity-100 scale-110" : "opacity-40 scale-100"}`}
                  />
                  <h4 className="mb-3 font-serif text-lg font-bold text-primary md:text-xl">
                    {herb.name}
                  </h4>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {herb.benefits.map((benefit, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-1.5 text-[11px] leading-snug text-muted-foreground md:text-xs"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </MateShape>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
