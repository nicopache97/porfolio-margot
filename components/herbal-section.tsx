"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MateShape } from "./mate-shape"
import { FileteHierbas } from "./filete-hierbas"

const herbs = [
  {
    name: "Peperina",
    color: "#FFEF9C",
    etiquetaSrc: "/images/etiquetas/peperina.png",
  },
  {
    name: "Manzanilla",
    color: "#FFD860",
    etiquetaSrc: "/images/etiquetas/manzanilla.png",
  },
  {
    name: "Cedrón",
    color: "#BBE2F5",
    etiquetaSrc: "/images/etiquetas/cedron.png",
  },
  {
    name: "Burrito",
    color: "#FDE8B0",
    etiquetaSrc: "/images/etiquetas/burrito.png",
  },
  {
    name: "Tilo",
    color: "#AC86A6",
    etiquetaSrc: "/images/etiquetas/tilo.png",
  },
  {
    name: "Cola de Caballo",
    color: "#E17C3E",
    etiquetaSrc: "/images/etiquetas/cola-de-caballo.png",
  },
]

export function HerbalSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
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
          <FileteHierbas width={350} className="mt-2" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-6 lg:grid-cols-3">
          {herbs.map((herb, i) => (
            <div
              key={herb.name}
              className="group relative transition-all duration-500 [perspective:1000px] cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setSelectedIndex(selectedIndex === i ? null : i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d] ${selectedIndex === i ? "[transform:rotateY(180deg)]" : ""
                  }`}
              >
                {/* Front */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <MateShape
                    className="h-full w-full"
                    active={selectedIndex === i || hoveredIndex === i}
                    color={herb.color}
                  >
                    <div className="flex flex-col items-center">
                      <h4 className="mb-1 font-serif text-lg font-bold text-primary md:text-xl">
                        {herb.name}
                      </h4>
                      <span className="text-[10px] tracking-wider text-muted-foreground uppercase mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        VER DETALLES
                      </span>
                    </div>
                  </MateShape>
                </div>

                {/* Back */}
                <div className="absolute inset-0 h-full w-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden">
                  <Image
                    src={herb.etiquetaSrc}
                    alt={`${herb.name} detalle`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
