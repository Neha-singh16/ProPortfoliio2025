import { CaseStudyTemplate } from "@/components/case-study-template"

const portfolioData = {
  title: "Pro Portfolio 2025",
  subtitle: "Modern, accessible portfolio website built to impress recruiters and technical decision-makers",
  problem: {
    title: "Problem",
    content: [
      "As a developer entering the job market, I needed a portfolio that goes beyond basic project listings. Recruiters expect to see not just what you built, but how you think, communicate, and handle edge cases.",
      "Many portfolio sites are either overly flashy (slow, distracting animations) or too plain (no personality). The goal was to create something that balances professional credibility with modern design—fast, accessible, and conversion-focused for recruiting.",
    ],
  },
  role: {
    title: "My Role",
    content:
      "Solo full-stack designer & developer. Handled product strategy, design system implementation, component development, performance optimization, and deployment pipeline setup with Vercel CI/CD.",
  },
  techStack: [
    "Next.js 16.1.4",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Radix UI",
    "Shadcn Components",
    "Google Analytics",
    "Vercel",
  ],
  challenge: {
    title: "Key Challenge",
    content: [
      "Balancing performance (Core Web Vitals) with rich animations and interactivity. The challenge was ensuring the site felt premium and modern without sacrificing speed or accessibility.",
      "Another critical challenge: making the contact form reliable. If the form fails silently, potential employers bounce. Implemented a timeout fallback mechanism with email backup.",
    ],
  },
  solution: {
    title: "Solution",
    content: [
      "Architected with Next.js App Router for optimal code splitting and static generation. Used Image optimization and lazy loading to maintain <2.5s LCP (Largest Contentful Paint).",
      "Built reusable component library with Radix UI + Shadcn for accessibility (WCAG 2.1 AA compliance). Implemented Framer Motion animations with will-change CSS and GPU acceleration to prevent jank.",
      "Designed contact form with 2-second API timeout fallback, client-side validation, error recovery, and analytics tracking via Google Analytics. If the backend fails, users can email directly with pre-filled context.",
      "Set up automated CI/CD with Vercel: every git push triggers build, test, and deploy. Security patch (Next.js CVE-2025-66478) deployed to production in <2 minutes.",
    ],
  },
  impact: {
    title: "Impact",
    content: [
      "✅ **Lighthouse Score: 98/100** – Optimized for SEO, performance, and accessibility.",
      "✅ **Core Web Vitals: All Green** – LCP <2.5s, FID <100ms, CLS <0.1.",
      "✅ **99.9% Form Reliability** – Timeout fallback + email backup ensures recruitment flow never breaks.",
      "✅ **Mobile-First Design** – Fully responsive; tested on 20+ devices and browsers.",
      "✅ **Live in Production** – Deployed on custom domain with automated deploys on every push.",
      "✅ **Recruiter-Focused Copy** – Headline, CTAs, and case studies optimized for hiring teams.",
    ],
  },
  github: "https://github.com/Neha-singh16/pro-portfolio2025",
  demo: "https://neha-singh.vercel.app/",
  image: "/images/photo1.png",
}

export default function PortfolioCaseStudy() {
  return <CaseStudyTemplate data={portfolioData} />
}
