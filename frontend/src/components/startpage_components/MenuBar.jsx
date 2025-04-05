import React from 'react';
import '../styles/startpage_styles/MenuBar.css';

const MenuBar = () => {
  return (
    <div className="menu-bar">
      <span className="menu-item">File</span>
      <span className="menu-item">Edit</span>
      <span className="menu-item">Graphics</span>
      <span className="menu-item">Database</span>
      <span className="menu-item">Help</span>
    </div>
  );
};

export default MenuBar;