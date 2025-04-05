import React from 'react';
import '../styles/startpage_styles/CenterView.css';

const CenterView = () => {
  return (
    <div className="center-view">
      <div className="view-controls">
        <div className="checkbox-group">
          <div className="checkbox-item">
            <input type="checkbox" id="model" className="checkbox-input" />
            <label htmlFor="model" className="checkbox-label">Model</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="beam" className="checkbox-input" />
            <label htmlFor="beam" className="checkbox-label">Beam</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="column" className="checkbox-input" />
            <label htmlFor="column" className="checkbox-label">Column</label>
          </div>
          <div className="checkbox-item">
            <input type="checkbox" id="endplate" className="checkbox-input" />
            <label htmlFor="endplate" className="checkbox-label">End Plate</label>
          </div>
        </div>
        <div className="axis-controls">
          <div className="axis-item">
            <span className="axis-label x">X</span>
            <div className="axis-box x"></div>
          </div>
          <div className="axis-item">
            <span className="axis-label y">Y</span>
            <div className="axis-box y"></div>
          </div>
          <div className="axis-item">
            <span className="axis-label z">Z</span>
            <div className="axis-box z"></div>
          </div>
        </div>
      </div>
      
      <div className="view-area">
        <div className="coordinate-system">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="blue" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="bottom-panel"></div>
    </div>
  );
};

export default CenterView;