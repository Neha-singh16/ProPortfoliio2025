"use client"

import { motion } from "framer-motion"
import { User, Code, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-20 items-start">
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
              I'm a focused and enthusiastic developer with a keen eye for detail. I love creating things that live on
              the internet, whether that be websites, applications, or anything in between.
            </p>
            <div className="font-script text-2xl sm:text-3xl text-purple-400 -rotate-6 inline-block">Always learning!</div>
          </div>

          {/* Content Cards */}
          <div className="md:w-2/3 grid gap-4 sm:gap-6">
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
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">Who I Am</h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      My name is <strong>Neha Singh</strong>. I am currently pursuing my BCA degree. I have a strong
                      passion for frontend development and UI design. I enjoy turning complex problems into simple,
                      beautiful and intuitive designs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

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
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">Education</h3>
                    <p className="text-sm sm:text-base text-white font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-xs sm:text-sm text-zinc-400 mb-2">Expected Graduation: 2026</p>
                    <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed">
                      Relevant coursework: Web Development, Data Structures, Database Management Systems, Object
                      Oriented Programming.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

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
                    <h3 className="text-lg sm:text-xl font-bold font-heading uppercase mb-2">My Goal</h3>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                      To join a creative team of developers where I can contribute to exciting projects while continuing
                      to grow my skills in the JavaScript ecosystem.
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
