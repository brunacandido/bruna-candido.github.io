import React from 'react';
import '../styles/About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <h2 className="about-heading">About me</h2>
          <p>
            I'm Bruna, an oceanographer turned software developer with a focus on environmental
            data and geospatial systems. My work bridges ocean science, remote sensing, and
            applied computation.
          </p>
          <p>
            Currently enrolled in the Copernicus Master in Digital Earth, an Erasmus Mundus
            Joint Master co-funded by the European Union, following the Geodata Science track
            across Salzburg and Vannes.
          </p>
        </div>
        <div className="about-meta">
          <div className="about-stat">
            <strong>Brazil → Austria → France</strong>
            <span>International education path</span>
          </div>
          <div className="about-stat">
            <strong>3+ years</strong>
            <span>Software development, Fractal Engenharia</span>
          </div>
          <div className="about-stat">
            <strong>Oceanography + Geodata</strong>
            <span>Environmental science and engineering</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
