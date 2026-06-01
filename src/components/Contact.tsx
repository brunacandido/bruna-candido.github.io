import React from 'react';
import '../styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <h2 className="contact-heading">Get in touch</h2>
        <p className="contact-sub">
          Open to geospatial roles, research collaborations, and software opportunities.
        </p>
        <a href="mailto:brunscandido@gmail.com" className="contact-email">
          brunscandido@gmail.com
        </a>
        <ul className="contact-links">
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
      </div>
    </section>
  );
};

export default Contact;
