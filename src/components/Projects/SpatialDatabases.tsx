import React, { useState } from 'react';
import CustomDialog from '../CustomDialog';
import dataCubePoster from '../../assets/dataCubePoster.png'

const SpatialDatabases: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleOpen = (projectId: string) => {
    setOpenProject(projectId);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpenProject(null);
    }, 0);  };

    return (
      <section id="projects" className="projects">
      <h2>Spatial Database</h2>
      <div className="projects">
      <div className="project" onClick={() => handleOpen(("project1"))}>
        <h3>Local Data Cubes and SDGs</h3>
        <p>The Role of Local Data Cubes in Advancing Sustainable Development Goals: 
        A Systematic Analysis
        <img src={dataCubePoster} alt="Open PDF" className="image-container" />
        <CustomDialog 
        open={openProject === "project1"} 
        onClose={handleClose}
          title="Local Data Cubes and SDGs"   
          content={<img src={dataCubePoster} className="image-container" ></img>}
        />
          </p>
      </div>
      </div>
      </section>
    );
  }
  
  export default SpatialDatabases;