import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const handleScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    {
      id: "education",
      icon: FaGraduationCap,
      text: "Education",
      path: "/education",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-gray-900/98 backdrop-blur-xl shadow-2xl shadow-black/20 md:bg-transparent md:backdrop-blur-none md:shadow-none'
          : 'bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none'
        }`}>
        <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
          <div className={`p-[2px] md:rounded-full bg-gradient-to-r from-emerald-400 via-cyan-500 to-indigo-500 animate-gradient-x transition-all duration-500 ${scrolled ? 'md:shadow-2xl md:shadow-cyan-500/20' : ''
            }`}>
            <nav className={`bg-gray-900/95 backdrop-blur-xl md:rounded-full px-4 md:px-6 py-2.5 transition-all duration-300 ${scrolled ? 'md:bg-gray-900/98' : 'md:bg-gray-900/90'
              }`}>
              {/* Mobile Menu Button */}
              <div className="flex justify-between items-center md:hidden px-2">
                <Link
                  to="/"
                  className="text-white font-bold text-lg bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent hover:from-cyan-500 hover:to-indigo-500 transition-all duration-300"
                >
                  Portfolio
                </Link>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`text-white p-2.5 rounded-lg transition-all duration-300 hover:bg-white/10 active:scale-95 ${isMenuOpen ? 'bg-white/15 rotate-90' : 'hover:rotate-12'
                    }`}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? (
                    <FaTimes className="text-lg" />
                  ) : (
                    <FaBars className="text-lg" />
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <div className={`${isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden md:block opacity-0 md:opacity-100 -translate-y-2 md:translate-y-0'
                } transition-all duration-300 ease-out`}>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-1 lg:gap-2 py-4 md:py-0">
                  {navLinks.map(({ id, icon: Icon, text, path }, index) => (
                    <Link
                      key={id}
                      to={path}
                      onClick={() => {
                        setActiveLink(id);
                        setIsMenuOpen(false);
                      }}
                      className={`group relative px-4 py-3 md:py-2 md:px-3 lg:px-4 rounded-xl md:rounded-full text-sm font-semibold
                        transition-all duration-300 flex items-center gap-3 md:gap-2
                        hover:bg-white/10 hover:scale-105 active:scale-95
                        ${activeLink === id
                          ? "bg-gradient-to-r from-white/20 to-white/10 text-white shadow-lg shadow-white/10 border border-white/20"
                          : "text-gray-300 hover:text-white border border-transparent hover:border-white/10"
                        }
                      `}
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {/* Active indicator */}
                      {activeLink === id && (
                        <div className="absolute inset-0 rounded-xl md:rounded-full bg-gradient-to-r from-emerald-400/20 via-cyan-500/20 to-indigo-500/20 animate-gradient-x" />
                      )}

                      {/* Icon with enhanced animations */}
                      <Icon
                        className={`relative z-10 text-base transition-all duration-300 ${activeLink === id
                            ? "scale-110 text-emerald-400 drop-shadow-lg"
                            : "group-hover:scale-110 group-hover:text-cyan-400"
                          }`}
                      />

                      {/* Text with gradient effect */}
                      <span className={`relative z-10 transition-all duration-300 ${activeLink === id
                          ? "bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent font-bold"
                          : "group-hover:text-white"
                        }`}>
                        {text}
                      </span>

                      {/* Hover glow effect */}
                      <div className="absolute inset-0 rounded-xl md:rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-emerald-400/10 via-cyan-500/10 to-indigo-500/10 blur-sm" />
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile menu backdrop */}
        {isMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10 transition-opacity duration-300"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </header>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(6, 182, 212, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(6, 182, 212, 0.6);
          }
        }
        
        @keyframes slide-in {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient-x {
          animation: gradient-x 4s linear infinite;
          background-size: 200% 200%;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Enhanced mobile menu animations */
        @media (max-width: 768px) {
          .nav-link-enter {
            animation: slide-in 0.3s ease-out forwards;
          }
        }
        
        /* Glassmorphism enhancements */
        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
        }
        
        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .animate-gradient-x,
          .animate-pulse-glow {
            animation: none !important;
          }
          
          * {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
        
        /* Enhanced focus states for accessibility */
        .group:focus-visible {
          outline: 2px solid #06b6d4;
          outline-offset: 2px;
        }
        
        /* Smooth scrollbar for mobile menu */
        @media (max-width: 768px) {
          .overflow-y-auto::-webkit-scrollbar {
            width: 4px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.1);
            border-radius: 2px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: rgba(6, 182, 212, 0.5);
            border-radius: 2px;
          }
          
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: rgba(6, 182, 212, 0.8);
          }
        }
        
        /* Custom mobile menu slide animation */
        @keyframes mobile-menu-slide {
          0% {
            opacity: 0;
            transform: translateY(-20px);
            backdrop-filter: blur(0px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            backdrop-filter: blur(24px);
          }
        }
        
        /* Enhanced gradient border animation */
        @keyframes enhanced-gradient {
          0%, 100% {
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            background-position: 50% 0%;
            filter: hue-rotate(90deg) brightness(1.1);
          }
          50% {
            background-position: 100% 50%;
            filter: hue-rotate(180deg) brightness(1.2);
          }
          75% {
            background-position: 50% 100%;
            filter: hue-rotate(270deg) brightness(1.1);
          }
        }
        
        .animate-enhanced-gradient {
          animation: enhanced-gradient 6s ease-in-out infinite;
          background-size: 300% 300%;
        }
        
        /* Mobile touch improvements */
        @media (max-width: 768px) {
          .group {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          
          .group:active {
            transform: scale(0.98);
          }
        }
        
        /* Enhanced active state */
        .nav-active {
          position: relative;
        }
        
        .nav-active::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(45deg, #10b981, #06b6d4, #6366f1);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: subtract;
          -webkit-mask-composite: xor;
          animation: gradient-x 3s linear infinite;
        }
        
        /* Improved hover effects */
        .group:hover .hover-glow {
          opacity: 1;
          transform: scale(1.05);
        }
        
        .hover-glow {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: scale(0.95);
        }
      `}</style>
    </>
  );
}