"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { FileteRule, FileteOrnament } from "./filete-porteno"

export function AboutMe() {
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
        <section id="sobre-mi" className="px-6 py-12">
            <div
                ref={ref}
                className={`mx-auto grid max-w-6xl gap-12 transition-all duration-1000 md:grid-cols-2 md:gap-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
                {/* Foto personal */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                    <Image
                        src="/images/margot-photo.jpg"
                        alt="Jessica Margot Castillo, diseñadora"
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay sutil para integrar con el tema oscuro */}
                    <div className="absolute inset-0 bg-background/5" />
                </div>

                {/* Texto personal */}
                <div className="flex flex-col justify-center gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-medium tracking-[0.4em] uppercase text-primary">
                            La diseñadora
                        </p>
                        <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl">
                            ¡Hola!
                        </h2>
                    </div>

                    <FileteRule width={120} />

                    <div className="flex flex-col gap-4">
                        <p className="text-base leading-relaxed text-muted-foreground">
                            Mi nombre es{" "}
                            <span className="font-semibold text-foreground">
                                Jessica Margot Castillo
                            </span>
                            , me conocen más como{" "}
                            <span className="font-semibold text-foreground">Mar</span>.
                            Oriunda de la Patagonia, amante de la naturaleza.
                        </p>

                        <p className="text-base leading-relaxed text-muted-foreground">
                            Me apasiona el arte y la expresión creativa en todas sus formas, y
                            ver cómo el diseño cobra vida.
                        </p>

                        <p className="text-base leading-relaxed text-muted-foreground">
                            Soy estudiante avanzada en Diseño en Comunicación Visual en la
                            Facultad de Artes de la{" "}
                            <span className="font-semibold text-foreground">
                                Universidad Nacional de La Plata
                            </span>
                            . Soy de una personalidad muy curiosa, me gusta la practicidad y
                            explorar nuevas formas.
                        </p>

                        <p className="text-base leading-relaxed text-muted-foreground">
                            Observar cómo los productos pueden tener su personalidad y
                            distinguirse entre la variedad dice mucho de lo que hay detrás, por eso
                            busco ampliar mis conocimientos en el mundo de{" "}
                            <span className="font-semibold text-foreground">
                                marcas y packaging
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
