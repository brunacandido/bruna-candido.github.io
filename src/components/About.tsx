import React from 'react';
import '../styles/About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I'm Bruna, an oceanographer and software developer. I have a strong passion for technologies
        that help analyze and process environmental data.
      </p>
      <p>
        I am currently enrolled in the Copernicus Master in Digital Earth, an Erasmus Mundus Joint Master, co-funded by the European Union. 
        I am following the Geodata Science track, 
        where I am developing projects related to geospatial data and its applications.
      </p>
    </section>
  );
};

export default About;
