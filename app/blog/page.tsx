"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { blogPosts, categories } from "@/lib/blog-data"
import { ArrowRight } from "lucide-react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  const filteredPosts = selectedCategory ? blogPosts.filter((p) => p.category === selectedCategory) : blogPosts

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(timer)
  }, [])

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
              href="/"
              className={`font-mono text-sm hover:underline ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}
            >
              {"< back"}
            </Link>
            <div className="font-mono text-sm font-bold tracking-wider">
              MANU_VAHAN.BLOG
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
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="mb-16 space-y-4">
            <h1 className="font-mono text-4xl sm:text-5xl font-bold tracking-tight">Research Insights</h1>
            <p className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              Deep dives into research papers and book reflections on AI, consciousness, philosophy, and technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <p className={`font-mono text-xs font-bold mb-4 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              FILTER BY CATEGORY
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 font-mono text-sm border rounded transition-colors ${selectedCategory === null ? (isDarkMode ? "bg-white text-black" : "bg-black text-white") : isDarkMode ? "border-gray-700 text-gray-400 hover:border-white" : "border-gray-300 text-gray-600 hover:border-black"}`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-mono text-sm border rounded transition-colors ${selectedCategory === cat ? (isDarkMode ? "bg-white text-black" : "bg-black text-white") : isDarkMode ? "border-gray-700 text-gray-400 hover:border-white" : "border-gray-300 text-gray-600 hover:border-black"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className={`group p-6 border rounded transition-all hover:shadow-lg ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div
                      className={`inline-block px-3 py-1 text-xs font-mono rounded border mb-3 ${isDarkMode ? "border-gray-700 bg-gray-950/50" : "border-gray-300 bg-gray-50"}`}
                    >
                      {post.type === "paper" ? "📄 Paper" : "📚 Book"}
                    </div>
                    <h2 className="font-mono text-xl font-bold mb-2">{post.title}</h2>
                    <p className={`text-sm mb-2 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                      {post.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${isDarkMode ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-black"} group-hover:translate-x-1`}
                  />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className={`font-mono ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                    <span>{post.date}</span> • <span>{post.readDate}</span> • <span>{post.category}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.relatedTopics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className={`px-2 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-800 text-gray-600" : "border-gray-300 text-gray-500"}`}
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className={`text-center py-12 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              <p className="font-mono text-sm">No posts in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
