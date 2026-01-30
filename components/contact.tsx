"use client"

import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

import type React from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Linkedin, Github, AlertCircle, CheckCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

declare global {
  interface Window {
    gtag: (command: string, action: string, config?: Record<string, unknown>) => void
  }
}

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const [formReady, setFormReady] = useState(false)
  const [showFallback, setShowFallback] = useState(false)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const defaultMessage =
    "Hi Neha, I loved your portfolio and want to chat about a potential project. Are you available for a quick call this week?"
  const quickMessages = [
    "I'm looking for a full-stack developer to join my team.",
    "Can you help audit or improve our existing web app?",
    "Let's collaborate on an open-source project you might like.",
  ]
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
    setMounted(true)
    // Check if API is available within 2 seconds
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 2000)

    fetch("/api/contact", {
      method: "HEAD",
      signal: controller.signal,
    })
      .then(() => {
        setFormReady(true)
        setShowFallback(false)
      })
      .catch(() => {
        // API unavailable or timeout; show fallback
        setShowFallback(true)
        setFormReady(false)
      })
      .finally(() => clearTimeout(timeoutId))
  }, [])

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formData.firstName.trim()) errors.firstName = "First name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email format"
    if (!formData.message.trim()) errors.message = "Message is required"
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const trackAnalytics = (action: string, label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, { event_label: label })
    }
  }

  const handleSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    trackAnalytics("contact_attempt", "form_submit")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setSubmitMessage("Message sent! I'll get back to you soon.")
        setFormData({ firstName: "", lastName: "", email: "", message: "" })
        setFormErrors({})
        trackAnalytics("contact_success", "form_submit")
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      setSubmitStatus("error")
      setSubmitMessage("Failed to send message. Please try emailing me directly.")
      trackAnalytics("contact_error", "form_submit")
      console.error("Contact form error:", error)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleMessageFocus = () => {
    if (!formData.message.trim()) {
      setFormData((prev) => ({ ...prev, message: defaultMessage }))
    }
  }

  const handleQuickMessage = (text: string) => {
    setFormData((prev) => ({ ...prev, message: text }))
  }

  const handleMailtoFallback = () => {
    trackAnalytics("contact_attempt", "mailto_fallback")
    const subject = `Message from ${formData.firstName || ""} ${formData.lastName || ""}`.trim()
    const body = formData.message || defaultMessage
    const href = `mailto:singhn5443@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = href
  }


  return (
    <section ref={ref} id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#050505] relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-purple-900/50 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-20">
          {/* Left Side */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading uppercase tracking-tighter mb-4 sm:mb-6 text-white">
                Let's <br /> <span className="text-purple-500">Connect</span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                I'm currently looking for new opportunities as a Full Stack Developer. Whether you have a question, a
                project idea, or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                <div className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider font-medium">Email</p>
                    <a
                      href="mailto:singhn5443@gmail.com"
                      className="text-base sm:text-lg text-white hover:text-purple-400 transition-colors break-all"
                    >
                      singhn5443@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4 group">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-purple-500 transition-colors shrink-0">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-zinc-500 uppercase tracking-wider font-medium">Location</p>
                    <p className="text-base sm:text-lg text-white">Delhi, India</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.linkedin.com/in/neha-singh-2142392a1/"
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform"
                  rel="noreferrer"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://github.com/Neha-singh16"
                  target="_blank"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center hover:bg-purple-600 transition-colors hover:scale-110"
                  rel="noreferrer"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
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
            <Card className="bg-zinc-900/50 border-zinc-800 p-1.5 sm:p-2">
              <CardContent className="p-4 sm:p-6">
                {mounted ? (
                  <>
                    {/* Fallback Message */}
                    {showFallback && (
                      <div className="mb-4 p-4 rounded-lg bg-orange-900/20 border border-orange-700/50 flex gap-3">
                        <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm text-orange-300 font-medium">Form experiencing delays</p>
                          <p className="text-xs text-orange-200 mt-1">
                            If the form doesn't load, email me directly below.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Status Messages */}
                    {submitStatus === "success" && (
                      <div className="mb-4 p-4 rounded-lg bg-green-900/20 border border-green-700/50 flex gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-green-300">{submitMessage}</p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-4 p-4 rounded-lg bg-red-900/20 border border-red-700/50 flex gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-300">{submitMessage}</p>
                      </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmitForm} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-400 uppercase">
                            First Name <span className="text-red-400">*</span>
                          </label>
                          <Input
                            className={`bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white ${
                              formErrors.firstName ? "border-red-500" : ""
                            }`}
                            placeholder="Jane"
                            value={formData.firstName}
                            onChange={(e) => {
                              setFormData({ ...formData, firstName: e.target.value })
                              if (formErrors.firstName) {
                                setFormErrors({ ...formErrors, firstName: "" })
                              }
                            }}
                          />
                          {formErrors.firstName && (
                            <p className="text-xs text-red-400">{formErrors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-zinc-400 uppercase">Last Name</label>
                          <Input
                            className="bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white"
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <Input
                          className={`bg-zinc-950 border-zinc-800 focus:border-purple-500 h-12 text-white ${
                            formErrors.email ? "border-red-500" : ""
                          }`}
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                            if (formErrors.email) {
                              setFormErrors({ ...formErrors, email: "" })
                            }
                          }}
                        />
                        {formErrors.email && <p className="text-xs text-red-400">{formErrors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-zinc-400 uppercase">
                          Message <span className="text-red-400">*</span>
                        </label>
                        <Textarea
                          className={`bg-zinc-950 border-zinc-800 focus:border-purple-500 min-h-[150px] resize-none text-white ${
                            formErrors.message ? "border-red-500" : ""
                          }`}
                          placeholder="Tell me about your project..."
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value })
                            if (formErrors.message) {
                              setFormErrors({ ...formErrors, message: "" })
                            }
                          }}
                          onFocus={handleMessageFocus}
                        />
                        {formErrors.message && <p className="text-xs text-red-400">{formErrors.message}</p>}
                        <div className="flex flex-wrap gap-2">
                          {quickMessages.map((msg) => (
                            <button
                              key={msg}
                              type="button"
                              onClick={() => handleQuickMessage(msg)}
                              className="px-3 py-1 rounded-full bg-zinc-800 text-xs text-zinc-200 border border-zinc-700 hover:border-purple-500 hover:text-white transition-colors"
                            >
                              {msg}
                            </button>
                          ))}
                          <button
                            type="button"
                            onClick={() => handleQuickMessage(defaultMessage)}
                            className="px-3 py-1 rounded-full bg-purple-600 text-xs text-white border border-purple-500 hover:bg-purple-700 transition-colors"
                          >
                            Use friendly default
                          </button>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting || showFallback}
                        className="w-full h-12 bg-white text-black hover:bg-zinc-200 disabled:bg-zinc-600 disabled:text-zinc-400 text-base font-bold rounded-lg"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"} <Send className="ml-2 w-4 h-4" />
                      </Button>
                    </form>

                    {/* Fallback Email Button */}
                    {showFallback && (
                      <div className="mt-4 pt-4 border-t border-zinc-800">
                        <p className="text-xs text-zinc-500 mb-3">If the form doesn't load, send me an email:</p>
                        <Button
                          type="button"
                          onClick={handleMailtoFallback}
                          className="w-full h-12 bg-purple-600 text-white hover:bg-purple-700 text-base font-bold rounded-lg"
                        >
                          Email: singhn5443@gmail.com
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-12 text-center text-gray-400">
                    <div className="inline-block animate-spin mb-2">
                      <Clock className="w-6 h-6" />
                    </div>
                    <p>Loading contact form…</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
