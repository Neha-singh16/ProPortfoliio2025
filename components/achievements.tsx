"use client"

import { motion } from "framer-motion"
import { Trophy, Award, Zap } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const achievements = [
  {
    id: 1,
    title: "AI Ideation Champion",
    subtitle: "Delhi AI Grind Ideathon",
    description: "Led a cross-functional team to conceptualize an innovative AI-powered solution. Secured 1st place in district-level competition, recognized for creative problem-solving and technical feasibility.",
    category: "Competition",
    image: "/images/achievements/ideathon.jpg",
    icon: Trophy,
    tags: ["Team Leadership", "Innovation", "AI/ML"],
    year: "2026",
    accentClass: "border-purple-500/30 hover:from-purple-500/8 hover:via-purple-500/6",
  },
  {
    id: 2,
    title: "Athletic Excellence",
    subtitle: "Three-Legged & Relay Champion",
    description: "Demonstrated agility, coordination, and team synergy by winning gold medals in both three-legged race and relay race categories. A testament to communication, trust, and execution.",
    category: "Achievement",
    image: "/images/achievements/sports.jpg",
    icon: Zap,
    tags: ["Team Spirit", "Precision", "Coordination"],
    year: "2026",
    accentClass: "border-blue-500/30 hover:from-blue-500/8 hover:via-blue-500/6",
  },
  {
    id: 3,
    title: "Travel Platform Dev",
    subtitle: "Freelance Project (In Progress)",
    description: "Building a comprehensive travel companion web app featuring destination discovery, itinerary planning, and community reviews. Leveraging React, Node.js, and real-time collaboration.",
    category: "Project",
    image: "/images/achievements/travel.jpg",
    icon: Award,
    tags: ["Full-Stack", "In Progress", "Freelance"],
    year: "2026",
    status: "in-progress",
    accentClass: "border-indigo-500/30 hover:from-indigo-500/8 hover:via-indigo-500/6",
  },
]

export default function Achievements() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="achievements" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[#0a0a0a] relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px]" aria-hidden />
      <div className="absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-blue-500/8 blur-[96px]" aria-hidden />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.18em] text-zinc-300"
          >
            ✨ Highlights & Wins
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading uppercase tracking-tight text-white"
          >
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400">Recognition</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-4"
          >
            Beyond code—celebrating wins in innovation, athletics, and freelance excellence
          </motion.p>
        </div>

        {/* Achievement Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon

            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20 hover:border-blue-500/40 ${achievement.accentClass}`}
              >
                <div className="relative overflow-hidden p-6 sm:p-8 h-full flex flex-col">
                  {/* Icon & Status Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <motion.div 
                      className="p-3 rounded-lg bg-white/5 group-hover:bg-white/8 transition-colors"
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                    </motion.div>
                    {achievement.status === "in-progress" && (
                      <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-medium"
                      >
                        In Progress
                      </motion.span>
                    )}
                  </div>

                  {/* Image */}
                  {achievement.image && (
                    <div className="relative h-48 mb-5 rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.02] flex-shrink-0">
                      <Image
                        src={achievement.image}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                        priority={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-3 font-medium">
                      {achievement.subtitle}
                    </p>
                    <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">
                      {achievement.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {achievement.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/5 border-white/10 text-zinc-300 text-xs px-2.5 py-1 font-medium"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="text-xs text-zinc-500">{achievement.year}</span>
                      <span className="text-xs text-zinc-600 font-medium uppercase tracking-wider">{achievement.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
