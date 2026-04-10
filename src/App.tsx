import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { Hero } from './components/Hero'
import { Navigation } from './components/Navigation'
import { ProjectsSection } from './components/ProjectsSection'
import { ServicesSection } from './components/ServicesSection'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className="mx-auto w-full max-w-[1120px] pt-4">
      <Navigation />
      <main className="px-5 text-[#9ba4ab] max-[640px]:px-3">
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

