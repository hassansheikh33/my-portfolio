import { useNavbarMenu } from '../hooks/navbar'

type NavigationProps = {
  brand: string
}

function Navigation({ brand }: NavigationProps) {
  const { isOpen, toggle, close } = useNavbarMenu()

  return (
    <header className="topbar">
      <a className="brand" href="#home">
        {brand}
      </a>
      <nav className="nav" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className={`menu-toggle${isOpen ? ' is-open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`mobile-nav${isOpen ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        <a href="#work" onClick={close}>
          Work
        </a>
        <a href="#services" onClick={close}>
          Services
        </a>
        <a href="#about" onClick={close}>
          About
        </a>
        <a href="#contact" onClick={close}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Navigation
