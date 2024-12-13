import React from 'react';
import '../styles/Education.scss';
import plusLogo from '../assets/plus_logo.jpg'
import ubsLogo from '../assets/ubs_logo.png'
import ufscLogo from '../assets/ufsc.jpg'

interface EducationItem {
  logo: string;
  university: string;
  degree: string;
  period: string;
  location: string;
  position: string;
}

const educationData: EducationItem[] = [
  {
    logo: plusLogo,
    university: 'Paris Lodron University of Salzburg',
    degree: 'Copernicus Master in Digital Earth',
    period: '2024 - 2026',
    location: 'Salzburg, Austria',
    position: 'left',
  },
  {
    logo: ubsLogo,
    university: 'Université Bretagne Sud',
    degree: 'Copernicus Master in Digital Earth',
    period: '2025 - 2026',
    location: 'Vannes, France',
    position: 'left',
  },
  {
    logo: ufscLogo,
    university: 'UFSC',
    degree: 'Bachelor\'s degree in Oceanography',
    period: '2017 - 2022',
    location: 'Florianopolis, Brazil',
    position: 'right',
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="education">
      <h2>My Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className={`education-item ${item.position}`}>
            <img src={item.logo} alt={`${item.university} logo`} className="university-logo" />
            <div className="education-details">
              <h3>{item.university}</h3>
              <p>{item.degree}</p>
              <p>{item.period}</p>
              <p>{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
