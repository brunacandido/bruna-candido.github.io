import React from 'react';
import '../styles/FeaturedProject.scss';
import OilSpillImage from '../assets/oil-spill-segmentation.png';

const FeaturedProject: React.FC = () => {
  return (
    <section id="featured-project" className="featured-project">
      <div className="fp-inner">
        <div className="fp-content">
          <p className="fp-eyebrow">Featured Project</p>
          <h2 className="fp-title">Oil Spill Detection from SAR Imagery</h2>
          <p className="fp-desc">
            Deep learning segmentation of oil spills in Sentinel-1 SAR imagery using a U-Net
            architecture. Developed during an internship at CMCC — Euro-Mediterranean Centre on
            Climate Change — as part of the Copernicus Master program. The workflow detects marine
            pollution from satellite data at operational scale.
          </p>
          <ul className="fp-stack">
            {['Sentinel-1 SAR', 'U-Net', 'PyTorch', 'Python', 'Deep Learning', 'Remote Sensing'].map(tag => (
              <li key={tag}><span>{tag}</span></li>
            ))}
          </ul>
          <div className="fp-links">
            <a
              href="https://github.com/brunacandido/fast-oil-spill-segmentation-workflow"
              target="_blank"
              rel="noopener noreferrer"
              className="fp-link-primary"
            >
              View on GitHub
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=16sHhDzPcuSQ_utspX583UStK0-7TuJo6"
              target="_blank"
              rel="noopener noreferrer"
              className="fp-link-secondary"
            >
              Read Report
            </a>
          </div>
        </div>
        <div className="fp-image">
          <img
            src={OilSpillImage}
            alt="U-Net segmentation output on Sentinel-1 SAR imagery showing detected oil spills"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
