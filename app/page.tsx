"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, X } from "lucide-react"

interface Interest {
  label: string
  value: string
  icon: string
}

interface Project {
  id: string
  title: string
  tagline: string
  tech: string[]
  description: string
  impact?: string
  githubUrl?: string
}

interface SectionState {
  current: "home" | "about" | "work" | "projects" | "blog" | "contact"
}

interface ResearchReading {
  id: string
  title: string
  authors: string
  type: "paper" | "article"
  url?: string
  keyInsights: string
  handwrittenNotesUrl?: string
  youtubeEmbed?: string
  visibility: "private" | "public"
  createdDate: string
}

interface BookEntry {
  id: string
  title: string
  author: string
  summary: string
  keyTakeaways: string[]
  personalInsights: string
  whyRead: string
  visible: boolean
}

interface MusicPerformance {
  id: string
  title: string
  caption: string
  imageUrl: string
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<SectionState["current"]>("home")
  const [showProjectModal, setShowProjectModal] = useState<string | null>(null)
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [labelSuffix, setLabelSuffix] = useState("EXE")
  const [showCursor, setShowCursor] = useState(true)
  const homeRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const workRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const blogRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const interests: Interest[] = [
    { label: "Music", value: "Classical vocal & flute", icon: "🎵" },
    { label: "Reading", value: "Philosophy, Technology, Spirituality, Leadership", icon: "📖" },
    { label: "Activities", value: "Swimming", icon: "🏊" },
  ]

  const projects: Project[] = [
    {
      id: "health-agent",
      title: "AI Digital Health Agent",
      tagline: "AI in Healthcare — digital triage & conversational care",
      tech: ["React", "Python", "PyTorch", "REST", "Docker", "HIPAA"],
      description:
        "Intelligent healthcare system leveraging AI/ML for patient diagnosis and treatment recommendations. Exploring applications of large language models in medical decision support.",
      impact: "Prototype conversational triage for scalable remote care",
      githubUrl: "https://github.com/manuc18/AI_Digital_Health_Agent",
    },
    {
      id: "honeypot",
      title: "Honeypot",
      tagline: "Network security honeypot — trap & telemetry",
      tech: ["Python", "Go", "Docker", "SIEM", "Security"],
      description:
        "Advanced honeypot deployment for detecting and analyzing malicious network activity. Research into intrusion detection systems and threat intelligence.",
      impact: "Captures and analyzes real-world attack patterns",
      githubUrl: "https://github.com/manuc18/honeypot",
    },
    {
      id: "v-meet",
      title: "V-Meet",
      tagline: "Virtual Meeting Platform — meetings, scheduling & recording",
      tech: ["Next.js", "TypeScript", "GetStream.io", "WebRTC"],
      description:
        "Full-featured virtual meeting platform with video conferencing, scheduling, recording, and authentication. Built for seamless remote collaboration and communication.",
      impact: "Enables remote teams to connect and collaborate effectively",
      githubUrl: "https://github.com/manuc108/v-meet",
    },
  ]

  const researchReadings: ResearchReading[] = [
    {
      id: "attention-paper",
      title: "Attention Is All You Need",
      authors: "Vaswani et al.",
      type: "paper",
      url: "https://arxiv.org/abs/1706.03762",
      keyInsights:
        "Self-attention mechanisms eliminate recurrence. Transformers scale to handle long-range dependencies efficiently.",
      visibility: "public",
      createdDate: "2025-01-15",
    },
    {
      id: "clinicalbert-paper",
      title: "ClinicalBERT: Modeling Clinical Notes and Predicting Hospital Readmission",
      authors: "Huang et al.",
      type: "paper",
      url: "https://arxiv.org/abs/1904.05342",
      keyInsights:
        "Domain-specific BERT model for clinical text understanding. Pre-trained on clinical notes to capture medical language patterns and improve downstream healthcare NLP tasks.",
      visibility: "public",
      createdDate: "2025-01-20",
    },
  ]

  const books: BookEntry[] = [
    {
      id: "consciousness-explained",
      title: "Consciousness Explained",
      author: "Daniel Dennett",
      summary:
        "Dennett's heterophenomenology challenges unified conscious experience, proposing consciousness emerges from parallel processing.",
      keyTakeaways: [
        "Consciousness arises from multiple competing neural processes",
        "Qualia is constructed on-the-fly, not immutable",
        "Understanding consciousness requires abandoning Cartesian intuitions",
      ],
      personalInsights:
        "This connects deeply to AI research. If consciousness is emergent computation, what does that mean for artificial minds?",
      whyRead: "Essential for understanding modern philosophy of mind and AI consciousness questions.",
      visible: true,
    },
  ]

