// Edit this file to update the technologies shown in the Skills section.
// icon: devicon CDN slug, e.g. "html5/html5-original"
// darkBg: set true if the logo needs a white backing chip to stay visible on the dark card

const skillGroups = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "bi-layout-text-window-reverse",
    items: [
      { name: "HTML5", icon: "html5/html5-original" },
      { name: "CSS3", icon: "css3/css3-original" },
      { name: "Bootstrap 5", icon: "bootstrap/bootstrap-original" },
      { name: "JavaScript (ES6+)", icon: "javascript/javascript-original" },
      { name: "React.js", icon: "react/react-original" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "bi-hdd-network",
    items: [
      { name: "Node.js", icon: "nodejs/nodejs-original" },
      { name: "Express.js", icon: "express/express-original", darkBg: true },
      { name: "REST APIs", bsIcon: "bi-diagram-3" },
      { name: "JWT Auth (basics)", bsIcon: "bi-shield-lock" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "bi-database",
    items: [
      { name: "MongoDB", icon: "mongodb/mongodb-original" },
      { name: "Mongoose", bsIcon: "bi-diagram-2" },
      { name: "MySQL (basics)", icon: "mysql/mysql-original" },
      { name: "Redis (basics)", icon: "redis/redis-original" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: "bi-tools",
    items: [
      { name: "Git", icon: "git/git-original" },
      { name: "GitHub", icon: "github/github-original", darkBg: true },
      { name: "VS Code", icon: "vscode/vscode-original" },
      { name: "Postman", icon: "postman/postman-original" },
      { name: "Docker (basics)", icon: "docker/docker-original" },
    ],
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science",
    icon: "bi-diagram-3",
    items: [
      { name: "DSA with JavaScript", icon: "javascript/javascript-original" },
      { name: "System Design (basics)", bsIcon: "bi-building" },
      { name: "C", icon: "c/c-original" },
      { name: "C++", icon: "cplusplus/cplusplus-original" },
      { name: "Java", icon: "java/java-original" },
      { name: "DBMS", bsIcon: "bi-server" },
      { name: "Operating System", bsIcon: "bi-cpu" },
    ],
  },
  {
    id: "ai-tools",
    title: "AI Tools",
    icon: "bi-stars",
    items: [
      { name: "Generative AI (basics)", bsIcon: "bi-stars" },
      { name: "RAG (Retrieval-Augmented Generation)", bsIcon: "bi-search" },
      { name: "AI-Assisted Development", bsIcon: "bi-robot" },
    ],
  },

  {
    id: "deployment",
    title: "Deployment",
    icon: "bi-cloud-arrow-up",
    items: [
      { name: "Vercel", icon: "vercel/vercel-original", darkBg: true },
      { name: "Render", bsIcon: "bi-hdd-rack" },
    ],
  },
];

export default skillGroups;
