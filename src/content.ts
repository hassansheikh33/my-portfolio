export type Project = {
  name: string;
  type: string;
  description: string;
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
    name: "Codelet Digital",
    type: "Services Platform",
    description:
      "A custom-built services platform with a Next.js frontend, Node.js backend, and MongoDB database, designed for seamless service delivery and easy client management.",
  },
  {
    name: "Metro.pk",
    type: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with React, Node.js, and SQL, featuring a user-friendly interface, secure payment processing, and efficient inventory management.",
  },
  {
    name: "Tarzkar.pk",
    type: "Furniture Website",
    description:
      "A modern furniture website developed using React and Express, with a MongoDB database for product management, offering a sleek design and smooth user experience for browsing and purchasing furniture online.",
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
