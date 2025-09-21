import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Paintbrush,
  Database,
  Layout,
  Cpu,
  Cloud,

} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import {
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiJest,
  SiRedux,
  SiMui,
  SiAdobexd,
  SiCanva,
  SiSketch,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiEslint,
  SiPrettier,
  SiGreensock,
  SiAdobeaftereffects,
  SiBlender,
  SiFramer,
  SiVercel,
  SiVite,
  SiPostman,
  SiJira,
  SiSlack,
  SiNotion,
  SiGithub,
  SiGitlab,
  SiThreedotjs,
  SiCinema4D,
  SiUnity,
  SiUnrealengine,
} from "react-icons/si";

import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation, MdOutlineDesignServices } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

import PropTypes from "prop-types";


// Animated Grid Background (consistent with other components)
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <pattern
            id="skills-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="60"
              height="60"
              fill="none"
              stroke="white"
              strokeWidth="0.3"
              className="opacity-30 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#skills-grid)" />
        </svg>
      </div>
    </div>
  );
};

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-32 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60 hidden sm:block"></div>
      <div className="absolute top-80 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-slow opacity-40 hidden sm:block"></div>
      <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-50 hidden sm:block"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-green-300 rounded-full animate-float-slow opacity-30 hidden sm:block"></div>
      <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-float opacity-40 hidden sm:block"></div>
    </div>
  );
};

