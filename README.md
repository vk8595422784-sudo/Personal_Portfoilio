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

This will start the Vite development server, and you can view the application at `http://localhost:5173` (or another port if 5173 is in use).

### Build

To create a production-ready build of the application, run:

```sh
npm run build
```

This command will generate a `dist` directory with the optimized and minified assets for deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details. <!-- TODO: Create a LICENSE file if you don't have one -->

## Contact

Vikram - @YourTwitter - your.email@example.com <!-- TODO: Update contact info -->

Project Link: https://github.com/your-username/Personal_Portfolio <!-- TODO: Update repo link -->
