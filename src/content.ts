export type Project = {
  name: string
  type: string
  description: string
}

export const BRAND_NAME = 'Muhammad Hassan Bilal'

export const HERO_CONTENT = {
  designation: 'Full-stack web developer',
  title: 'I build modern web products with clean code and clear user flow.',
  summary: 'Short, modern interfaces backed by reliable APIs and thoughtful UX.',
  name: 'MHB',
}

export const ABOUT_DESCRIPTION =
  'I build full-stack web apps from interface to database. My work combines React, Node.js, Express, MongoDB, and SQL to create products that are practical, fast, and easy to maintain.'

export const SERVICES = [
  'Full-stack web apps with React, Node.js, and Express',
  'REST APIs, authentication, and backend workflows',
  'MongoDB and SQL data modeling for production apps',
  'Responsive UI design with clean, modern aesthetics',
  'Database optimization and API performance',
  'Deployment, testing, and code quality assurance',
]

export const PROJECTS: Project[] = [
  {
    name: 'Northstar Analytics',
    type: 'Full-stack dashboard',
    description:
      'A clean analytics experience with a React interface, Node API, and faster insight delivery for product teams.',
  },
  {
    name: 'Atlas Studio',
    type: 'Client portal',
    description:
      'A secure portal built for client updates, bookings, and streamlined communication across the product flow.',
  },
  {
    name: 'Pulse Commerce',
    type: 'Commerce platform',
    description:
      'A mobile-first commerce build with inventory handling, checkout flow, and structured product data.',
  },
]

export const SKILLS = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'SQL',
  'Vite',
  'CSS architecture',
  'Accessibility',
  'Responsive design',
]

export const HERO_STATS = [
  { value: '2.5+', label: 'years building web apps' },
  { value: '30+', label: 'pages and products shipped' },
  { value: '100%', label: 'focused on responsive design' },
]
