"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "BuddyBudget",
    description:
      "A full-stack budget management app. Built secure role-based auth with JWT & HTTP-only cookies. Features real-time financial tracking with Chart.js visualization and REST APIs for CRUD operations.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/Neha-singh16/Budget-backend",
    demo: "#",
    featured: true,
    year: "2025",
  },
  {
    title: "WatchHub",
    description:
      "Scalable video streaming platform with live search and debounce (reduced API calls by 40%). Integrated YouTube API for content fetching and implemented optimized UI rendering.",
    tags: ["React", "Node.js", "YouTube API", "Tailwind"],
    github: "https://github.com/Neha-singh16/Watch-Hub",
    demo: "#",
    featured: true,
    year: "2025",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with Next.js and Framer Motion to showcase my skills and projects. Features dark mode and smooth animations.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
    featured: false,
    year: "2025",
  },
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
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold font-heading uppercase tracking-tighter text-white"
            >
              Selected <span className="text-stroke-purple">Works</span>
            </motion.h2>
            <p className="text-zinc-400 mt-4 max-w-md">
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

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card
                className={`bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-900/10 ${
                  project.demo && project.demo !== "#" ? "cursor-pointer" : ""
                }`}
                onClick={() => {
                  if (project.demo && project.demo !== "#") window.open(project.demo, "_blank")
                }}
              >
                <CardHeader className="p-0">
                  <div className="h-64 bg-zinc-800 relative overflow-hidden group-hover:bg-zinc-800/80 transition-colors flex items-center justify-center">
                    <div className="absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800/50"></div>

                    {/* Placeholder visual for project */}
                    <div className="text-6xl font-bold text-zinc-800 select-none group-hover:text-zinc-700 transition-colors duration-500 font-heading uppercase">
                      {project.title.split(" ")[0]}
                    </div>

                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white">
                      {project.year}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold font-heading uppercase text-white group-hover:text-purple-400 transition-colors">
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

                  <p className="text-zinc-400 mb-6 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-transparent border-zinc-700 text-zinc-400 group-hover:text-zinc-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
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
