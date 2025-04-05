import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TabContent from './TabContent';
import '../styles/tabs.css';

const Tabs = () => {
    const [tabs, setTabs] = useState([]);
    const { sidebarname, tabname } = useParams(); // Get sidebarname and tabname from the URL
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(tabname || null); // Initialize with tabname from URL

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/tabs/');
                console.log('Tabs API Response:', response.data); // Log the response
                setTabs(response.data);

                // If no tabname is in the URL, default to the first tab
                if (response.data.length > 0 && !tabname) {
                    const defaultTab = response.data[0].name;
                    setActiveTab(defaultTab);
                    navigate(`/${sidebarname}/${defaultTab}`); // Update the URL with the default tab
                }
            } catch (error) {
                console.error('Error fetching tabs:', error);
            }
        };

        fetchTabs();
    }, [sidebarname, tabname, navigate]);

    useEffect(() => {
        // Update activeTab whenever tabname changes in the URL
        if (tabname) {
            setActiveTab(tabname);
        }
    }, [tabname]);

    const handleTabClick = (tab) => {
        setActiveTab(tab.name); 
        navigate(`/${sidebarname}/${tab.name}`); 
    };

    return (
        <div>
            <ul className="tab-list">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`tab-item ${activeTab === tab.name ? 'active' : ''}`}
                        onClick={() => handleTabClick(tab)} // Pass the tab object
                    >
                        {tab.name}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {activeTab && <TabContent connectionName={activeTab} />}
            </div>
        </div>
    );
};

export default Tabs;