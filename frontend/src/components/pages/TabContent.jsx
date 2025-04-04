import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RadioButton } from 'primereact/radiobutton';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import '../styles/tabs_content.css';

const TabContent = ({ connectionId, onSelectionChange, selectedConnectionType, navigate }) => {
    const [tabContent, setTabContent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTabContent = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`http://localhost:8000/api/tab-content/${connectionId}/`);
                console.log("Received tab content:", response.data);
                setTabContent(response.data);
            } catch (error) {
                console.error('Error fetching tab content:', error);
                setError('Failed to load connection types. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTabContent();
    }, [connectionId]);

    const handleSelectionChange = (value, name) => {
        if (onSelectionChange) {
            onSelectionChange(value);
        }
        navigate(`/${name}`); 
    };

    if (loading) {
        return (
            <div className="loading-container">
                <ProgressSpinner />
                <p>Loading connection types...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <Message severity="error" text={error} />
            </div>
        );
    }

    if (tabContent.length === 0) {
        return (
            <div className="empty-content">
                <Message severity="info" text="No connection types available for this category." />
            </div>
        );
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