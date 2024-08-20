import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// Map settings
const containerStyle = {
    width: '100%',
    height: '400px'  // Set the map height
};

// Apartment coordinates (replace with real coordinates)
const center = {
    lat: 41.07775,  // Enter the latitude
    lng: 1.25785    // Enter the longitude
};

const MapComponent: React.FC = () => {
    return (
        <LoadScript
            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''} 
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}  // Zoom level
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;  // Ensure there is a default export
