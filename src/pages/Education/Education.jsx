import React, { useState, useEffect } from "react";
import EducationLoader from "@/components/ui/EducationLoader";
import {
  Award,
  Calendar,
  BookOpen,
  Trophy,
  GraduationCap,
} from "lucide-react";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelors of Technology",
      school: "Indian Institute of Information Technology Vadodara",
      mascot: "📘",
      year: "Dec 2020 - June 2024",
      achievements: ["CPI: 8.25", "Subject: Computer Science Engineering"],
      skills: ["C++", "MongoDB", "React.js", "C Programming", "HTML5", "Web Development", "Node.js", "CSS", "JavaScript", "Engineering", "SQL", "Software Development", "Tailwind CSS"],
      description:
        "Comprehensive engineering education combining theoretical computer science foundations with hands-on software development. Mastered data structures, algorithms, and modern web technologies while building real-world applications and contributing to innovative projects.",
    },
    {
      degree: "Senior Secondary Certificate (SSC)",
      school: "Bhartiyam Vidya Niketan, Shivpuri Link Road, Gwalior",
      mascot: "📗",
      year: "2018 - 2020",
      achievements: ["Percentage: 91.0%", "Subject: PCM"],
      skills: ["Physics", "Chemistry", "Mathematics"],
      description:
        "Specialized in Physics, Chemistry, and Mathematics with exceptional academic performance. Developed strong analytical thinking and problem-solving skills that became the foundation for engineering excellence and logical reasoning.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "St. Paul's School, Morar, Gwalior, MP",
      mascot: "📕",
      year: "2012 - 2018",
      achievements: ["Percentage: 91.0%", "Subject: All Subjects"],
      skills: ["Physics", "Chemistry", "Mathematics", "Biology", "Hindi", "English", "Social Studies"],
      description:
        "Well-rounded foundational education fostering curiosity and critical thinking across diverse subjects. Built strong communication skills, scientific temperament, and cultural awareness that shaped personal and academic growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    // Add custom CSS for responsive design and animations
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.05; }
        50% { opacity: 0.15; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(1deg); }
      }
      
      @keyframes skill-shimmer {
        0% { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes fadeInUp {
            from {
        opacity: 0;
        transform: translateY(30px);
      }
            to {
        opacity: 1;
        transform: translateY(0);
      }
      }

      @keyframes gradientShift {
        0 % { background- position: 0 % 50 %;
      }
      100 % { background- position: 100 % 50 %; }
            }
            
            .animate - fadeInUp {
        animation: fadeInUp 0.8s ease - out forwards;
      }
            
            .gradient - text {
        background: linear - gradient(135deg, #60A5FA, #34D399, #A78BFA);
        background - size: 200 % 200 %;
        -webkit - background - clip: text;
        -webkit - text - fill - color: transparent;
        background - clip: text;
        animation: gradientShift 3s ease -in -out infinite alternate;
      } 
      
      .skill-tag {
        background: linear-gradient(90deg, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.2) 50%, rgba(59, 130, 246, 0.1) 75%);
        background-size: 200% 100%;
        animation: skill-shimmer 3s infinite;
      }
      
      .education-card {
        backdrop-filter: blur(12px);
        background: rgba(17, 24, 39, 0.6);
        border: 1px solid rgba(59, 130, 246, 0.2);
        transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      }
      
      .education-card:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: rgba(59, 130, 246, 0.6);
        box-shadow: 
          0 20px 25px -5px rgba(0, 0, 0, 0.3),
          0 10px 10px -5px rgba(0, 0, 0, 0.1),
          0 0 30px rgba(59, 130, 246, 0.2);
      }
      
      .floating-element {
        animation: float 6s ease-in-out infinite;
      }
      
      /* Custom scrollbar */
      .education-section::-webkit-scrollbar {
        width: 4px;
      }
      
      .education-section::-webkit-scrollbar-track {
        background: rgba(17, 24, 39, 0.1);
      }
      
      .education-section::-webkit-scrollbar-thumb {
        background: rgba(59, 130, 246, 0.3);
        border-radius: 2px;
      }
      
      /* Responsive adjustments */
      @media (max-width: 640px) {
        .education-card {
          margin-bottom: 1rem;
        }
      }
      
      /* Special handling for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .education-section {
          padding-top: 8rem !important;
          padding-bottom: 8rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <main className="pt-16 sm:pt-20 lg:pt-24 bg-[#020617] text-white min-h-screen relative overflow-hidden">
      <section className="education-section py-8 sm:py-12 md:py-16 lg:py-20 relative z-10" aria-labelledby="education-heading">
        {/* Enhanced Grid Background */}
        <div className="absolute inset-0 z-0">
          {/* Primary grid */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px] sm:bg-[length:50px_50px]" />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617]" />

          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="absolute inset-0">
              <pattern
                id="education-grid"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="50"
                  height="50"
                  fill="none"
                  stroke="rgb(59, 130, 246)"
                  strokeWidth="0.5"
                  className="opacity-30"
                  style={{ animation: "gridPulse 4s infinite" }}
                />
              </pattern>
              <rect width="100%" height="100%" fill="url(#education-grid)" />
            </svg>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl floating-element" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl floating-element" style={{ animationDelay: "-3s" }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl floating-element" style={{ animationDelay: "-1s" }} />
        </div>

        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <span className="text-gray-300 text-sm font-medium">
                Academic Excellence
              </span>
            </div>

            <h1 id="education-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Educational Journey</span>
            </h1>

            <p className="text-gray-300/90 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
              Discover how academic excellence shapes innovative thinking and
              <br className="hidden sm:block" />
              professional growth through continuous learning.
            </p>

            {/* Decorative line */}
            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          </header>

          {/* Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 xl:gap-8">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`education-card animate-fadeInUp opacity-0 relative rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 ${hoveredIndex === index
                  ? "border-blue-500/60 shadow-2xl shadow-blue-500/10"
                  : "border-blue-400/20 hover:border-blue-400/40"
                  }`}
                style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card Background Effect */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative space-y-4 sm:space-y-6">
                  {/* Header Section */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="text-2xl sm:text-3xl shrink-0 floating-element">
                        {edu.mascot}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight pr-2">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm sm:text-base text-gray-300 flex items-start gap-2 leading-relaxed">
                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="break-words">{edu.school}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 flex items-center gap-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                        {edu.year}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed border-l-2 border-blue-500/50 pl-4 italic">
                      {edu.description}
                    </p>
                  </div>

                  {/* Achievements Section */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-500 shrink-0" />
                      Key Achievements
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-blue-400 flex items-center gap-2 text-xs sm:text-sm border border-blue-500/20 backdrop-blur-sm"
                        >
                          <Award className="w-3 h-3 shrink-0" />
                          <span className="font-medium">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm sm:text-base font-semibold text-white">
                      Skills & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {edu.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="skill-tag px-2 sm:px-3 py-1 text-xs rounded-md text-blue-300 border border-blue-500/20 font-medium transition-all duration-300 hover:bg-blue-500/20 hover:scale-105"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Indicator */}
                  <div className={`absolute top-4 right-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 scale-110' : 'opacity-0 scale-95'
                    }`}>
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Section */}
          {/* <div className="mt-16 sm:mt-20 lg:mt-24 text-center animate-fadeInUp opacity-0" style={{ animationDelay: '1.2s' }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-medium">
                Continuous Learning & Growth
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default EducationSection;