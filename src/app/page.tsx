"use client";

import ContactSection from "@/sections/Contact";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import Skills from "@/sections/Skills";
import ExperienceSection from "@/sections/Tape";
import { useRef } from "react";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header
        refs={{
          home: homeRef,
          projects: projectsRef,
          skills: skillsRef,
          experience: experienceRef,
        }}
      />
      <div ref={homeRef}>
        <HeroSection contactRef={contactRef} />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
}
