import { useEffect } from 'react';
import HeroImg from "@/assets/images/hero.png";
import Quote from "./Quote.jsx";

// Animated Grid Background similar to Hero
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
            id="about-grid"
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
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>
    </div>
  );
};

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-60 hidden sm:block"></div>
      <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400 rounded-full animate-float-slow opacity-40 hidden sm:block"></div>
      <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-50 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-blue-300 rounded-full animate-float-slow opacity-30 hidden sm:block"></div>
      <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-float opacity-40 hidden sm:block"></div>
    </div>
  );
};

export default function About() {
  useEffect(() => {
    // Add CSS animations
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
      
      @keyframes fadeInLeft {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      
      @keyframes shimmer {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
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
      
      .animate-fadeInLeft {
        animation: fadeInLeft 0.8s ease-out forwards;
      }
      
      .animate-fadeInRight {
        animation: fadeInRight 0.8s ease-out forwards;
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
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      
      .skill-card {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .skill-card:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(96, 165, 250, 0.3);
        box-shadow: 0 10px 20px rgba(96, 165, 250, 0.1);
      }
      
      .img-container {
        position: relative;
        overflow: hidden;
      }
      
      .img-container::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(45deg, transparent, rgba(96, 165, 250, 0.1), transparent);
        transform: rotate(45deg);
        transition: all 0.6s ease;
        z-index: 1;
        opacity: 0;
      }
      
      .img-container:hover::before {
        opacity: 1;
        animation: shimmer 1.5s ease-in-out;
      }

      /* Improved mobile styles */
      @media (max-width: 640px) {
        .gradient-text {
          font-size: 1.75rem !important;
          line-height: 1.2 !important;
          text-align: center;
        }
        
        .skill-card {
          padding: 0.75rem !important;
        }
        
        .animate-fadeInLeft,
        .animate-fadeInRight {
          animation-name: fadeInUp !important;
        }
      }
      
      @media (max-width: 768px) {
        .gradient-text {
          font-size: 2rem !important;
          line-height: 1.3 !important;
        }
      }
      
      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        .animate-float,
        .animate-float-slow,
        .animate-gridPulse,
        .animate-fadeInUp,
        .animate-fadeInLeft,
        .animate-fadeInRight {
          animation: none !important;
        }
        
        .skill-card:hover {
          transform: none;
        }
        
        .img-container:hover::before {
          animation: none;
        }
        
        .gradient-text {
          animation: none;
        }
      }
      
      /* High contrast mode support */
      @media (prefers-contrast: high) {
        .skill-card {
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .gradient-text {
          -webkit-text-fill-color: #60A5FA;
          color: #60A5FA;
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

  const skillsData = [
    {
      category: "Frontend",
      skills: "React.js, Next.js, TypeScript, JavaScript, Tailwind, Figma",
      icon: "fas fa-palette",
      color: "blue"
    },
    {
      category: "Backend",
      skills: "Express.js, REST APIs, MongoDB, MySQL, Swagger, Jest",
      icon: "fas fa-server",
      color: "green"
    },
    {
      category: "Cloud & Tools",
      skills: "Google Cloud Platform, GitHub, Grafana, Postman, Figma",
      icon: "fas fa-cloud",
      color: "purple"
    }
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:pt-32 text-white bg-[#04081A] relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Decorative background blurs */}
      <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="mx-auto max-w-7xl space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Badge */}
        <header className="animate-fadeInUp opacity-0 text-center sm:text-left" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center justify-center sm:justify-start gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-4 md:mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" aria-hidden="true"></div>
            <span className="text-gray-300 text-sm font-medium">About Me</span>
          </div>

          <h2
            id="about-heading"
            className="relative z-10 max-w-5xl mx-auto sm:mx-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
          >
            <span className="gradient-text">Software Engineer | Full Stack Dev | UI/UX</span>
          </h2>

          {/* Decorative line */}
          <div className="mt-4 md:mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" aria-hidden="true"></div>
        </header>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Image Section */}
          <div>
            <div className="relative animate-fadeInLeft opacity-0 order-0 lg:order-1" style={{ animationDelay: '0.4s' }}>
              <div className="bg-gradient-to-b relative rounded-2xl p-0.5 from-blue-500/30 via-blue-500/20 to-purple-500/30">
                <div className="img-container rounded-[15px] overflow-hidden bg-gray-900">
                  <img
                    src={HeroImg}
                    className="rounded-[15px] shadow-2xl block w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                    alt="Suyash Jain - Software Engineer and Full Stack Developer"
                    loading="lazy"
                    width="600"
                    height="400"
                  />
                </div>

                {/* Floating tech badges around image - hidden on mobile and tablet */}
                <div className="hidden xl:block absolute -top-4 -right-4 animate-float" aria-hidden="true">
                  <div className="skill-card px-3 py-2 rounded-lg">
                    <span className="text-blue-400 text-sm font-medium">
                      <i className="fab fa-react mr-2" aria-hidden="true"></i>React
                    </span>
                  </div>
                </div>

                <div className="hidden xl:block absolute -bottom-4 -left-4 animate-float-slow" aria-hidden="true">
                  <div className="skill-card px-3 py-2 rounded-lg">
                    <span className="text-green-400 text-sm font-medium">
                      <i className="fab fa-node-js mr-2" aria-hidden="true"></i>Node.js
                    </span>
                  </div>
                </div>
              </div>
              {/* Quote section - desktop positioning */}
            </div>
            <div className="hidden lg:block lg:mt-10">
              <Quote />
            </div>
          </div>

          {/* Content Section */}
          <div className="relative space-y-6 sm:space-y-8 text-gray-200 leading-relaxed order-1 lg:order-2 animate-fadeInRight opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Hello! I'm a <span className="font-semibold text-blue-400 bg-blue-500/10 px-2 py-1 rounded whitespace-nowrap">Software Engineer & Full Stack Developer</span> with hands-on experience in building scalable web apps, RESTful APIs, and delivering end-to-end features across frontend & backend.
              </p>

              <div className="relative p-4 sm:p-5 md:p-6 rounded-xl bg-gradient-to-r from-gray-800/30 to-gray-700/20 border border-gray-700/30 backdrop-blur-sm">
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-bold text-blue-400">At Searce Inc.</span>, I developed Reports Microservice and resolved critical bugs for a large-scale FSM platform, streamlined workflows for 2,400+ technicians, boosted Jest coverage from <span className="text-red-400 font-medium">34%</span> → <span className="text-green-400 font-medium">80%</span>, and authored Swagger docs for 90+ services—enhancing integration efficiency. I also led <span className="font-semibold text-blue-400">Next.js + Technical SEO</span> development, delivering a Strapi CMS project within 1.5 months.
                </p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-white flex items-center gap-2">
                  <i className="fas fa-rocket text-blue-400" /> My projects highlight my abilities to:
                </p>
                <ul className="space-y-2 ml-4 md:ml-6">
                  {[
                    "Build MERN / Next.js apps with RBAC, JWT & CI/CD pipelines.",
                    "Optimise performance with SSR, SSG, ISR & CDN caching (60% faster).",
                    "Craft intuitive UIs with React, TypeScript, Tailwind & Framer Motion.",
                    "Work with MongoDB, MySQL, GCP & API integrations."
                  ].map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 group text-sm md:text-base cursor-pointer"
                    >
                      {/* Bullet */}
                      <div className="mt-2 w-2 h-2 rounded-full bg-blue-400 transition-colors duration-300 group-hover:bg-[#0064ff] flex-shrink-0"></div>
                      {/* Text */}
                      <span className="transition-colors duration-300 group-hover:text-[#0064ff]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Skills Section */}
              <div className="space-y-4 sm:space-y-5">
                <p className="font-semibold text-white flex items-center gap-2 text-sm sm:text-base">
                  <i className="fas fa-code text-blue-400" aria-hidden="true" />
                  <span>My strengths:</span>
                </p>

                <div className="grid gap-3 sm:gap-4">
                  {skillsData.map((skill) => (
                    <div key={skill.category} className="skill-card p-3 sm:p-4 rounded-lg group">
                      <div className="flex items-start gap-3">
                        <div
                          className={`mt-1 w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-${skill.color}-500/20 flex items-center justify-center group-hover:bg-${skill.color}-500/30 transition-colors flex-shrink-0`}
                          aria-hidden="true"
                        >
                          <i className={`${skill.icon} text-${skill.color}-400 text-xs sm:text-sm`}></i>
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className={`font-semibold text-${skill.color}-400 block mb-1 text-sm sm:text-base`}>
                            {skill.category}:
                          </span>
                          <span className="text-gray-300 group-hover:text-white transition-colors text-xs sm:text-sm leading-relaxed break-words">
                            {skill.skills}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quote section - mobile positioning */}
            <div className="mt-6 sm:mt-8 lg:hidden">
              <Quote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}