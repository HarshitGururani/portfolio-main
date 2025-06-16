"use client";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import memoJiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import { useRef } from "react";

export const HeroSection = () => {
  return (
    <div className="py-28 md:py-42 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>

      {/* Animated grid background */}
      <div className="absolute inset-0 -z-20 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            animation: "grid-move 20s linear infinite",
          }}
        ></div>
      </div>

      {/* Responsive floating code elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute md:top-20 top-10 md:left-10 left-4 text-blue-400/30 font-mono md:text-sm text-xs animate-float">
          React
        </div>
        <div className="absolute md:top-32 top-20 md:right-16 right-6 text-green-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          Node.js
        </div>
        <div className="absolute md:bottom-40 bottom-24 md:left-20 left-6 text-purple-400/30 font-mono md:text-sm text-xs animate-float">
          useState
        </div>
        <div className="absolute md:bottom-32 bottom-20 md:right-24 right-6 text-yellow-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          express()
        </div>
        <div className="absolute md:top-40 top-24 md:left-1/3 left-1/4 text-pink-400/30 font-mono md:text-sm text-xs animate-float">
          &lt;/&gt;
        </div>
        <div className="absolute md:bottom-60 bottom-36 md:right-[25%] right-10 text-cyan-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          MongoDB
        </div>
        <div className="absolute md:top-60 top-36 md:left-32 left-8 text-orange-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          API
        </div>
        <div className="absolute md:bottom-48 bottom-28 md:right-12 right-4 text-sky-400/30 font-mono md:text-sm text-xs animate-float">
          .map()
        </div>
        <div className="absolute md:top-16 top-8 md:right-32 right-8 text-emerald-400/30 font-mono md:text-sm text-xs animate-float">
          Next.js
        </div>
        <div className="absolute md:bottom-20 bottom-10 md:left-16 left-4 text-red-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          req.body
        </div>
        <div className="absolute md:top-72 top-44 md:right-20 right-8 text-indigo-400/30 font-mono md:text-sm text-xs animate-float">
          useEffect
        </div>
        <div className="absolute md:bottom-64 bottom-36 md:left-1/4 left-8 text-violet-400/30 font-mono md:text-sm text-xs animate-float-delayed">
          async
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-green-500/15 to-blue-500/15 rounded-full blur-xl animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-lg animate-pulse-delayed pointer-events-none"></div>

      <div className="container z-50">
        <div className="flex flex-col items-center">
          <Image
            src={memoJiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>

          <div className="max-w-lg lg:max-w-xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Hi, I&apos;m Harshit Gururani
            </h1>
            <p className="mt-4 text-center text-white/70 text-sm md:text-base">
              Full-stack developer focused on building fast, scalable, and
              intuitive web applications. I prioritize clean architecture,
              smooth user experiences, and real-world impact.
            </p>
          </div>

          {/* Buttons and Social Links */}
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-14 items-center mt-8 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <button className="inline-flex items-center gap-2 border border-white/15 px-4 text-sm h-10 rounded-xl hover:bg-white/5 transition-colors">
                <span className="font-semibold">Explore my Work</span>
                <ArrowDown className="size-4" />
              </button>
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-10 px-4 rounded-xl hover:bg-white/90 transition-colors text-sm">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="font-semibold">Download Resume</span>
              </button>
            </div>

            <div className="hidden md:block h-8 w-px bg-white" />

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/harshitgururani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/harshitgururani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-3deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes pulse-delayed {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-delayed {
          animation: pulse-delayed 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};
