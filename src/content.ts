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

export const ABOUT_TITLE =
  "Focused on useful systems, readable interfaces, and smooth delivery.";

export const ABOUT_DESCRIPTION =
  "My skills include, but are not limited to the following:";

export const SERVICES = [
  "Full-stack web apps with React, Node.js, and Express",
  "Server-side rendering with Next.js for SEO and performance",
  "Responsive UI design with clean, modern aesthetics",
  "REST APIs, authentication, and backend workflows",
  "MongoDB and SQL data modeling for production apps",
  "Payment integration and e-commerce solutions",
  "Database optimization and API performance",
  "Deployment, testing, and code quality assurance",
  "AI integration for smarter user experiences and automation",
];

export const PROJECTS: Project[] = [
  {
    name: "Codelet Digital",
    type: "Service Management Platform",
    description:
      "A scalable services platform powered by Next.js, focused on efficient client onboarding, service delivery, and streamlined project management through a clean and responsive interface.",
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
    name: "Sales Assist",
    type: "SaaS Platform",
    description:
      "A full-stack SaaS solution built with Angular and Node.js that streamlines sales workflows. It enables businesses to track leads, manage customer relationships, and gain actionable insights through real-time analytics.",
    url: "https://salesassist.live",
  },
  {
    name: "Tarzkar",
    type: "Furniture E-commerce",
    description:
      "A visually polished furniture platform focused on user experience and performance. Built with Next.js, it enables smooth product discovery, browsing, and online purchasing.",
    url: "https://tarzkar.com",
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
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Responsive design",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux/Toolkit",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
];

export const HERO_STATS = [
  { value: "2.5+", label: "years building web apps" },
  { value: "90+", label: "pages and products shipped" },
  { value: "100%", label: "focused on responsive design" },
  {
    value: "10+",
    label: "production-grade apps deployed",
  },
  {
    value: "100%",
    label: "committed to clean code and maintainable architecture",
  },
  {
    value: "100%",
    label: "dedicated to optimizing performance and user experience",
  },
];
