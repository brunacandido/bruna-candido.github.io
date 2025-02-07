import React, { useRef, useState } from 'react';
import '../styles/Projects.scss';
import CustomDialog from './CustomDialog';
import GEEMap from '../assets/RioGrandeDoSulFlood.png'
import SAR from '../assets/SAR.png'

const Projects: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <section id="projects" className="projects">
      <div className="project">
        <h3>Project 3</h3>
        <p>Description of the project goes here.</p>
      </div>
    </section>
  );
};

export default Projects;
