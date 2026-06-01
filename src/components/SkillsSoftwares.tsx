import React, { useState } from 'react';
import arcgisLogo from '../assets/arcgispro.png';
import qgisLogo from '../assets/qgis.png';
import geeLogo from '../assets/gee.png';
import '../styles/Skills.scss';

const skillsData = [
  {
    id: 'qgis',
    logo: qgisLogo,
    name: 'QGIS',
    experience: [
      'Multi-spectral and SAR raster analysis for coastal and land cover monitoring.',
      'Custom cartographic layouts for scientific presentations and project reports.',
      'Geostatistical tools: spatial interpolation, DEM analysis, and watershed delineation.',
    ],
  },
  {
    id: 'arcgis',
    logo: arcgisLogo,
    name: 'ArcGIS Pro',
    experience: [
      'Spatial joins, buffer analysis, and terrain modeling for hydrological studies.',
      'Watershed delineation using DEMs and ArcHydro tools for basin analysis.',
      'Cartographic outputs for environmental monitoring and impact assessments.',
    ],
  },
  {
    id: 'gee',
    logo: geeLogo,
    name: 'Google Earth Engine',
    experience: [
      'Time-series analysis of Sentinel-2 multispectral imagery for vegetation and land cover change detection.',
      'SAR-based water body mapping and flood monitoring from Sentinel-1 data.',
      'Interactive EO applications deployed via GEE JavaScript and Python APIs.',
    ],
  },
];

const SkillsSoftwares: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('qgis');

  return (
    <div>
      <h2>Softwares</h2>
      <div className="skills-block">
        <div className="skills-icons">
          {skillsData.map((skill) => (
            <button
              key={skill.id}
              className={`skill-icon ${activeSkill === skill.id ? 'active' : ''}`}
              onClick={() => setActiveSkill(skill.id)}
              aria-label={skill.name}
            >
              <img src={skill.logo} alt={`${skill.name} logo`} />
            </button>
          ))}
        </div>
        <div className="skill-details">
          {skillsData.map(
            (skill) =>
              activeSkill === skill.id && (
                <div key={skill.id}>
                  <h3>{skill.name}</h3>
                  <ul>
                    {skill.experience.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsSoftwares;
