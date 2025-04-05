import React, { useState } from 'react';
import DockHeader from './DockHeader';
import '../styles/startpage_styles/InputDock.css';

const InputDock = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    connectivity: "Column Flange-Beam Web",
    endPlateType: "Flushed - Reversible Moment",
    columnSection: "Select Section",
    beamSection: "Select Section",
    material: "E 250 (Fe 410 W)A",
    boltDiameter: "All",
    boltType: "Bearing Bolt",
    propertyClass: "All"
  });

  return (
    <div className="input-dock">
      <DockHeader title="Input Dock" />
      
      <div className="dock-content">
        <div className="input-section">
          <h3 className="section-title">Connecting Members</h3>
          
          <div className="form-group">
            <label className="form-label">Connectivity</label>
            <select className="form-select" value={selectedOptions.connectivity}>
              <option>Column Flange-Beam Web</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">End Plate Type</label>
            <select className="form-select" value={selectedOptions.endPlateType}>
              <option>Flushed - Reversible Moment</option>
            </select>
          </div>
        </div>
        
        <div className="input-section">
          <div className="form-group">
            <label className="form-label">Column Section *</label>
            <select className="form-select" value={selectedOptions.columnSection}>
              <option>Select Section</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Beam Section *</label>
            <select className="form-select" value={selectedOptions.beamSection}>
              <option>Select Section</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Material</label>
            <select className="form-select" value={selectedOptions.material}>
              <option>E 250 (Fe 410 W)A</option>
            </select>
          </div>
        </div>
        
        <div className="input-section">
          <h3 className="section-title">Factored Loads</h3>
          
          <div className="form-group">
            <label className="form-label">Bending Moment (kN·m)</label>
            <input type="text" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Shear Force (kN)</label>
            <input type="text" className="form-input" />
          </div>
          
          <div className="form-group">
            <label className="form-label">Axial Force (kN)</label>
            <input type="text" className="form-input" />
          </div>
        </div>
        
        <div className="input-section">
          <h3 className="section-title">Bolt</h3>
          
          <div className="form-group">
            <label className="form-label">Diameter (mm)</label>
            <select className="form-select" value={selectedOptions.boltDiameter}>
              <option>All</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Type</label>
            <select className="form-select" value={selectedOptions.boltType}>
              <option>Bearing Bolt</option>
            </select>
          </div>
          
          <div className="form-group">
            <label className="form-label">Property Class</label>
            <select className="form-select" value={selectedOptions.propertyClass}>
              <option>All</option>
            </select>
          </div>
        </div>
        
        <div className="input-section">
          <h3 className="section-title">End Plate</h3>
        </div>
        
        <div className="button-group">
          <button className="action-button">Reset</button>
          <button className="action-button">Design</button>
        </div>
      </div>
    </div>
  );
};

export default InputDock;