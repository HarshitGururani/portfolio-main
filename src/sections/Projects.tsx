"use client";
import { ArrowUpRight, Check } from "lucide-react";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-md font-medium bg-gradient-to-r to-blue-300 from-emerald-500 tracking-wide uppercase mb-8 bg-clip-text text-transparent">
            Full-Stack Projects
          </span>

          <h2 className="text-3xl  font-light text-white mb-4 font-sans tracking-tight">
            Modern Web Applications
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Delivering complete frontend and backend solutions using modern
            technologies and clean architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 bg-neutral-100">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <span className="font-medium text-gray-700">
                    {project.company}
                  </span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-2 mb-6">
                  {project.results.map((result) => (
                    <div key={result.title} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 leading-relaxed">
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
                  className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors group/link"
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
