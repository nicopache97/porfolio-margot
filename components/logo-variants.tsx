"use client"

import { useEffect, useRef, useState } from "react"

const variants = [
  { top: "BUENOS", bottom: "ALFAJORES", handle: "BUENOSMATES87" },
  { top: "BUENOS", bottom: "FILTROS", handle: "BUENOSMATES87" },
  { top: "BUENOS", bottom: "LLAVEROS", handle: "BUENOSMATES87" },
  { top: "BUENOS", bottom: "BOCADOS", handle: "BUENOSMATES87" },
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
    <section className="px-6 py-16">
      <div
        ref={ref}
        className={`mx-auto max-w-6xl transition-all duration-1000 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="mb-8 text-center text-xs font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Variantes del logo
        </p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {variants.map((v, i) => (
            <div
              key={i}
              className="group flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all duration-500 hover:border-primary/40 hover:bg-secondary"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex flex-col items-center">
                <span className="font-serif text-lg font-bold tracking-wide text-foreground md:text-xl">
                  {v.top}
                </span>
                <span className="text-xs font-medium tracking-widest text-primary">
                  {`-${v.bottom}-`}
                </span>
              </div>
              <span className="text-[10px] tracking-wider text-muted-foreground">
                {v.handle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
