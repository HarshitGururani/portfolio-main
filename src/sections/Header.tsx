"use client";

import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";
import { Home, Briefcase, Code2, Folder, Mail } from "lucide-react";

interface HeaderProps {
  refs: {
    home: RefObject<HTMLDivElement>;
    projects: RefObject<HTMLDivElement>;
    skills: RefObject<HTMLDivElement>;
    experience: RefObject<HTMLDivElement>;
    contact: RefObject<HTMLDivElement>;
  };
}

type Section = "home" | "experience" | "skills" | "projects" | "contact";

export const Header = ({ refs }: HeaderProps) => {
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px",
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
      observerOptions,
    );

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

  const navItems = [
    { id: "home", label: "Home", icon: Home, ref: refs.home },
    { id: "experience", label: "Exp", icon: Briefcase, ref: refs.experience },
    { id: "skills", label: "Skills", icon: Code2, ref: refs.skills },
    { id: "projects", label: "Projects", icon: Folder, ref: refs.projects },
    { id: "contact", label: "Contact", icon: Mail, ref: refs.contact },
  ] as const;

  return (
    <>
      {/* Theme Toggle — Mobile Top-Right */}
      <div className="fixed top-4 right-4 z-40 md:hidden">
        <ThemeToggle />
      </div>

      {/* ── Desktop Header ─────────────────────────────────────────── */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:flex items-center justify-center fixed top-6 w-full z-40"
      >
        <nav className="flex items-center gap-1.5 px-3 py-2 border border-black/5 dark:border-white/10 rounded-full bg-white/70 dark:bg-black/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item.ref)}
              className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
                activeSection === item.id
                  ? "bg-black text-white dark:bg-white dark:text-black shadow-md"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
          <div className="ml-2 pl-2 border-l border-black/5 dark:border-white/10">
            <ThemeToggle />
          </div>
        </nav>
      </motion.div>

      {/* ── OPTION A: Floating Pill ────────────────────────────────────
          A compact rounded pill floating above the bottom edge.
          No SVG wave — zero edge/corner artifacts.
          Delete this block and uncomment Option B if you prefer
          the full-width bar style instead.
      ─────────────────────────────────────────────────────────────── */}
      <div className="fixed bottom-2 left-0 right-0 z-50 flex justify-center px-6 md:hidden pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1 px-3 py-3 rounded-full bg-white/90 dark:bg-gray-950/90 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className="relative flex items-center justify-center w-12 h-12"
              >
                {/* Animated active background bubble */}
                {isActive && (
                  <motion.div
                    layoutId="pillActiveBg"
                    className="absolute inset-0 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_4px_16px_rgba(37,99,235,0.45)]"
                    transition={{ type: "spring", damping: 22, stiffness: 200 }}
                  />
                )}
                <Icon
                  className={`relative z-10 size-5 transition-colors duration-200 ${
                    isActive ? "text-white" : "text-gray-400 dark:text-gray-500"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ── OPTION B: Full-width bar flush to bottom ───────────────────
          Remove the Option A block above and uncomment this one.
          Uses env(safe-area-inset-bottom) so it works on iOS too.
      ─────────────────────────────────────────────────────────────── */}
      {/*
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-950 border-t border-black/5 dark:border-white/10 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
        <div
          className="flex justify-around items-center px-2 pt-3"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.ref)}
                className="relative flex flex-col items-center justify-center gap-1 w-14"
              >
                {isActive && (
                  <motion.div
                    layoutId="barActiveBubble"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 size-12 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_4px_16px_rgba(37,99,235,0.4)] flex items-center justify-center"
                    transition={{ type: "spring", damping: 22, stiffness: 200 }}
                  >
                    <Icon className="size-6 text-white" />
                  </motion.div>
                )}
                {!isActive && <Icon className="size-6 text-gray-400 dark:text-gray-500" />}
                <span
                  className={`text-[10px] font-medium mt-5 transition-colors ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-gray-400 dark:text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      */}
    </>
  );
};
