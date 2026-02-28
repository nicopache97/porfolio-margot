"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const variants = [
  { name: "Alfajores", src: "/images/marca-buenos-alfajores.png" },
  { name: "Filtros", src: "/images/marca-buenos-filtros.png" },
  { name: "Llaveros", src: "/images/marca-buenos-llaveros.png" },
  { name: "Bocados", src: "/images/marca-buenos-bocados.png" },
  { name: "Chipas", src: "/images/marca-buenos-chipa.png" },
]

export function LogoVariants() {
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
    <section className="px-6 py-20 bg-background/50">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
      >
        <p className="mb-12 text-center text-xs font-medium tracking-[0.5em] uppercase text-primary/80">
          Ecosistema de la Marca
        </p>

        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {variants.map((v, i) => (
            <div
              key={i}
              className={`group relative flex flex-col items-center gap-4 transition-all duration-700 ${visible ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-12 scale-75"
                }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* The Spotlight Circle */}
              <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-transparent transition-all duration-500 
                hover:scale-110 hover:shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] 
                before:absolute before:inset-0 before:rounded-full before:bg-[radial-gradient(circle,rgba(255,197,66,0.1)_0%,transparent_70%)] 
                before:opacity-0 before:transition-opacity before:duration-500 group-hover:before:opacity-100
                md:h-44 md:w-44 lg:h-48 lg:w-48">

                {/* Logo Image */}
                <div className="relative h-24 w-24 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 md:h-32 md:w-32 lg:h-36 lg:w-36">
                  <Image
                    src={v.src}
                    alt={v.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Subtitle */}
              <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-muted-foreground opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1">
                {v.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
