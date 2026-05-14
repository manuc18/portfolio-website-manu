"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { projects } from "../../lib/portfolio-data"

export default function ProjectsPage() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showProjectModal, setShowProjectModal] = useState<string | null>(null)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      <header className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">MANU_VAHAN.PROJECTS</div>
          <nav className="hidden md:flex gap-8 text-xs font-mono">
            <Link href="/" className="transition-colors hover:text-sky-400">HOME</Link>
            <Link href="/about" className="transition-colors hover:text-sky-400">ABOUT</Link>
            <Link href="/work" className="transition-colors hover:text-sky-400">WORK</Link>
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
          <h1 className="font-mono text-3xl sm:text-4xl font-bold mb-8">PROJECTS</h1>
          <p className={`font-mono text-sm mb-12 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
            Flagship projects in AI healthcare and network security.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setShowProjectModal(project.id)}
                className={`p-6 border rounded text-left transition-all group hover:shadow-lg ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}>
                <div className={`font-mono text-xs mb-2 ${isDarkMode ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}>
                  {"> open project --name " + project.id}
                </div>
                <h2 className="font-mono text-lg font-bold mb-2">{project.title}</h2>
                <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{project.tagline}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-700 text-gray-500" : "border-gray-300 text-gray-600"}`}>
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className={`px-2 py-1 text-xs font-mono ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {showProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
              <div className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto border rounded p-8 ${isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="font-mono text-2xl font-bold">{projects.find((p) => p.id === showProjectModal)?.title}</h2>
                  </div>
                  <button
                    onClick={() => setShowProjectModal(null)}
                    className={`transition-colors ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-black"}`}>
                    <X className="w-6 h-6" />
                  </button>
                </div>
                {projects
                  .filter((project) => project.id === showProjectModal)
                  .map((project) => (
                    <div key={project.id} className="space-y-6">
                      <p className="leading-relaxed">{project.description}</p>
                      {project.impact && (
                        <div className={`p-4 border rounded font-mono text-sm ${isDarkMode ? "border-gray-800 bg-gray-950/50" : "border-gray-200 bg-gray-50/50"}`}>
                          <p className={isDarkMode ? "text-gray-500" : "text-gray-600"}>Impact:</p>
                          <p className="mt-2">{project.impact}</p>
                        </div>
                      )}
                      <div>
                        <p className="font-mono font-bold mb-3 text-sm">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-700 text-gray-500" : "border-gray-300 text-gray-600"}`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
