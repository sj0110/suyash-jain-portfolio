import React, { useEffect } from "react";
import {
  Code2,
  Layers,
  Network,
  GraduationCap,
  BriefcaseBusiness
} from "lucide-react";


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
            id="experience-grid"
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
          <rect width="100%" height="100%" fill="url(#experience-grid)" />
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
      <div className="absolute top-80 right-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-float-slow opacity-40 hidden sm:block"></div>
      <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-50 hidden sm:block"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-blue-300 rounded-full animate-float-slow opacity-30 hidden sm:block"></div>
      <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-float opacity-40 hidden sm:block"></div>
    </div>
  );
};

const ExperienceCard = ({ title, company, period, description, icon: Icon, index }) => (
  <div
    className="animate-fadeInUp opacity-0 h-full"
    style={{ animationDelay: `${0.3 + index * 0.15}s` }}
  >
    <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 h-full">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 backdrop-blur-sm bg-gray-900/50 rounded-xl border border-gray-700/50" />

      {/* Animated gradient border */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 sm:p-6 md:p-8 h-full border border-gray-800/50 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
        {/* Icon with enhanced mobile sizing */}
        <div className="relative mb-4 sm:mb-6">
          <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-25 rounded-full blur-xl group-hover:opacity-75 transition-all duration-500" />
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Content with improved mobile typography */}
        <div className="space-y-3 sm:space-y-4">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            {title}
          </h3>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-gray-300">
            <span className="font-semibold text-blue-400 text-sm sm:text-base">{company}</span>
            <span className="text-xs sm:text-sm font-mono bg-blue-500/10 px-2 sm:px-3 py-1 rounded-full w-fit">
              {period}
            </span>
          </div>

          <div className="text-gray-300 border-l-4 border-blue-500/50 pl-3 sm:pl-4 mt-3 sm:mt-4 leading-relaxed">
            {description.split('\n').map((line, lineIndex) => (
              <p key={lineIndex} className="text-xs sm:text-sm md:text-base mb-2 last:mb-0">
                {line.trim()}
              </p>
            ))}
          </div>
        </div>

        {/* Decorative elements - responsive */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
          <div className="absolute top-0 right-0 w-4 sm:w-5 md:w-6 h-[1px] sm:h-[2px] bg-cyan-500/50" />
          <div className="absolute top-0 right-0 w-[1px] sm:w-[2px] h-4 sm:h-5 md:h-6 bg-cyan-500/50" />
        </div>
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20">
          <div className="absolute bottom-0 left-0 w-4 sm:w-5 md:w-6 h-[1px] sm:h-[2px] bg-purple-500/50" />
          <div className="absolute bottom-0 left-0 w-[1px] sm:w-[2px] h-4 sm:h-5 md:h-6 bg-purple-500/50" />
        </div>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
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
      
      .animate-gridPulse {
        animation: gridPulse 4s ease-in-out infinite;
      }
      
      .gradient-text {
        background: linear-gradient(135deg, #60A5FA, #34D399, #A78BFA);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 3s ease-in-out infinite alternate;
      }

      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        .animate-float,
        .animate-float-slow,
        .animate-gridPulse,
        .animate-fadeInUp {
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
          font-size: 2rem !important;
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

  const experiences = [
    {
      icon: Network,
      title: "Software Engineer",
      company: "Searce Inc.",
      period: "2024 - Ongoing",
      description: `• Resolved 13+ critical bugs in a large-scale FSM platform for a leading telecom client, improving reliability for 2,400+ technicians.

• Authored and maintained Swagger documentation for 90+ RESTful APIs, streamlining backend integrations.

• Boosted Jest test coverage for FSM microservices from 34% → 80%+, strengthening code quality and reducing regressions.

• Led Next.js development & Technical SEO for a Strapi CMS site, delivered in 1.5 months, improving search rankings and performance.

• Collaborated with QA and DevOps teams, implementing CI/CD pipelines on Google Cloud Run for faster deployments.`
    },
    {
      icon: Layers,
      title: "Software Engineering Intern",
      company: "SimPhy Softwares",
      period: "May 2023 - June 2023",
      description: `• Automated email workflows by creating reusable HTML templates integrated into the deployment pipeline.

• Enhanced multiple webpage components, improving load efficiency and maintainability.

• Built initialization screens with resource preloading, ensuring stable and optimized startup for simulation product.`
    },
    {
      icon: Code2,
      title: "Summer Research Intern",
      company: "IIIT Vadodara",
      period: "May 2023 - June 2023",
      description: `• Led a Sentiment Analysis research project at IIIT Vadodara, comparing VADER, Electra, and RoBERTa on the Amazon Fine Food Reviews dataset. RoBERTa outperformed the rest!

• Grateful to Dr. Sunandita Debnath for mentorship.`
    },
  ];

  return (
    <main className="pt-16 sm:pt-20 lg:pt-24 bg-[#04081A] text-white min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Decorative background blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-cyan-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-blue-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative z-10" aria-labelledby="experience-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
            {/* Welcome badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <BriefcaseBusiness className="w-4 h-4 text-teal-400" />
              <span className="text-gray-300 text-sm font-medium">
                Professional Journey
              </span>
            </div>

            <h1 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Work Experience</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development, from research internships to full-time engineering roles.
            </p>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" aria-hidden="true"></div>
          </header>

          {/* Experience grid with improved responsive layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ExperienceSection;