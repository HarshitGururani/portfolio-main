import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "menuqr",
    title: "MenuQR",
    period: {
      start: "2026",
    },
    link: "https://github.com/HarshitGururani",
    skills: [
      "Next.js 15",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Cloudflare R2",
    ],
    description: `Restaurant ordering SaaS — digital menus and table-specific QR codes, currently in development.
- Customers scan a QR code, browse the menu, add items to cart, and place orders with no login required
- Multi-role restaurant system with Owner, Employee, and permission-based access plus real-time order workflows
- Async PostgreSQL with SQLAlchemy, Redis caching, Cloudflare R2 media storage, and planned Razorpay billing and analytics`,
    isExpanded: true,
  },
  {
    id: "social-platform",
    title: "Social Media Platform",
    period: {
      start: "2025",
    },
    link: "https://github.com/HarshitGururani",
    skills: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Lucia Auth",
      "UploadThing",
      "Stream Chat",
    ],
    description: `Full-stack social networking app with user profiles, personalized feeds, messaging, and media sharing.
- Users can create accounts, follow others, publish posts, and interact through likes, comments, bookmarks, and notifications
- Includes profile management, search, chat channels, and a responsive modern UI for social engagement`,
    isExpanded: true,
  },
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
