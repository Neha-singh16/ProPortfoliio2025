"use client"

import { ArrowUp, Linkedin, Github, Instagram, Twitter } from "lucide-react"
import React from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer className="relative bg-linear-to-b from-[#050505] to-[#07070a] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Contact column */}
            <div className="md:col-span-5">
              <h4 className="text-2xl font-semibold mb-3">Let's build something together</h4>
              <p className="text-zinc-400 mb-4">Available for internships & early-career roles. Open to remote opportunities.</p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-3">
                <a className="text-lg font-medium hover:underline" href="mailto:sanjayadhithyan@gmail.com">singhn5443@gmail.com</a>
                {/* <a className="text-zinc-400 hover:text-white" href="tel:+919787758158">+91 97877 5815</a> */}
              </div>
            </div>

            {/* Center branding */}
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="flex flex-col items-center">
                 <div className="text-white text-xl font-extrabold tracking-wider">Neha Singh</div>
                 <div className="text-[#8b5cf6] text-xs -mt-1">Full Stack Developer</div>
              </div>
            </div>

            {/* Socials + CTA */}
            <div className="md:col-span-5 flex flex-col items-end gap-4">
              <div className="flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/neha-singh-2142392a1/" aria-label="LinkedIn" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://github.com/Neha-singh16" aria-label="GitHub" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Github size={18} />
                  </a>
                  <a href="https://www.instagram.com/nehaa16.__/" aria-label="Instagram" className="p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Instagram size={18} />
                  </a>
                  {/* <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/3 hover:bg-white/6">
                    <Twitter size={18} />
                  </a> */}
              </div>

              <div className="flex items-center gap-3">
                <a
                    href="/pdf/NehaResumeOct.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-[#8b5cf6] hover:bg-purple-600 text-black px-4 py-2 rounded-lg font-semibold shadow-md"
                >
                  Download Resume
                </a>

                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white"
                  aria-label="Back to top"
                >
                  <span className="w-8 h-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-transparent">
                    <ArrowUp size={16} />
                  </span>
                  Top
                </button>
              </div>
            </div>
          </div>

          <hr className="border-zinc-800 my-8" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
            <div>© {currentYear} <span className="text-white font-medium">Neha Singh</span>. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
