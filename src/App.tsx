import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tabs from './components/MasterProjectsTabs';
import Experiences from './components/Experiences';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <FeaturedProject />
      <Tabs />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
