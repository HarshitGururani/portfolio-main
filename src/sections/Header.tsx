"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

interface HeaderProps {
  refs: {
    home: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    skills: RefObject<HTMLDivElement>;
    experience: RefObject<HTMLDivElement>;
  };
}

type Section = "home" | "projects" | "skills" | "experience";

export const Header = ({ refs }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.getAttribute("data-section") as Section;
          setActiveSection(section);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    Object.entries(refs).forEach(([section, ref]) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", section);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [refs]);

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getNavItemClass = (section: Section) => {
    const baseClass = "nav-item px-4 py-2 rounded-full transition-colors";
    return activeSection === section
      ? `${baseClass} bg-white text-gray-900`
      : `${baseClass} hover:bg-white/10`;
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center fixed top-3 w-full z-10"
    >
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.home)}
          className={getNavItemClass("home")}
        >
          Home
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.experience)}
          className={getNavItemClass("experience")}
        >
          Experience
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.skills)}
          className={getNavItemClass("skills")}
        >
          Skills
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection(refs.projects)}
          className={getNavItemClass("projects")}
        >
          Projects
        </motion.button>
      </nav>
    </motion.div>
  );
};
