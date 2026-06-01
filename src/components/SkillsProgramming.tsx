import React, { useState } from 'react';
import pythonLogo from '../assets/python.png';
import javascriptLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import matlab from '../assets/matlab.png';
import '../styles/Skills.scss';

const skillsData = [
  {
    id: 'python',
    logo: pythonLogo,
    name: 'Python',
    experience: [
      'Applied scikit-learn and PyTorch for deep learning segmentation on Sentinel-1 SAR imagery.',
      'Geospatial data processing with Rasterio, GDAL, GeoPandas, and Xarray.',
      'Ocean and environmental data analysis with NumPy, Pandas, and Matplotlib.',
    ],
  },
  {
    id: 'matlab',
    logo: matlab,
    name: 'MATLAB',
    experience: [
      'Oceanographic data analysis and numerical modeling for research and coursework.',
      'Time-series processing of tidal, wave, and hydrodynamic monitoring data.',
      'Custom analysis functions for environmental datasets and signal processing.',
    ],
  },
  {
    id: 'javascript',
    logo: javascriptLogo,
    name: 'JavaScript',
    experience: [
      'Built full-stack applications at Fractal Engenharia using React and TypeScript.',
      'Integrated geospatial APIs and mapping libraries for environmental dashboards.',
      'RESTful API integration and client-side state management in production systems.',
    ],
  },
  {
    id: 'react',
    logo: reactLogo,
    name: 'React / TS',
    experience: [
      'Component libraries and responsive UIs for environmental monitoring platforms.',
      'React Router, Context API, and hooks for complex multi-page applications.',
      'TypeScript with strong typing for maintainable, production-grade frontends.',
    ],
  },
];

const SkillsProgramming: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState('python');

  return (
    <div>
      <h2>Programming languages</h2>
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

export default SkillsProgramming;
