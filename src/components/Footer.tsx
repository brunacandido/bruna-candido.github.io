import React from 'react';
import '../styles/Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p className="footer-copy">© {new Date().getFullYear()} Bruna Cândido</p>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/brunacandido" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/brunascandido/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