const SkillCard = ({ icon: Icon, title, skills, color, index }) => (
  <div
    className="animate-fadeInUp opacity-0 h-full"
    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
  >
    <Card className="group relative overflow-hidden bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:scale-[1.02] transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/30 h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
      <CardContent className="p-4 sm:p-5 md:p-6 relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div
            className={`p-2.5 sm:p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm ${color} group-hover:scale-110 transition-all duration-300 flex-shrink-0`}
          >
            <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {skills.map((skill, skillIndex) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`group/badge relative bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/80 text-gray-100 border-gray-600/50 hover:border-gray-500 flex items-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 px-2.5 sm:px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${color.split('-')[1]}-500/20 text-xs sm:text-sm animate-fadeInScale`}
              style={{ animationDelay: `${0.5 + skillIndex * 0.05}s` }}
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300 flex-shrink-0">
                {skill.icon}
              </span>
              <span className="font-medium whitespace-nowrap">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

SkillCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ).isRequired,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const SkillsSection = () => {
  useEffect(() => {
    // Add CSS animations consistent with other components
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes float-slow {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-15px) rotate(-180deg); }
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
      
      @keyframes fadeInScale {
        from {
          opacity: 0;
          transform: scale(0.8);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
      }
      
      .animate-fadeInUp {
        animation: fadeInUp 0.8s ease-out forwards;
      }
      
      .animate-fadeInScale {
        animation: fadeInScale 0.6s ease-out forwards;
        opacity: 0;
      }
      
      .animate-gridPulse {
        animation: gridPulse 4s ease-in-out infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 3s infinite linear;
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #60A5FA, #34D399, #A78BFA);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 3s ease-in-out infinite alternate;
      }
      
      .skill-section-header {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        .animate-float,
        .animate-float-slow,
        .animate-gridPulse,
        .animate-fadeInUp,
        .animate-fadeInScale,
        .animate-shimmer {
          animation: none !important;
        }
        
        .group:hover {
          transform: none !important;
        }
        
        .gradient-text {
          animation: none;
        }
      }
      
      /* Mobile optimizations */
      @media (max-width: 640px) {
        .gradient-text {
          font-size: 1.75rem !important;
          line-height: 1.2 !important;
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

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-3 h-3 sm:w-4 sm:h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-3 h-3 sm:w-4 sm:h-4 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-3 h-3 sm:w-4 sm:h-4 text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-3 h-3 sm:w-4 sm:h-4 text-[#38B2AC]" /> },
        // { name: "Figma", icon: <FaFigma className="w-3 h-3 sm:w-4 sm:h-4 text-[#F24E1E]" /> },
        { name: "HTML5", icon: <BsFileEarmarkCode className="w-3 h-3 sm:w-4 sm:h-4 text-[#E34F26]" /> },
        { name: "CSS3", icon: <BsFileEarmarkCode className="w-3 h-3 sm:w-4 sm:h-4 text-[#1572B6]" /> },
        // { name: "GraphQL", icon: <SiGraphql className="w-3 h-3 sm:w-4 sm:h-4 text-[#E10098]" /> },
        { name: "Redux", icon: <SiRedux className="w-3 h-3 sm:w-4 sm:h-4 text-[#764ABC]" /> },
        // { name: "Zustand", icon: <SiZustand className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6B6B]" /> },
        // { name: "Apollo Client", icon: <SiApollographql className="w-3 h-3 sm:w-4 sm:h-4 text-[#311C87]" /> },
        { name: "Framer Motion", icon: <SiFramer className="w-3 h-3 sm:w-4 sm:h-4 text-[#0055FF]" /> },
        // { name: "Storybook", icon: <SiStorybook className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4785]" /> },
        // { name: "Styled Components", icon: <SiStyledcomponents className="w-3 h-3 sm:w-4 sm:h-4 text-[#DB7093]" /> },
        { name: "Material UI", icon: <SiMui className="w-3 h-3 sm:w-4 sm:h-4 text-[#007FFF]" /> },
        // { name: "Chakra UI", icon: <SiChakraui className="w-3 h-3 sm:w-4 sm:h-4 text-[#319795]" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="w-3 h-3 sm:w-4 sm:h-4 text-[#339933]" /> },
        { name: "Express.js", icon: <SiExpress className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-3 h-3 sm:w-4 sm:h-4 text-[#47A248]" /> },
        { name: "MySQL", icon: <SiMysql className="w-3 h-3 sm:w-4 sm:h-4 text-[#4479A1]" /> },
        { name: "REST APIs", icon: <BsGrid1X2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6C37]" /> },
        { name: "Jest", icon: <SiJest className="w-3 h-3 sm:w-4 sm:h-4 text-[#C21325]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX Design",
      color: "text-purple-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-3 h-3 sm:w-4 sm:h-4 text-[#F24E1E]" /> },
        { name: "Responsive Design", icon: <Layout className="w-3 h-3 sm:w-4 sm:h-4 text-[#38B2AC]" /> },
        { name: "Wireframing", icon: <BsGrid1X2 className="w-3 h-3 sm:w-4 sm:h-4 text-[#9CA3AF]" /> },
        { name: "Prototyping", icon: <MdAnimation className="w-3 h-3 sm:w-4 sm:h-4 text-[#F59E0B]" /> },
        { name: "Adobe Illustrator", icon: <SiAdobeillustrator className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9A00]" /> },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="w-3 h-3 sm:w-4 sm:h-4 text-[#31A8FF]" /> },
        { name: "Adobe XD", icon: <SiAdobexd className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF61F6]" /> },
        { name: "Canva", icon: <SiCanva className="w-3 h-3 sm:w-4 sm:h-4 text-[#00C4CC]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "CI/CD", icon: <FcWorkflow className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { name: "Git", icon: <FaGitAlt className="w-3 h-3 sm:w-4 sm:h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-3 h-3 sm:w-4 sm:h-4 text-[#FCC624]" /> },
        { name: "GCP", icon: <SiGooglecloud className="w-3 h-3 sm:w-4 sm:h-4 text-[#4285F4]" /> },
        { name: "AWS", icon: <FaAws className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF9900]" /> },
        { name: "Docker", icon: <FaDocker className="w-3 h-3 sm:w-4 sm:h-4 text-[#2496ED]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & Technologies",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-3 h-3 sm:w-4 sm:h-4 text-[#007ACC]" /> },
        { name: "Vercel", icon: <SiVercel className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> },
        { name: "Vite", icon: <SiVite className="w-3 h-3 sm:w-4 sm:h-4 text-[#646CFF]" /> },
        { name: "ESLint", icon: <SiEslint className="w-3 h-3 sm:w-4 sm:h-4 text-[#4B32C3]" /> },
        { name: "Prettier", icon: <SiPrettier className="w-3 h-3 sm:w-4 sm:h-4 text-[#F7B93E]" /> },
        { name: "Postman", icon: <SiPostman className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF6C37]" /> },
        { name: "Jira", icon: <SiJira className="w-3 h-3 sm:w-4 sm:h-4 text-[#0052CC]" /> },
        { name: "Slack", icon: <SiSlack className="w-3 h-3 sm:w-4 sm:h-4 text-[#4A154B]" /> },
        { name: "Notion", icon: <SiNotion className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> },
        { name: "GitHub", icon: <SiGithub className="w-3 h-3 sm:w-4 sm:h-4 text-white" /> },
        { name: "GitLab", icon: <SiGitlab className="w-3 h-3 sm:w-4 sm:h-4 text-[#FC6D26]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Creative Skills",
      color: "text-yellow-400",
      skills: [
        { name: "UI Animation", icon: <MdAnimation className="w-3 h-3 sm:w-4 sm:h-4 text-[#FF4081]" /> },
        { name: "SVG Animation", icon: <SiGreensock className="w-3 h-3 sm:w-4 sm:h-4 text-[#28A745]" /> },
        { name: "3D Modeling", icon: <SiBlender className="w-3 h-3 sm:w-4 sm:h-4 text-[#F5792A]" /> },
        { name: "Motion Graphics", icon: <SiAdobeaftereffects className="w-3 h-3 sm:w-4 sm:h-4 text-[#9999FF]" /> },
        { name: "Prototyping", icon: <MdOutlineDesignServices className="w-3 h-3 sm:w-4 sm:h-4 text-[#F59E0B]" /> },
      ],
    },

  ];

  return (
    <main className="pt-16 sm:pt-20 lg:pt-24 text-white min-h-screen bg-[#04081A] relative overflow-hidden">
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Decorative background blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-green-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative z-10" aria-labelledby="skills-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <Cpu className="w-4 h-4 text-teal-400" />
              <span className="text-gray-300 text-sm font-medium">
                Technical Skills
              </span>
            </div>

            <h1 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">My Expertise</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
              A comprehensive overview of my technical skills, tools, and technologies I work with to bring ideas to life.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8 sm:mb-12" aria-hidden="true"></div>
          </header>

          {/* Icon Cloud */}
          <div className="flex justify-center items-center mb-8 sm:mb-12 lg:mb-16 animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
              <IconCloudDemo />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
                color={category.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;