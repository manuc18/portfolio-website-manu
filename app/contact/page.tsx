"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { bookingUrl } from "../../lib/portfolio-data"

export default function ContactPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showBookingFallback, setShowBookingFallback] = useState(true)
  const bookingButtonRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cssHref = "https://calendar.google.com/calendar/scheduling-button-script.css"
    const jsSrc = "https://calendar.google.com/calendar/scheduling-button-script.js"

    const loadBookingButton = () => {
      const bookingEl = bookingButtonRef.current
      const calendar = (window as any).calendar
      if (!bookingEl || !calendar?.schedulingButton?.load) return

      try {
        calendar.schedulingButton.load({
          url: bookingUrl,
          color: "#039BE5",
          label: "Book an appointment",
          target: bookingEl,
        })
        setShowBookingFallback(false)
      } catch (error) {
        console.error("Google Calendar booking button failed to load:", error)
      }
    }

    let styleTag = document.querySelector<HTMLLinkElement>(`link[href="${cssHref}"]`)
    if (!styleTag) {
      styleTag = document.createElement("link")
      styleTag.rel = "stylesheet"
      styleTag.href = cssHref
      document.head.appendChild(styleTag)
    }

    let scriptTag = document.querySelector<HTMLScriptElement>(`script[src="${jsSrc}"]`)
    const onLoad = () => loadBookingButton()

    if (scriptTag) {
      scriptTag.addEventListener("load", onLoad)
      if ((window as any).calendar?.schedulingButton?.load) {
        loadBookingButton()
      }
    } else {
      scriptTag = document.createElement("script")
      scriptTag.src = jsSrc
      scriptTag.async = true
      scriptTag.addEventListener("load", onLoad)
      document.body.appendChild(scriptTag)
    }

    // Hide fallback after 3 seconds if widget hasn't loaded
    const timeout = setTimeout(() => {
      if (bookingButtonRef.current?.children.length === 0) {
        setShowBookingFallback(false)
      }
    }, 3000)

    window.addEventListener("load", onLoad)
    return () => {
      window.removeEventListener("load", onLoad)
      clearTimeout(timeout)
      if (scriptTag) scriptTag.removeEventListener("load", onLoad)
    }
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">MANU_VAHAN.CONTACT</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono">
            <Link href="/" className="transition-colors hover:text-sky-400">HOME</Link>
            <Link href="/about" className="transition-colors hover:text-sky-400">ABOUT</Link>
            <Link href="/work" className="transition-colors hover:text-sky-400">WORK</Link>
            <Link href="/projects" className="transition-colors hover:text-sky-400">PROJECTS</Link>
            <Link href="/blog" className="transition-colors hover:text-sky-400">BLOG</Link>
          </nav>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-white text-white hover:text-black" : "border-black text-black hover:text-white"}`}>
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>
        </div>
      </header>

      <main className="pt-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto py-20">
          <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-8">CONTACT</h1>
          <div className="space-y-6 mb-12">
            <a
              href="mailto:manu.v23csai@nst.rishihood.edu.in"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}>
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/manuc18"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}>
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manu108/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}>
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className={`p-4 rounded ${isDarkMode ? "border border-gray-800 bg-gray-950/40" : "border border-gray-200 bg-gray-50/80"}`}>
            {showBookingFallback ? (
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-mono font-semibold transition-colors ${isDarkMode ? "bg-sky-600 text-white hover:bg-sky-500" : "bg-sky-500 text-white hover:bg-sky-600"}`}>
                Book an appointment
              </a>
            ) : (
              <div ref={bookingButtonRef} />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
