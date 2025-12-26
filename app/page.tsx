import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { ManifestoSection } from "@/components/manifesto-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <ManifestoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
