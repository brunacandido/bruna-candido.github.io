import React from 'react';
import '../styles/Home.scss';
import brunaPhoto from '../assets/bruna-photo.jpg';  // Importe a imagem que você deseja usar

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={brunaPhoto} alt="Bruna Cândido" className="home-image" />
        <div className="text-content">
          <h1>Hello, I'm Bruna Cândido</h1>
          <p>Oceanographer | Software Developer | Passionate about Technology and Science</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
