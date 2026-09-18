"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const projects = [
  {
    title: "HeraPheri",
    description:
      "A two-sided task marketplace where Requesters create and fund tasks while Executors discover, accept, execute, and submit proof. Includes authentication, payments, real-time updates, notifications, and asynchronous background processing.",
    impact:
      "Backend-focused marketplace with real-time workflows and async job processing",
    tags: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Razorpay",
    ],
    github: "https://github.com/Neha-singh16/HeraPheri",
    demo: "https://herapheri-frontend.vercel.app/",
    featured: true,
    year: "2026",
    image: "/images/herapheri.png",
    slug: "herapheri",
  },
  {
    title: "Job Application Tracker",
    description:
      "A full-stack platform for organizing job applications, companies, job listings, attachments, reminders, and application progress with searchable, sortable, and paginated APIs.",
    impact:
      "Backend-driven application tracking with automated reminders and data management",
    tags: [
      "Node.js",
      "Express.js",
      "MySQL",
      "Sequelize",
      "JWT",
      "Multer",
      "Node-Cron",
      "React",
    ],
    github:
      "https://github.com/Neha-singh16/SharpenerDev/tree/main/jobApplicationTracker",
    demo: "https://sharpener-dev-psi.vercel.app/",
    featured: true,
    year: "2026",
    image: "/images/job-tracker.png",
    slug: "job-application-tracker",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-[#0a0a0a] border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 sm:mb-8 md:mb-12 gap-3 sm:gap-4 md:gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading uppercase tracking-tighter text-white"
            >
              Selected <span className="text-stroke-purple">Works</span>
            </motion.h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 mt-2 sm:mt-3 md:mt-4 max-w-md">
              Backend-focused projects covering APIs, databases, authentication,
              asynchronous processing, payments, and full-stack development.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/Neha-singh16", "_blank", "noreferrer")
            }
            className="hidden md:flex rounded-full border-zinc-700 text-white hover:bg-white hover:text-black bg-transparent"
          >
            View GitHub <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <Card className="bg-zinc-900 border-zinc-800 overflow-hidden h-full hover:border-purple-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-900/10 cursor-pointer">
                  <CardHeader className="p-0">
                    <div className="w-full aspect-video sm:aspect-video lg:aspect-video bg-zinc-800 relative overflow-hidden flex items-center justify-center shrink-0">
                      {/* Project Image */}
                      {project.image ? (
                        <div className="absolute inset-0">
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                            priority={false}
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 bg-linear-to-tr from-zinc-900 to-zinc-800/50 flex items-center justify-center">
                          <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 select-none group-hover:text-zinc-700 transition-colors duration-500 font-heading uppercase">
                            {project.title.split(" ")[0]}
                          </div>
                        </div>
                      )}

                      {/* Overlay for better text contrast */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>

                      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-white">
                        {project.year}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 sm:p-4 md:p-4 lg:p-4">
                    <div className="flex justify-between items-start gap-2 mb-1.5 sm:mb-2 md:mb-2 lg:mb-2">
                      <h3 className="text-sm sm:text-base md:text-base lg:text-base font-bold font-heading text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex gap-1 lg:gap-1 flex-shrink-0">
                        {project.demo && project.demo !== "#" ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                project.demo as string,
                                "_blank",
                                "noreferrer",
                              );
                            }}
                            aria-label={`${project.title} live demo`}
                            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                          >
                            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-3.5 lg:w-3.5" />
                          </button>
                        ) : (
                          <button
                            disabled
                            aria-hidden
                            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed"
                          >
                            <ExternalLink className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-3.5 lg:w-3.5" />
                          </button>
                        )}

                        {project.github && project.github !== "#" ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                project.github as string,
                                "_blank",
                                "noreferrer",
                              );
                            }}
                            aria-label={`${project.title} source on GitHub`}
                            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 rounded-full inline-flex items-center justify-center bg-white/6 hover:bg-white/10 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                          >
                            <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-3.5 lg:w-3.5" />
                          </button>
                        ) : (
                          <button
                            disabled
                            aria-hidden
                            className="h-6 w-6 sm:h-7 sm:w-7 lg:h-7 lg:w-7 rounded-full inline-flex items-center justify-center bg-white/2 text-white/40 cursor-not-allowed"
                          >
                            <Github className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-3.5 lg:w-3.5" />
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-xs sm:text-xs md:text-sm lg:text-sm text-zinc-300 mb-1.5 sm:mb-2 leading-relaxed line-clamp-2 lg:line-clamp-2">
                      {project.description}
                    </p>

                    {project.impact && (
                      <p className="text-xs text-purple-400 font-medium mb-2 sm:mb-3 italic flex items-center gap-1.5">
                        <span className="text-sm">✨</span>{" "}
                        <span className="line-clamp-1">{project.impact}</span>
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-transparent border-zinc-700 text-zinc-400 group-hover:text-zinc-300 text-xs sm:text-sm"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center md:hidden">
          <Button
            variant="outline"
            onClick={() =>
              window.open("https://github.com/Neha-singh16", "_blank", "noreferrer")
            }
            className="rounded-full border-zinc-700 text-white hover:bg-white hover:text-black w-full bg-transparent"
          >
            View GitHub <Github className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
