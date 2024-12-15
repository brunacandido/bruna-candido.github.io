import React from 'react';
import '../styles/Education.scss';
import fractalLogo from '../assets/fractal.png';

interface WorkExperienceItem {
  logo: string;
  company: string;
  role: string;
  period: string;
  location: string;
}

const workExperienceData: WorkExperienceItem[] = [
  {
    logo: fractalLogo,
    company: 'Fractal Engenharia e Sistemas',
    role: 'Hydrology Intern',
    period: '2020 - 2021',
    location: 'Florianopolis, Brazil',
  },
  {
    logo: fractalLogo,
    company: 'Fractal Engenharia e Sistemas',
    role: 'Software Developer',
    period: '2021 - Present',
    location: 'Remote',
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="education">
      <div className="timeline">
        {workExperienceData.map((item, index) => (
          <div key={index} className="education-item left">
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
