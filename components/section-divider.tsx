"use client"

import { useEffect, useRef, useState } from "react"
import { FileteRule } from "./filete-porteno"

interface SectionDividerProps {
  title: string
  subtitle?: string
}

export function SectionDivider({ title, subtitle }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-4 py-24 transition-all duration-1000 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <FileteRule width={140} />
      <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
          {subtitle}
        </p>
      )}
      <FileteRule width={140} />
    </div>
  )
}
