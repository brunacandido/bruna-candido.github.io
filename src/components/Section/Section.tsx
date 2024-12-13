import React from 'react';
import '../../styles/Section.scss'

interface SectionProps {
  title: string;
  content: string;
  backgroundColor: string;
  titleColor: string;
}

const Section: React.FC<SectionProps> = ({ title, content, backgroundColor, titleColor }) => {
  return (
    <div className="section" style={{ backgroundColor }}>
      <h2 className="section-title" style={{ color: titleColor }}>
        {title}
      </h2>
      <p className="section-content">{content}</p>
    </div>
  );
};

export default Section;
