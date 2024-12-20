import React from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Tabs from './components/MasterProjectsTabs';
import Skills from './components/SkillsProgramming';
import Experiences from './components/Experiences';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Tabs />
      <Experiences/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
