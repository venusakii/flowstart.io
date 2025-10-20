import { HeroSection } from "@/components/hero-section"
import { WhatIsFlowstart } from "@/components/what-is-flowstart"
import { CoreFeatures } from "@/components/core-features"
import { VisualFlow } from "@/components/visual-flow"
import { ForTeamsForYou } from "@/components/for-teams-for-you"
import { Integrations } from "@/components/integrations"
import { Testimonials } from "@/components/testimonials"
import { PricingPlans } from "@/components/pricing-plans"
import { JoinFlowstart } from "@/components/join-flowstart"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIsFlowstart />
      <CoreFeatures />
      <VisualFlow />
      <ForTeamsForYou />
      <Integrations />
      <Testimonials />
      <PricingPlans />
      <JoinFlowstart />
      <Footer />
      <CookieBanner />
    </main>
  )
}
