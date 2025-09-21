import React, { useState, useEffect } from "react";
import { Send, Phone, MapPin, Mail, CheckCircle, AlertCircle } from "lucide-react";

// Animated Grid Background (consistent with About component)
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
          aria-hidden="true"
        >
          <pattern
            id="contact-grid"
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
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
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
      <div className="absolute top-60 right-20 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-slow opacity-40 hidden sm:block"></div>
      <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-float opacity-50 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-2 h-2 bg-blue-300 rounded-full animate-float-slow opacity-30 hidden sm:block"></div>
      <div className="absolute bottom-32 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-float opacity-40 hidden sm:block"></div>
    </div>
  );
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Add CSS animations consistent with About component
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
      
      @keyframes pulse-ring {
        0% {
          transform: scale(0.33);
        }
        40%, 50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          transform: scale(1.2);
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
      
      .contact-card {
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .contact-card:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(96, 165, 250, 0.3);
        box-shadow: 0 20px 40px rgba(96, 165, 250, 0.1);
      }
      
      .form-input {
        backdrop-filter: blur(10px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
      }
      
      .form-input:focus {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(96, 165, 250, 0.5);
        box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
        outline: none;
      }
      
      .form-input.error {
        border-color: rgba(239, 68, 68, 0.5);
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #3B82F6, #8B5CF6);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      
      .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
      }
      
      .btn-primary:hover::before {
        left: 100%;
      }
      
      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
      }
      
      .btn-primary:active {
        transform: translateY(0);
      }
      
      .info-item {
        transition: all 0.3s ease;
      }
      
      .info-item:hover {
        transform: translateY(-2px);
      }
      
      .pulse-ring {
        animation: pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
      }

      /* Mobile optimizations */
      @media (max-width: 640px) {
        .gradient-text {
          font-size: 2rem !important;
          line-height: 1.2 !important;
        }
        
        .animate-fadeInLeft,
        .animate-fadeInRight {
          animation-name: fadeInUp !important;
        }
      }
      
      /* Performance optimizations */
      @media (prefers-reduced-motion: reduce) {
        .animate-float,
        .animate-float-slow,
        .animate-gridPulse,
        .animate-fadeInUp,
        .animate-fadeInLeft,
        .animate-fadeInRight,
        .pulse-ring {
          animation: none !important;
        }
        
        .contact-card:hover,
        .info-item:hover,
        .btn-primary:hover {
          transform: none;
        }
        
        .gradient-text {
          animation: none;
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

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    } else if (formData.subject.trim().length < 3) {
      tempErrors.subject = "Subject must be at least 3 characters";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus({ type: "error", message: "Please fix the errors below." });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const form = new FormData();
    form.append("access_key", "7876a775-ecb1-4843-a74c-2862313d87b7");
    form.append("name", formData.name.trim());
    form.append("email", formData.email.trim());
    form.append("subject", formData.subject.trim());
    form.append("message", formData.message.trim());
    form.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. I'll get back to you soon!"
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({
        type: "error",
        message: "Sorry, there was an error sending your message. Please try again or contact me directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
    // Clear status message when user starts typing
    if (status) {
      setStatus(null);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jainsuyash2003@gmail.com",
      color: "purple",
      href: "mailto:jainsuyash2003@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Maharashtra, India",
      color: "pink",
      href: null
    }
  ];

  return (
    <main className="pt-16 sm:pt-20 lg:pt-24 bg-[#04081A] text-white min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <AnimatedGrid />
      <FloatingParticles />

      {/* Decorative background blurs */}
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-500/3 rounded-full blur-3xl" aria-hidden="true"></div>

      <section className="py-8 sm:py-12 md:py-16 lg:py-20 relative z-10" aria-labelledby="contact-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <header className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fadeInUp opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400">
                <div className="w-2 h-2 rounded-full bg-blue-400 pulse-ring"></div>
              </div>
              <span className="text-gray-300 text-sm font-medium">Get In Touch</span>
            </div>

            <h1 id="contact-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text">Let's Work Together</span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or just want to connect? I'd love to hear from you.
              Drop me a message and let's create something amazing together!
            </p>

            <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" aria-hidden="true"></div>
          </header>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            {/* Contact Info */}
            <div className="space-y-8 sm:space-y-10 animate-fadeInLeft opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Let's Connect
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => {
                    const IconComponent = item.icon;
                    const content = (
                      <div className="info-item flex items-center space-x-4 p-4 sm:p-5 contact-card rounded-xl group">
                        <div className={`bg-${item.color}-500/10 p-3 sm:p-4 rounded-lg group-hover:bg-${item.color}-500/20 transition-colors`}>
                          <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 text-${item.color}-400`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm sm:text-base break-all">{item.value}</p>
                        </div>
                      </div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        className="block transition-transform hover:scale-[1.02]"
                        aria-label={`${item.title}: ${item.value}`}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Additional Info */}
              <div className="p-6 sm:p-8 contact-card rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Why Work With Me?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Quick response within 48 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Professional & collaborative approach</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Quality-focused development</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fadeInRight opacity-0" style={{ animationDelay: '0.6s' }}>
              <form onSubmit={handleSubmit} className="contact-card p-6 sm:p-8 rounded-2xl shadow-2xl" noValidate>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        className={`form-input w-full px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 ${errors.name ? "error" : ""
                          }`}
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={`form-input w-full px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 ${errors.email ? "error" : ""
                          }`}
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-sm mt-2 flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className={`form-input w-full px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 ${errors.subject ? "error" : ""
                        }`}
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      aria-invalid={errors.subject ? "true" : "false"}
                      aria-describedby={errors.subject ? "subject-error" : undefined}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project or just say hello!"
                      rows="5"
                      className={`form-input w-full px-4 py-3 sm:py-4 rounded-lg text-white placeholder-gray-400 resize-none ${errors.message ? "error" : ""
                        }`}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    ></textarea>
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-sm mt-2 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full py-3 sm:py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 text-white disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                    aria-describedby={status ? "form-status" : undefined}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Status Message */}
                {status && (
                  status.type === "success" ? (
                    <output
                      id="form-status"
                      className="mt-6 p-4 rounded-lg flex items-center gap-3 bg-green-500/10 border border-green-500/20 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm sm:text-base">{status.message}</p>
                    </output>
                  ) : (
                    <div
                      id="form-status"
                      className="mt-6 p-4 rounded-lg flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400"
                      role="alert"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm sm:text-base">{status.message}</p>
                    </div>
                  )
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}