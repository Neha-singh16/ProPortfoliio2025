"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    title: "BuddyBudget",
    description:
      "A full-stack budget management app. Built secure role-based auth with JWT & HTTP-only cookies. Features real-time financial tracking with Chart.js visualization and REST APIs for CRUD operations.",
    impact: "Real-time financial tracking with 100% secure JWT auth",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/Neha-singh16/Budget-backend",
    demo: "https://budget-buddy-frontend-two.vercel.app/",
    featured: true,
    year: "2025",
    image: "/images/thumbline1.png",
    slug: "buddy-budget",
  },
  {
    title: "Hintly",
    description:
      "Chrome extension providing AI-powered hints for coding challenges on LeetCode and GeeksforGeeks. Uses local Ollama AI for privacy-first hint generation with progress analytics and smart context extraction.",
    impact: "Privacy-first AI hints with 0ms local processing",
    tags: ["React", "TypeScript", "Chrome Extension", "Ollama AI", "Tailwind"],
    github: "https://github.com/Neha-singh16/Hintly",
    demo: "#",
    featured: true,
    year: "2025",
    image: "/images/thumbline2.png",
    slug: "hintly",
  },
  // {
  //   title: "Portfolio Website",
  //   description:
  //     "A modern, responsive portfolio website built with Next.js and Framer Motion to showcase my skills and projects. Features dark mode and smooth animations.",
  //   tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   year: "2025",
  //   image: "/images/photo3.png",
  // },
  // {
  //   title: "Weather App",
  //   description:
  //     "Real-time weather application using OpenWeatherMap API. Provides current conditions, forecasts, and location-based weather updates.",
  //   tags: ["React", "API Integration", "CSS3"],
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   year: "2024",
  // },
  // {
  //   title: "To-Do List",
  //   description:
  //     "A feature-rich task management app with local storage support. Users can add, edit, delete, and categorize tasks.",
  //   tags: ["JavaScript", "DOM Manipulation", "Local Storage"],
  //   github: "#",
  //   demo: "#",
  //   featured: false,
  //   year: "2024",
  // },
  // {
  //   title: "E-commerce Clone",
  //   description:
  //     "A functional clone of an e-commerce platform featuring product listing, cart functionality, and responsive design.",
  //   tags: ["React", "Redux", "Styled Components"],
  //   github: "#",
  //   demo: "#",
  //   featured: true,
  //   year: "2024",
  // },
]

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-heading uppercase tracking-tighter text-white"
            >
              Selected <span className="text-stroke-purple">Works</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-3 sm:mt-4 max-w-md">
              A collection of projects that showcase my journey in frontend development.
            </p>
          </div>

          <Button
            variant="outline"
            className="hidden md:flex rounded-full border-zinc-700 text-white hover:bg-white hover:text-black bg-transparent"
          >
            View GitHub <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-900/10 cursor-pointer">
                <CardHeader className="p-0">
                  <div className="w-full aspect-16/10 bg-zinc-800 relative overflow-hidden flex items-center justify-center shrink-0">
                    {/* Project Image */}
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800/50 flex items-center justify-center">
                        <div className="text-6xl font-bold text-zinc-800 select-none group-hover:text-zinc-700 transition-colors duration-500 font-heading uppercase">
                          {project.title.split(" ")[0]}
                        </div>
                      </div>
                    )}
                    
                    {/* Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white">
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading uppercase text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.demo && project.demo !== "#" ? (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} demo`}
                          className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          disabled
                          aria-hidden
                          className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      )}

                      {project.github && project.github !== "#" ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} source on GitHub`}
                          className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      ) : (
                        <button
                          disabled
                          aria-hidden
                          className="h-8 w-8 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed"
                        >
                          <Github className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-6 line-clamp-3">{project.description}</p>

                  {project.impact && (
                    <p className="text-xs sm:text-sm text-purple-400 font-medium mb-3 sm:mb-4 italic flex items-center gap-2">
                      <span className="text-lg">✨</span> {project.impact}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-transparent border-zinc-700 text-zinc-400 group-hover:text-zinc-300 text-xs sm:text-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
                          </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <Button
            variant="outline"
            className="rounded-full border-zinc-700 text-white hover:bg-white hover:text-black w-full bg-transparent"
          >
            View GitHub <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
