import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionDivider } from "@/components/section-divider"
import { BrandStory } from "@/components/brand-story"
import { LogoVariants } from "@/components/logo-variants"
import { ProductGallery } from "@/components/product-gallery"
import { PackagingShowcase } from "@/components/packaging-showcase"
import { HerbalSection } from "@/components/herbal-section"
import { EtiquetasSection } from "@/components/etiquetas-section"
import { AboutMe } from "@/components/about-me"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Margot Castillo — Diseño Gráfico & Branding",
  description:
    "Portfolio de Margot Castillo, diseñadora gráfica especializada en branding, packaging y etiquetas. Proyectos como Buenos Mates, Buenos Alfajores y más.",
  openGraph: {
    title: "Margot Castillo — Diseño Gráfico & Branding",
    description:
      "Portfolio de Margot Castillo, diseñadora gráfica especializada en branding, packaging y etiquetas.",
    type: "website",
  },
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero / Cover */}
      <HeroSection />

      {/* Marca Section */}
      <SectionDivider title="MARCA" subtitle={"Selecci\u00f3n de trabajos"} />
      <BrandStory />
      <LogoVariants />

      {/* Branding Section */}
      <SectionDivider title="BRANDING" subtitle={"Selecci\u00f3n de trabajos"} />
      <ProductGallery />
      <EtiquetasSection />

      {/* Packaging Section */}
      <SectionDivider title="PACKAGING" subtitle={"Selecci\u00f3n de trabajos"} />
      <PackagingShowcase />
      <HerbalSection />

      {/* Sobre mí Section */}
      <SectionDivider title="SOBRE MÍ" subtitle={"La diseñadora"} />
      <AboutMe />

      {/* Footer / Contact */}
      <Footer />
    </main>
  )
}
