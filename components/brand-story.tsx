"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileteRule } from "./filete-porteno"

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="marca" className="px-6 py-12">
      <div
        ref={ref}
        className={`mx-auto grid max-w-6xl gap-12 transition-all duration-1000 md:grid-cols-2 md:gap-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      >
        {/* Image Side */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
          <Image
            src="/images/mate-hero.jpg"
            alt="Mate tradicional argentino con bombilla"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-background/10" />
        </div>

        {/* Text Side */}
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.4em] uppercase text-primary">
              La Marca
            </p>
            <div className="relative h-32 w-full max-w-[450px] md:h-40 lg:h-48">
              <Image
                src="/images/marca-buenos-mates.png"
                alt="Buenos Mates Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          <FileteRule width={120} />

          <p className="text-base leading-relaxed text-muted-foreground">
            {"Naci\u00f3 desde la pasi\u00f3n por el mate, una tradici\u00f3n que acompa\u00f1a a donde quieras que vayas, produciendo una calidez de hogar, al compartirse en familia, entre amigos y compa\u00f1eros de trabajo."}
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            {"El origen de BUENOS con una b\u00fasqueda intencional al estilo porte\u00f1o, como remitiendo a Buenos Aires, y la unidad con el Mate."}
          </p>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              {"Tipograf\u00edas"}
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-lg font-semibold text-foreground">Artographie</span>
                <span className="text-xs text-muted-foreground">Medium</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-foreground">Coolvetica</span>
                <span className="text-xs text-muted-foreground">Regular</span>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-medium tracking-[0.3em] uppercase text-muted-foreground">
              Paleta de colores
            </p>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full bg-[#1a1a1a] ring-1 ring-foreground/20" />
              <div className="h-10 w-10 rounded-full bg-[#f5f0e8] ring-1 ring-foreground/20" />
              {/* <div className="h-10 w-10 rounded-full bg-primary ring-1 ring-foreground/20" /> */}
              {/* <div className="h-10 w-10 rounded-full bg-accent ring-1 ring-foreground/20" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
