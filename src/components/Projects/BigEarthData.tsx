import React, { useRef, useState } from 'react';
import CustomDialog from '../CustomDialog';
import GEEMap from '../../assets/RioGrandeDoSulFlood.png'

const BigEarthData: React.FC = () => {

  const dialogRef = useRef<HTMLDialogElement>(null);

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
      <h2>Big Earth Data</h2>
      <div className="projects">
      <div className="project" onClick={() => handleOpen(("project1"))}>
        <h3>GEE Widget</h3>
        <p>Impacts of a flood event occurred in the Rio Grande do Sul region, Brazil, in 2024.
        <img src={GEEMap} alt="Open PDF" className="image-container" />
        <CustomDialog 
          key={openProject}
          open={openProject === "project1"} 
          onClose={handleClose}
          title="Project Details"   
          content={<iframe src="https://ee-brunscandido.projects.earthengine.app/view/rs-flood" width="100%" height="600px"></iframe>}
        />
          </p>
      </div>
      </div>
      </section>
    );
  }
  
  export default BigEarthData;