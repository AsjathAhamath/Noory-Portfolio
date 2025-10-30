import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "Tailwind",
  "React",
  "Node.js",
];

const projects = [
  {
    id: 1,
    title: "Grifindo Toys Leave Management System",
    description:
      "C# Windows Forms application with SQL integration for HR leave management.",
    image: "https://placehold.co/600x360/2a2a2a/ffffff?text=Grifindo+Project",
    url: "https://github.com/izzathnoory/GrifindoToyLeaveApp",
  },
];

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-sm z-40">
      <div className="page-container flex items-center justify-between py-4">
        <a href="#home" className="text-white text-lg font-bold">
          Izzath Noory
        </a>
        <div className="hidden md:flex items-center gap-6 text-gray-200">
          <a href="#home" className="hover:text-white">
            Home
          </a>
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#skills" className="hover:text-white">
            Skills
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
        </div>
        <a
          href="#contact"
          className="ml-4 inline-block bg-indigo-600 text-white px-3 py-2 rounded-md text-sm"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="page-container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Hello, I'm
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mt-2">
            Izzath Noory
          </h2>
          <p className="mt-6 text-gray-300 max-w-xl">
            I'm a full-stack web developer working remotely from Sri Lanka.
            Explore my projects and get in touch for collaborations.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md"
            >
              My Projects
            </a>
            <a
              href="#contact"
              className="border border-gray-700 text-gray-200 px-4 py-2 rounded-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl">
            <img
              src="https://placehold.co/400x400/111827/efefef?text=Profile"
              alt="Izzath"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-12">
      <div className="page-container grid md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-white mb-4">About me</h3>
          <p className="text-gray-300 leading-relaxed">
            Meet Izzath Noory, a skilled web developer with expertise in HTML,
            CSS, JavaScript, React and backend technologies. Passionate about
            building user-friendly, high-performance applications.
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            Contact Me
          </a>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://placehold.co/500x500/2a2a2a/ffffff?text=About+Image"
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-12">
      <div className="page-container">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          Tools used to build projects
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-items-center">
          {skills.map((s) => (
            <div
              key={s}
              className="p-4 bg-gray-800 rounded-lg w-full flex items-center justify-center"
            >
              <span className="text-gray-200">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="page-container">
        <h3 className="text-3xl font-bold text-white text-center mb-8">
          Recent projects
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-white">{p.title}</h4>
                <p className="text-gray-300 mt-2">{p.description}</p>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-indigo-400"
                >
                  Check Project <i className="bx bx-right-arrow-alt" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-12">
      <div className="page-container">
        <h3 className="text-3xl font-bold text-white text-center mb-6">
          Contact Me
        </h3>
        <div className="max-w-2xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="access_key"
              value="d442d4ab-d9c6-4a53-b729-7ca365a961fc"
            />
            <div>
              <label className="block text-sm text-gray-200">Name</label>
              <input
                name="name"
                required
                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-200">Message</label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full mt-1 p-2 rounded bg-gray-800 border border-gray-700 text-gray-100"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-800">
      <div className="page-container py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <span>© All Rights Reserved by Izzath Noory</span>
        <div className="mt-3 md:mt-0">Built with React + Tailwind</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
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
