import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const MapComponent: React.FC = () => {
  useEffect(() => {
    // Inizializza la mappa
    const map = L.map('map', {
      center: [41.075756, 1.126893], // Coordinate aggiornate
      zoom: 15,
      layers: [
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }),
      ],
    });

    // Crea un'icona personalizzata con Font Awesome
    const fontAwesomeIcon = L.divIcon({
      className: 'custom-icon',
      html: '<i class="fas fa-map-marker-alt" style="color:red; font-size:24px;"></i>', // Icona di Font Awesome
      iconSize: [30, 42],
      iconAnchor: [15, 42],
      popupAnchor: [0, -40],
    });

    // Aggiungi il marker alla mappa
    L.marker([41.075756, 1.126893], { icon: fontAwesomeIcon }) // Coordinate aggiornate
      .addTo(map)
      .bindPopup('Carrer del Sol 70, Salou')
      .openPopup();

    // Pulizia al momento dello smontaggio del componente
    return () => {
      map.remove(); // Rimuovi la mappa per evitare errori di reinizializzazione
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
