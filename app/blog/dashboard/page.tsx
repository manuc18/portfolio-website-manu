"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { readingChecklist } from "@/lib/blog-data"

export default function ReadingDashboard() {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(timer)
  }, [])

  const completedCount = readingChecklist.filter((item) => item.completed).length
  const completionPercentage = Math.round((completedCount / readingChecklist.length) * 100)

  const bookCount = readingChecklist.filter((item) => item.type === "book").length
  const paperCount = readingChecklist.filter((item) => item.type === "paper").length

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className={`font-mono text-sm hover:underline ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}
            >
              {"< back"}
            </Link>
            <div className="font-mono text-sm font-bold tracking-wider">
              READING_DASHBOARD
              <span className={`ml-1 inline-block ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
                ▮
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-gray-700 text-gray-400 hover:text-white" : "border-gray-300 text-gray-600 hover:text-black"}`}
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>
        </div>
      </header>

      <div className="pt-20 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div
              className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-gray-950/30" : "border-gray-200 bg-gray-50/30"}`}
            >
              <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>COMPLETION</p>
              <p className="font-mono text-3xl font-bold mt-2">
                {completedCount}/{readingChecklist.length}
              </p>
              <p className={`font-mono text-xs mt-2 ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                {completionPercentage}%
              </p>
            </div>

            <div
              className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-gray-950/30" : "border-gray-200 bg-gray-50/30"}`}
            >
              <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>BOOKS READ</p>
              <p className="font-mono text-3xl font-bold mt-2">{bookCount}</p>
            </div>

            <div
              className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-gray-950/30" : "border-gray-200 bg-gray-50/30"}`}
            >
              <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>PAPERS READ</p>
              <p className="font-mono text-3xl font-bold mt-2">{paperCount}</p>
            </div>
          </div>

          {/* Reading List */}
          <div>
            <h2 className="font-mono text-2xl font-bold mb-6">READING CHECKLIST</h2>
            <div className="space-y-3">
              {readingChecklist.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 border rounded flex items-center justify-between ${isDarkMode ? "border-gray-800 hover:border-gray-700" : "border-gray-200 hover:border-gray-300"} transition-colors`}
                >
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={item.completed} readOnly className="w-5 h-5 rounded" />
                    <div>
                      <p
                        className={`font-mono font-bold text-sm ${item.completed ? (isDarkMode ? "text-gray-500 line-through" : "text-gray-500 line-through") : ""}`}
                      >
                        {item.title}
                      </p>
                      <p className={`font-mono text-xs ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                        {item.type === "book" ? "📚 Book" : "📄 Paper"} • {item.date}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-mono rounded border ${item.completed ? (isDarkMode ? "border-gray-800 bg-gray-950/50 text-gray-600" : "border-gray-200 bg-gray-100 text-gray-600") : isDarkMode ? "border-gray-700" : "border-gray-300"}`}
                  >
                    {item.completed ? "✓" : "○"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
