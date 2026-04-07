type NavigationProps = {
  brand: string
}

function Navigation({ brand }: NavigationProps) {
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
    </header>
  )
}

export default Navigation
