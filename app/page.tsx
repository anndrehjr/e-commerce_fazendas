import Navbar from "@/components/navbar"
import HeroSection from "@/components/servicos"
import AboutSection from "@/components/sobre-nos"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contatos"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
