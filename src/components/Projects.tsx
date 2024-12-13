import React from 'react';
import '../styles/Projects.scss';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects">
      <div className="project">
        <h3>Project 1: Oceanographic Data Analysis</h3>
        <p>Project involving oceanographic data analysis using Python.</p>
      </div>
      <div className="project">
        <h3>Project 2: Bathymetric Profile Reconstruction</h3>
        <p>Project on bathymetric profile reconstruction using Sentinel-2 satellite images.</p>
      </div>
      <div className="project">
        <h3>Project 2: Bathymetric Profile Reconstruction</h3>
        <p>Project on bathymetric profile reconstruction using Sentinel-2 satellite images.</p>
      </div>
      </div>
    </section>
  );
};

export default Projects;
