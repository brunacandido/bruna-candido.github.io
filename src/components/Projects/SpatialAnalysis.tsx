import React, { useEffect, useRef, useState } from 'react';
import CustomDialog from '../CustomDialog';
import Salzburg_Spots from '../../assets/Salzburg_Spots.png';

const SpatialAnalysis: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);

  const handleOpen = (projectId: string) => {
    setOpenProject(projectId);
  };

  const handleClose = () => {
    setTimeout(() => {
      setOpenProject(null);
    }, 0);
  };

  // Load ArcGIS Map only once
  const mapRef = useRef<HTMLDivElement>(null);
  // const [isMapLoaded, setIsMapLoaded] = useState(false);

  // useEffect(() => {
  //   if (mapRef.current && !isMapLoaded) {
  //     const mapElement = document.createElement("arcgis-embedded-map");
  //     mapElement.setAttribute("style", "height: 600px; width: 100%;");
  //     mapElement.setAttribute("item-id", "df63010448ff492da469bd3dcc20b30e");
  //     mapElement.setAttribute("theme", "light");
  //     mapElement.setAttribute("portal-url", "https://zgis.maps.arcgis.com");
  //     mapElement.setAttribute("bookmarks-enabled", "");
  //     mapElement.setAttribute("legend-enabled", "");
  //     mapElement.setAttribute("information-enabled", "");
  //     mapElement.setAttribute("share-enabled", "");

  //     mapRef.current.appendChild(mapElement);
  //     setIsMapLoaded(true);
  //   }
  // }, [isMapLoaded]);

  const pdfUrl = `https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
    "https://drive.google.com/uc?export=download&id=1vGCsvpmvRHHF8fCfFWNSgGNi84ywrZFO"
  )}`;

  return (
    <section id="projects" className="projects">
      <h2>Spatial Analysis</h2>
      <div className="projects">
        <div className="project" onClick={() => handleOpen("project1")}>
          <h3>Closest Points in ArcGis Pro</h3>
          <p>
            Different spatial analysis of closest points in Salzburg.
          </p>
          <img src={Salzburg_Spots} alt="Flood Analysis" className="image-container" />
          <CustomDialog
            open={openProject === "project1"}
            onClose={handleClose}
            title="Project Details"
            content={<iframe src={pdfUrl} width="100%" height="600px" />}
            />
        </div>
      </div>
    </section>
  );
};

export default SpatialAnalysis;
