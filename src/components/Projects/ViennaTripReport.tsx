import React, { useState } from 'react';
import SuperComputer from '../../assets/SuperComputer.jpg'
import CustomDialog from '../CustomDialog';


const ViennaTripReport: React.FC = () => {
  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    "https://drive.google.com/uc?export=download&id=1n8sskRIRM0Gks1ogI7itx6Ig4UfbC4a_"
  )}`;

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
      <h2>Vienna Trip Report</h2>
      <div className="projects">
      <div className="project" onClick={() => handleOpen(("project1"))}>
        <h3>Vienna Trip Report</h3>
        <p> This is the report about the trip we did to Vienna, to visit EODC and Umweltbundesamt.</p>
        <img src={SuperComputer} alt="Open PDF" className="image-container" />
        <CustomDialog
          key={openProject}
          title="Vienna Trip Report"
          content={<iframe src={pdfUrl} width="100%" height="600px" />}
          open={openProject === "project1"} // Only open when clicked
          onClose={handleClose}
      />
      </div>
      </div>
      </section>
    );
  }
  
  export default ViennaTripReport;