"use client"

import * as React from "react"
import Image from "next/image"
import { MateShape } from "./mate-shape"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    type CarouselApi,
} from "@/components/ui/carousel"

interface Herb {
    name: string
    color: string
    etiquetaSrc: string
}

interface HerbalCarouselProps {
    herbs: Herb[]
    onSelectHerb?: (index: number) => void
}

export function HerbalCarousel({ herbs, onSelectHerb }: HerbalCarouselProps) {
    const [api, setApi] = React.useState<CarouselApi>()
    const [centerIndex, setCenterIndex] = React.useState(0)
    const [flipped, setFlipped] = React.useState<boolean[]>(() =>
        herbs.map(() => false)
    )

    React.useEffect(() => {
        if (!api) return

        const onSelect = () => {
            const idx = api.selectedScrollSnap()
            setCenterIndex(idx)
            onSelectHerb?.(idx)
        }

        onSelect()
        api.on("select", onSelect)
        return () => {
            api.off("select", onSelect)
        }
    }, [api, onSelectHerb])

    const toggleFlip = (index: number) => {
        setFlipped((prev) => {
            const next = [...prev]
            next[index] = !next[index]
            return next
        })
    }

    return (
        <Carousel
            setApi={setApi}
            opts={{
                align: "center",
                loop: true,
            }}
            className="mx-auto w-full max-w-5xl"
        >
            <CarouselContent className="-ml-2 md:-ml-4">
                {herbs.map((herb, i) => {
                    const isCenter = i === centerIndex
                    const isFlipped = flipped[i]

                    return (
                        <CarouselItem
                            key={herb.name}
                            className="basis-1/2 pl-2 sm:basis-1/3 md:pl-4 lg:basis-1/3"
                        >
                            <div
                                className={`transition-all duration-700 ease-in-out ${isCenter
                                    ? "scale-[1.4] opacity-100 z-10"
                                    : "scale-[0.8] opacity-50"
                                    }`}
                            >
                                <div
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`Ver detalles de ${herb.name}`}
                                    className="group relative cursor-pointer [perspective:1000px]"
                                    onClick={() => toggleFlip(i)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            e.preventDefault()
                                            toggleFlip(i)
                                        }
                                    }}
                                >
                                    <div
                                        className={`relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? "[transform:rotateY(180deg)]" : ""
                                            }`}
                                    >
                                        {/* Front */}
                                        <div className="absolute inset-0 [backface-visibility:hidden]">
                                            <MateShape
                                                className="h-full w-full"
                                                active={isCenter}
                                                color={herb.color}
                                            >
                                                <div className="flex flex-col items-center">
                                                    <h4 className="mb-1 text-center font-serif text-lg font-bold text-primary md:text-xl">
                                                        {herb.name}
                                                    </h4>
                                                    <span
                                                        className={`text-[10px] tracking-wider uppercase mt-2 transition-opacity duration-300 ${isCenter
                                                            ? "text-muted-foreground opacity-100"
                                                            : "opacity-0"
                                                            }`}
                                                    >
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
                                                sizes="(max-width: 640px) 50vw, 33vw"
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    )
                })}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex -left-6 md:-left-10" />
            <CarouselNext className="hidden sm:flex -right-6 md:-right-10" />
        </Carousel>
    )
}
