import { ReactLenis } from "lenis/react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Animated Grid Background (consistent with other components)
const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-5 z-0">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <pattern
            id="projects-grid"
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
          <rect width="100%" height="100%" fill="url(#projects-grid)" />
        </svg>
      </div>
    </div>
  );
};

// Floating Particles
const FloatingParticles = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className="absolute top-32 left-10 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-40 hidden lg:block"></div>
      <div className="absolute top-80 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-slow opacity-30 hidden lg:block"></div>
      <div className="absolute bottom-60 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-35 hidden lg:block"></div>
      <div className="absolute top-1/2 right-16 w-2 h-2 bg-green-300 rounded-full animate-float-slow opacity-25 hidden lg:block"></div>
      <div className="absolute bottom-40 right-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-float opacity-30 hidden lg:block"></div>
    </div>
  );
};

const projects = [
  {
    title: "AI Maturity Tracker – Intent-Based Quiz App",
    description: "Designed an AI-driven quiz app with intent-based question flow, classifying users into 4 maturity levels. Built RESTful APIs with Google Apps Script for persistence and retrieval of quiz data. Integrated React Router + Context API for modular navigation and centralized state management.",
    src: "quiz.png",
    link: "https://i.postimg.cc/nznjShY8/quiz.png",
    color: "#0064FF",
    category: "Quiz Platform",
    tech: ["ReactJS", "ExpressJS", "Google Apps Script", "React Router DOM"],
    githubLink: "https://github.com/sj0110/quiz-app",
    liveLink: "https://sj0110.github.io/quiz-app",
    featured: true
  },
  {
    title: "Startup Idea Hub – Idea Suggestion Platform",
    description: "Developed an online code editor using React and Tailwind CSS. Added real-time code execution, syntax highlighting, and multi-language support. Designed a sleek UI for instant code prototyping and idea generation.",
    src: "idea.png",
    link: "https://i.postimg.cc/rwFf35cj/idea.png",
    color: "#EE2A6A",
    category: "Collaboration Platform",
    tech: ["NextJS", "ExpressJS", "ShadCN UI", "Sanity CMS"],
    githubLink: "https://github.com/sj0110/startup-idea-website",
    liveLink: "https://startup-idea-website.vercel.app",
    featured: true
  },
  {
    title: "Service Booking & Management (FSM) Platform",
    description: "Architected a scalable booking platform with secure role-based access control for customers, providers, and admins. Implemented REST APIs with authentication, rate limiting, and integrated MongoDB for storage. Built an analytics-enabled admin panel (React / Next.js), and CI/CD pipelines on Google Cloud Run.",
    src: "fsm.png",
    link: "https://i.postimg.cc/jjb4KKQc/image.png",
    color: "#D6E8FE",
    category: "Enterprise Platform",
    tech: ["NextJS", "ExpressJS", "MongoDB", "GitHub Actions", "CI/CD", "Google Cloud"],
    githubLink: "https://github.com/seraprogrammer/portfolio",
    liveLink: "https://www.figma.com/design/WkSYtUgW9lSYLdXoPxMIOj/FSM-Mini-Project?node-id=0-1&t=BEjYNcOYGRFWhBm6-1",
    featured: true
  },
  {
    title: "URL Shortener",
    description: "Built a simple URL shortening microservice. Supports generation of short links, redirection, and link analytics.",
    src: "proj.png",
    link: "https://i.postimg.cc/rwYh5zWp/image.png",
    color: "#4B8BBE",
    category: "Microservice",
    tech: ["Node.js", "MongoDB"],
    githubLink: "https://github.com/sj0110/url-shortner"
  },
  {
    title: "PassOp – Password Manager",
    description: "Developed a secure password manager for storing user credentials. Implemented encryption at rest and secure authentication workflows.",
    src: "proj.png",
    link: "https://cdn.pixabay.com/photo/2017/03/05/08/57/privacy-policy-2117996_1280.jpg",
    color: "#FF5722",
    category: "Security Tool",
    tech: ["Encryption", "Authentication"],
    githubLink: "https://github.com/sj0110/passop-password-manager"
  },
  {
    title: "Map Testimonials – LI Team",
    description: "Displayed client testimonials on a Google Map with advanced custom markers. Enhanced UX with clustering / marker filtering and responsive map interactions.",
    src: "proj.png",
    link: "https://i.postimg.cc/ZRfFzMc5/image.png",
    color: "#4CAF50",
    category: "Interactive Map",
    tech: ["Google Maps API", "JavaScript"],
    githubLink: "https://github.com/sj0110/map-testimonials-li-team"
  },
  {
    title: "UTM-Tracker URL Builder (Searce Inc.)",
    description: "Created a utility tool for generating UTM-tagged URLs for campaign tracking. Ensured consistency and validation of input parameters to avoid tracking errors.",
    src: "proj.png",
    link: "https://i.postimg.cc/rwYh5zWp/image.png",
    color: "#FF9800",
    category: "Marketing Tool",
    tech: ["JavaScript", "URL Processing"],
    githubLink: "https://github.com/sj0110/Spotify-Music-Player",
    liveLink: "https://converter-github-io-orpin.vercel.app"
  },
  {
    title: "Spotifi – Responsive Music Player",
    description: "Built a MERN stack music player with play, pause, mute, unmute, next/previous track functionalities. Designed responsive UI; optimized media controls for smooth user experience.",
    src: "proj.png",
    link: "https://www.shutterstock.com/image-vector/vision-ideas-creative-project-selection-600nw-2000850218.jpg",
    color: "#1DB954",
    category: "Media Player",
    tech: ["MERN Stack"],
    githubLink: "https://github.com/sj0110/Spotify-Music-Player"
  },
  {
    title: "Ratify – Local Business Review Platform",
    description: "Developed a platform for users to post and read reviews of local businesses. Implemented features such as ratings, search, and review moderation.",
    src: "proj.png",
    link: "https://www.shutterstock.com/image-vector/vision-ideas-creative-project-selection-600nw-2000850218.jpg",
    color: "#FACF30",
    category: "Review Platform",
    tech: ["Full-Stack", "Rating System"],
    githubLink: "https://github.com/sj0110/local-biz"
  },
  {
    title: "ToDo App – Backend",
    description: "Showcased backend implementation in Node.js. Built REST endpoints for CRUD operations on tasks, along with error handling and validation.",
    src: "proj.png",
    link: "https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_1280.jpg",
    color: "#795548",
    category: "Backend API",
    tech: ["Node.js", "REST API"],
    githubLink: "https://github.com/sj0110/backendTodoApp-NodeJS"
  },
  {
    title: "Currency Converter (USD ↔ INR)",
    description: "Developed a mobile app using Flutter for converting USD to INR and vice versa. Implemented a clean UI with input validation for exchange rates.",
    src: "converter.png",
    link: "https://i.postimg.cc/Qd1c6tKm/image.png",
    color: "#69C79D",
    category: "Mobile App",
    tech: ["Flutter"],
    githubLink: "https://github.com/sj0110/converter.github.io",
    liveLink: "https://converter-github-io-orpin.vercel.app"
  },
  {
    title: "Twitter UI Clone",
    description: "Cloned Twitter's frontend layout using HTML and Tailwind CSS. Responsive design adapting to mobile, tablet, and desktop views.",
    src: "proj.png",
    link: "https://i.postimg.cc/rmqtmNmR/image.png",
    color: "#1DA1F2",
    category: "UI Clone",
    tech: ["HTML", "Tailwind CSS"],
    githubLink: "https://github.com/sj0110/Twitter-UI-Clone",
    liveLink: "https://sj0110.github.io/Twitter-UI-Clone"
  },
  {
    title: "Netflix Clone",
    description: "Recreated Netflix's landing page using HTML and CSS. Focused on layout fidelity and responsive design for cross-device compatibility.",
    src: "proj.png",
    link: "https://i.postimg.cc/Y2WhHP8D/image.png",
    color: "#E50914",
    category: "UI Clone",
    tech: ["HTML", "CSS"],
    githubLink: "https://github.com/sj0110/Netflix-Clone",
    liveLink: "https://sj0110.github.io/Netflix-Clone/"
  }
];

