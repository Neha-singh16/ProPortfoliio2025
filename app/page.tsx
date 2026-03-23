import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ResumeSection from "@/components/resume-section"
import Achievements from "@/components/achievements"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ResumeSection />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
