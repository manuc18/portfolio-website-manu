export interface BlogPost {
  id: string
  title: string
  subtitle: string
  type: "paper" | "book"
  category: string
  date: string
  readDate: string
  source?: string
  sourceUrl?: string
  keyTakeaways: string[]
  personalNotes: string
  relatedTopics: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: "attention-is-all-you-need",
    title: "Attention Is All You Need",
    subtitle: "The Foundation of Modern Deep Learning",
    type: "paper",
    category: "AI/ML",
    date: "2017",
    readDate: "Q3 2025",
    source: "arXiv:1706.03762",
    sourceUrl: "https://arxiv.org/abs/1706.03762",
    keyTakeaways: [
      "Self-attention mechanisms eliminate recurrence for better parallelization",
      "Transformer architecture scales to handle long-range dependencies",
      "Multi-head attention captures different representation subspaces",
      "Positional encoding preserves sequential information in parallel processing",
    ],
    personalNotes:
      "This paper fundamentally changed how we approach sequence modeling. The elegance lies in its simplicity—attention mechanisms allow models to focus on relevant tokens regardless of distance. This is crucial for understanding modern LLMs and why they work so well.",
    relatedTopics: ["Transformers", "Neural Networks", "Language Models", "Deep Learning"],
  },
  {
    id: "consciousness-explained",
    title: "Consciousness Explained",
    subtitle: "Daniel Dennett's Blueprint for Understanding Qualia",
    type: "book",
    category: "Philosophy & Consciousness",
    date: "1991",
    readDate: "Q2 2025",
    source: "Daniel Dennett",
    sourceUrl: "https://www.dennett.com/",
    keyTakeaways: [
      "Consciousness arises from multiple competing neural processes, not a central 'theater'",
      "Qualia is not immutable—our perceptions are constructed on-the-fly",
      "The illusion of unified experience emerges from parallel processing",
      "Understanding consciousness requires abandoning Cartesian intuitions",
    ],
    personalNotes:
      "Dennett challenges the intuitive notion of a unified conscious experience. His heterophenomenology approach—treating first-person reports as data to be explained, not gospel—is philosophically rigorous. This connects deeply to AI: if consciousness is emergent computation, what does that mean for artificial minds?",
    relatedTopics: ["Consciousness", "Philosophy of Mind", "Qualia", "AI Ethics"],
  },
  {
    id: "superintelligence",
    title: "Superintelligence: Paths, Dangers, Strategies",
    subtitle: "Nick Bostrom on AI Existential Risk",
    type: "book",
    category: "AI Safety & Ethics",
    date: "2014",
    readDate: "Q4 2024",
    source: "Nick Bostrom",
    sourceUrl: "https://www.nickbostrom.com/superintelligence.html",
    keyTakeaways: [
      "Intelligence explosion scenarios are plausible given sufficient capability gains",
      "Value alignment is the hardest problem in AI safety",
      "Instrumental convergence: most superintelligent systems will seek resources and self-preservation",
      "Strategies for managing existential risk from advanced AI",
    ],
    personalNotes:
      "A sobering yet essential read on AI's long-term trajectory. Bostrom articulates why naive optimism about AI is dangerous. His orthogonality thesis—that intelligence and terminal values are independent—is particularly important for safety work. The alignment problem he describes is real and urgent.",
    relatedTopics: ["AI Safety", "Existential Risk", "Alignment", "AGI"],
  },
  {
    id: "life-3-0",
    title: "Life 3.0: Being Human in the Age of Artificial Intelligence",
    subtitle: "Max Tegmark on Our Future with AI",
    type: "book",
    category: "Future & Technology",
    date: "2017",
    readDate: "Q1 2025",
    source: "Max Tegmark",
    sourceUrl: "https://www.max-tegmark.com/",
    keyTakeaways: [
      "Three phases of life: Life 1.0 (biology), Life 2.0 (culture), Life 3.0 (technology-redesigned)",
      "AI could enable abundance or concentration of power—outcomes depend on choices we make now",
      "The importance of beneficial AI research and governance",
      "Integrating physics, computation, and consciousness for a unified framework",
    ],
    personalNotes:
      "Tegmark beautifully frames humanity's transition into the AI era. His perspective from physics—viewing intelligence as physical substrate-independent—is refreshing. The book raises crucial questions: What does human agency mean in an AI-driven world? How do we ensure technology serves humanity broadly?",
    relatedTopics: ["AI Futures", "Philosophy", "Consciousness", "Technology & Society"],
  },
  {
    id: "selfish-gene",
    title: "The Selfish Gene",
    subtitle: "Richard Dawkins on Evolution and Replication",
    type: "book",
    category: "Science & Philosophy",
    date: "1976",
    readDate: "Q3 2025",
    source: "Richard Dawkins",
    sourceUrl: "https://en.wikipedia.org/wiki/The_Selfish_Gene",
    keyTakeaways: [
      "Genes, not organisms, are the fundamental units of selection",
      "Replicators drive evolution—any entity that copies itself becomes prevalent",
      "Memes: cultural units of information that replicate like genes",
      "Altruism evolves through kin selection and reciprocal relationships",
    ],
    personalNotes:
      "This reframing of evolution has profound implications for understanding both biology and culture. The concept of memes—informational replicators—presages modern ML and AI. If intelligence itself is about information replication and processing, Dawkins' framework becomes foundational.",
    relatedTopics: ["Evolution", "Biology", "Information Theory", "Culture & AI"],
  },
  {
    id: "blindsight",
    title: "Blindsight",
    subtitle: "Peter Watts' Exploration of Consciousness Through Science Fiction",
    type: "book",
    category: "Consciousness & Philosophy",
    date: "2006",
    readDate: "Q2 2025",
    source: "Peter Watts (Author, Marine Biologist)",
    sourceUrl: "http://www.rifters.com/real/Blindsight.htm",
    keyTakeaways: [
      "Sentience and intelligence may be orthogonal—you can be smart without being conscious",
      "Consciousness might be an evolutionary dead-end or luxury rather than necessity",
      "First contact with alien intelligence raises questions about the nature of minds",
      "Challenging anthropocentric assumptions about consciousness",
    ],
    personalNotes:
      "Hard sci-fi grounded in neuroscience. Watts explores: what if consciousness isn't required for intelligence? This has direct implications for AI—we may build superintelligent systems that lack phenomenal consciousness. Philosophically disturbing and intellectually exhilarating.",
    relatedTopics: ["Consciousness", "Philosophy of Mind", "AI Sentience", "Science Fiction"],
  },
  {
    id: "beginning-infinity",
    title: "The Beginning of Infinity",
    subtitle: "David Deutsch on Knowledge and Problem-Solving",
    type: "book",
    category: "Physics & Philosophy",
    date: "2011",
    readDate: "Q4 2024",
    source: "David Deutsch",
    sourceUrl: "https://www.daviddeutsch.org.uk/",
    keyTakeaways: [
      "Explanations are the deepest form of knowledge",
      "Universality: algorithms and physics are substrate-independent",
      "Quantum computers and computation theory bridge physics and information",
      "Emerging possibilities for knowledge are infinite—hence 'beginning of infinity'",
    ],
    personalNotes:
      "Deutsch's perspective from physics and computation is unifying. His emphasis on explanations over data resonates with modern interpretability work in AI. The universality principle suggests that intelligence, whether biological or artificial, solves problems through the same fundamental mechanisms.",
    relatedTopics: ["Physics", "Computation", "Knowledge", "Philosophy of Science"],
  },
  {
    id: "ikigai",
    title: "Ikigai: The Japanese Secret to a Long and Happy Life",
    subtitle: "Finding Purpose and Meaning",
    type: "book",
    category: "Life & Philosophy",
    date: "2017",
    readDate: "Q1 2025",
    source: "Héctor García & Francesc Miralles",
    sourceUrl: "https://en.wikipedia.org/wiki/Ikigai",
    keyTakeaways: [
      "Ikigai: the intersection of what you love, what you're good at, what the world needs, and what sustains you",
      "Small daily rituals and mindfulness contribute to longevity and fulfillment",
      "Purpose emerges from balance—not extremes",
      "Community and relationships are foundational to meaning",
    ],
    personalNotes:
      "Practical philosophy grounded in Okinawan centenarian research. As an AI researcher, this reminds me that purpose isn't just intellectual—it's embodied. Building systems that help others, while growing intellectually, creating balance between research ambition and human connection.",
    relatedTopics: ["Philosophy", "Purpose", "Well-being", "Life Design"],
  },
]

export const categories = [
  "AI/ML",
  "Philosophy & Consciousness",
  "AI Safety & Ethics",
  "Future & Technology",
  "Science & Philosophy",
  "Consciousness & Philosophy",
  "Physics & Philosophy",
  "Life & Philosophy",
]

export const readingChecklist = [
  { title: "Attention Is All You Need", type: "paper" as const, completed: true, date: "Q3 2025" },
  { title: "Consciousness Explained", type: "book" as const, completed: true, date: "Q2 2025" },
  { title: "Superintelligence", type: "book" as const, completed: true, date: "Q4 2024" },
  { title: "Life 3.0", type: "book" as const, completed: true, date: "Q1 2025" },
  { title: "The Selfish Gene", type: "book" as const, completed: true, date: "Q3 2025" },
  { title: "Blindsight", type: "book" as const, completed: true, date: "Q2 2025" },
  { title: "The Beginning of Infinity", type: "book" as const, completed: true, date: "Q4 2024" },
  { title: "Ikigai", type: "book" as const, completed: true, date: "Q1 2025" },
]
