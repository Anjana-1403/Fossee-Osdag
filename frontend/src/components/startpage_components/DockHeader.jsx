import React from 'react';
import '../styles/startpage_styles/DockHeader.css';

const DockHeader = ({ title }) => {
  return (
    <div className="dock-header">
      <span className="dock-title">{title}</span>
      <div className="dock-controls">
        <button className="dock-control-button">□</button>
        <button className="dock-control-button">⨯</button>
      </div>
    </div>
  );
};

export default DockHeader;