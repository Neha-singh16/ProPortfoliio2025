import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ResumeSection from "@/components/resume-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ResumeSection />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
