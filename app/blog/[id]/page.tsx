"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-data"
import { notFound } from "next/navigation"
import { ExternalLink, ArrowLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<(typeof blogPosts)[0] | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [paramsResolved, setParamsResolved] = useState(false)

  useEffect(() => {
    params.then((resolved) => {
      const foundPost = blogPosts.find((p) => p.id === resolved.id)
      setPost(foundPost || null)
      setParamsResolved(true)
    })
  }, [params])

  if (!paramsResolved) return <div />
  if (!post) return notFound()

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 3)

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/blog"
            className={`flex items-center gap-2 font-mono text-sm hover:underline ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-black"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Research
          </Link>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-gray-700 text-gray-400 hover:text-white" : "border-gray-300 text-gray-600 hover:text-black"}`}
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>
        </div>
      </header>

      <article className="pt-20 pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
              <div
                className={`px-3 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-700 bg-gray-950/50" : "border-gray-300 bg-gray-50"}`}
              >
                {post.type === "paper" ? "📄 Research Paper" : "📚 Book"}
              </div>
              <span className={`font-mono text-xs ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                {post.category}
              </span>
            </div>

            <div>
              <h1 className="font-mono text-4xl sm:text-5xl font-bold mb-3 tracking-tight">{post.title}</h1>
              <p className={`font-mono text-lg ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>{post.subtitle}</p>
            </div>

            <div className={`flex flex-wrap gap-4 font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
              <span>Published: {post.date}</span>
              <span>Read: {post.readDate}</span>
              {post.sourceUrl && (
                <a
                  href={post.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 hover:underline ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
                >
                  Source <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Key Takeaways */}
          <div
            className={`p-8 border rounded space-y-4 ${isDarkMode ? "border-gray-800 bg-gray-950/30" : "border-gray-200 bg-gray-50/30"}`}
          >
            <h2 className="font-mono font-bold text-sm">KEY TAKEAWAYS</h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="font-mono text-sm leading-relaxed">
                  <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>• </span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          {/* Personal Notes */}
          <div className="space-y-4">
            <h2 className="font-mono font-bold text-lg">PERSONAL NOTES</h2>
            <p className={`text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              {post.personalNotes}
            </p>
          </div>

          {/* Related Topics */}
          <div className="space-y-4">
            <h3 className="font-mono font-bold text-sm">RELATED TOPICS</h3>
            <div className="flex flex-wrap gap-2">
              {post.relatedTopics.map((topic) => (
                <span
                  key={topic}
                  className={`px-3 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"}`}
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className={`border-t pt-12 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}>
              <h3 className="font-mono font-bold text-lg mb-6">RELATED INSIGHTS</h3>
              <div className="grid gap-4">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.id}`}
                    className={`p-4 border rounded transition-colors ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}
                  >
                    <p className="font-mono font-bold text-sm mb-1">{related.title}</p>
                    <p className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>{related.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  )
}
