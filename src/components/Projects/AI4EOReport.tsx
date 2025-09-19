import React, { useState } from 'react';
import ai4eo from '../../assets/ai4eo_logo.png';
import CustomDialog from '../CustomDialog';


const ViennaTripReport: React.FC = () => {
  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    "https://drive.google.com/uc?export=download&id=1ly1suJ5aiGBGffb8sRqg5REfUgjsKXCB"
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
      <h2>AI4EO Report</h2>
      <div className="projects">
      <div className="project" onClick={() => handleOpen(("project1"))}>
        <h3>AI4EO Report</h3>
        <p> This is the report about the AI4EO 2025 symposium, that took place in Rennes on 11-12 September.</p>
        <img src={ai4eo} alt="Open PDF" className="image-container" />
        <CustomDialog
          key={openProject}
          title="AI4EO Report"
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