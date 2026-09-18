import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "smart-cv",
    title: "Smart CV",
    period: {
      start: "2025",
    },
    link: "https://github.com/HarshitGururani",
    skills: [
      "Next.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "OpenAI",
      "PDF Export",
    ],
    description: `AI-powered resume builder — a full-stack resume platform with live preview and PDF export.
- Integrated OpenAI to auto-generate professional summaries and experience sections
- Users can create, customize, and download resumes through a modern UI with real-time updates`,
    isExpanded: true,
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Platform",
    period: {
      start: "2024",
    },
    link: "https://github.com/HarshitGururani",
    skills: ["Full-stack", "JWT", "Authentication", "Listings", "Bookings"],
    description: `Built a full-stack hotel booking platform with user listings, bookings, and JWT-based authentication.`,
  },
  {
    id: "study-mate",
    title: "Study Mate",
    period: {
      start: "2024",
    },
    link: "https://github.com/HarshitGururani/BCAStudyMate.github.io",
    skills: ["Full-stack", "OpenAI", "BCA", "Study resources"],
    description: `A resource platform for BCA students to access notes, PYQs, and study material.
- Integrated an AI-powered chatbot using OpenAI for subject-specific queries in real time`,
  },
]
