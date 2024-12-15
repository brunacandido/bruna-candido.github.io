import React, { useState } from 'react';
import '../styles/Tabs.scss';
import MasterProgram from './MasterProgram';
import Projects from './Projects';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <section id="master-program-tabs" className="master-program border-bottom">
      <h2>Copernicus in Digital Earth Joint Master</h2>

      <div className="tabs">
        <button
          className={activeTab === 'tab' ? 'active' : ''} 
          onClick={() => handleTabClick('tab')}>
          CDE Master
        </button>
        <button 
          className={activeTab === 'tab1' ? 'active' : ''} 
          onClick={() => handleTabClick('tab1')}>
          1st Semester
        </button>
        <button 
          disabled
          className={activeTab === 'tab2' ? 'active' : ''} 
          onClick={() => handleTabClick('tab2')}>
          2nd Semester
        </button>
        <button 
          disabled
          className={activeTab === 'tab3' ? 'active' : ''} 
          onClick={() => handleTabClick('tab3')}>
          3rd Semester
        </button>
        <button 
          disabled
          className={activeTab === 'tab4' ? 'active' : ''} 
          onClick={() => handleTabClick('tab4')}>
          4rd Semester
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'tab' && (
                  <MasterProgram/>
        )}
        {activeTab === 'tab1' && (
                <Projects />

        )}
        {activeTab === 'tab2' && (
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of Project 2.</p>
          </div>
        )}
        {activeTab === 'tab3' && (
          <div className="project">
            <h3>Project 3</h3>
            <p>Description of Project 3.</p>
          </div>
        )}
        {activeTab === 'tab4' && (
          <div className="project">
            <h3>Project 4</h3>
            <p>Description of Project 4.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;