  const musicPerformances: MusicPerformance[] = [
    {
      id: "vocal-1",
      title: "Classical Flute Performance",
      caption: "Exploring classical Indian music tradition",
      imageUrl: "/classical-vocal-performance.jpg",
    },
  ]

  const [profilePhoto, setProfilePhoto] = useState("/manu-portrait.jpg")
  const [isAdmin, setIsAdmin] = useState(false)
  const [adminPassword, setAdminPassword] = useState("")
  const [showAdminPanel, setShowAdminPanel] = useState(false)
  const [newReading, setNewReading] = useState<Partial<ResearchReading>>({})
  const [newBook, setNewBook] = useState<Partial<BookEntry>>({})

  const [researchReadingsState, setResearchReadings] = useState(researchReadings)
  const [booksState, setBooks] = useState(books)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === homeRef.current) setLabelSuffix("EXE")
            else if (entry.target === aboutRef.current) setLabelSuffix("ME")
            else if (entry.target === workRef.current) setLabelSuffix("EXP")
            else if (entry.target === projectsRef.current) setLabelSuffix("PRO")
            else if (entry.target === blogRef.current) setLabelSuffix("BLOG")
            else if (entry.target === contactRef.current) setLabelSuffix("SND")
          }
        })
      },
      { threshold: 0.5 },
    )
    ;[homeRef, aboutRef, workRef, projectsRef, blogRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setShowCursor((prev) => !prev), 500)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowProjectModal(null)
      if (e.key === "j" || e.key === "k") {
        const sections: Array<SectionState["current"]> = ["home", "about", "work", "projects", "blog", "contact"]
        const currentIndex = sections.indexOf(activeSection)
        if (e.key === "j" && currentIndex < sections.length - 1) {
          setActiveSection(sections[currentIndex + 1])
        } else if (e.key === "k" && currentIndex > 0) {
          setActiveSection(sections[currentIndex - 1])
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeSection])

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleAdminLogin = (password: string) => {
    if (password === "admin2025") {
      setIsAdmin(true)
      setShowAdminPanel(true)
      setAdminPassword("")
    }
  }

  const handleAddReading = () => {
    if (newReading.title && newReading.keyInsights) {
      const reading: ResearchReading = {
        id: Date.now().toString(),
        title: newReading.title || "",
        authors: newReading.authors || "",
        type: newReading.type || "paper",
        url: newReading.url,
        keyInsights: newReading.keyInsights || "",
        visibility: newReading.visibility || "private",
        createdDate: new Date().toISOString().split("T")[0],
        handwrittenNotesUrl: newReading.handwrittenNotesUrl,
        youtubeEmbed: newReading.youtubeEmbed,
      }
      setResearchReadings([...researchReadingsState, reading])
      setNewReading({})
    }
  }

  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      const book: BookEntry = {
        id: Date.now().toString(),
        title: newBook.title || "",
        author: newBook.author || "",
        summary: newBook.summary || "",
        keyTakeaways: newBook.keyTakeaways || [],
        personalInsights: newBook.personalInsights || "",
        whyRead: newBook.whyRead || "",
        visible: newBook.visible !== false,
      }
      setBooks([...booksState, book])
      setNewBook({})
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      <header
        className={`fixed top-0 left-0 right-0 z-40 border-b ${isDarkMode ? "border-gray-800 bg-black/95" : "border-gray-200 bg-white/95"} backdrop-blur-sm`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="font-mono text-sm font-bold tracking-wider">
            MANU_VAHAN.{labelSuffix}
            <span className={`ml-1 inline-block ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>
              ▮
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-xs font-mono">
            {["HOME", "ABOUT", "WORK", "PROJECTS", "BLOG", "CONTACT"].map((item, i) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "BLOG") {
                    window.location.href = "/blog"
                  } else {
                    const refs = [homeRef, aboutRef, workRef, projectsRef, blogRef, contactRef]
                    scrollToSection(refs[i > 4 ? i - 1 : i])
                  }
                }}
                className={`transition-colors ${activeSection === item.toLowerCase() || (item === "BLOG" && activeSection === "contact") ? "text-white" : isDarkMode ? "text-gray-500 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-white text-white hover:text-black" : "border-black text-black hover:text-white"}`}
          >
            {isDarkMode ? "LIGHT" : "DARK"}
          </button>
        </div>
      </header>

      <div className="fixed top-[60px] left-0 right-0 h-0.5 z-50">
        <div
          className={`h-full ${isDarkMode ? "bg-white" : "bg-black"} transition-all duration-300`}
          id="progress-bar"
        />
      </div>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen pt-20 px-4 sm:px-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center mb-8">
              <button onClick={() => setShowPhotoModal(true)} className="focus:outline-none">
                <img
                  src={profilePhoto || "/placeholder.svg"}
                  alt="Manu Vahan"
                  className={`w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover border-2 transition-all duration-300 hover:scale-110 ${isDarkMode ? "border-gray-700 hover:border-white" : "border-gray-300 hover:border-black"}`}
                />
              </button>
            </div>
            <h1 className="font-mono text-4xl sm:text-6xl font-bold tracking-tight">Hi — I'm Manu.</h1>
            <h2 className="font-mono text-lg sm:text-2xl font-light tracking-wide opacity-80">
              Full Stack Engineer | AI Researcher
            </h2>
            <p className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              @ Disha AI — AI for education · AI research · Security
            </p>
          </div>

          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            I read books, I read people, and I write my self.
          </p>

          <div className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"} h-6`}>
            <span className="inline">{"> run manu_vahan --explore"}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button
              onClick={() => scrollToSection(workRef)}
              className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-white text-white hover:bg-white hover:text-black" : "border-black text-black hover:bg-black hover:text-white"}`}
            >
              View Work
            </button>
            <button
              onClick={() => scrollToSection(projectsRef)}
              className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
            >
              See Projects
            </button>
            <button
              onClick={() => (window.location.href = "/blog")}
              className={`px-6 py-2 font-mono text-sm border transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
            >
              Read Blog
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">ABOUT</h2>

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
                  className={`p-4 border rounded transition-colors group cursor-pointer ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}
                >
                  <div
                    className={`font-mono text-xs ${isDarkMode ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}
                  >
                    {"> " + interest.label.toLowerCase() + ".info"}
                  </div>
                  <div className="mt-2 font-mono text-sm">{interest.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-gray-950/50" : "border-gray-200 bg-gray-50"}`}
          >
            <h3 className="font-mono text-sm font-bold mb-4">RESEARCH FOCUS</h3>
            <p className="font-mono text-sm leading-relaxed">
              Exploring "The Nature of Reality": foundation-level questions in AI, perception, simulation and
              epistemology. How do neural networks model human perception? What is the nature of consciousness?
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={workRef}
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800 bg-gray-950/30" : "border-t border-gray-200 bg-gray-50/30"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">EXPERIENCE</h2>

          <div className="space-y-6">
            {/* Disha AI */}
            <div
              className={`p-8 border rounded ${isDarkMode ? "border-gray-800 bg-black/50" : "border-gray-200 bg-white/50"}`}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl font-bold">Full Stack Engineer Intern</h3>
                <p className="font-mono text-sm text-gray-500">Disha AI</p>
                <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                  Nov 2025 — Present
                </p>
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

            {/* Novaautomata internship */}
            <div
              className={`p-8 border rounded ${isDarkMode ? "border-gray-800 bg-black/50" : "border-gray-200 bg-white/50"}`}
            >
              <div className="mb-6">
                <h3 className="font-mono text-xl font-bold">SDE Intern</h3>
                <p className="font-mono text-sm text-gray-500">NOVAAUTOMATA INNOVATIONS PVT. LTD.</p>
                <p className={`font-mono text-sm ${isDarkMode ? "text-gray-600" : "text-gray-500"}`}>
                  Jan 2025 — Jun 2025
                </p>
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

          <a
            href="/manu_resume.pdf"
            download="Manu_Vahan_Resume.pdf"
            className={`mt-8 px-4 py-2 font-mono text-sm border rounded transition-colors inline-block ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">PROJECTS</h2>
          <p className={`font-mono text-sm mb-12 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
            Flagship projects in AI healthcare and network security
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setShowProjectModal(project.id)}
                className={`p-6 border rounded text-left transition-all group hover:shadow-lg ${isDarkMode ? "border-gray-800 hover:border-white hover:bg-gray-950" : "border-gray-200 hover:border-black hover:bg-gray-50"}`}
              >
                <div
                  className={`font-mono text-xs mb-2 ${isDarkMode ? "text-gray-500 group-hover:text-white" : "text-gray-500 group-hover:text-black"}`}
                >
                  {"> open project --name " + project.id}
                </div>
                <h3 className="font-mono text-lg font-bold mb-2">{project.title}</h3>
                <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 text-xs font-mono rounded border ${isDarkMode ? "border-gray-700 text-gray-500" : "border-gray-300 text-gray-600"}`}
                    >
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
        </div>
      </section>

      <section
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold">RESEARCH READING & INSIGHTS</h2>
            {isAdmin && (
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-gray-600 text-gray-400 hover:text-white" : "border-gray-400 text-gray-600 hover:text-black"}`}
              >
                {showAdminPanel ? "HIDE" : "EDIT"}
              </button>
            )}
          </div>

          {/* Admin Panel */}
          {isAdmin && showAdminPanel && (
            <div
              className={`p-6 border rounded mb-12 ${isDarkMode ? "border-gray-800 bg-gray-950/50" : "border-gray-200 bg-gray-50/50"}`}
            >
              <h3 className="font-mono text-sm font-bold mb-6">ADD NEW RESEARCH READING</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Paper/Article Title"
                  value={newReading.title || ""}
                  onChange={(e) => setNewReading({ ...newReading, title: e.target.value })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
                />
                <input
                  type="text"
                  placeholder="Authors"
                  value={newReading.authors || ""}
                  onChange={(e) => setNewReading({ ...newReading, authors: e.target.value })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
                />
                <input
                  type="url"
                  placeholder="URL (optional)"
                  value={newReading.url || ""}
                  onChange={(e) => setNewReading({ ...newReading, url: e.target.value })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
                />
                <textarea
                  placeholder="Key Insights"
                  value={newReading.keyInsights || ""}
                  onChange={(e) => setNewReading({ ...newReading, keyInsights: e.target.value })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"} h-20`}
                />
                <input
                  type="text"
                  placeholder="YouTube Embed URL (optional)"
                  value={newReading.youtubeEmbed || ""}
                  onChange={(e) => setNewReading({ ...newReading, youtubeEmbed: e.target.value })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
                />
                <select
                  value={newReading.visibility || "private"}
                  onChange={(e) => setNewReading({ ...newReading, visibility: e.target.value as "private" | "public" })}
                  className={`w-full px-3 py-2 border rounded font-mono text-sm ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"}`}
                >
                  <option value="private">Private (Only Me)</option>
                  <option value="public">Public</option>
                </select>
                <button
                  onClick={handleAddReading}
                  className={`w-full px-4 py-2 font-mono text-sm border rounded transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
                >
                  ADD READING
                </button>
              </div>
            </div>
          )}

          {/* Display Research Readings */}
          <div className="grid md:grid-cols-2 gap-6">
            {researchReadingsState
              .filter((r) => r.visibility === "public" || isAdmin)
              .map((reading) => (
                <div
                  key={reading.id}
                  className={`p-6 border rounded ${isDarkMode ? "border-gray-800 hover:border-white bg-gray-950/30" : "border-gray-200 hover:border-black bg-gray-50/30"} transition-colors`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-mono font-bold">{reading.title}</h3>
                    {reading.visibility === "private" && isAdmin && (
                      <span className="text-xs font-mono px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded">
                        PRIVATE
                      </span>
                    )}
                  </div>
                  <p className={`font-mono text-xs mb-3 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                    {reading.authors}
                  </p>
                  <p className={`text-sm mb-3 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {reading.keyInsights}
                  </p>
                  {reading.url && (
                    <a
                      href={reading.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-xs ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-600 hover:text-black"} transition-colors`}
                    >
                      Read Paper →
                    </a>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      <section
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800 bg-gray-950/30" : "border-t border-gray-200 bg-gray-50/30"}`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-mono text-3xl sm:text-4xl font-bold">BOOKS & READING</h2>
            {isAdmin && (
              <button
                onClick={() => setShowAdminPanel(!showAdminPanel)}
                className={`px-3 py-1 text-xs font-mono border rounded ${isDarkMode ? "border-gray-600 text-gray-400 hover:text-white" : "border-gray-400 text-gray-600 hover:text-black"}`}
              >
                {showAdminPanel ? "HIDE" : "EDIT"}
              </button>
            )}
          </div>

          {/* Display Books */}
          <div className="space-y-6">
            {booksState
              .filter((b) => b.visible || isAdmin)
              .map((book) => (
                <div
                  key={book.id}
                  className={`p-6 border rounded ${isDarkMode ? "border-gray-800 bg-black/50" : "border-gray-200 bg-white/50"}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-mono font-bold text-lg">{book.title}</h3>
                      <p className={`font-mono text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                        by {book.author}
                      </p>
                    </div>
                    {!book.visible && isAdmin && (
                      <span className="text-xs font-mono px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded">
                        HIDDEN
                      </span>
                    )}
                  </div>
                  <p className={`text-sm mb-4 leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {book.summary}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="font-mono text-xs font-bold mb-2">KEY TAKEAWAYS</p>
                      <ul className={`text-sm space-y-1 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                        {book.keyTakeaways.map((takeaway, i) => (
                          <li key={i} className="font-mono text-xs">
                            • {takeaway}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-xs font-bold mb-2">WHY YOU SHOULD READ</p>
                      <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>{book.whyRead}</p>
                    </div>
                  </div>
                  <p className={`text-sm italic ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                    💡 {book.personalInsights}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800" : "border-t border-gray-200"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">ACTIVITIES & PERFORMANCES</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {musicPerformances.map((performance) => (
              <div
                key={performance.id}
                className={`border rounded overflow-hidden ${isDarkMode ? "border-gray-800 hover:border-white" : "border-gray-200 hover:border-black"} transition-colors`}
              >
                <img
                  src={performance.imageUrl || "/placeholder.svg"}
                  alt={performance.title}
                  className="w-full h-64 object-cover"
                />
                <div className={`p-4 ${isDarkMode ? "bg-gray-950/50" : "bg-gray-50/50"}`}>
                  <h3 className="font-mono font-bold text-sm">{performance.title}</h3>
                  <p className={`font-mono text-xs mt-2 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
                    {performance.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className={`min-h-screen py-20 px-4 sm:px-6 ${isDarkMode ? "border-t border-gray-800 bg-gray-950/30" : "border-t border-gray-200 bg-gray-50/30"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono text-3xl sm:text-4xl font-bold mb-12">CONTACT</h2>

          <div className="space-y-4 mb-12">
            <a
              href="mailto:manu.v23csai@nst.rishihood.edu.in"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/manuc18"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manu108/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 font-mono text-sm transition-colors ${isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>

          <p className={`font-mono text-xs ${isDarkMode ? "text-gray-400" : "text-gray-300"}`}>
            © 2025 Manu Vahan. Built with love ♥‿♥ and code.
          </p>
        </div>
      </section>

      {/* Project Modal */}
      {showProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            className={`w-full max-w-2xl max-h-96 overflow-y-auto border rounded p-8 ${isDarkMode ? "bg-black border-gray-800" : "bg-white border-gray-200"}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <h2 className="font-mono text-2xl font-bold">{projects.find((p) => p.id === showProjectModal)?.title}</h2>
                {projects.find((p) => p.id === showProjectModal)?.githubUrl && (
                  <a
                    href={projects.find((p) => p.id === showProjectModal)?.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-3 py-1 font-mono text-sm border rounded transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View on Github
                  </a>
                )}
              </div>
              <button
                onClick={() => setShowProjectModal(null)}
                className={`transition-colors ${isDarkMode ? "text-gray-500 hover:text-white" : "text-gray-500 hover:text-black"}`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {projects
              .filter((p) => p.id === showProjectModal)
              .map((project) => (
                <div key={project.id} className="space-y-6">
                  <p className="leading-relaxed">{project.description}</p>
                  {project.impact && (
                    <div
                      className={`p-4 border rounded font-mono text-sm ${isDarkMode ? "border-gray-800 bg-gray-950/50" : "border-gray-200 bg-gray-50/50"}`}
                    >
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
                          className={`px-3 py-1 text-sm font-mono rounded border ${isDarkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-600"}`}
                        >
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

      {/* Photo Modal */}
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
                src={profilePhoto || "/placeholder.svg"}
                alt="Manu Vahan - Full Size"
                className="max-w-full max-h-screen object-contain rounded"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-mono text-lg font-bold">Manu Vahan</h3>
              <p className={`font-mono text-sm mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Admin Login Modal */}
      {!isAdmin && (
        <div
          className={`fixed bottom-4 right-4 z-40 ${isDarkMode ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"} border rounded p-4`}
        >
          <input
            type="password"
            placeholder="Admin password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdminLogin(adminPassword)}
            className={`font-mono text-xs px-2 py-1 border rounded ${isDarkMode ? "bg-black border-gray-700 text-white" : "bg-white border-gray-300 text-black"} mb-2 w-full`}
          />
          <button
            onClick={() => handleAdminLogin(adminPassword)}
            className={`w-full px-2 py-1 text-xs font-mono border rounded transition-colors ${isDarkMode ? "border-gray-600 text-gray-400 hover:border-white hover:text-white" : "border-gray-400 text-gray-600 hover:border-black hover:text-black"}`}
          >
            LOGIN
          </button>
        </div>
      )}

      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', () => {
              const height = document.documentElement.scrollHeight - window.innerHeight;
              const scrolled = (window.scrollY / height) * 100;
              document.getElementById('progress-bar').style.width = scrolled + '%';
            });
          `,
        }}
      />
    </div>
  )
}
