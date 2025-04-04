import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabContent from './TabContent'; 
import '../styles/tabs.css';

const Tabs = () => {
    const [tabs, setTabs] = useState([]);
    const [activeTab, setActiveTab] = useState(null); 

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/tabs/');
                setTabs(response.data); 
                if (response.data.length > 0) {
                    setActiveTab(response.data[0].id); 
                }
            } catch (error) {
                console.error('Error fetching tabs:', error);
            }
        };

        fetchTabs();
    }, []);

    return (
        <div>
            <ul className="tab-list">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.name}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {activeTab && <TabContent connectionId={activeTab} />}
            </div>
        </div>
    );
};

export default Tabs;