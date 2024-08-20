// src/components/MapComponent.tsx
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Impostazioni della mappa
const containerStyle = {
    width: '100%',
    height: '400px'  // Imposta l'altezza della mappa
};

// Coordinate dell'appartamento (modifica con le coordinate reali)
const center = {
    lat: 41.07775,  // Inserisci la latitudine
    lng: 1.25785    // Inserisci la longitudine
};

const MapComponent: React.FC = () => {
    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''} 
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}  // Livello di zoom
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;  // Assicurati che ci sia l'esportazione predefinita
