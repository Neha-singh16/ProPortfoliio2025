"use client"

import { motion } from "framer-motion"
import { User, Code, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <div className="md:w-1/3 sticky top-24">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold font-heading uppercase tracking-tighter mb-4"
            >
              About <span className="text-zinc-600">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              viewport={{ once: true }}
              className="h-1 bg-purple-500 mb-6"
            />
            <p className="text-zinc-400 leading-relaxed mb-6">
              I'm a focused and enthusiastic developer with a keen eye for detail. I love creating things that live on
              the internet, whether that be websites, applications, or anything in between.
            </p>
            <div className="font-script text-3xl text-purple-400 -rotate-6 inline-block">Always learning!</div>
          </div>

          {/* Content Cards */}
          <div className="md:w-2/3 grid gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-zinc-800 p-3 rounded-lg h-fit">
                    <User className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading uppercase mb-2">Who I Am</h3>
                    <p className="text-zinc-400 leading-relaxed">
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
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-zinc-800 p-3 rounded-lg h-fit">
                    <GraduationCap className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading uppercase mb-2">Education</h3>
                    <p className="text-white font-medium">Bachelor of Computer Applications (BCA)</p>
                    <p className="text-zinc-400 text-sm mb-2">Expected Graduation: 2026</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
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
                <CardContent className="p-6 flex gap-4">
                  <div className="bg-zinc-800 p-3 rounded-lg h-fit">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading uppercase mb-2">My Goal</h3>
                    <p className="text-zinc-400 leading-relaxed">
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
