"use client"

import { ArrowUp, Linkedin, Github, Instagram, Twitter } from "lucide-react"
import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  // Format date consistently: "Jan 24, 2026"
  const date = new Date()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const lastUpdated = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-linear-to-b from-[#050505] to-[#07070a] text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Contact column */}
            <div className="md:col-span-5">
              <h4 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">Let's build something together</h4>
              <p className="text-sm sm:text-base text-zinc-400 mb-3 sm:mb-4">Available for internships & early-career roles. Open to remote opportunities.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-2 sm:gap-3">
                <a className="text-base sm:text-lg font-medium hover:underline break-all" href="mailto:sanjayadhithyan@gmail.com">singhn5443@gmail.com</a>
                {/* <a className="text-zinc-400 hover:text-white" href="tel:+919787758158">+91 97877 5815</a> */}
              </div>
            </div>

            {/* Center branding */}
            <div className="md:col-span-2 flex items-center justify-center md:justify-center justify-start">
              <div className="flex flex-col items-center md:items-center items-start">
                 <div className="text-white text-lg sm:text-xl font-extrabold tracking-wider">Neha Singh</div>
                 <div className="text-[#8b5cf6] text-xs -mt-1">Full Stack Developer</div>
              </div>
            </div>

            {/* Socials + CTA */}
            <div className="md:col-span-5 flex flex-col md:items-end items-start gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3">
                  <a href="https://www.linkedin.com/in/neha-singh-2142392a1/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-1.5 sm:p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a href="https://github.com/Neha-singh16" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-1.5 sm:p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  <a href="https://www.instagram.com/nehaa16.__/" aria-label="Instagram" className="p-1.5 sm:p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </a>
                  {/* <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Twitter size={18} />
                  </a> */}
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                    href="/pdf/NehaResumeOct.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 bg-[#8b5cf6] hover:bg-purple-600 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-semibold shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Download resume as PDF"
                >
                  Download Resume
                </a>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-200 hover:text-white"
                  aria-label="Back to top"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-transparent">
                    <ArrowUp size={14} className="sm:w-4 sm:h-4" />
                  </span>
                  Top
                </button>
              </div>
            </div>
          </div>

          <hr className="border-zinc-800 my-6 sm:my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-zinc-400 text-xs sm:text-sm">
            <div>© {currentYear} <span className="text-white font.medium">Neha Singh</span>. All rights reserved.</div>
            <div className="text-zinc-400">Last updated: <span className="text-white/90">{lastUpdated}</span></div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
