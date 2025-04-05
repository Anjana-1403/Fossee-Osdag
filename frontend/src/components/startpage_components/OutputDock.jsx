import React from 'react';
import DockHeader from './DockHeader';
import '../styles/startpage_styles/OutputDock.css';

const OutputDock = () => {
  return (
    <div className="output-dock">
      <DockHeader title="Output Dock" />
      
      <div className="dock-content">
        <div className="output-section">
          <h3 className="section-title">Critical Bolt Design</h3>
          
          <div className="form-group">
            <label className="form-label">Diameter (mm)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Property Class</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Shear Demand (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Shear Capacity (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Bearing Capacity (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">βₗᵧ</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Bolt Capacity</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tension Due to Moment (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Prying Force (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tension Demand (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Tension Capacity (kN)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Combined Capacity, I.R</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
        </div>
        
        <div className="output-section">
          <h3 className="section-title">Detailing</h3>
          
          <div className="form-group">
            <label className="form-label">No. of Bolts</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">No. of Columns</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">No. of Rows</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Pitch Distance (mm)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Gauge Distance (mm)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
          
          <div className="form-group">
            <label className="form-label">Cross-centre Gauge (mm)</label>
            <input type="text" className="form-input readonly" readOnly />
          </div>
        </div>
        
        <div className="button-container">
          <button className="action-button full-width">Create Design Report</button>
          <button className="action-button full-width">Save Output</button>
        </div>
      </div>
    </div>
  );
};

export default OutputDock;