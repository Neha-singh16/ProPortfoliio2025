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
      className="fixed top-2 sm:top-4 lg:top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-3 lg:px-4 pointer-events-auto"
    >
      <div
        className={`relative w-full max-w-xs sm:max-w-2xl lg:max-w-6xl transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md border border-white/10 shadow-xl" : "bg-black/60 backdrop-blur-sm border border-white/5"
        } rounded-lg sm:rounded-xl lg:rounded-2xl px-2 py-2 sm:px-3 sm:py-2.5 lg:px-6 lg:py-3`}
      >
        {/* Inner flex to space left and right groups, center logo is absolutely centered */}
        <div className="flex items-center justify-between">
          {/* Left Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 pl-2">
            <Link
              href="#about"
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
            </Link>
          </div>

          {/* Right Links - Desktop Only */}
          <div className="hidden lg:flex items-center gap-8 pr-2">
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
          </div>

          {/* Tablet + Mobile Icons */}
          <div className="lg:hidden flex items-center gap-1 sm:gap-3 text-zinc-300">
            <Link href="#about" className="p-1 sm:p-1.5 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <User size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link href="#projects" className="p-1 sm:p-1.5 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <Code size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <Link href="#contact" className="p-1 sm:p-1.5 hover:text-white transition-colors hover:bg-white/5 rounded-lg">
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>

        {/* Center small logo / badge positioned on top of the bar */}
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-1 py-0.5 sm:px-2 sm:py-0.5 lg:px-3 lg:py-1 rounded-md sm:rounded-lg flex items-center gap-0.5 sm:gap-1.5 lg:gap-2 border border-white/10 hover:border-white/20 transition-colors"
        >
          <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 rounded-full bg-linear-to-br from-purple-600 to-pink-500 flex items-center justify-center text-[10px] sm:text-xs lg:text-sm font-bold shrink-0">
            N
          </div>
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[9px] sm:text-[9px] lg:text-xs text-zinc-200 font-semibold">NEHA</span>
            <span className="text-[7px] sm:text-[7px] lg:text-[10px] text-purple-400">Portfolio</span>
          </div>
        </Link>
      </div>
    </motion.nav>
  )
}
