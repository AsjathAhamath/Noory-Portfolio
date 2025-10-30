import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A short description of project one. Built with React + Vite.",
    url: "#",
  },
  {
    id: 2,
    title: "Project Two",
    description: "A short description of project two. Shows layout and detail.",
    url: "#",
  },
];

function App() {
  const [count] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <header className="page-container flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 shadow-lg" />
          <div>
            <h2 className="text-lg font-semibold">Your Name</h2>
            <p className="text-sm text-gray-400">Frontend Developer</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <main className="page-container">
        <section className="mt-12 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-white">Hi — I’m Your Name.</h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              I build modern web apps with React and Tailwind CSS. I focus on
              accessibility, performance and delightful UI.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#projects"
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-500"
              >
                My Projects
              </a>
              <a
                href="#contact"
                className="inline-block border border-gray-700 text-gray-200 px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 rounded-2xl bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center shadow-lg">
              <span className="text-gray-400">Profile image</span>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16">
          <h3 className="text-xl text-white">About me</h3>
          <p className="mt-3 text-gray-300 max-w-2xl">
            A short paragraph about you. Mention your skills, experience and
            what kind of projects you like to build.
          </p>
        </section>

        <section id="projects" className="mt-12">
          <h3 className="text-xl text-white">Selected projects</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.id}
                className="p-4 bg-gray-800 rounded-lg border border-gray-700"
              >
                <h4 className="text-lg text-white">{p.title}</h4>
                <p className="mt-2 text-gray-300">{p.description}</p>
                <a
                  href={p.url}
                  className="mt-3 inline-block text-indigo-400 hover:text-indigo-300"
                >
                  View project →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 mb-20">
          <h3 className="text-xl text-white">Contact</h3>
          <p className="mt-3 text-gray-300">
            Feel free to reach out via email at{" "}
            <a href="mailto:you@example.com" className="text-indigo-400">
              you@example.com
            </a>
            .
          </p>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-transparent">
        <div className="page-container py-6 text-sm text-gray-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Your Name</span>
          <span>Built with React + Vite + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
