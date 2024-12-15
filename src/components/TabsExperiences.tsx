import React, { useState } from 'react';
import Education from './Education';
import WorkExperience from './WorkExperience';
import '../styles/TabsExperiences.scss';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="tabs" className="tabs-section">
      <div className="tabs">
        <button
          className={activeTab === 'education' ? 'active' : ''}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          className={activeTab === 'work' ? 'active' : ''}
          onClick={() => setActiveTab('work')}
        >
          Work Experience
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'education' && <Education />}
        {activeTab === 'work' && <WorkExperience />}
      </div>
    </section>
  );
};

export default Tabs;
