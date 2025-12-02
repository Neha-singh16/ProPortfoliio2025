"use client"

import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [sendStatus, setSendStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [sendError, setSendError] = useState<string | null>(null)
  const ref = useRef<HTMLElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // mark as mounted to avoid SSR/CSR markup mismatch
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendStatus("loading")
    setSendError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSendStatus("success")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
        // auto-hide after a short delay
        setTimeout(() => setSendStatus("idle"), 3000)
      } else {
        const json = await res.json().catch(() => ({}))
        setSendError(json?.error || "Failed to send message")
        setSendStatus("error")
      }
    } catch (err) {
      console.error(err)
      setSendError("Failed to send message")
      setSendStatus("error")
    }
  }

  return (
    <section ref={ref} id="contact" className="py-24 bg-[#050505] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-900/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left Side */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-5xl md:text-7xl font-bold font-heading uppercase tracking-tighter mb-6 text-white">
                Let's <br /> <span className="text-purple-500">Connect</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                I'm currently looking for new opportunities as a Full Stack Developer. Whether you have a question, a
                project idea, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Email</p>
                    <a
                      href="mailto:singhn5443@gmail.com"
                      className="text-lg text-white hover:text-purple-400 transition-colors"
                    >
                      singhn5443@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                    <MapPin className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Location</p>
                    <p className="text-lg text-white">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/neha-singh-2142392a1/"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                  rel="noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/Neha-singh16"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-purple-600 transition-colors hover:scale-110"
                  rel="noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-zinc-900/50 border-zinc-800 p-2">
              <CardContent className="p-6">
                {/* Render interactive form only after client mount to avoid hydration errors */}
                {mounted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 uppercase">First Name</label>
                      <Input
                        className="bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white"
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-400 uppercase">Last Name</label>
                      <Input
                        className="bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 uppercase">Email</label>
                    <Input
                      className="bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-400 uppercase">Message</label>
                    <Textarea
                      className="bg-zinc-950 border-zinc-800 focus:border-purple-500 min-h-[150px] resize-none text-white"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={sendStatus === "loading"}
                    className="w-full h-12 bg-white text-black hover:bg-zinc-200 text-base font-bold rounded-lg disabled:opacity-60"
                  >
                    {sendStatus === "loading" ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 w-4 h-4" />
                      </>
                    )}
                  </Button>
                  </form>
                ) : (
                  <div className="py-12 text-center text-gray-400">Loading contact form…</div>
                )}
              </CardContent>
            </Card>
            {/* Success / Error overlay */}
            {sendStatus === "success" && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 text-white max-w-sm w-full">
                  <h3 className="text-lg font-bold">Message sent</h3>
                  <p className="mt-2 text-sm text-gray-300">Thank you — I'll get back to you soon.</p>
                </div>
              </div>
            )}

            {sendStatus === "error" && (
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative bg-[#0b0b0b] border border-gray-800 rounded-xl p-6 text-white max-w-sm w-full">
                  <h3 className="text-lg font-bold">Failed to send</h3>
                  <p className="mt-2 text-sm text-gray-300">{sendError || "Something went wrong."}</p>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => setSendStatus("idle")}
                      className="px-3 py-2 bg-gray-800 text-white rounded"
                    >
                      Close
                    </button>
                    <a
                      href={`mailto:singhn5443@gmail.com?subject=${encodeURIComponent(
                        `Message from ${formData.firstName} ${formData.lastName}`,
                      )}&body=${encodeURIComponent(formData.message || "")}`}
                      className="px-3 py-2 bg-purple-600 text-white rounded"
                    >
                      Use Mail Client
                    </a>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
