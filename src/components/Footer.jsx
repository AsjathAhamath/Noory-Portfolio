import React from "react";

function Footer() {
  return (
    <footer className="border-t border-gray-800/50 backdrop-blur-sm bg-black/20">
      <div className="page-container py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <span className="text-center md:text-left flex items-center gap-2">
          <svg
            className="w-4 h-4 text-portfolio-purple"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
          </svg>
          © All Rights Reserved by Izzath Noory
        </span>
        <div className="mt-3 md:mt-0 flex items-center gap-2">
          <span>Built with</span>
          <svg
            className="w-4 h-4 text-red-500 animate-pulse"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span>using</span>
          <span className="gradient-text font-semibold">React + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
