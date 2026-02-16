"use client";

import { useState, useEffect } from "react";
import Html from "@/assets/icons/html.svg";
import Css from "@/assets/icons/css.svg";
import Javascript from "@/assets/icons/javascript.svg";
import Typescript from "@/assets/icons/typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import Nextjs from "@/assets/icons/nextjs.svg";
import Tailwindcss from "@/assets/icons/tailwindcss.svg";
import Sass from "@/assets/icons/sass.svg";
import Nodejs from "@/assets/icons/nodejs.svg";
import Express from "@/assets/icons/express.svg";
import Mongodb from "@/assets/icons/mongodb.svg";
import Postgresql from "@/assets/icons/postgresql.svg";
import Postman from "@/assets/icons/postman.svg";
import Git from "@/assets/icons/git.svg";
import Github from "@/assets/icons/github.svg";
import Vercel from "../../public/vercel.svg";
import Motion from "@/assets/icons/motion.svg";

const skills = [
  // Core MERN stack
  { Icon: Express, name: "Express", type: "Backend" },
  { Icon: ReactIcon, name: "React", type: "Frontend" },
  { Icon: Nodejs, name: "Node.js", type: "Backend" },
  { Icon: Mongodb, name: "MongoDB", type: "Database" },
  { Icon: Nextjs, name: "Next.js", type: "Frontend" },

  // Frontend essentials
  { Icon: Typescript, name: "TypeScript", type: "Frontend" },
  { Icon: Javascript, name: "JavaScript", type: "Frontend" },
  { Icon: Postgresql, name: "PostgreSQL", type: "Database" },
  { Icon: Tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { Icon: Html, name: "HTML", type: "Frontend" },
  { Icon: Css, name: "CSS", type: "Frontend" },
  { Icon: Sass, name: "Sass", type: "Frontend" },

  // Supporting tools and libraries
  { Icon: Postman, name: "Postman", type: "Testing" },
  { Icon: Motion, name: "Framer Motion", type: "Animation" },
  { Icon: Git, name: "Git", type: "Version Control" },
  { Icon: Github, name: "GitHub", type: "Version Control" },

  // Deployment
  { Icon: Vercel, name: "Vercel", type: "Deployment" },
];

// Priority skills to show on mobile
const mobilePrioritySkills = new Set([
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "PostgreSQL",
  "GitHub",
]);

const Skills = () => {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-2 sm:pl-5 lg:px-16 py-12 flex flex-col mb-20 pb-0">
      <h3 className="inline-block text-3xl font-medium bg-gradient-to-r to-blue-600 from-emerald-600 dark:to-blue-300 dark:from-emerald-500 tracking-wide uppercase bg-clip-text text-transparent text-center">
        Skills & Technologies
      </h3>

      <div className="mt-16 flex flex-wrap gap-10 md:justify-center">
        {skills.map(({ Icon, name }) => {
          const isHiddenOnMobile = !mobilePrioritySkills.has(name);
          const shouldShow =
            !isHiddenOnMobile || showAllSkills || windowWidth >= 768;

          return (
            <div
              className={`block-container w-20 h-20 ${
                shouldShow ? "" : "hidden"
              }`}
              key={name}
            >
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Icon className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More Button - Only visible on mobile when not all skills are shown */}
      <div className="flex justify-center mt-8 md:hidden">
        {!showAllSkills && (
          <button
            onClick={() => setShowAllSkills(true)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Show More Technologies
          </button>
        )}
        {showAllSkills && (
          <button
            onClick={() => setShowAllSkills(false)}
            className="px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 dark:from-gray-600 dark:to-gray-700 text-white rounded-lg font-medium hover:from-gray-600 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Skills;
