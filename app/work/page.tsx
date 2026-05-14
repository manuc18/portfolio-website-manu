"use client"

import Link from "next/link"
import { useState } from "react"

export default function WorkPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">MANU_VAHAN.WORK</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono">
            <Link href="/" className="transition-colors hover:text-sky-400">HOME</Link>
            <Link href="/about" className="transition-colors hover:text-sky-400">ABOUT</Link>
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
        <div className="max-w-4xl mx-auto py-20 space-y-10">
          <div>
            <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-8">EXPERIENCE</h1>
            <div className="space-y-6">
              <div className={`p-8 border rounded ${isDarkMode ? "border-gray-800 bg-black/50" : "border-gray-200 bg-white/50"}`}>
                <div className="mb-6">
                  <h2 className="font-mono text-xl font-bold">Full Stack Engineer Intern</h2>
                  <p className="font-mono text-sm text-gray-500">Disha AI</p>
                  <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>Nov 2025 — Present</p>
                </div>
                <ul className="space-y-3 font-mono text-sm">
                  {[
                    "Building UPSC-centric personalized AI tutor",
                    "Democratizing education with scalable ML systems",
                    "Backend & infra work for secure model serving",
                    "Contributing to AI research in educational technology",
                  ].map((bullet, i) => (
                    <li key={i} className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                      <span className="text-gray-500 mr-2">{">"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-8 border rounded ${isDarkMode ? "border-gray-800 bg-black/50" : "border-gray-200 bg-white/50"}`}>
                <div className="mb-6">
                  <h2 className="font-mono text-xl font-bold">SDE Intern</h2>
                  <p className="font-mono text-sm text-gray-500">NOVAAUTOMATA INNOVATIONS PVT. LTD.</p>
                  <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>Jan 2025 — Jun 2025</p>
                </div>
                <ul className="space-y-3 font-mono text-sm">
                  {[
                    "Developed GeoShield, a secure Electron desktop app for DRDO using React and SQLite3",
                    "Built DCM Analytics using React, Django, and PostgreSQL for digitizing public transport data",
                    "Created Daksh — an automated bus scheduling and route analytics system (GTFS-based)",
                    "Integrated Apache Superset for KPI dashboards; deployed systems using AWS (EC2, RDS, S3)",
                  ].map((bullet, i) => (
                    <li key={i} className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                      <span className="text-gray-500 mr-2">{">"}</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <Link
            href="/manu_resume.pdf"
            download
            className={`inline-block mt-4 px-4 py-2 font-mono text-sm border rounded transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}>
            Download Resume
          </Link>
        </div>
      </main>
    </div>
  )
}
