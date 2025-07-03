import React from 'react';
import bipReport from '../../assets/bip_report.jpg'

const BipStorymap: React.FC = () => {
  const storyMapUrl = "https://storymaps.arcgis.com/stories/1dd770fb3ba74279b9cb92547f9a6ec6";

    return (
      <section id="projects" className="projects">
      <h2>Quantifying Vulnerability</h2>
      <div className="projects">
      <div className="project" onClick={() => window.open(storyMapUrl, '_blank')}>
        <h3>Quantifying Vulnerability to Natural Hazards </h3>
        <p> This is the report about the Blended Intensive Programme I did in Romania.</p>
        <img src={bipReport} alt="Open PDF" className="image-container" />
      </div>
      </div>
      </section>
    );
  }
  
  export default BipStorymap;