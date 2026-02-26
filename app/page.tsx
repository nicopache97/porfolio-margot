import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { SectionDivider } from "@/components/section-divider"
import { BrandStory } from "@/components/brand-story"
import { LogoVariants } from "@/components/logo-variants"
import { ProductGallery } from "@/components/product-gallery"
import { PackagingShowcase } from "@/components/packaging-showcase"
import { HerbalSection } from "@/components/herbal-section"
import { EtiquetasSection } from "@/components/etiquetas-section"
import { Footer } from "@/components/footer"

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

      {/* Footer / Contact */}
      <Footer />
    </main>
  )
}
