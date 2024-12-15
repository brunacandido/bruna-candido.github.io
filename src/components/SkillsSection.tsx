import React from 'react';
import '../styles/Skills.scss';
import SkillsProgramming from './SkillsProgramming';
import SkillsSoftwares from './SkillsSoftwares';


const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className='row inline-block flex'>
        <div className="skills-container">
          <SkillsProgramming />
          <SkillsSoftwares />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
