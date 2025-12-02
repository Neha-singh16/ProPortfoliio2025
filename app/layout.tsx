import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Oswald, Caveat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "../components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-script" })

export const metadata: Metadata = {
  title: "Neha Singh | React Developer Portfolio",
  description:
    "BCA student specializing in React.js development. Building beautiful, interactive web experiences with modern frontend technologies.",
  keywords: ["React Developer", "Frontend Developer", "Web Developer", "BCA Student", "Portfolio"],
  authors: [{ name: "Neha Singh" }],
  creator: "Neha Singh",
  openGraph: {
    title: "Neha Singh | React Developer Portfolio",
    description: "BCA student specializing in React.js development",
    type: "website",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${oswald.variable} ${caveat.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-purple-500/30`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
