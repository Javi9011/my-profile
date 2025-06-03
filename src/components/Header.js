import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>Nelson Amaya</h1>
        <ul>
          <li><a href="#hero">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#experience">Experiencia</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
