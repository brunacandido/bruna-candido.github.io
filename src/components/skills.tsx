import React from 'react';
import '../styles/Skills.scss'; // Não se esqueça de importar o CSS
import pythonLogo from '../assets/python_logo.png';
import reactLogo from '../assets/react logo.png';
import javascriptLogo from '../assets/javaScript.webp';
import qgisLogo from '../assets/qgis.webp';


function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h3>Python</h3>
          <img src={pythonLogo} alt="Python" className="skill-logo" />
        </div>
        <div className="skill">
          <h3>JavaScript</h3>
          <img src={javascriptLogo} alt="JavaScript" className="skill-logo" />
        </div>
        <div className="skill">
          <h3>ReactJS</h3>
          <img src={reactLogo} alt="ReactJS" className="skill-logo" />
        </div>
        <div className="skill">
          <h3>QGIS</h3>
          <img src={qgisLogo} alt="QGIS" className="skill-logo" />
        </div>
        {/* <div className="skill">
          <h3>Geoinformatics</h3>
          <img src="path/to/geoinformatics-logo.png" alt="Geoinformatics" className="skill-logo" />
        </div> */}
      </div>
    </section>
  );
}

export default Skills;
