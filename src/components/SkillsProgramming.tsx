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
      'Used for data analysis and visualization in hydrology projects.',
      'Developed scripts for geospatial data processing.',
      'Automated workflows using libraries such as Pandas and NumPy.',
    ],
  },
  {
    id: 'matlab',
    logo: matlab,
    name: 'MatLab',
    experience: [
      'Used for data analysis, visualization, and numerical simulations in hydrology and oceanography projects.',
      'Developed scripts for processing large datasets and automating repetitive tasks.',
      'Created custom functions to analyze environmental data and generate meaningful insights.'    
      ],
  },
  {
    id: 'javascript',
    logo: javascriptLogo,
    name: 'JavaScript',
    experience: [
      'Built dynamic web applications using JavaScript and reactJS framework.',
      'Integrated RESTful APIs and managed client-side logic.',
      'Optimized website performance and responsiveness.',
    ],
  },
  {
    id: 'react',
    logo: reactLogo,
    name: 'ReactJS',
    experience: [
      'Developed reusable and responsive UI components.',
      'Used React Router for dynamic navigation and state management with Context API.',
      'Collaborated on front-end architecture for large-scale web platforms.',
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
