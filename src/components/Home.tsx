import React from 'react';
import '../styles/Home.scss';
import brunaPhoto from '../assets/bruna-photo.jpg';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-inner">
        <div className="home-text">
          <p className="home-label">Oceanographer · Software Developer · Geodata Scientist</p>
          <h1 className="home-name">
            Bruna<br />Cândido
          </h1>
          <p className="home-tagline">
            Bridging ocean science and geospatial engineering.<br />
            Copernicus Master in Digital Earth.
          </p>
          <div className="home-cta">
            <a href="#about" className="btn-primary">About me</a>
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
