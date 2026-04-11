export type Project = {
  name: string;
  type: string;
  description: string;
  url?: string;
};

export const BRAND_NAME = "Muhammad Hassan Bilal";

export const HERO_CONTENT = {
  designation: "Full-stack web developer",
  title: "I build modern web products with clean code and clear user flow.",
  summary:
    "Short, modern interfaces backed by reliable APIs and thoughtful UX.",
  name: "MHB",
};

export const ABOUT_DESCRIPTION =
  "I build full-stack web apps from interface to database. My work combines React, Node.js, Express, MongoDB, and SQL to create products that are practical, fast, and easy to maintain.";

export const SERVICES = [
  "Full-stack web apps with React, Node.js, and Express",
  "REST APIs, authentication, and backend workflows",
  "MongoDB and SQL data modeling for production apps",
  "Responsive UI design with clean, modern aesthetics",
  "Database optimization and API performance",
  "Deployment, testing, and code quality assurance",
  "Payment integration and e-commerce solutions",
  "AI integration for smarter user experiences and automation",
];

export const PROJECTS: Project[] = [
  {
    name: "Sales Assist",
    type: "SaaS Platform",
    description:
      "A full-stack SaaS solution built with React and Node.js that streamlines sales workflows. It enables businesses to track leads, manage customer relationships, and gain actionable insights through real-time analytics.",
    url: "https://salesassist.live",
  },
  {
    name: "Codelet Digital",
    type: "Service Management Platform",
    description:
      "A scalable services platform powered by Next.js and Node.js, focused on efficient client onboarding, service delivery, and streamlined project management through a clean and responsive interface.",
    url: "https://codeletdigital.com",
  },
  {
    name: "Metro.pk",
    type: "Product Catalog",
    description:
      "A high-performance product catalog for Metro Cash & Carry, designed with React and a Node.js backend. It offers structured product browsing, category navigation, and an intuitive user experience.",
    url: "https://metro.pk",
  },
  {
    name: "Metro Online",
    type: "E-commerce Platform",
    description:
      "A robust e-commerce application delivering a seamless shopping experience with features like dynamic product listings, secure checkout, and user account management, built on a modern MERN stack.",
    url: "https://metro-online.pk",
  },
  {
    name: "Admin Panel for METRO",
    type: "Admin Dashboard",
    description:
      "A comprehensive private admin dashboard built with React and Node.js, designed to manage inventory, orders, and customer data for Metro Cash & Carry. It features real-time analytics, user management, and efficient content updates.",
  },
  {
    name: "Tarzkar",
    type: "Furniture E-commerce",
    description:
      "A visually polished furniture platform focused on user experience and performance. Built with React and Express, it enables smooth product discovery, browsing, and online purchasing.",
    url: "https://tarzkar.pk",
  },

  {
    name: "Undesked",
    type: "Frontline Workforce Management Platform",
    description:
      "A productivity platform built in MERN stack to manage frontline workforce operations, including scheduling, task management, and communication. It offers a user-friendly interface for both employees and managers to optimize workforce efficiency.",
    url: "https://undesked.com",
  },

  {
    name: "Undesked Dashboard",
    type: "Admin Panel",
    description:
      "A private dashboard for Undesked, built with React, PHP Laravel, and SQL. Designed to manage user data, monitor system performance, and provide insights through real-time analytics. It features secure authentication and an intuitive interface for efficient administration.",
  },
];

export const SKILLS = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Vite",
  "CSS architecture",
  "Accessibility",
  "Responsive design",
];

export const HERO_STATS = [
  { value: "2.5+", label: "years building web apps" },
  { value: "30+", label: "pages and products shipped" },
  { value: "100%", label: "focused on responsive design" },
];
