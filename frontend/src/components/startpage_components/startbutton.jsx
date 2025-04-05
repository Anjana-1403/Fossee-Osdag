import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

const StartButton = ({ connectionName, contentData, className }) => {
    const navigate = useNavigate();

    const handleStartClick = () => {
        navigate('/start', { 
            state: { 
                connectionName,
                selectedContent: contentData
            } 
        });
    };

    return (
        <div className={`start-button-container ${className || ''}`}>
            <Button 
                label="Start" 
                icon="pi pi-play" 
                className="start-button"
                onClick={handleStartClick}
            />
        </div>
    );
};

export default StartButton;