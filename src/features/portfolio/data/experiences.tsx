import { BriefcaseBusinessIcon, CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "prune",
    companyName: "Prune.co",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://prune.co",
    location: "Noida, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "08.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developing a scalable Control Panel with secure authentication and role-based access, projected to reduce manual tasks by ~87%.
- Built a role-based Partner Portal (Super Admin, Admin, Reseller) for secure user management and wallet handling.
- Implemented robust authentication flows, reducing login errors by ~45%.
- Collaborated with product and backend teams to optimize integrations and improve development speed.
- Designed and delivered secure, maintainable frontend architecture using Next.js and modern best practices.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Authentication",
          "Role-based Access",
          "Frontend Architecture",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "registerkaro",
    companyName: "RegisterKaro",
    companyIcon: <BriefcaseBusinessIcon strokeWidth={1.8} />,
    companyWebsite: "https://www.registerkaro.in",
    location: "Gurugram, India",
    locationType: "On-site",
    positions: [
      {
        id: "1",
        title: "Frontend Developer",
        employmentPeriod: {
          start: "02.2025",
          end: "08.2025",
        },
        employmentType: "Full-time",
        icon: <CodeXmlIcon />,
        description: `- Developed high-converting landing pages using Next.js, contributing to a 12–15% increase in lead conversions.
- Built and integrated a dynamic Guides page with backend APIs, increasing organic traffic by 20%.
- Streamlined lead capture by integrating Zoho Forms, leading to a 30% increase in qualified leads.
- Collaborated with backend developers to design and consume REST APIs, reducing integration time by ~40%.
- Applied performance optimization techniques (code splitting, lazy loading), reducing page load time by ~35%.
- Converted Figma designs into responsive UIs using Tailwind CSS and SCSS.
- Improved SEO performance and enhanced overall Core Web Vitals.`,
        skills: [
          "Next.js",
          "REST APIs",
          "Tailwind CSS",
          "SCSS",
          "SEO",
          "Core Web Vitals",
          "Figma",
        ],
        isExpanded: true,
      },
    ],
  },
]
