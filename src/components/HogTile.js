import React, { useState } from 'react';
import { Card, Button } from 'semantic-ui-react';

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const { name, image, specialty, weight, greased, 'highest medal achieved': highestMedal } = hog;

    const toggleDetails = () => setShowDetails(prev => !prev);

    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Description>
                    <img src={image} alt={name || "Hog image"} style={styles.image} />
                </Card.Description>
                <Button onClick={toggleDetails} primary>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </Button>
            </Card.Content>
            {showDetails && (
                <Card.Content extra>
                    <div style={styles.details}>
                        <p><strong>Specialty:</strong> {specialty}</p>
                        <p><strong>Weight:</strong> {weight}</p>
                        <p><strong>Greased:</strong> {greased ? 'Yes' : 'No'}</p>
                        <p><strong>Highest Medal:</strong> {highestMedal}</p>
                    </div>
                    <Button color='red' onClick={() => setIsVisible(false)}>
                        Hide
                    </Button>
                </Card.Content>
            )}
        </Card>
    );
};

// Simple styles for better presentation
const styles = {
    image: {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '5px',
        marginBottom: '10px',
    },
    details: {
        marginTop: '10px',
    },
};

export default HogTile;
