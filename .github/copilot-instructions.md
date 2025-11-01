Project snapshot

- Single-page React (Vite) portfolio app. Main UI lives in `src/App.jsx` (Hero, About, Skills, Projects, Contact). No backend in this repo — contact form posts to Web3Forms (see `src/App.jsx` form fields and `access_key`).
- Tailwind CSS is used (config at `tailwind.config.cjs`). Global styles and the project's custom visual system live in `src/index.css` (Tailwind directives + additional handcrafted CSS for gradients/animations).

What to do first

- Run the dev server: `npm install` then `npm run dev` (Windows PowerShell). Vite + Tailwind will rebuild on file save.
- `src/main.jsx` imports `src/index.css`. Add global CSS or Tailwind utilities in `src/index.css`. Prefer extending Tailwind in `tailwind.config.cjs` for theme tokens.

Architecture & conventions (concrete, not aspirational)

- Single-file app structure: `src/App.jsx` defines UI sections as React functions (Navbar, Hero, About, Skills, Projects, Contact, Footer) and exports default App. New sections typically follow this pattern.
- Styling: use Tailwind utility classes for layout and small components. Complex effects (page-level gradients, animated backgrounds, decorative pseudo-elements) are implemented as global CSS in `src/index.css`. When changing animations or pseudo-elements, edit `src/index.css` rather than adding inline styles.
- Assets: `src/assets/` contains images. External placeholder images are used in `App.jsx` — replace with local files and update paths when needed.
- Forms: contact form posts to https://api.web3forms.com/submit; the `access_key` is present inline in `src/App.jsx`. Do not commit a real secret here — treat it as a public demo token.

Build / CI notes

- Local dev: `npm run dev` (fast HMR). Build for production: `npm run build`. Preview build: `npm run preview`.
- Linting: `npm run lint` runs ESLint. The repo uses ESM and React 19 typings in devDependencies.

Where to change visuals (practical examples)

- To add a site-wide color: open `tailwind.config.cjs` and add colors under `theme.extend.colors`, then use `bg-brand-500` in components.
- To change the hero/profile image sizing or add a background gradient, edit `src/App.jsx` classes (Tailwind) and `src/index.css` for complex gradients or pseudo-element overlays.
- To add fonts, `src/index.css` already contains the Google Fonts `@import`; prefer editing that line to change fonts.

Developer shortcuts & debugging tips

- When Tailwind classes don't take effect, verify `src/index.css` includes `@tailwind base; @tailwind components; @tailwind utilities;` and that `tailwind.config.cjs` `content` globs include `./src/**/*.{js,jsx}` and `./index.html`.
- If CSS changes don't show, restart Vite or clear the browser cache. Check terminal for PostCSS/Tailwind warnings.
- Use the browser devtools to inspect pseudo-elements (e.g., `body::before`) and check z-index ordering — many decorative layers use high z-index values.

Editing guidance for AI agents

- Make minimal edits: prefer adding a new React component file under `src/` rather than modifying the entire `App.jsx` when adding features.
- Preserve user-facing text (name, project titles, contact tokens) unless explicitly asked to update them.
- For visual changes: describe the intended outcome in 1–2 sentences, then edit `src/index.css` (for global/pseudo-element/animation changes) and `src/App.jsx` (to add/modify Tailwind utility classes). Provide before/after snippets in the PR.

Files to inspect when working on features

- `src/App.jsx` — main UI and sections
- `src/index.css` — global styles and Tailwind entry
- `tailwind.config.cjs` — theme and content globs
- `src/main.jsx` — CSS import and app mount
- `package.json` — scripts and deps

If something is missing

- Ask for missing images, the desired color tokens, or whether the `access_key` should be replaced with a server-side form handler. If asked to wire up a backend, request API credentials and CORS details.

Feedback

- Tell me which section feels unclear or needs more examples and I will iterate.
