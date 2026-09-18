"use client"

import { motion } from "framer-motion"
import { User, Code, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0a] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-start">

          {/* Left Content */}
          <div className="md:w-1/3 md:sticky md:top-24">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading uppercase tracking-tighter mb-3 sm:mb-4"
            >
              About <span className="text-zinc-600">Me</span>
            </motion.h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-purple-500 mb-4 sm:mb-6"
            />

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4 sm:mb-6">
              I&apos;m a backend-focused software developer who enjoys building
              reliable APIs, database-driven applications, and scalable backend
              workflows. I work primarily with Node.js, Express.js, SQL,
              Sequelize, Redis, and modern backend tools, while also building
              full-stack applications with React.
            </p>

            <div className="font-script text-2xl sm:text-3xl text-purple-400 -rotate-6 inline-block">
              Building. Learning. Improving.
            </div>
          </div>

          {/* Content Cards */}
          <div className="md:w-2/3 grid gap-4 sm:gap-6">

            {/* Who I Am */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-4 sm:p-6 flex gap-3 sm:gap-4">
                  <div className="bg-zinc-800 p-2.5 sm:p-3 rounded-lg h-fit shrink-0">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">
                      Who I Am
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      I&apos;m <strong>Neha Singh</strong>, a BCA graduate and
                      backend-focused developer. I enjoy solving backend
                      problems involving API design, authentication,
                      databases, asynchronous processing, payments, and
                      real-time communication. I also have hands-on experience
                      integrating React frontends with backend services to
                      build complete full-stack applications.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-4 sm:p-6 flex gap-3 sm:gap-4">
                  <div className="bg-zinc-800 p-2.5 sm:p-3 rounded-lg h-fit shrink-0">
                    <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">
                      Education
                    </h3>

                    <p className="text-sm sm:text-base text-white font-medium">
                      Bachelor of Computer Applications (BCA)
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-400 mb-2">
                      Delhi Skill and Entrepreneurship University · 2026
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                      Graduated with a 9.50 / 10.00 CGPA and secured the Branch
                      Topper position. Strong foundation in Data Structures,
                      Database Management Systems, Object-Oriented Programming,
                      and Web Development.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-4 sm:p-6 flex gap-3 sm:gap-4">
                  <div className="bg-zinc-800 p-2.5 sm:p-3 rounded-lg h-fit shrink-0">
                    <Code className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">
                      What I&apos;m Building
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      I&apos;m focused on becoming a strong backend engineer by
                      building production-oriented systems and deepening my
                      understanding of APIs, SQL, authentication, caching,
                      background jobs, system design, and scalability. My goal
                      is to build software that is not only functional, but
                      reliable, maintainable, and designed to handle real-world
                      workflows.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About