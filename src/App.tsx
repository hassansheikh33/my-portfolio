import './App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import ProjectsSection from './components/ProjectsSection'
import ServicesSection from './components/ServicesSection'

const services = [
  'Full-stack web apps with React, Node.js, and Express',
  'REST APIs, authentication, and backend workflows',
  'MongoDB and SQL data modeling for production apps',
  'Responsive UI design with clean, modern aesthetics',
  'Database optimization and API performance',
  'Deployment, testing, and code quality assurance',
]

const projects = [
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

const skills = [
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

function App() {
  return (
    <div className="page-shell">
      <Navigation brand="Muhammad Hassan Bilal" />
      <main>
        <Hero
          designation="Full-stack web developer"
          title="I build modern web products with clean code and clear user flow."
          summary="Short, modern interfaces backed by reliable APIs and thoughtful UX."
          name="MH"
          stats={[
            { value: '2.5+', label: 'years building web apps' },
            { value: '30+', label: 'pages and products shipped' },
            { value: '100%', label: 'focused on responsive design' },
          ]}
        />
        <ServicesSection services={services} />
        <ProjectsSection projects={projects} />
        <AboutSection
          description="I build full-stack web apps from interface to database. My work combines React, Node.js, Express, MongoDB, and SQL to create products that are practical, fast, and easy to maintain."
          skills={skills}
        />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
