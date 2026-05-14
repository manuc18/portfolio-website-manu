"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function HomePage() {
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">MANU_VAHAN.HOME</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono">
            <Link href="/" className="transition-colors hover:text-sky-400">HOME</Link>
            <Link href="/about" className="transition-colors hover:text-sky-400">ABOUT</Link>
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
        <div className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="space-y-4">
              <button onClick={() => setShowPhotoModal(true)} className="focus:outline-none">
                <img
                  src="/manu-portrait.jpg"
                  alt="Manu Vahan"
                  className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 transition-all duration-300 hover:scale-110 ${isDarkMode ? "border-gray-700 hover:border-white" : "border-gray-300 hover:border-black"}`}
                />
              </button>
              <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight">Hi — I'm Manu.</h1>
              <h2 className="font-mono text-lg sm:text-2xl font-light tracking-wide opacity-80">
                Full Stack Engineer | AI Researcher
              </h2>
              <p className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                @ Disha AI — AI for education · AI research · Security
              </p>
            </div>

            <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
              I read books, I listen people, and I write my self.
            </p>

            <div className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"} h-6`}>
              <span className="inline">{"> run manu_vahan --explore"}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link
                href="/work"
                className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}>
                View Work
              </Link>
              <Link
                href="/projects"
                className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}>
                See Projects
              </Link>
              <Link
                href="/blog"
                className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}>
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </main>

      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setShowPhotoModal(false)}>
          <div
            className={`relative max-w-lg max-h-screen p-4 ${isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"} border rounded`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPhotoModal(false)}
              className={`absolute top-4 right-4 transition-colors ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-black"}`}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex justify-center">
              <img
                src="/manu-portrait.jpg"
                alt="Manu Vahan - Full Size"
                className="max-w-full max-h-screen object-contain rounded"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-mono text-lg font-bold">Manu Vahan</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
