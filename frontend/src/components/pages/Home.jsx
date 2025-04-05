import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import Sidebar from './Sidebar';
import { useTheme } from './Theme'; 
import '../styles/index_page.css';

const Home = () => {
    const { sidebarname, tabname } = useParams(); // Get both sidebarname and tabname from the URL
    const navigate = useNavigate();
    const { darkMode } = useTheme();
    const [activeLeftPanel, setActiveLeftPanel] = useState(sidebarname || 'Welcome'); // Initialize with sidebarname or default to 'Welcome'

    const handleLeftMenuClick = (item) => {
        setActiveLeftPanel(item.name); // Update the active left panel state
        navigate(`/${item.name}`); // Navigate to the selected sidebarname
    };

    useEffect(() => {
        // Sync the activeLeftPanel with the sidebarname from the URL
        if (sidebarname) {
            setActiveLeftPanel(sidebarname);
        }
    }, [sidebarname]);

    return (
        <div className={`app-container ${darkMode ? 'dark-theme' : ''}`}>
            <div className="main-layout">
                {/* Sidebar Component */}
                <Sidebar
                    activeLeftPanel={activeLeftPanel} // Pass the active left panel state
                    setActiveLeftPanel={setActiveLeftPanel} // Allow Sidebar to update the state
                />

                {/* Main Content Area */}
                <div className="main-content">
                    {activeLeftPanel === 'Connection' ? (
                        <Tabs /> // Render Tabs if 'Connection' is active
                    ) : activeLeftPanel === 'Welcome' ? (
                        <div className="welcome-message">
                            <h1>Welcome to Osdag</h1>
                        </div>
                    ) : (
                        <div className="no-content-message">
                            <h1>Nothing is added</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;