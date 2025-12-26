import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

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
      <body className={`font-sans antialiased`}>
        {/* Global background glows inspired by Linear */}
        <div className="pointer-events-none fixed inset-0 -z-10 [background:radial-gradient(1000px_600px_at_20%_-10%,rgba(99,102,241,0.20),transparent_60%),radial-gradient(1000px_600px_at_80%_110%,rgba(139,92,246,0.18),transparent_60%)]" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
