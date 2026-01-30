import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { ProductSection } from "@/components/landing/product-section"
import { TractionSection } from "@/components/landing/traction-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { InstagramCarousel } from "@/components/landing/instagram-carousel"
import { ProblemSection } from "@/components/landing/problem-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { DeckCaptureSection } from "@/components/landing/deck-capture-section"
import { TeamSection } from "@/components/landing/team-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { RoadmapSection } from "@/components/landing/roadmap-section"
import { FAQSection } from "@/components/landing/faq-section"
import { StickyCTA } from "@/components/landing/sticky-cta"
import { Footer } from "@/components/landing/footer"

export default function InvestPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0B] pb-20 lg:pb-0">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <TractionSection />
      <PartnersSection />
      <InstagramCarousel />
      <ProblemSection />
      <FeaturesSection />
      <DeckCaptureSection variant="primary" />
      <TeamSection />
      <TestimonialsSection />
      <RoadmapSection />
      <DeckCaptureSection variant="secondary" />
      <FAQSection />
      <Footer />
      <StickyCTA />
    </main>
  )
}
