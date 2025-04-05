import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';
import { useTheme } from './Theme';
import '../styles/tabs_content.css';

const TabContent = ({ connectionName }) => {
    const [tabContent, setTabContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const { darkMode } = useTheme();

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/tab-content/${connectionName}/`);
                console.log('Tab Content API Response:', response.data);
                setTabContent(response.data);
            } catch (error) {
                console.error('Error fetching tab content:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [connectionName]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (tabContent.length === 0) {
        return <p>No content available for this tab.</p>;
    }

    return (
        <div className={`tabs-content-container ${darkMode ? 'dark-mode' : ''}`}>
            <TabView>
                {tabContent.map((content) => (
                    <TabPanel key={content.id} header={content.title}>
                        <div className="content-container">
                            <div className="content-header">
                                <h2>{content.name}</h2>
                            </div>
                            <div className="image-display">
                                {content.image ? (
                                    <img
                                        src={content.image}
                                        alt={content.name}
                                        className="content-image"
                                        onError={(e) => {
                                            console.error(`Failed to load image: ${content.image}`);
                                        }}
                                    />
                                ) : (
                                    <div className="no-image">No image available</div>
                                )}
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </TabView>
        </div>
    );
};

export default TabContent;