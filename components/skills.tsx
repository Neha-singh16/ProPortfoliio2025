"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useEffect, useRef, useState } from "react"

const skills = {
  Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java", "Python"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Bootstrap"],
  Tools: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Figma"],
}

const tools = ["VS Code", "Git", "GitHub", "Figma", "Postman", "Chrome DevTools", "npm/yarn", "Netlify"]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="skills" className="py-24 bg-[#050505] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4"
          >
            My <span className="text-purple-500">Tech Stack</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">The technologies and tools I use to bring ideas to life.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 hover:bg-zinc-900/50 transition-colors"
            >
              <h3 className="text-xl font-bold font-heading uppercase mb-6 text-zinc-200 border-b border-zinc-800 pb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 text-sm font-medium border-zinc-700 transition-all hover:text-white hover:scale-105 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
