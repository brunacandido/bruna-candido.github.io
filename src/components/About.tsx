import React from 'react';
import '../styles/About.scss';

const techStack = [
  'Sentinel-1', 'Sentinel-2', 'CMEMS', 'Landsat',
  'PyTorch', 'scikit-learn', 'Rasterio', 'GDAL',
  'GeoPandas', 'Xarray', 'Google Earth Engine',
];

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <div className="about-text">
          <h2 className="about-heading">About me</h2>
          <p>
            I'm Bruna, an oceanographer and geodata scientist applying machine learning
            to satellite imagery and environmental monitoring. My work sits at the intersection
            of ocean science, remote sensing, and AI.
          </p>
          <p>
            Currently completing the Copernicus Master in Digital Earth (Erasmus Mundus), Geodata
            Science track, across Salzburg and Vannes. Projects include SAR-based oil spill
            detection with deep learning, land cover classification, and geospatial data analysis
            with Python and cloud platforms.
          </p>
          <div className="about-tags">
            {techStack.map(tag => (
              <span key={tag} className="about-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="about-meta">
          <div className="about-stat">
            <strong>Brazil → Austria → France</strong>
            <span>International research path</span>
          </div>
          <div className="about-stat">
            <strong>3+ years</strong>
            <span>Software development, Fractal Engenharia</span>
          </div>
          <div className="about-stat">
            <strong>SAR · Deep Learning · EO</strong>
            <span>Core technical focus areas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
