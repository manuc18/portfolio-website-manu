export interface Interest {
  label: string
  value: string
  icon: string
}

export interface Project {
  id: string
  title: string
  tagline: string
  tech: string[]
  description: string
  impact?: string
  githubUrl?: string
}

export const interests: Interest[] = [
  { label: "Music", value: "Classical vocal & flute", icon: "🎵" },
  { label: "Reading", value: "Philosophy, Technology, Spirituality, Leadership", icon: "📖" },
  { label: "Activities", value: "Swimming", icon: "🏊" },
]

export const projects: Project[] = [
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

export const bookingUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0Dc2_5nb81IZm4eF6_hppDLHqVwjuk8-Tj7acy3lvaOm-rSH1MMaU7ni47rQJVBy9kkLwRKR25?gv=true"
