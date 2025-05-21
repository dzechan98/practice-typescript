"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    })
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Horizon - Modern SaaS Platform</title>
        <meta name="description" content="A beautiful landing page for your next big idea" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
