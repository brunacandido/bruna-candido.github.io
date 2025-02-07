import React, { useState } from 'react';
import SAR from '../../assets/SAR.png'
import eCognitionSegmentation from '../../assets/eCognitionSegmentation.png'

import CustomDialog from '../CustomDialog';


const AdvancedRemoteSensing: React.FC = () => {
  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    "https://drive.google.com/uc?export=download&id=1IXs_jeiYJECH0jntCV0QjMhbrEZEKI4n"
  )}`;
  const eCognitionSegmentationPDF = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    "https://drive.google.com/uc?export=download&id=1MyXwywyTImKyRVDfxfosxebZ2CO2bB_n"
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
      <h2>Advanced Remote Sensing</h2>
      <div className="projects">
      <div className="project" onClick={() => handleOpen(("project1"))}>
        <h3>Sentinel-1 SAR - Hands-on to data processing</h3>
        <p> This assignment uses Sentinel-1 SAR data to detect ground displacement, creating a displacement map processed with ESA's SNAP software.</p>
        <img src={SAR} alt="Open PDF" className="image-container" />
        <CustomDialog
          key={openProject}
          title="Sentinel-1 SAR - Project Details"
          content={<iframe src={pdfUrl} width="100%" height="600px" />}
          open={openProject === "project1"} // Only open when clicked
          onClose={handleClose}
      />
      </div>
      <div className="project" onClick={() => handleOpen(("project2"))}>
        <h3>Object features: eCognition</h3>
        <p> Segmentation techniques and object feature
        extraction using eCognition.</p>
        <img src={eCognitionSegmentation} alt="Open PDF" className="image-container" />
        <CustomDialog
          key={openProject}
          title="Object features: eCognition - Project Details"
          content={<iframe src={eCognitionSegmentationPDF} width="100%" height="600px" />}
          open={openProject === "project2"} // Only open when clicked
          onClose={handleClose}
      />
      </div>
      </div>
      </section>
    );
  }
  
  export default AdvancedRemoteSensing;