// Filter buttons data
const filterCategories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category)))
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

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
      
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.2), 0 0 50px rgba(59, 130, 246, 0.1);
        }
        50% { 
          box-shadow: 0 0 35px rgba(59, 130, 246, 0.4), 0 0 70px rgba(59, 130, 246, 0.2);
        }
      }
      
      @keyframes cardFloat {
        0%, 100% { 
          transform: translateY(0px) scale(1);
        }
        50% { 
          transform: translateY(-10px) scale(1.02);
        }
      }
      
      @keyframes borderGlow {
        0%, 100% { 
          border-color: rgba(107, 114, 128, 0.3);
        }
        50% { 
          border-color: rgba(59, 130, 246, 0.5);
        }
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
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }

      .masonry-grid {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
      }

      @media (min-width: 640px) {
        .masonry-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }
      }

      @media (min-width: 1024px) {
        .masonry-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
      }

      .masonry-item {
        display: flex;
        flex-direction: column;
        justify-content: space-between; /* ensures buttons stick to bottom */
        height: 100%; /* stretch to equal height within row */
      }

      .featured-card {
        animation: pulse-glow 4s ease-in-out infinite;
        position: relative;
      }
      
      .featured-card::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        background: linear-gradient(45deg, #60A5FA, #34D399, #A78BFA, #60A5FA);
        background-size: 300% 300%;
        border-radius: 12px;
        z-index: -1;
        animation: gradientShift 3s ease infinite;
        opacity: 0.6;
      }

      .project-card {
        backdrop-filter: blur(20px);
        background: rgba(17, 24, 39, 0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 1px solid rgba(107, 114, 128, 0.2);
        display: flex;
        flex-direction: column;
        border-radius: 12px; /* slightly less than 2xl for your screenshots */
        overflow: hidden;
        height: 100%;
      }
        
      .project-card img {
        width: 100%;
        aspect-ratio: 16/9; /* ensures consistent image heights */
        object-fit: cover;
      }

      .project-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }   
      .project-card:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        border-color: rgba(59, 130, 246, 0.3);
        background: rgba(31, 41, 55, 0.9);
      }

      .image-overlay {
        background: linear-gradient(
          135deg, 
          rgba(0, 0, 0, 0.8) 0%, 
          rgba(0, 0, 0, 0.4) 50%, 
          transparent 100%
        );
      }

      .tech-badge {
        background: linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(107, 114, 128, 0.2);
        transition: all 0.3s ease;
      }

      .tech-badge:hover {
        border-color: rgba(59, 130, 246, 0.4);
        transform: translateY(-1px);
      }

      .action-button {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
      }

      .action-button::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: left 0.5s ease;
      }

      .action-button:hover::before {
        left: 100%;
      }

      .filter-button-active {
        background: linear-gradient(135deg, #3B82F6, #1D4ED8);
        box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
      }

      .category-badge {
        backdrop-filter: blur(10px);
        background: linear-gradient(135deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9));
      }

      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        .animate-float,
        .animate-float-slow,
        .animate-gridPulse,
        .animate-fadeInUp,
        .featured-card,
        .project-card {
          animation: none !important;
        }
        
        .gradient-text {
          animation: none;
        }
        
        .project-card:hover {
          transform: none;
        }
      }

      /* Mobile optimizations */
      @media (max-width: 640px) {
        .project-card {
          // margin-bottom: 1rem;
        }
        
        .project-card:hover {
          transform: translateY(-4px) scale(1.01);
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

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <ReactLenis root>
      <main className="pt-16 sm:pt-20 lg:pt-24 bg-[#04081A] text-white min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <AnimatedGrid />
        <FloatingParticles />

        {/* Decorative background blurs */}
        <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

        <section
          className="py-8 sm:py-12 md:py-16 lg:py-20 relative z-10"
          aria-labelledby="projects-heading"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section header */}
            <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp opacity-0" style={{ animationDelay: '0.1s' }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm font-medium">Featured Projects</span>
              </div>

              <h1
                id="projects-heading"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              >
                <span className="gradient-text">My Work</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                A collection of projects showcasing my expertise in full-stack development,
                UI/UX design, and modern web technologies.
              </p>

              <div
                className="mt-6 h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
                aria-hidden="true"
              ></div>
            </header>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
              {filterCategories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 backdrop-blur-md border ${activeFilter === category
                    ? 'filter-button-active text-white border-blue-500/50'
                    : 'bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 border-gray-700/40 hover:border-gray-600/50 hover:text-white'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="masonry-grid">
              {filteredProjects.map((project, i) => (
                <ProjectCard
                  key={`${project.title}_${i}`}
                  project={project}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </ReactLenis>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isMobile = window.innerWidth < 640;
  const isInView = useInView(ref, { once: true, amount: isMobile ? 0 : 0.2 });

  return (
    <motion.div
      ref={ref}
      className={`masonry-item ${project.featured ? 'featured-card' : ''}`}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{
        duration: 0.7,
        delay: isMobile ? 0 : (index % 3) * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      <div className="group project-card rounded-2xl overflow-hidden">
        {/* Image section */}
        <div className="relative overflow-hidden">
          <motion.img
            src={project.link}
            alt={project.title}
            className="w-full h-48 sm:h-52 lg:h-56 object-cover"
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.15 }}
            animate={isInView ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 0.8 }}
            loading="lazy"
          />

          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 image-overlay"></div>

          {/* Colored overlay on hover */}
          <motion.div
            className="absolute inset-0 mix-blend-overlay"
            style={{ background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)` }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.4 }}
          />

          {/* Enhanced project badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <motion.div
              className="bg-black/80 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider border border-gray-600/30"
              whileHover={{ scale: 1.05 }}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>
          </div>
          <div className="absolute bottom-5 left-4">
            {project.featured && (
              <motion.div
                className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold tracking-wider shadow-lg"
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: ["0 0 0 0 rgba(168, 85, 247, 0.4)", "0 0 0 8px rgba(168, 85, 247, 0)", "0 0 0 0 rgba(168, 85, 247, 0)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⭐ Featured
              </motion.div>
            )}
          </div>

          {/* Enhanced category badge */}
          <div className="absolute top-4 right-4">
            <motion.div
              className="category-badge px-3 py-1.5 rounded-full text-xs font-semibold text-white border shadow-lg"
              style={{
                borderColor: `${project.color}60`,
                background: `linear-gradient(135deg, ${project.color}20, ${project.color}40)`
              }}
              whileHover={{ scale: 1.05 }}
            >
              {project.category}
            </motion.div>
          </div>

          {/* Enhanced quick action buttons */}
          <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button p-3 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-black/90 transition-all duration-300 border border-gray-600/30"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="View source code"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </motion.a>

            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button p-3 bg-black/80 backdrop-blur-md rounded-full text-white hover:bg-black/90 transition-all duration-300 border border-gray-600/30"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="View live demo"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </motion.a>
            )}
          </div>
        </div>

        {/* Enhanced content section */}
        <div className="p-6 sm:p-7">
          <div className="flex items-center gap-3 mb-5">
            <motion.div
              className="w-3 h-3 rounded-full flex-shrink-0 shadow-lg"
              style={{ backgroundColor: project.color }}
              animate={{
                boxShadow: [`0 0 0 0 ${project.color}40`, `0 0 0 6px ${project.color}20`, `0 0 0 0 ${project.color}40`]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-600 via-gray-500 to-transparent" />
          </div>

          <motion.h3
            className="text-lg sm:text-xl font-bold text-white leading-tight mb-4 group-hover:text-blue-300 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {project.title}
          </motion.h3>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5 line-clamp-4 group-hover:text-gray-200 transition-colors duration-300">
            {project.description}
          </p>

          {/* Enhanced tech stack */}
          {project.tech && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((technology, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="tech-badge px-3 py-1.5 text-xs font-semibold rounded-lg text-gray-300 hover:text-white shadow-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: techIndex * 0.1 + 0.5 }}
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          )}

          {/* Enhanced action buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="action-button flex items-center gap-2 text-sm font-semibold hover:underline transition-all duration-300"
              style={{ color: project.color }}
              whileHover={{ x: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
              <span>Source Code</span>
            </motion.a>

            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button flex items-center gap-2 text-sm font-semibold hover:underline transition-all duration-300"
                style={{ color: project.color }}
                whileHover={{ x: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span>Live Demo</span>
              </motion.a>
            )}
          </div>

          {/* Project stats or additional info */}
          <div className="mt-6 pt-4 border-t border-gray-700/30">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span>Active Project</span>
              </div>
              {project.featured && (
                <div className="flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-yellow-400 font-medium">Highlighted</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// PropTypes validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    category: PropTypes.string,
    tech: PropTypes.arrayOf(PropTypes.string),
    githubLink: PropTypes.string.isRequired,
    liveLink: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired,
  index: PropTypes.number.isRequired
};