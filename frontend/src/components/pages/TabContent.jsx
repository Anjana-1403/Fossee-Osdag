import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import '../styles/tabs_content.css';

const TabContent = ({ connectionName }) => {
    const [tabContent, setTabContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedConnectionType, setSelectedConnectionType] = useState(null);

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

    const handleSelectionChange = (value, name) => {
        setSelectedConnectionType(value);
        console.log(`Selected Connection Type: ${name}`);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (tabContent.length === 0) {
        return <p>No content available for this tab.</p>;
    }

    return (
        <div className="connection-grid">
            {tabContent.map((content) => (
                <div key={content.id} className="connection-option">
                    <h3>{content.title}</h3>
                    <div className={`connection-image-container ${selectedConnectionType === content.id ? 'selected' : ''}`}>
                        {content.image ? (
                            <img
                                src={content.image}
                                alt={content.title}
                                className="connection-image"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${content.image}`);
                                }}
                            />
                        ) : (
                            <div className="no-image">No image available</div>
                        )}
                        <RadioButton
                            inputId={`connection-${content.id}`}
                            name="connectionType"
                            value={content.id}
                            onChange={(e) => handleSelectionChange(e.value, content.title)} // Pass the name
                            checked={selectedConnectionType === content.id}
                            className="connection-radio"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TabContent;