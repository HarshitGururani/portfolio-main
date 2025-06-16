import React from "react";
import { Calendar, MapPin, Briefcase, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "RegsiterKaro",
    location: "Gurgaon, India",
    duration: "Jan 2024 - Mar 2024",
    type: "Internship",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js and modern JavaScript frameworks",
      "Collaborated with senior developers and designers to implement pixel-perfect UI components",
      "Participated in code reviews and daily stand-ups, gaining experience in agile development practices",
      "Optimized application performance and ensured cross-browser compatibility across multiple devices",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Git",
      "Responsive Design",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 pt-4 relative overflow-hidden z-0">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block text-md font-medium bg-gradient-to-r to-blue-300 from-emerald-500 tracking-wide uppercase mb-8 bg-clip-text text-transparent sm:mb-4">
            Work History
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-sans tracking-tight">
            Professional Experience
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Gained hands-on experience by building production-ready features,
            improving UI performance, and collaborating with teams to deliver
            modern web applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-200 via-blue-300 to-indigo-300 opacity-50 shadow-sm shadow-cyan-200/30"></div>
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="relative flex items-start mb-16 last:mb-0 "
            >
              {/* Timeline Dot */}
              <div className="absolute left-[2px] md:left-[18px] w-4 h-4 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-full z-10 shadow-lg shadow-cyan-400/50 border-2 border-slate-800"></div>

              {/* Content */}
              <div className="ml-[30px] md:ml-20 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 w-full hover:bg-slate-800/95 hover:border-slate-600/50">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 text-slate-300 text-sm font-medium rounded-full border border-slate-600/50 shadow-sm">
                      <Briefcase className="w-3.5 h-3.5" />
                      {experience.type}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-900/30 text-blue-300 text-sm font-medium rounded-full border border-blue-700/50 shadow-sm">
                      <Calendar className="w-3.5 h-3.5" />
                      {experience.duration}
                    </span>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-900/30 text-emerald-300 text-sm font-medium rounded-full border border-emerald-700/50 shadow-sm">
                      <MapPin className="w-3.5 h-3.5" />
                      {experience.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {experience.role}
                  </h3>

                  <p className="text-lg text-slate-300 font-semibold">
                    {experience.company}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="">
                  <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    Key Responsibilities
                    <ArrowRight className="w-4 h-4 text-cyan-400" />
                  </h4>
                  <ul className="space-y-3">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 ">
                        <div className="w-2 h-2 bg-white rounded-full mt-2.5 flex-shrink-0"></div>
                        <span className="text-slate-300 leading-relaxed">
                          {responsibility}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {/* <div>
                  <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                    Technologies Used
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-slate-700/50 text-slate-300 font-medium rounded-full border border-slate-600/50 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-default hover:bg-slate-600/50 hover:text-cyan-300 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          ))}

          {/* Future Placeholder */}
          <div className="relative flex items-start"></div>
        </div>
      </div>
    </section>
  );
}
