"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

const skillCategories = [
  {
    title: "Languages",
    accent: "from-purple-500/24 via-indigo-500/18 to-blue-500/12",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java", "Python", "C++", "SQL"],
  },
  {
    title: "Frontend & UI",
    accent: "from-fuchsia-400/22 via-purple-500/20 to-blue-500/14",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "shadcn/ui",
      "Bootstrap",
      "Material-UI",
      "SASS/SCSS",
    ],
  },
  {
    title: "Backend & Database",
    accent: "from-cyan-400/22 via-blue-500/18 to-indigo-600/12",
    items: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "MySQL", "Prisma", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    accent: "from-blue-400/22 via-indigo-500/18 to-purple-500/14",
    items: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Figma", "Postman", "Docker", "AWS", "Firebase"],
  },
]

const craftHighlights = [
  { label: "UI polish", detail: "Micro-interactions, theming, responsive choreography" },
  { label: "Systems", detail: "Design tokens, reusable primitives, accessible patterns" },
  { label: "Shipping", detail: "CI-first mindset, observability, clean handoffs" },
  { label: "Collab", detail: "Product pairing, fast prototypes, crisp documentation" },
]

const primaryTech = [
  { name: "React", experience: "2+ years", projects: ["BuddyBudget", "Hintly", "Portfolio"] },
  { name: "Next.js", experience: "~1.5 years", projects: ["Portfolio", "Case studies"] },
  { name: "Node.js", experience: "~2 years", projects: ["BuddyBudget API"] },
  { name: "MongoDB", experience: "~2 years", projects: ["BuddyBudget"] },
  { name: "JavaScript", experience: "2+ years", projects: ["Across projects"] },
  { name: "TypeScript", experience: "~1.5 years", projects: ["Hintly", "Portfolio"] },
]

const otherTools = [
  "Express",
  "Tailwind CSS",
  "Framer Motion",
  "Redux Toolkit",
  "shadcn/ui",
  "Radix UI",
  "Chart.js",
  "Postman",
  "Git",
  "GitHub",
  "Vercel",
  "Figma",
  "Docker",
  "Netlify",
  "Material-UI",
  "SASS/SCSS",
  "Prisma",
  "REST APIs",
  "GraphQL",
  "AWS",
  "Firebase",
  "VS Code",
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)
  const [showOther, setShowOther] = useState(false)

  return (
    <section ref={ref} id="skills" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }}></div>
      <div className="absolute -right-32 -top-24 h-72 w-72 rounded-full bg-purple-500/15 blur-[96px]" aria-hidden></div>
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[110px]" aria-hidden></div>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.18em] text-zinc-300">
            Curated Toolkit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tight"
          >
            My Tech Stack, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">Refined</span>
          </motion.h2>
          <p className="mt-3 text-xs sm:text-sm md:text-base text-zinc-400 max-w-2xl mx-auto">
            A balanced mix of product-focused UI craft, reliable delivery practices, and the tools that keep quality high when shipping fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/8 via-indigo-500/6 to-blue-500/4 p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.9)]"
          >
            <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_20%_20%,rgba(192,132,252,0.25),transparent_32%),radial-gradient(circle_at_82%_8%,rgba(59,130,246,0.18),transparent_30%)]" aria-hidden></div>
            <div className="relative space-y-5">
              <div className="flex flex-wrap gap-3">
                {["Design systems", "Animation fluency", "Full-stack pragmatism", "Founder-friendly velocity"].map((chip) => (
                  <Badge key={chip} variant="secondary" className="bg-white/6 border-white/10 text-zinc-100 px-3 py-1 text-xs sm:text-sm font-medium">
                    {chip}
                  </Badge>
                ))}
              </div>

              <div className="space-y-2 sm:space-y-3 text-zinc-200">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight line-clamp-2">Elegant interfaces with a production spine</h3>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed line-clamp-3 sm:line-clamp-4">
                  I obsess over small details—timing curves, legible contrast, thoughtful spacing—while keeping the stack simple enough to iterate quickly. The goal: ship delightful experiences without compromising reliability or maintainability.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {craftHighlights.map((highlight) => (
                  <div
                    key={highlight.label}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-purple-500/6 p-2.5 sm:p-3 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/14 via-indigo-400/10 to-transparent opacity-80" aria-hidden></div>
                    <div className="relative">
                      <p className="text-xs uppercase tracking-[0.18em] text-zinc-400 mb-1">{highlight.label}</p>
                      <p className="text-xs sm:text-sm text-zinc-200 leading-snug line-clamp-2">{highlight.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-start">
            {/* Primary Tech */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-3 sm:p-4 md:p-5 backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/18 via-indigo-500/12 to-blue-500/10 opacity-60" aria-hidden></div>
              <div className="absolute inset-px rounded-2xl border border-white/5 opacity-80" aria-hidden></div>
              <div className="relative mb-3 sm:mb-4 flex items-center justify-between">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight">Primary Tech</h3>
                <span className="text-[11px] uppercase tracking-[0.18em] text-white/70">{primaryTech.length}</span>
              </div>
              <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {primaryTech.map((t) => (
                  <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:p-3">
                    <p className="text-xs sm:text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1">
                      {t.experience} • <span className="text-zinc-600 line-clamp-1">{t.projects.join(", ")}</span>
                    </p>
                  </div>
                ))}  
              </div>
            </motion.div>

            {/* Other Tools (expandable) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/60 p-3 sm:p-4 md:p-5 backdrop-blur-sm h-fit self-start"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/14 via-indigo-500/12 to-purple-500/10 opacity-60" aria-hidden></div>
              <div className="absolute inset-px rounded-2xl border border-white/5 opacity-80" aria-hidden></div>

              <div className="relative mb-3 sm:mb-4 flex items-center justify-between gap-2">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight">Other Tools</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-zinc-700 text-white hover:bg-zinc-900 text-xs px-2.5 py-1"
                  aria-expanded={showOther}
                  onClick={() => setShowOther((v) => !v)}
                >
                  {showOther ? "Hide" : "Show"}
                </Button>
              </div>

              {showOther ? (
                <div className="relative flex flex-wrap gap-1.5">
                  {otherTools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="secondary"
                      className="bg-zinc-900/70 hover:bg-white/20 text-zinc-100 border-white/10 px-2 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-tight transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="relative text-xs sm:text-sm text-zinc-400">Expand to view broader toolkit.</p>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
