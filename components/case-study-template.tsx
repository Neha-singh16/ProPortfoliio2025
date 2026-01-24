"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

interface CaseStudySection {
  title: string
  content: string | string[]
}

interface CaseStudyData {
  title: string
  subtitle: string
  problem: CaseStudySection
  role: CaseStudySection
  techStack: string[]
  challenge: CaseStudySection
  solution: CaseStudySection
  impact: CaseStudySection
  github: string
  demo: string
  image: string
  gif?: string
}

export function CaseStudyTemplate({ data }: { data: CaseStudyData }) {
  const renderContent = (content: string | string[]) => {
    if (Array.isArray(content)) {
      return content.map((item, idx) => (
        <p key={idx} className="text-zinc-300 leading-relaxed mb-3">
          {item}
        </p>
      ))
    }
    return <p className="text-zinc-300 leading-relaxed">{content}</p>
  }

  return (
    <section className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <Link href="/#projects">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-zinc-700 text-white hover:bg-zinc-900"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight mb-3 sm:mb-4">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400">{data.subtitle}</p>
        </motion.div>

        {/* Featured Image / GIF */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12 sm:mb-16 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
        >
          {data.gif ? (
            <img
              src={data.gif}
              alt={`${data.title} demo`}
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
            />
          ) : (
            <img src={data.image} alt={data.title} className="w-full h-auto object-cover" />
          )}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16"
        >
          {data.demo && data.demo !== "#" && (
            <a href={data.demo} target="_blank" rel="noreferrer">
              <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-6 sm:px-8">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Live Demo
              </Button>
            </a>
          )}
          {data.github && (
            <a href={data.github} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="rounded-full border-zinc-700 text-white hover:bg-zinc-900 px-6 sm:px-8"
              >
                <Github className="w-4 h-4 mr-2" />
                View Source
              </Button>
            </a>
          )}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 sm:mb-16 pb-12 border-b border-zinc-800"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Tech Stack</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.techStack.map((tech) => (
              <Badge
                key={tech}
                className="bg-purple-900/20 border-purple-700/50 text-purple-300 text-sm sm:text-base px-3 py-1.5"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="space-y-12 sm:space-y-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-2xl">🎯</span> Problem
            </h2>
            {renderContent(data.problem.content)}
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-2xl">👤</span> My Role
            </h2>
            {renderContent(data.role.content)}
          </motion.div>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-2xl">⚡</span> Key Challenge
            </h2>
            {renderContent(data.challenge.content)}
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-2xl">💡</span> Solution
            </h2>
            {renderContent(data.solution.content)}
          </motion.div>

          {/* Impact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-purple-900/20 to-zinc-900/20 border border-purple-700/20 rounded-2xl p-6 sm:p-8"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
              <span className="text-2xl">📊</span> Impact & Outcome
            </h2>
            {renderContent(data.impact.content)}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
          className="mt-16 sm:mt-20 pt-12 border-t border-zinc-800 text-center"
        >
          <p className="text-zinc-400 mb-6">Interested in working together?</p>
          <Link href="/#contact">
            <Button className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
