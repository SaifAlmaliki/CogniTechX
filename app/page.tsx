import { HeroSection } from "@/components/sections/hero-section"
import { MissionSection } from "@/components/sections/mission-section"
import { ServicesSection } from "@/components/sections/services-section"
import { AcademySection } from "@/components/sections/academy-section"
import { ContactSection } from "@/components/sections/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      <AcademySection />
      <ContactSection />
    </div>
  )
}