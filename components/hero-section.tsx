"use client"

import { useEffect, useState } from "react"
import { FileteOrnament, FileteCorner } from "./filete-porteno"

export function HeroSection() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Filete porteno corner ornaments */}
      <div className="absolute top-6 left-6 opacity-60">
        <FileteCorner />
      </div>
      <div className="absolute top-6 right-6 opacity-60">
        <FileteCorner flip />
      </div>
      <div className="absolute bottom-20 left-6 rotate-180 opacity-40 [transform-origin:center]" style={{ transform: "scaleY(-1)" }}>
        <FileteCorner />
      </div>
      <div className="absolute bottom-20 right-6 rotate-180 opacity-40" style={{ transform: "scale(-1,-1)" }}>
        <FileteCorner />
      </div>

      <div
        className={`flex flex-col items-center gap-6 text-center transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <p className="text-xs font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Portfolio
        </p>

        <h1 className="font-serif text-6xl font-bold leading-tight tracking-tight text-foreground md:text-8xl lg:text-9xl">
          Margot
          <br />
          <span className="text-primary">Castillo</span>
        </h1>

        <FileteOrnament width={280} className="mt-2" />

        <p className="max-w-md text-base leading-relaxed text-muted-foreground">
          {"Branding & Packaging Design"}
        </p>

        <p className="text-sm font-light tracking-[0.3em] text-muted-foreground">
          2026
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#marca" className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="h-8 w-px animate-pulse bg-primary" />
        </a>
      </div>
    </section>
  )
}
