import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Manu Vahan — Full Stack Engineer Intern @ Disha AI",
  description:
    "Manu Vahan — Full Stack Engineer and AI researcher. I read books, I read people, and I write my self. Building AI for education, healthcare, and security.",
  keywords: "Full Stack Engineer, AI Researcher, Disha AI, UPSC, Education, Healthcare AI, Network Security",
  openGraph: {
    title: "Manu Vahan — Full Stack Engineer Intern @ Disha AI",
    description: "I read books, I read people, and I write my self. AI for education, healthcare, and security.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={_geistMono.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
