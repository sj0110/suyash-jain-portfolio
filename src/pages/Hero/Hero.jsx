import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import { m } from "framer-motion";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Software Engineer & Full-Stack Developer",
    "MERN Stack Developer & UI/UX Designer",
    "Frontend (React, Next.js, TypeScript)",
    "Backend (Node.js, MongoDB, REST APIs)",
  ];

  const buttons = [
    {
      title: "LinkedIn",
      icon: "fa-brands fa-linkedin",
      url: "https://www.linkedin.com/in/jainsuyash2003"
    },
    {
      title: "Download Resume",
      icon: "fa-solid fa-file",
      url: "https://suyash-jain-resume.tiiny.site"
    },
    {
      title: "LeetCode",
      icon: "fa-solid fa-code",
      url: "https://leetcode.com/u/jainsuyash2003/"
    },
    {
      title: "GitHub",
      icon: "fa-brands fa-github",
      url: "https://github.com/sj0110"
    },
    {
      title: "Behance",
      icon: "fa-brands fa-behance",
      url: "https://www.behance.net/suyashjain1"
    },

  ]

  const [code] = useState(`
const profile = {
    name: 'Suyash Jain',
    title: 'Software Engineer | Full-Stack Developer | UI/UX | Solver',
    skills: [
        'ReactJS', 'NextJS', 'Redux', 'NodeJS', 'Express',
        'MySQL', 'MongoDB' , 'TypeScript', 'GitHub', 'Git', 
        'Framer', 'Figma', 'Google Cloud Platform'
    ],
    smartWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 1.5, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 10 &&
            this.yearsOfExperience >= 1
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (

    <main className="bg-[#020617] text-white min-h-screen">
      <section
        className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
        style={{ paddingTop: "var(--header-height)" }}
      >
        <div className="absolute inset-0"></div>

        {/* Choose one of these background options */}
        <GridBackground />

        {/* Or keep the original backgrounds if you prefer */}
        {/* <HexagonBackground /> */}
        {/* <AnimatedGrid /> */}
        {/* <DotBackground /> */}

        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        {/* Main content container */}
        <div
          className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28"
          style={{
            paddingTop:
              window.innerWidth >= 1360 &&
                window.innerWidth <= 1370 &&
                window.innerHeight >= 760 &&
                window.innerHeight <= 775
                ? "12rem"
                : "",
          }}
        >
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 mb-10 sm:mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative px-3 sm:px-0">
            {/* Decorative blurs */}
            <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-32 h-32 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-32 h-32 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4 sm:mb-6 animate__animated animate__fadeInDown animate__delay-1s">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to My Portfolio
              </span>
            </div>

            {/* Name section */}
            <div className="relative mb-5 sm:mb-8">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m<span className="typing-effect gradient-text">{" "}Suyash Jain</span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Role badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-500/10 border border-blue-500/20 mb-4 sm:mb-6 backdrop-blur-sm animate__animated animate__fadeInUp animate__delay-1s">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-xs sm:text-sm md:text-base"></i>
              <span>
                <FlipWords
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-400 font-medium"
                  words={words}
                />
              </span>
            </div>

            {/* Description */}
            <div className="relative mb-6 sm:mb-10 max-w-xl px-1 sm:px-0">
              <p className="text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed">
                Full Stack Software Engineer 👨‍💻 | Engineering the Future{" "}
                <br className="hidden sm:block" />
                from UIs to APIs 🚀 | One Commit at a Time :) 💻✨
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate__animated animate__fadeInUp animate__delay-2s">
              <div className="flex gap-2 sm:gap-3 max-w-full lg:max-w-xl flex-wrap justify-left sm:justify-start">
                {buttons.map((button) => (
                  <a
                    key={button.title}
                    href={button.url}
                    target="_blank"
                    className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-blue-400 p-0.5 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                  >
                    <span className="block w-full px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-md sm:rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-blue-400">
                      <span className="relative flex items-center justify-center gap-2 text-white font-medium text-xs sm:text-sm md:text-base">
                        <span>{button.title}</span>
                        <i
                          className={`${button.icon} text-base sm:text-lg md:text-xl transform transition-all duration-300 group-hover:translate-x-1`}
                        />
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Floating badges (desktop only) */}
            <div className="hidden lg:block absolute left-[8.5rem] top-[3.3rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;UI Magic
              </div>
            </div>
            <div className="hidden lg:block absolute right-11 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
            <div className="hidden lg:block absolute top-[24rem] left-[70%] transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
              </div>
            </div>
          </div>


          {/* Right column - Code window */}
          <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
            <div className="gradient-border">
              <div className="code-window bg-[#091121]">
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code" /> developer.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col justify-center items-center gap-2 hidden lg:flex">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400" /> About me
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>
      <PortfolioPage />
    </main>
  );
}
