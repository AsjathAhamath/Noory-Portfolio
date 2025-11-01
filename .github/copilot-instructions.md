# AI Coding Agent Instructions for Noory-Portfolio

## Project Overview

- **Single-page React (Vite) portfolio app**. Main UI is in `src/App.jsx` (sections: Hero, About, Skills, Projects, Contact, Footer). No backend; contact form posts to [Web3Forms](https://api.web3forms.com/submit) using a public demo `access_key` in `App.jsx`.
- **Styling:** Tailwind CSS (see `tailwind.config.cjs` for theme tokens). Global styles, gradients, and animations are in `src/index.css` (includes Tailwind directives and custom CSS).
- **Assets:** Images live in `src/assets/`. External placeholders are used in `App.jsx`—replace with local files and update paths as needed.

## Developer Workflows

- **Start dev server:**
  - `npm install` then `npm run dev` (Windows PowerShell). Vite + Tailwind rebuild on file save.
- **Build for production:**
  - `npm run build`
- **Preview build:**
  - `npm run preview`
- **Lint:**
  - `npm run lint` (ESLint, ESM, React 19 typings)

## Architecture & Conventions

- **Single-file app:** `src/App.jsx` exports default App and defines all UI sections as React functions. New sections/components should follow this pattern.
- **Styling:** Use Tailwind utility classes for layout and simple components. For complex effects (gradients, animated backgrounds, pseudo-elements), edit `src/index.css` (not inline styles).
- **Theme:** Add colors in `tailwind.config.cjs` under `theme.extend.colors`, then use e.g. `bg-brand-500` in components.
- **Fonts:** Edit the Google Fonts `@import` in `src/index.css` to change fonts.
- **Forms:** Contact form posts to Web3Forms; do not commit real secrets. Treat `access_key` as public demo.

## Editing Guidance for AI Agents

- **Minimal edits:** Prefer adding new React component files under `src/` over modifying the entire `App.jsx` for new features.
- **Preserve user-facing text** (name, project titles, contact tokens) unless explicitly asked to update.
- **Visual changes:**
  - Describe intended outcome in 1–2 sentences.
  - Edit `src/index.css` for global/pseudo-element/animation changes.
  - Edit `src/App.jsx` to add/modify Tailwind utility classes.
  - Provide before/after snippets in PRs.

## Debugging & Troubleshooting

- If Tailwind classes don't work, check `src/index.css` for Tailwind directives and `tailwind.config.cjs` for correct `content` globs.
- If CSS changes don't show, restart Vite or clear browser cache. Check terminal for PostCSS/Tailwind warnings.
- Use browser devtools to inspect pseudo-elements and z-index ordering (decorative layers use high z-index).

## Key Files & Directories

- `src/App.jsx` — main UI and sections
- `src/index.css` — global styles and Tailwind entry
- `tailwind.config.cjs` — theme and content globs
- `src/main.jsx` — CSS import and app mount
- `package.json` — scripts and dependencies

## Integration Points & External Dependencies

- **Web3Forms** for contact form (see `src/App.jsx`). No backend in this repo.
- **Tailwind CSS** for styling (see `tailwind.config.cjs` and `src/index.css`).

## If Something Is Missing

- Ask for missing images, color tokens, or if the `access_key` should be replaced with a server-side handler. For backend integration, request API credentials and CORS details.

---

**Feedback:** If any section is unclear or incomplete, specify which part needs more detail or examples.
