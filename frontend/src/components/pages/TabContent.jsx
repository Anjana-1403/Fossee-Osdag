import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';
import { useTheme } from './Theme';
import StartButton from '../startpage_components/startbutton';
import '../styles/tabs_content.css';

const TabContent = ({ connectionName }) => {
    const [tabContent, setTabContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState(null);
    const { darkMode } = useTheme();

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/tab-content/${connectionName}/`);
                console.log('Tab Content API Response:', response.data);
                setTabContent(response.data);
                // Set the first image as selected by default if available
                if (response.data.length > 0 && response.data[0].image) {
                    setSelectedImage(response.data[0].image);
                }
            } catch (error) {
                console.error('Error fetching tab content:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [connectionName]);

    const handleToggle = (value) => {
        setSelectedImage((prev) => (prev === value ? null : value));
    };

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
                           
                            <div className="image-display">
                                {content.image ? (
                                    <div className="image-selection-container">
                                        <div className="content-name">{content.name}</div>
                                        <div className="image-wrapper">
                                            <img
                                                src={content.image}
                                                alt={content.name}
                                                className="content-image"
                                                onError={(e) => {
                                                    console.error(`Failed to load image: ${content.image}`);
                                                }}
                                            />
                                        </div>
                                        <button
                                            className={`toggle-button ${selectedImage === content.image ? 'active' : ''}`}
                                            onClick={() => handleToggle(content.image)}
                                        />
                                    </div>
                                ) : (
                                    <div className="no-image">No image available</div>
                                )}
                            </div>
                        </div>
                    </TabPanel>
                ))}
            </TabView>

            <StartButton connectionName={connectionName} contentData={tabContent} selectedImage={selectedImage} />
        </div>
    );
};

export default TabContent;