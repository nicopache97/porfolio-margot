"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface ProductCardProps {
  image: string
  alt: string
  title: string
  subtitle: string
  index: number
}

function ProductCard({ image, alt, title, subtitle, index }: ProductCardProps) {
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
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg transition-all duration-700 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-background/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
        <h4 className="font-serif text-xl font-bold text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}

const products = [
  {
    image: "/images/buenos-chipas.jpg",
    alt: "Buenos Chipas - pan de queso artesanal",
    title: "Buenos Chipas",
    subtitle: "Branding & Packaging",
  },
  {
    image: "/images/alfajor.jpg",
    alt: "Alfajor artesanal Buenos Alfajores",
    title: "Buenos Alfajores",
    subtitle: "Etiquetas & Packaging",
  },
  {
    image: "/images/llaveros.jpg",
    alt: "Llaveros artesanales Buenos Llaveros",
    title: "Buenos Llaveros",
    subtitle: "Producto & Branding",
  },
]

export function ProductGallery() {
  return (
    <section id="branding" className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            image={product.image}
            alt={product.alt}
            title={product.title}
            subtitle={product.subtitle}
            index={i}
          />
        ))}
      </div>
    </section>
  )
}
