import React, { useState } from 'react';
import '../styles/Experiences.scss';

interface ExperienceItem {
  logo: string;
  title: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  details?: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    logo: '/path/to/copernicus-logo.png',
    title: 'CDE Copernicus in Digital Earth',
    role: 'Mestrado em Geodata Science',
    period: '2024 - 2026',
    location: 'Salzburg, Áustria & Vannes, França',
    current: true,
    details: [
      'University of Salzburg - Cursos focados em ciência de dados geoespaciais.',
      'University of Vannes (UBS) - Enfoque em tecnologias de dados costeiros.',
    ],
  },
  {
    logo: '/path/to/fractal-logo.png',
    title: 'Fractal Engenharia',
    role: 'Estágio em Hidrologia',
    period: '2019 - 2020',
    location: 'São Paulo, Brasil',
    current: false,
  },
  {
    logo: '/path/to/ufsc-logo.png',
    title: 'Universidade Federal de Santa Catarina (UFSC)',
    role: 'Bacharelado em Oceanografia',
    period: '2015 - 2019',
    location: 'Florianópolis, Brasil',
    current: false,
  },
];

const Experiences: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experiences" className="experiences">
      <h2>Experiências</h2>
      <div className="timeline">
        {experiencesData.map((item, index) => (
          <div
            key={index}
            className={`experience-item ${item.current ? 'current' : ''}`}
            onClick={() => handleExpand(index)}
          >
            <img src={item.logo} alt={`${item.title} logo`} className="experience-logo" />
            <div className="experience-details">
              <h3>{item.title}</h3>
              <p className="role">{item.role}</p>
              <p className="period">{item.period}</p>
              <p className="location">{item.location}</p>
              {expandedIndex === index && item.details && (
                <div className="extra-details">
                  {item.details.map((detail, i) => (
                    <p key={i}>{detail}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
