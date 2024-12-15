import React from 'react';
import '../styles/MasterProgram.scss';
import plusLogo from '../assets/plus_logo.jpg'
import cdeLogo from '../assets/CDE_logo.jpg'
import ubsLogo from '../assets/ubs_logo.png'
import coFoundedEU from '../assets/co_founded_EU.jpg'

const MasterProgram: React.FC = () => {
  return (
    <section id="master-program" className="projects">
      {/* <div className='projects'> */}
      <div className="program-content row flex">
        
        <div className="university-logos">
        <div className="program-logo">
          <a href="https://www.master-cde.eu" target="_blank" rel="noopener noreferrer">
            <img className="logo"src={cdeLogo} alt="Copernicus in Digital Earth Logo" />
          </a>
        </div>
          <div className="university">
            <a href="https://www.plus.ac.at/" target="_blank" rel="noopener noreferrer">
              <img className="logo"src={plusLogo} alt="University of Salzburg Logo" />
              {/* <p>Paris Lodron University of Salzburg</p> */}
            </a>
          </div>
          <div className="university">
            <a href="https://www.univ-ubs.fr/" target="_blank" rel="noopener noreferrer">
              <img className="logo"src={ubsLogo} alt="University of Vannes Logo" />
              {/* <p>Université Bretagne Sud (UBS)</p> */}
            </a>
          </div>
          <div className="university">
            <a href="https://erasmus-plus.ec.europa.eu/" target="_blank" rel="noopener noreferrer">
              <img className="logo"src={coFoundedEU} alt="Cofounded EU Logo" />
            </a>
          </div>
        </div>
      </div>
      {/* </div> */}

    </section>
  );
};

export default MasterProgram;
