import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ProductSection } from "@/components/landing/product-section"
import { AISection } from "@/components/landing/ai-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { StatsSection } from "@/components/landing/stats-section"
import { IntegrationsSection } from "@/components/landing/integrations-section"
import { CloudSection } from "@/components/landing/cloud-section"
import { CTASection } from "@/components/landing/cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductSection />
      <AISection />
      <BenefitsSection />
      <StatsSection />
      <IntegrationsSection />
      <CloudSection />
      <CTASection />
      <Footer />
    </main>
  )
}
