import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CinematicCharacter } from "@/components/motion/CinematicCharacter";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CodeShowcaseSection } from "@/components/sections/CodeShowcaseSection";
import { ContactSection } from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <>
      <div className="page-frame">
        <Navbar />
        <main id="main-content">
          <CinematicCharacter>
            <HeroSection />
            <AboutSection />
          </CinematicCharacter>
          <ServicesSection />
          <TechStackSection />
          <FeaturedWorkSection />
          <ProcessSection />
          <CodeShowcaseSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
