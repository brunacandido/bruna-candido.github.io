import React from 'react';
import '../styles/Projects.scss';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects">
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of the project goes here.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of the project goes here.</p>
      </div>
      <div className="project">
        <h3>Project 3</h3>
        <p>Description of the project goes here.</p>
      </div>
      </div>
    </section>
  );
};

export default Projects;
