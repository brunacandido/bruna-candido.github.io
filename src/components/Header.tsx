import React from 'react';
import '../styles/Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header ">
      <div className="logo">Bruna Cândido</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;