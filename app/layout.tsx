import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter, Oswald, Caveat } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "../components/navbar"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const oswald = Oswald({ subsets: ["latin"], variable: "--font-heading" })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-script" })

export const metadata: Metadata = {
  metadataBase: new URL("https://neha-singh.vercel.app"),
  title: {
    default: "Neha Singh — React & Next.js Developer",
    template: "%s | Neha Singh",
  },
  description:
    "React & Next.js developer building polished, production-ready web apps. I build accessible MERN apps with clean UI and measurable impact.",
  keywords: ["React", "Next.js", "Frontend Developer", "MERN", "Portfolio", "Neha Singh"],
  authors: [{ name: "Neha Singh" }],
  creator: "Neha Singh",
  openGraph: {
    title: "Neha Singh — React & Next.js Developer",
    description:
      "React & Next.js developer building polished, production-ready web apps. I build accessible MERN apps with clean UI and measurable impact.",
    type: "website",
    url: "https://neha-singh.vercel.app/",
    images: [{ url: "/placeholder.jpg", width: 1200, height: 630, alt: "Neha Singh Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Singh — React & Next.js Developer",
    description:
      "React & Next.js developer building polished, production-ready web apps. I build accessible MERN apps with clean UI and measurable impact.",
    images: ["/placeholder.jpg"],
    creator: "@neha_singh",
  },
  alternates: {
    canonical: "https://neha-singh.vercel.app/",
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
        {/* Preconnects for external fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
        />
        {/* Preload hero image for faster LCP */}
        <link rel="preload" as="image" href="/images/photo1.png" imagesrcset="/images/photo1.png" />
        {/* Analytics: Prefer Plausible; fallback to GA4; else stub */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/plausible.js"
          />
        ) : process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
            </Script>
          </>
        ) : (
          <Script id="analytics-stub" strategy="afterInteractive">
            {`window.plausible = window.plausible || function(){try{console.debug('analytics event', arguments)}catch(e){}};`}
          </Script>
        )}
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${oswald.variable} ${caveat.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-purple-500/30`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
