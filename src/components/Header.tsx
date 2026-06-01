import React, { useState } from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#home" className="logo">Bruna Cândido</a>
      <button
        className={`menu-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#featured-project" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#experiences" onClick={() => setMenuOpen(false)}>Experience</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
