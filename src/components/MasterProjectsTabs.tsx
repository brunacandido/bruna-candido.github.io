import React, { useState } from 'react';
import '../styles/Tabs.scss';
import MasterProgram from './MasterProgram';
import Projects from './Projects';
import BigEarthData from './Projects/BigEarthData';
import AdvancedRemoteSensing from './Projects/AdvancedRemoteSensing';
import SpatialDatabases from './Projects/SpatialDatabases';
import '../styles/Projects.scss';
import SpatialAnalysis from './Projects/SpatialAnalysis';
import ViennaTripReport from './Projects/ViennaTripReport';
import BipStorymap from './Projects/BipStorymap';
import OilSpillSegmentation from './Projects/OilSpillSegmentation';

function Tabs() {
  const [activeTab, setActiveTab] = useState('tab');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <section id="master-program-tabs" className="master-program border-bottom">
      <h2>CDE Projects</h2>

      <div className="tabs">
        <button
          className={activeTab === 'tab' ? 'active' : ''} 
          onClick={() => handleTabClick('tab')}>
          CDE Master
        </button>
        <button 
          className={activeTab === 'tab1' ? 'active' : ''} 
          onClick={() => handleTabClick('tab1')}>
          Big Earth Data
        </button>
        <button 
          className={activeTab === 'tab2' ? 'active' : ''} 
          onClick={() => handleTabClick('tab2')}>
          Spatial Analysis
        </button>
        <button 
          className={activeTab === 'tab3' ? 'active' : ''} 
          onClick={() => handleTabClick('tab3')}>
          Spatial Databases
        </button>
        <button 
          className={activeTab === 'tab4' ? 'active' : ''} 
          onClick={() => handleTabClick('tab4')}>
          Advanced Remote Sensing
        </button>
        <button 
          className={activeTab === 'tab5' ? 'active' : ''} 
          onClick={() => handleTabClick('tab5')}>
          Vienna Trip Report
        </button>
        <button 
          className={activeTab === 'tab6' ? 'active' : ''} 
          onClick={() => handleTabClick('tab6')}>
          Quantifying Vulnerability Report
        </button>
        <button 
          className={activeTab === 'tab7' ? 'active' : ''} 
          onClick={() => handleTabClick('tab7')}>
          Internship at CMCC
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'tab' && (
                  <MasterProgram/>
        )}
        {activeTab === 'tab2' && (
                <SpatialAnalysis />

        )}
        {activeTab === 'tab1' && (
            <BigEarthData/>
        )}
        {activeTab === 'tab3' && (
          <SpatialDatabases/>
        )}
        {activeTab === 'tab4' && (
            <AdvancedRemoteSensing/>
        )}
        {activeTab === 'tab5' && (
            <ViennaTripReport/>
        )}
        {activeTab === 'tab6' && (
            <BipStorymap/>
        )}
        {activeTab === 'tab7' && (
            <OilSpillSegmentation/>
        )}
      </div>
    </section>
  );
}

export default Tabs;
