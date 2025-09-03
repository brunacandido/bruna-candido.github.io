import React, { useRef, useState } from 'react';
import CustomDialog from '../CustomDialog';
import OilSpillImage from '../../assets/oil-spill-segmentation.png';
import OilSpillPresentation from '../../assets/oil-spill-segmentation-presentation.png';
import InternshipReportImage from '../../assets/internship-report-image.png';

const OilSpillSegmentation: React.FC = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleOpen = (projectId: string) => {
    setOpenProject(projectId);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpenProject(null);
    }, 0);
  };

  return (
    <section id="oil-spill-segmentation" className="projects">
      <h2>Oil Spill Segmentation</h2>
      <div className="projects">
        <div className="project" onClick={() => handleOpen("project1")}>
          <h3>Github repository</h3>
          <p>
            Example of oil spill segmentation using remote sensing techniques.
            <img src={OilSpillImage} alt="Oil Spill Segmentation" className="image-container" />
            <CustomDialog
              key={openProject}
              open={openProject === "project1"}
              onClose={handleClose}
              title="Github Repository"
              content={<iframe src="https://github.com/brunacandido/fast-oil-spill-segmentation-workflow" width="100%" height="600px"></iframe>}
            />
          </p>
        </div>
        <div className="project" onClick={() => handleOpen("project2")}>
          <h3>Slides presentation</h3>
          <p>
            Progress presentation during the internship, giving the project updates to the team.
            <img src={OilSpillPresentation} alt="Oil Spill Segmentation Presentation" className="image-container" />
            <CustomDialog
              key={openProject}
              open={openProject === "project2"}
              onClose={handleClose}
              title="Methodology"
              content={
              <iframe src="https://gamma.app/embed/tj4qpox2jm3haty" width= '100%' height='100%' allow="fullscreen" title="Oil Spill Segmentation in SAR Imagery using Deep Learning - Detailed version"></iframe>
            }
            />
          </p>
        </div>
        <div className="project" onClick={() => handleOpen("project3")}>
          <h3>PDF Formal report</h3>
          <p>
            Internship report.
            <img src={InternshipReportImage} alt="Internship Report" className="image-container" />
            <CustomDialog
              key={openProject}
              open={openProject === "project3"}
              onClose={handleClose}
              title="Results"
              content={<div>Internship report</div>}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default OilSpillSegmentation;