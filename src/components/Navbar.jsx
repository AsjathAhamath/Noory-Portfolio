import React from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="page-container flex items-center justify-between py-3">
        <a
          href="#home"
          className="text-white text-lg font-bold gradient-text text-glow hover:scale-105 transition-transform duration-300 flex items-center gap-2"
        >
          {/* Logo Icon */}
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          Izzath Noory
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-200">
          <a
            href="#home"
            className="hover:text-white hover:text-portfolio-purple transition-colors duration-300 relative group flex items-center gap-1"
          >
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#about"
            className="hover:text-white hover:text-portfolio-purple transition-colors duration-300 relative group flex items-center gap-1"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#skills"
            className="hover:text-white hover:text-portfolio-purple transition-colors duration-300 relative group flex items-center gap-1"
          >
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
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            Skills
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#projects"
            className="hover:text-white hover:text-portfolio-purple transition-colors duration-300 relative group flex items-center gap-1"
          >
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
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            Projects
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-portfolio-purple group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
        <a
          href="#contact"
          className="ml-4 inline-flex items-center gap-2 btn-primary text-sm"
        >
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
