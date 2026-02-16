"use client";
import { ArrowUpRight, Check } from "lucide-react";
import darkSaasLandingPage from "@/assets/images/studymate.png";
import lightSaasLandingPage from "@/assets/images/booking.png";
import aiStartupLandingPage from "@/assets/images/smartcv.png";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Smart CV",
    year: "2025",
    title: "AI-Powered Resume Builder",
    results: [
      {
        title:
          "Full-stack resume platform with live preview and PDF export (Next.js, PostgreSQL)",
      },
      {
        title:
          "AI-powered resume builder using OpenAI for summary and experience generation",
      },
    ],
    link: "https://smart-cv-ai-pi.vercel.app",
    image: aiStartupLandingPage,
  },

  {
    company: "Booking.com",
    year: "2024",
    title: "Hotel Booking Platform",
    results: [
      {
        title:
          "Built a full-stack hotel booking platform with user listings, bookings, and JWT-based authentication",
      },
      {
        title:
          "Integrated Stripe for secure online payments, streamlining the end-to-end booking experience",
      },
    ],
    link: "https://mern-booking-app-4z6n.onrender.com/",
    image: lightSaasLandingPage,
  },
  {
    company: "Study Mate",
    year: "2024",
    title: "Study Mate - BCA Study Platform",
    results: [
      {
        title:
          "Integrated an AI-powered chatbot using OpenAI to assist BCA students with subject-specific queries in real-time",
      },
      {
        title:
          "Built a full-stack resource platform for BCA students to access notes, PYQs, and study material",
      },
    ],

    link: "https://studymate-next.vercel.app/",
    image: darkSaasLandingPage,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-md font-medium bg-gradient-to-r to-blue-600 from-emerald-600 dark:to-blue-300 dark:from-emerald-500 tracking-wide uppercase mb-8 bg-clip-text text-transparent">
            Full-Stack Projects
          </span>

          <h2 className="text-3xl  font-light text-gray-900 dark:text-white mb-4 font-sans tracking-tight">
            Modern Web Applications
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm">
            Delivering complete frontend and backend solutions using modern
            technologies and clean architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-neutral-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg dark:hover:shadow-gray-900/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 bg-neutral-100 dark:bg-gray-800">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    {project.company}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  {project.results.map((result) => (
                    <div key={result.title} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {result.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* View Project Link */}
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors group/link"
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
