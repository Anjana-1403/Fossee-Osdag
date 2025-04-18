import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputSwitch } from 'primereact/inputswitch';
import { Divider } from 'primereact/divider';
import { useTheme } from './Theme';
import { useNavigate } from 'react-router-dom';
import '../styles/index_page.css';

const Sidebar = ({ activeLeftPanel, setActiveLeftPanel }) => {
    const [leftMenuItems, setLeftMenuItems] = useState([]);
    const { darkMode, setDarkMode } = useTheme();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/Base/');
                setLeftMenuItems(response.data);
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };

        fetchMenuItems();
    }, []);

    const handleLeftMenuClick = (item) => {
        setActiveLeftPanel(item.name); // Update the active left panel state
        navigate(`/${item.name}`); // Navigate to the selected sidebarname
    };

    return (
        <div className="left-sidebar">
            <div className="sidebar-header">
                <h1 className="title">OSDAG</h1>
            </div>

            <Divider className="sidebar-divider" />

            <div className="sidebar-menu">
                {leftMenuItems.map((item) => (
                    <Button
                        key={item.name}
                        label={item.name}
                        className={`left-menu-button ${activeLeftPanel === item.name ? 'active' : ''}`}
                        onClick={() => handleLeftMenuClick(item)}
                    />
                ))}
            </div>

            <div className="sidebar-footer">
                <Button 
                    icon="pi pi-question-circle" 
                    label="Help" 
                    className="help-button"
                />

                <div className="dark-mode-container">
                    <span>Dark Mode</span>
                    <InputSwitch
                        checked={darkMode}
                        onChange={(e) => setDarkMode(e.value)}
                        className="theme-switch"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;