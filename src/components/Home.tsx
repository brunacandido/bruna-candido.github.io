import React from 'react';
import '../styles/Home.scss';
import brunaPhoto from '../assets/bruna-photo.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <div className="home-text">
          <p className="home-label">AI for Earth Observation · Geodata Science · Ocean Science</p>
          <h1 className="home-name">
            Bruna<br />Cândido
          </h1>
          <p className="home-tagline">
            Applying machine learning to satellite imagery and ocean data.<br />
            Erasmus Mundus — Copernicus Master in Digital Earth.
          </p>
          <div className="home-cta">
            <a href="#about" className="btn-primary">About me</a>
            <a
              href="/cv-may2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Download CV
            </a>
            <a href="#experiences" className="btn-ghost">Experience</a>
          </div>
        </div>
        <div className="home-photo">
          <img src={brunaPhoto} alt="Bruna Cândido" />
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span />
      </div>
    </section>
  );
};

export default Home;
