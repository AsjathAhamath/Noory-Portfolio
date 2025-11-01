import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LiquidEther from "./components/LiquidEther";

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    name: ".NET",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "SQL Server",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Visual Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
  },
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack online shopping platform with React, Node.js, and MongoDB. Features cart, payments, and order tracking.",
    image: "https://placehold.co/600x360/6c5ce7/ffffff?text=E-Commerce",
    url: "https://github.com/izzathnoory/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description:
      "Project management tool with React and Tailwind. Drag-and-drop, real-time updates, team collaboration.",
    image: "https://placehold.co/600x360/a29bfe/ffffff?text=Task+Manager",
    url: "https://github.com/izzathnoory/task-dashboard",
  },
  {
    id: 3,
    title: "Weather Forecast App",
    description:
      "Real-time weather app using OpenWeather API. 7-day forecasts, location search, beautiful UI animations.",
    image: "https://placehold.co/600x360/74b9ff/ffffff?text=Weather+App",
    url: "https://github.com/izzathnoory/weather-app",
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media metrics. Built with React, Chart.js visualization, REST API integration.",
    image: "https://placehold.co/600x360/fd79a8/ffffff?text=Social+Dashboard",
    url: "https://github.com/izzathnoory/social-dashboard",
  },
  {
    id: 5,
    title: "Recipe Finder Application",
    description:
      "Discover and save recipes. Search by ingredients, dietary preferences, cuisine types. Spoonacular API.",
    image: "https://placehold.co/600x360/fdcb6e/ffffff?text=Recipe+Finder",
    url: "https://github.com/izzathnoory/recipe-finder",
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description:
      "Track workouts, calories, and progress. Built with React Native for iOS and Android. Firebase backend.",
    image: "https://placehold.co/600x360/55efc4/ffffff?text=Fitness+Tracker",
    url: "https://github.com/izzathnoory/fitness-tracker",
  },
];

