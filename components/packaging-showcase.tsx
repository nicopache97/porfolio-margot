"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PackagingShowcase() {
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
    <section id="packaging" className="px-6 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Full Width Feature */}
        <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-lg md:aspect-[21/9]">
          <Image
            src="/images/bocados.jpg"
            alt="Buenos Bocados - Producto artesanal de frutos secos"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 flex flex-col gap-3 p-8 md:p-12">
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-primary">
              Packaging
            </p>
            <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Buenos Bocados
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Producto artesanal de frutos secos. Elaborado con ingredientes naturales seleccionados.
            </p>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Hierbas */}
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/hierbas.jpg"
              alt="Hierbas para el mate - Coleccion Buenos Mates"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-6">
              <h4 className="font-serif text-2xl font-bold text-foreground">Hierbas para el Mate</h4>
              <p className="text-sm text-muted-foreground">
                Peperina, Manzanilla, Burrito, Tilo y Cola de Caballo
              </p>
            </div>
          </div>

          {/* Mate Lifestyle */}
          <div className="group relative aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/mate-pouring.jpg"
              alt="Preparando mate - Lifestyle Buenos Mates"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 left-0 flex flex-col gap-2 p-6">
              <h4 className="font-serif text-2xl font-bold text-foreground">Nos sobran motivos</h4>
              <p className="text-sm text-primary">para matear</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
