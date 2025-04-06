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

                // Group content by title
                const groupedContent = response.data.reduce((acc, item) => {
                    const existingTab = acc.find((tab) => tab.title === item.title);
                    if (existingTab) {
                        existingTab.items.push({ name: item.name, image: item.image });
                    } else {
                        acc.push({
                            title: item.title,
                            items: [{ name: item.name, image: item.image }],
                        });
                    }
                    return acc;
                }, []);

                setTabContent(groupedContent);

                // Set the first image as selected by default if available
                if (groupedContent.length > 0 && groupedContent[0].items[0]?.image) {
                    setSelectedImage(groupedContent[0].items[0].image);
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
                {tabContent.map((tab) => (
                    <TabPanel key={tab.title} header={tab.title}>
                        <div className="content-container">
                            {tab.items.map((item, index) => (
                                <div key={index} className="image-display">
                                    {item.image ? (
                                        <div className="image-selection-container">
                                            <div className="content-name">{item.name}</div>
                                            <div className="image-wrapper">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="content-image"
                                                    onError={(e) => {
                                                        console.error(`Failed to load image: ${item.image}`);
                                                    }}
                                                />
                                            </div>
                                            <button
                                                className={`toggle-button ${selectedImage === item.image ? 'active' : ''}`}
                                                onClick={() => handleToggle(item.image)}
                                            />
                                        </div>
                                    ) : (
                                        <div className="no-image">No image available</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                ))}
            </TabView>

            <StartButton connectionName={connectionName} contentData={tabContent} selectedImage={selectedImage} />
        </div>
    );
};

export default TabContent;