import React from 'react';
import MapComponent from './Map';
import '../MapSection.css';
const MapSection: React.FC = () => {
    return (
        <section className="map-section">
            <h2>Localisation de l'Appartement</h2>
            <MapComponent />
        </section>
    );
};

export default MapSection;