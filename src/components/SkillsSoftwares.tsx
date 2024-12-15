import React, { useState } from 'react';
import arcgisLogo from '../assets/arcgispro.png';
import qgisLogo from '../assets/qgis.png';
// import snapLogo from '../assets/snap-icon.jpg';
import geeLogo from '../assets/gee.png';

import '../styles/Skills.scss';

const skillsData = [
  {
    id: 'qgis',
    logo: qgisLogo,
    name: 'QGIS',
    experience: [
      'Processed and visualized geospatial datasets for environmental monitoring.',
      'Created custom map layers for project presentations.',
      'Performed geostatistical analyses and exported professional-grade maps.',
    ],
  },
  {
    id: 'arcgis',
    logo: arcgisLogo,
    name: 'ArcGis Pro',
    experience: [
      'Utilized for geospatial data analysis, mapping, and visualization in environmental and hydrology projects.',
      'Created and managed detailed map layouts, including spatial data layers, symbology, and annotations.',
      'Performed geoprocessing tasks such as spatial joins, interpolation, buffer analysis, and terrain modeling.',
      'Delimited hydrological basins using digital elevation models (DEMs) and hydrology tools for watershed analysis.'
    ],
  },
  {
    id: 'gee',
    logo: geeLogo,
    name: 'Google Earth Engine',
    experience: [
      'Developed scripts to analyze environmental changes, such as land cover classification and vegetation monitoring, using JavaScript and Python APIs.',
      'Developed interactive widgets for data visualization and user engagement, enhancing the accessibility of spatial analysis results.'
    ],
  },
  // {
  //   id: 'snap',
  //   logo: snapLogo,
  //   name: 'SNAP ESA',
  //   experience: [
  //     'Built dynamic web applications using vanilla JavaScript and modern frameworks.',
  //     'Integrated RESTful APIs and managed client-side logic.',
  //     'Optimized website performance and responsiveness.',
  //   ],
  // },

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
