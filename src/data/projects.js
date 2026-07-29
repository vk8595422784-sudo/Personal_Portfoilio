// Replace these with your own real projects, descriptions, and links.
const projects = [
  {
    id: 1,
    title: "Student Task Management System",
    category: "Full-Stack",
    description:
      "A full-stack task management app for students to create, organize and track assignments and deadlines. Features task creation with due dates and priority levels, status tracking (pending/in-progress/completed), and a dashboard view of upcoming tasks. Built with React, Node.js, Express and MongoDB.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    demo: "#",
    code: "https://github.com/vk8595422784-sudo/Student_Task_Management/tree/master",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    category: "Frontend",
    description:
      "A responsive weather lookup app built with JavaScript and a public weather API, styled entirely with Bootstrap components.",
    tags: ["JavaScript", "Bootstrap", "API"],
    demo: "https://wether-app-nu-ashen.vercel.app/",
    code: "https://github.com/vk8595422784-sudo/WetherApp",
  },
  {
    id: 3,
    title: "E-Commerce (Game) API",
    category: "Backend",
    description:
      "A REST API for a gaming e-commerce platform, handling game listings, user carts, orders, and authentication. Built with Node.js, Express and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "REST API", "JWT"],
    demo: "#",
    code: "https://github.com/vk8595422784-sudo/E-commerceAPI",
  },
  // ---------- Authentication System ----------
  {
    id: 4,
    title: "Authentication System — Backend",
    category: "Backend",
    description:
      "A secure authentication REST API with signup, login, and protected routes. Implements password hashing (bcrypt), JWT-based session/token handling, and role-based access control middleware. Built with Node.js, Express and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
    demo: "#",
    code: "https://github.com/vk8595422784-sudo/Authentication_System_Api",
  },
  {
    id: 5,
    title: "Authentication System — Frontend",
    category: "Frontend",
    description:
      "A React-based login and registration UI that consumes the authentication API. Handles form validation, JWT token storage, protected/private routes, and redirects for logged-in vs logged-out users.",
    tags: ["React", "Bootstrap", "JavaScript"],
    demo: "https://authentication-sysytem-frontend.vercel.app/login",
    code: "https://github.com/vk8595422784-sudo/Authentication_Sysytem_Frontend",
  },

  // ---------- Expense Tracker ----------
  {
    id: 6,
    title: "Expense Tracker — Backend",
    category: "Backend",
    description:
      "A REST API for managing personal expenses and income, with CRUD endpoints for transactions and category-based filtering. Built with Node.js, Express and MongoDB, tested with Postman.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    demo: "#",
    code: "#",
  },
  {
    id: 7,
    title: "Expense Tracker — Frontend",
    category: "Frontend",
    description:
      "A React dashboard for adding and categorizing daily expenses, with a running balance view and spending breakdown. Styled with Bootstrap for a clean, responsive layout.",
    tags: ["React", "Bootstrap", "JavaScript"],
    demo: "#",
    code: "#",
  },

  // ---------- Lead Desk Mini ----------
  {
    id: 8,
    title: "Lead Desk Mini — Backend",
    category: "Backend",
    description:
      "A REST API for a lightweight CRM tool, managing sales leads through stages (new, contacted, converted, lost). Includes CRUD endpoints and status-update routes. Built with Node.js, Express and MongoDB.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"],
    demo: "",
    code: "#",
  },
  {
    id: 9,
    title: "Lead Desk Mini — Frontend",
    category: "Frontend",
    description:
      "A React interface for viewing, filtering, and updating sales leads by stage, consuming the Lead Desk Mini API. Built with Bootstrap for a responsive table/card layout.",
    tags: ["React", "Bootstrap", "JavaScript"],
    code: "https://github.com/vk8595422784-sudo/leadDesk_mini_Frontend",
    demo: "https://lead-desk-mini-frontend.vercel.app/",
    code: "https://github.com/vk8595422784-sudo/leadDesk_mini_Frontend",
  },
];

export const categories = ["All", "Frontend", "Backend", "Full-Stack"];

export default projects;
