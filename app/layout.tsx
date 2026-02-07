import type React from "react"
import type { Metadata } from "next"
import { Syne, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { GoogleAnalytics } from "@/components/google-analytics"
import { ChatWidget } from "@/components/ChatWidget";
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yultic - Tecnología con raíz. Sistemas con propósito.",
  description:
    "Construimos software desde el origen del problema, no desde la moda. Cada decisión técnica tiene un propósito. Cada sistema está pensado para crecer sin romperse.",
  generator: "v0.app",
  keywords: [
    "desarrollo web",
    "software empresarial",
    "nextjs",
    "react",
    "el salvador",
    "yultic",
    "skinnersv",
    "inteligencia artificial",
    "machine learning",
  ],
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${syne.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased grain`}>
        {/* Global grid background with subtle red glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
        <div className="pointer-events-none fixed bottom-0 right-0 -z-10 h-[600px] w-[600px] bg-[radial-gradient(ellipse_at_center,oklch(0.60_0.24_25/0.06),transparent_70%)]" />
        {children}
        <GoogleAnalytics />
        <Analytics />
        <ChatWidget />
      </body>
    </html>
  )
}
