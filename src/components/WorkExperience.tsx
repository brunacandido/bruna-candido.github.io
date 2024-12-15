import React from 'react';
import '../styles/Education.scss';
import fractalLogo from '../assets/fractal.png';

interface WorkExperienceItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
  position: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    logo: fractalLogo,
    company: 'Fractal Engenharia e Sistemas',
    role: 'Software Developer',
    period: '2021 - 2024',
    location: 'Remote',
    position: 'left',
  },
  {
    logo: fractalLogo,
    company: 'Fractal Engenharia e Sistemas',
    role: 'Hydrology Intern',
    period: '2019 - 2021',
    location: 'Florianopolis, Brazil',
    position: 'right',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="education">
      <div className="timeline">
        {workExperienceData.map((item, index) => (
          <div key={index} className={`education-item ${item.position}`}>
            <img src={item.logo} alt={`${item.company} logo`} className="university-logo" />
            <div className="education-details">
              <h3>{item.company}</h3>
              <p>{item.role}</p>
              <p>{item.period}</p>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
