"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden px-4 md:px-6 pt-20 md:pt-0">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Open to Work</span>
          </motion.div>

          <div className="relative">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-bold font-heading tracking-tighter uppercase text-white mb-2"
            >
              Hey,
              <br />
              I'm Neha <span className="text-stroke text-transparent">Singh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-10 right-0 md:right-20 lg:right-10 hidden md:block"
            >
              <span className="font-script text-5xl md:text-7xl text-purple-400 transform -rotate-12 block whitespace-nowrap">
                Full Stack Developer
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-purple-400"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  pathLength="1"
                  className="animate-draw"
                />
              </svg>
            </motion.div>

            {/* Mobile Only Script Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="md:hidden mb-6"
            >
              <span className="font-script text-4xl text-purple-400">Full Stack Dev</span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-zinc-400 max-w-md mt-6 mb-8 leading-relaxed"
          >
            Passionate <strong>Full Stack Developer</strong> & <strong>BCA Student (2026)</strong>. I build scalable web
            platforms using MERN stack, Next.js, and modern tools. Turning complex problems into elegant, user-friendly
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 text-base font-bold"
            >
              <Link href="#projects">
                View Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-base border-zinc-700 text-white hover:bg-zinc-900 hover:text-white bg-transparent"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          {/* Decorative Elements around image */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -top-12 -right-12 md:-right-4 w-32 h-32 md:w-40 md:h-40 border border-dashed border-zinc-700 rounded-full flex items-center justify-center z-0"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 border border-zinc-800 rounded-full" />
          </motion.div>

          <div className="relative z-10 w-[280px] md:w-[350px] aspect-4/5 group">
            {/* Card Container */}
            <div className="absolute inset-0 bg-zinc-800 rounded-2xl transform rotate-6 scale-105 opacity-50 transition-transform group-hover:rotate-3 duration-500"></div>
            <div className="absolute inset-0 bg-zinc-900 rounded-2xl transform -rotate-3 transition-transform group-hover:rotate-0 duration-500 border border-zinc-800"></div>

            {/* Image Wrapper */}
            <div className="relative h-full w-full rounded-xl overflow-hidden border-4 border-zinc-900/50 shadow-2xl bg-zinc-950">
              <Image
                src="/images/photo1.jpg"
                alt="Neha Singh"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                priority
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>

            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 12 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-green-500 text-black font-bold font-heading uppercase text-sm py-4 px-4 rounded-full shadow-lg transform rotate-12 border-2 border-white z-20 flex items-center justify-center w-24 h-24 text-center leading-tight"
            >
              Good
              <br />
              Vibes
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: -12 }}
              transition={{ delay: 1, type: "spring" }}
              className="absolute top-10 -left-10 bg-white text-black font-bold font-heading uppercase text-xs py-2 px-4 rounded-full shadow-lg transform -rotate-12 z-20"
            >
              <Sparkles className="w-3 h-3 inline-block mr-1 text-purple-600" />
              2026 Grad
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-zinc-500">Scroll</span>
            <div className="w-px h-12 bg-linear-to-b from-zinc-500 to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero
