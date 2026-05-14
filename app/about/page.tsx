"use client"

import Link from "next/link"
import { useState } from "react"
import { interests } from "../../lib/portfolio-data"

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">MANU_VAHAN.ABOUT</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono">
            <Link href="/" className="transition-colors hover:text-sky-400">HOME</Link>
            <Link href="/work" className="transition-colors hover:text-sky-400">WORK</Link>
            <Link href="/projects" className="transition-colors hover:text-sky-400">PROJECTS</Link>
            <Link href="/blog" className="transition-colors hover:text-sky-400">BLOG</Link>
            <Link href="/contact" className="transition-colors hover:text-sky-400">CONTACT</Link>
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
          <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-8">ABOUT</h1>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Manu Vahan — 3rd-year B.Tech (CS & AI). Full Stack Engineer Intern @ Disha AI.
                Researcher working on "The Nature of Reality". Passionate about AI research, secure systems, and
                building impactful products.
              </p>
              <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                Interests: Classical vocal & flute. Reading philosophy, technology, spirituality, leadership. Swimming.
              </p>
            </div>
            <div className="space-y-4">
              {interests.map((interest) => (
                <div
                  key={interest.label}
                  className={`p-4 border rounded transition-colors group cursor-pointer ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}>
                  <div className={`font-mono text-xs ${isDarkMode ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                    {"> " + interest.label.toLowerCase() + ".info"}
                  </div>
                  <div className="mt-2 font-mono text-sm">{interest.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-gray-950/50" : "border-gray-200 bg-gray-50"}`}>
            <h2 className="font-mono text-sm font-bold mb-4">RESEARCH FOCUS</h2>
            <p className="font-mono text-sm leading-relaxed">
              Exploring "The Nature of Reality": foundation-level questions in AI, perception, simulation and epistemology.
              How do neural networks model human perception? What is the nature of consciousness?
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
