#!/bin/bash

# Diretórios principais
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles

# Componentes (exemplo de estrutura)
echo "Criando componentes..."

# Componente Header
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Header
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Header/Header.tsx
import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">My Portfolio</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
EOL

# Componente Home
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Home
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Home/Home.tsx
import React from 'react';
import './Home.scss';

const Home: React.FC = () => {
  return (
    <section id="home" className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>This is a brief introduction about myself.</p>
    </section>
  );
}

export default Home;
EOL

# Componente About
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/About
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/About/About.tsx
import React from 'react';
import './About.scss';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer and software engineer.</p>
    </section>
  );
}

export default About;
EOL

# Componente Projects
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Projects
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Projects/Projects.tsx
import React from 'react';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of the project goes here.</p>
      </div>
    </section>
  );
}

export default Projects;
EOL

# Componente Contact
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Contact
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Contact/Contact.tsx
import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Get in touch with me through the contact form or social links.</p>
    </section>
  );
}

export default Contact;
EOL

# Componente Footer
mkdir -p ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Footer
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2024 My Portfolio</p>
    </footer>
  );
}

export default Footer;
EOL

# Estilos
echo "Criando arquivos SCSS..."

# Estilos globais
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/App.scss
body {
  background-color: #121212; 
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.App {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; /* Garante que ocupe toda a largura */
}

a {
  color: #0099ff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

h1, h2, h3 {
  color: #e0f7fa;
}
EOL

# Estilo do Header
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/Header.scss
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px; /* Ajuste para tornar a barra mais fina */
  background-color: #1e1e1e;
  color: #ffffff;
  width: 100%; /* Garante que ocupe toda a largura */

  .logo {
    font-size: 1.6rem; /* Reduzido o tamanho da logo */
    font-weight: bold;
    color: #00bcd4;
  }

  nav ul {
    list-style-type: none;
    display: flex;
  }

  nav li {
    margin: 0 15px; /* Reduzi o espaço entre os itens */
  }

  nav a {
    color: #e0f7fa;
    font-size: 1rem;
  }

  nav a:hover {
    color: #0099ff;
  }
}
EOL

# Estilo da Home
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/Home.scss
.home {
  text-align: center;
  padding: 50px;
  background-color: #263238;
  color: #ffffff;
  border-bottom: 2px solid #0099ff;
  width: 100%; /* Garante que ocupe toda a largura */

  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.25rem;
    color: #b0bec5;
  }
}
EOL

# Estilo do About
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/About.scss
.about {
  padding: 50px;
  background-color: #37474f;
  color: #ffffff;
  text-align: center;
  border-bottom: 2px solid #0099ff;
  width: 100%; /* Garante que ocupe toda a largura */

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #00bcd4;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #b0bec5;
  }
}
EOL

# Estilo do Projects
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/Projects.scss
.projects {
  padding: 50px;
  background-color: #263238;
  color: #ffffff;
  text-align: center;
  border-bottom: 2px solid #0099ff;
  width: 100%; /* Garante que ocupe toda a largura */

  .project {
    background-color: #455a64;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h3 {
      color: #00bcd4;
      font-size: 1.5rem;
    }

    p {
      color: #b0bec5;
      font-size: 1rem;
    }

    &:hover {
      background-color: #607d8b;
      transform: scale(1.05);
      transition: all 0.3s ease-in-out;
    }
  }
}
EOL

# Estilo do Contact
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/Contact.scss
.contact {
  padding: 50px;
  background-color: #37474f;
  color: #ffffff;
  text-align: center;
  border-bottom: 2px solid #0099ff;
  width: 100%; /* Garante que ocupe toda a largura */

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #00bcd4;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.6;
    color: #b0bec5;
  }
}
EOL

# Estilo do Footer
cat <<EOL > ~/Documents/plus-2024-winter/portfolio/bruna-candido.github.io/src/styles/Footer.scss
.footer {
  padding: 20px;
  background-color: #1e1e1e;
  color: #ffffff;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%; /* Garante que ocupe toda a largura */
}

.footer p {
  font-size: 1rem;
  color: #b0bec5;
}
EOL

echo "Estrutura de componentes e estilos criada com sucesso!"