function Hero() {
  const [textIndex, setTextIndex] = React.useState(0);
  const texts = [
    "Izzath Noory",
    "Full-Stack Web Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Specialist",
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Removed LiquidEther animated background */}
      <div className="page-container w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                Hello, I'm
              </h1>
              {/* Dynamic name and role text with typing animation */}
              <div className="h-16 md:h-20 lg:h-24 flex items-center justify-center md:justify-start">
                <h2
                  key={textIndex}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text text-glow typing-text"
                >
                  {texts[textIndex]}
                </h2>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Working remotely from Sri Lanka. Explore my projects and get in
              touch for collaborations.
            </p>

            <div className="flex gap-2 flex-wrap justify-center md:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 btn-primary"
              >
                <svg
                  className="w-5 h-5"
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
                My Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 btn-secondary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center md:justify-end items-center">
            <div className="relative group">
              {/* Glowing ring effect */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-portfolio-purple via-portfolio-lightPurple to-portfolio-accent blur-2xl opacity-60 group-hover:opacity-90 animate-pulse transition-opacity"></div>

              {/* Profile Image Box */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl border-4 border-portfolio-purple/50 group-hover:border-portfolio-purple transition-all duration-500 group-hover:scale-105 bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src="https://placehold.co/400x400/1f2937/ffffff?text=Izzath+Noory"
                  alt="Izzath Noory - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl"></div>

      <div className="page-container grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="text-center md:text-left space-y-4 lg:space-y-6">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <svg
              className="w-8 h-8 text-portfolio-purple"
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
            <h3 className="text-4xl md:text-5xl font-bold gradient-text text-glow">
              About me
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">
            Meet Izzath Noory, a skilled web developer with expertise in HTML,
            CSS, JavaScript, React and backend technologies. Passionate about
            building user-friendly, high-performance applications.
          </p>

          {/* Key highlights with icons */}
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-3 text-gray-300">
              <svg
                className="w-5 h-5 text-portfolio-purple flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Full-Stack Web Developer</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <svg
                className="w-5 h-5 text-portfolio-purple flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Based in Sri Lanka 🇱🇰</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <svg
                className="w-5 h-5 text-portfolio-purple flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span>High-Performance Solutions</span>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 btn-primary mt-4"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Contact Me
          </a>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <div className="relative group">
            {/* Animated border gradient */}
            <div className="absolute -inset-2 bg-gradient-to-r from-portfolio-purple via-portfolio-lightPurple to-portfolio-accent rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

            {/* Smaller card size for About image */}
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-2xl border-4 border-portfolio-purple/50 group-hover:border-portfolio-purple transition-all duration-500">
              <img
                src="https://placehold.co/500x500/2a2a2a/ffffff?text=About+Image"
                alt="About Izzath Noory"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl"></div>

      <div className="page-container relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
          <svg
            className="w-10 h-10 text-portfolio-purple"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 4l-4 16m-4-4l-4-4 4-4M18 8l4 4-4 4"
            />
          </svg>
          <h3 className="text-4xl md:text-5xl font-bold gradient-text text-glow text-center">
            Tools used to build projects
          </h3>
        </div>
        <div className="flex flex-col gap-8 items-center max-w-4xl mx-auto">
          {/* First row: 6 icons */}
          <div className="grid grid-cols-6 gap-8 w-full justify-items-center">
            {skills.slice(0, 6).map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-5 bg-gray-900/60 rounded-2xl flex flex-col items-center justify-center border border-gray-700/40 shadow-lg hover:shadow-portfolio-purple/40 hover:border-portfolio-purple transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-purple/20 to-portfolio-lightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.icon}
                  alt={skill.name + " icon"}
                  className="w-14 h-14 mb-2 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-gray-200 font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          {/* Second row: 5 icons, centered */}
          <div className="grid grid-cols-5 gap-8 w-5/6 justify-items-center">
            {skills.slice(6, 11).map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-5 bg-gray-900/60 rounded-2xl flex flex-col items-center justify-center border border-gray-700/40 shadow-lg hover:shadow-portfolio-purple/40 hover:border-portfolio-purple transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${(index + 6) * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-purple/20 to-portfolio-lightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.icon}
                  alt={skill.name + " icon"}
                  className="w-14 h-14 mb-2 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-gray-200 font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          {/* Third row: 3 icons, centered */}
          <div className="grid grid-cols-3 gap-8 w-1/2 justify-items-center">
            {skills.slice(11, 14).map((skill, index) => (
              <div
                key={skill.name}
                className="group relative p-5 bg-gray-900/60 rounded-2xl flex flex-col items-center justify-center border border-gray-700/40 shadow-lg hover:shadow-portfolio-purple/40 hover:border-portfolio-purple transition-all duration-300 hover:-translate-y-2 animate-float"
                style={{ animationDelay: `${(index + 11) * 0.1}s` }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-purple/20 to-portfolio-lightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src={skill.icon}
                  alt={skill.name + " icon"}
                  className="w-14 h-14 mb-2 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-gray-200 font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          {/* Fourth row: Figma centered */}
          <div className="flex justify-center w-full">
            <div
              key={skills[15].name}
              className="group relative p-5 bg-gray-900/60 rounded-2xl flex flex-col items-center justify-center border border-gray-700/40 shadow-lg hover:shadow-portfolio-purple/40 hover:border-portfolio-purple transition-all duration-300 hover:-translate-y-2 animate-float"
              style={{ animationDelay: `${15 * 0.1}s` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-portfolio-purple/20 to-portfolio-lightPurple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <img
                src={skills[15].icon}
                alt={skills[15].name + " icon"}
                className="w-14 h-14 mb-2 object-contain drop-shadow-lg"
                loading="lazy"
              />
              <span className="text-gray-200 font-semibold text-lg relative z-10 group-hover:text-white transition-colors duration-300">
                {skills[15].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const scrollContainerRef = React.useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollInterval;
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && scrollContainer) {
          scrollContainer.scrollLeft += 1;

          // Calculate the width of one set of projects (we have 3 sets total)
          const singleSetWidth = scrollContainer.scrollWidth / 3;

          // When scrolled past the first set, jump back by one set width
          // This creates seamless infinite scrolling: 1→2→3→4→5→6→1→2→3...
          if (scrollContainer.scrollLeft >= singleSetWidth) {
            scrollContainer.scrollLeft =
              scrollContainer.scrollLeft - singleSetWidth;
          }
        }
      }, 20);
    };

    startScrolling();

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isPaused]);

  const scroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Pause auto-scroll temporarily when button is clicked
    setIsPaused(true);

    const scrollAmount = 350; // Width of card + gap
    const targetScroll =
      direction === "left"
        ? scrollContainer.scrollLeft - scrollAmount
        : scrollContainer.scrollLeft + scrollAmount;

    scrollContainer.scrollTo({
      left: targetScroll,
      behavior: "smooth",
    });

    // Resume auto-scroll after 2 seconds
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };

  return (
    <section id="projects" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-lightPurple/10 rounded-full blur-3xl"></div>

      <div className="page-container relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
          <svg
            className="w-10 h-10 text-portfolio-purple"
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
          <h3 className="text-4xl md:text-5xl font-bold gradient-text text-glow text-center">
            Recent projects
          </h3>
        </div>

        {/* Carousel with navigation buttons */}
        <div className="relative">
          {/* Left Navigation Button */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-portfolio-purple/80 hover:bg-portfolio-purple text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-portfolio-purple/50 cursor-pointer active:scale-95"
            aria-label="Scroll left"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-portfolio-purple/80 hover:bg-portfolio-purple text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-portfolio-purple/50 cursor-pointer active:scale-95"
            aria-label="Scroll right"
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Auto-scrolling carousel container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Triple projects for seamless infinite loop */}
            {[...projects, ...projects, ...projects].map((project, index) => (
              <article
                key={`${project.id}-${index}`}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-md border border-gray-700/50 hover:border-portfolio-purple transition-all duration-300 card-hover flex-shrink-0 w-80"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-portfolio-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-portfolio-purple transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-portfolio-purple hover:text-portfolio-lightPurple transition-colors duration-300 font-semibold group/link"
                  >
                    Check Project
                    <svg
                      className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2"></p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12 lg:py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl"></div>

      <div className="page-container relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8 lg:mb-12">
          <svg
            className="w-8 h-8 text-portfolio-purple"
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
          <h3 className="text-4xl md:text-5xl font-bold gradient-text text-glow text-center">
            Contact Me
          </h3>
        </div>
        <div className="mx-auto bg-gray-900/50 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-gray-800/50 shadow-2xl w-full min-h-[28rem] max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="access_key"
              value="d442d4ab-d9c6-4a53-b729-7ca365a961fc"
            />

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
                <svg
                  className="w-4 h-4 text-portfolio-purple"
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
                Name
              </label>
              <input
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-portfolio-purple focus:ring-2 focus:ring-portfolio-purple/50 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
                <svg
                  className="w-4 h-4 text-portfolio-purple"
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
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-portfolio-purple focus:ring-2 focus:ring-portfolio-purple/50 transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-200 mb-2">
                <svg
                  className="w-4 h-4 text-portfolio-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-portfolio-purple focus:ring-2 focus:ring-portfolio-purple/50 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 btn-primary w-full md:w-auto px-8 py-3 text-lg font-semibold"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-portfolio-dark via-gray-900 to-gray-800 text-white">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
