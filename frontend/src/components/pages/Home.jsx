import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tabs from './Tabs';
import Sidebar from './Sidebar';
import { useTheme } from './Theme'; 
import '../styles/index_page.css';

const Home = () => {
    const { tabName } = useParams();
    const navigate = useNavigate();
    const { darkMode } = useTheme();
    const [activeLeftPanel, setActiveLeftPanel] = useState(tabName || 'Welcome');

    const handleLeftMenuClick = (item) => {
        navigate(`/${item.name}`);
        setActiveLeftPanel(item.name);
    };

    useEffect(() => {
        if (tabName) {
            setActiveLeftPanel(tabName);
        }
    }, [tabName]);

    return (
        <div className={`app-container ${darkMode ? 'dark-theme' : ''}`}>
            <div className="main-layout">
                <Sidebar
                    activeLeftPanel={activeLeftPanel}
                    setActiveLeftPanel={setActiveLeftPanel}
                    handleLeftMenuClick={handleLeftMenuClick}
                />

                <div className="main-content">
                    {activeLeftPanel === 'Connection' ? (
                        <Tabs />
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