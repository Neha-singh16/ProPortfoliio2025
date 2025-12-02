"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Mail, User } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-auto"
    >
      <div
        className={`relative w-full max-w-5xl transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-xl" : "bg-black/60 backdrop-blur-sm border border-white/5"
        } rounded-2xl px-4 py-3`}
      >
        {/* Inner flex to space left and right groups, center logo is absolutely centered */}
        <div className="flex items-center justify-between">
          {/* Left Links */}
          <div className="hidden md:flex items-center gap-8 pl-2">
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#resume"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              Resume
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Links */}
          <div className="hidden md:flex items-center gap-8 pr-2">
            <Link
              href="#projects"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
            <a
              href="/pdf/NehaResumeOct.pdf"
              download
              aria-label="Download resume PDF"
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-sm font-medium transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4 text-zinc-300">
            <Link href="#about">
              <User size={18} />
            </Link>
            <Link href="#projects">
              <Code size={18} />
            </Link>
            <Link href="#contact">
              <Mail size={18} />
            </Link>
          </div>
        </div>

        {/* Center small logo / badge positioned on top of the bar */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-lg flex items-center gap-3 border border-white/10"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-sm font-bold">
            N
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs text-zinc-200 font-semibold">NEHA</span>
            <span className="text-[10px] text-purple-400">Portfolio</span>
          </div>
        </Link>
      </div>
    </motion.nav>
  )
}
