# Vikram — MERN Stack Developer Portfolio (React version)

A component-based React portfolio built with **Vite + React 19**, styled with **Bootstrap 5**
and custom CSS. This is the full React rewrite of the plain HTML/CSS/JS version — every section
is its own component with real state and props, not just markup.

## 📁 Project structure

```
portfolio-vikram-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── Vikram_Resume.pdf        → downloadable resume (served as a static file)
└── src/
    ├── main.jsx                  → app entry point, imports Bootstrap CSS/icons
    ├── App.jsx                   → assembles all sections, tracks active nav section, scroll-reveal
    ├── index.css                 → all custom theme styling (design tokens, terminal theme, etc.)
    ├── data/
    │   ├── skills.js              → edit to change the Skills section content
    │   ├── education.js           → edit to change the Education timeline
    │   └── projects.js            → edit to change the Projects section content
    └── components/
        ├── Navbar.jsx             → responsive nav with mobile toggle + active-link highlight
        ├── Hero.jsx               → terminal-style typing animation (React state + useEffect)
        ├── About.jsx
        ├── Skills.jsx             → renders skill cards from data/skills.js
        ├── Education.jsx          → renders the commit-style timeline from data/education.js
        ├── Projects.jsx           → filterable project grid (React state for the active filter)
        ├── ProjectCard.jsx        → single project card, reused by Projects.jsx
        ├── Contact.jsx            → controlled form with validation state
        ├── Footer.jsx
        └── BackToTop.jsx          → floating scroll-to-top button
```

## 🚀 How to run it

```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production version:
```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

## ✏️ What to customize before sending this out

1. **`src/data/projects.js`** — replace the 4 sample projects with your real ones (title, description, tags, live/GitHub links).
2. **`src/components/Contact.jsx`** — replace the placeholder email, phone, LinkedIn and GitHub values at the top of the file.
3. **`public/Vikram_Resume.pdf`** — swap in your own resume PDF (keep the filename, or update the `href`/`download` links in `Hero.jsx`, `Navbar.jsx`, and `About.jsx`).
4. **`Hero.jsx`** — the avatar shows "VK" initials in a circle. To use a real photo, add an image to `public/` and replace the `.avatar-circle` div with an `<img>` tag.
5. **`src/data/skills.js`** — add/remove technologies; icons are pulled from the free [devicon](https://devicon.dev) CDN by slug name.

## 🧩 Tech used

- **React 19** with functional components + hooks (`useState`, `useEffect`)
- **Vite** for the dev server and build
- **Bootstrap 5** (npm package) for the responsive grid, navbar, and form validation styles
- **Bootstrap Icons** + **devicon** logos for visuals
- Componentized architecture: each section is its own file, with reusable subcomponents
  (`ProjectCard`, `SkillItem`) and shared data files under `src/data/`

## 🌐 Deploying it for free

Since this needs a build step, use a host that runs `npm run build` for you:
- **Vercel** or **Netlify**: connect your GitHub repo (or drag-and-drop the `dist/` folder after running `npm run build`).
- **GitHub Pages**: run `npm run build`, then deploy the `dist/` folder using the `gh-pages` package or GitHub Actions.

Good luck with the job search! 🎯
