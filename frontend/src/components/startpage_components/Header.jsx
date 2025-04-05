import React from 'react';
import '../styles/startpage_styles/Header.css';

const Header = () => {
  return (
    <div className="header">
      <span className="header-title">Beam-to-Column End Plate Connection</span>
      <div className="window-controls">
        <button className="window-control-button">−</button>
        <button className="window-control-button">⟳</button>
        <button className="window-control-button">×</button>
      </div>
    </div>
  );
};

export default Header;