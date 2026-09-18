import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Harshit",
  lastName: "Gururani",
  displayName: "Harshit Gururani",
  username: "HarshitGururani",
  gender: "male",
  pronouns: "he/him",
  bio: "Full-stack developer focused on building fast, scalable, and intuitive web applications.",
  flipSentences: [
    "Full-stack developer.",
    "Building fast, scalable web apps.",
    "Clean architecture. Real-world impact.",
  ],
  address: "Noida, India",
  phoneNumberB64: "KzkxNzQxNzIyNzI1OA==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  emailB64: "aGFyc2hpdDE1Z2dAZ21haWwuY29t", // base64 encoded
  website: "https://harshit-gururani.netlify.app",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Frontend Developer",
      company: "Prune.co",
      website: "https://prune.co",
      experienceId: "prune",
    },
  ],
  about: `- Full-stack developer focused on building fast, scalable, and intuitive web applications. I prioritize clean architecture, smooth user experiences, and real-world impact.
- Currently at Prune.co, building a scalable Control Panel and role-based Partner Portal with secure authentication.
- Previously at RegisterKaro, shipping SEO-friendly, high-performance UIs from Figma to production.
- Available for new projects and collaborations.
`,
  avatar: "/profile.png",
  avatarVariants: {
    lightOff: "/profile.png",
    lightOn: "/profile.png",
    darkOff: "/profile.png",
    darkOn: "/profile.png",
  },
  ogImage: "/og.png",
  namePronunciationUrl: "",
  keywords: [
    "harshit gururani",
    "harshitgururani",
    "frontend developer",
    "full-stack developer",
    "next.js",
    "prune.co",
    "registerkaro",
  ],
  timeZone: "Asia/Kolkata",
  dateCreated: "2023-10-20", // YYYY-MM-DD
}
