// src/components/Features.tsx
import React from 'react';
import '../Features.css';

const Features: React.FC = () => {
    return (
        <section className="features">
            <h2>Découvrez notre Appartement à Salou 🇪🇸</h2>
            <p>Découvrez notre appartement de 50m² offrant une vue sur la mer 🌊. Situé à deux pas de la plage 🏖, il est parfait pour des vacances en famille.</p>
            
            <h3 id='caract'>CARACTÉRISTIQUES :</h3>
            <div className="features-container">
                <div className="feature-item">
                    <div className="icon">🛏️</div>
                    <h3>2 Chambres</h3>
                    <p>1 lit double et 2 lits simples</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🛋️</div>
                    <h3>Canapé-lit</h3>
                    <p>Pour 2 personnes</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🚿</div>
                    <h3>Salle de Bain</h3>
                    <p>Bien équipé</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🍳</div>
                    <h3>Cuisine</h3>
                    <p>Complètement équipée</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🌞</div>
                    <h3>Terrasse</h3>
                    <p>15 m² avec vue sur la mer et protection solaire</p>
                </div>
                <div className="feature-item">
                    <div className="icon">📺</div>
                    <h3>Télé</h3>
                    <p>Avec chaînes françaises</p>
                </div>
                <div className="feature-item">
                    <div className="icon">❄️</div>
                    <h3>Climatisation</h3>
                    <p>Confort toute l'année</p>
                </div>
                <div className="feature-item">
                    <div className="icon">🚗</div>
                    <h3>Parking</h3>
                    <p>Sur demande et selon disponibilités</p>
                </div>
            </div>

            <h3>SITUATION :</h3>
            <p>A 15 minutes de l'aéroport de Reus ✈️, situé au deuxième étage avec ascenseur, accessible pour les personnes à mobilité réduite. A peine une minute à pieds de la plage avec bars, douche 🚿 et promenade. Proche du port et des activités nautiques, ainsi que des commodités : restaurants, pharmacie, boucherie, supermarché. À environ 10 minutes des parcs d'attractions PortAventura, Ferrari Land, et le parc aquatique Aquopolis. Arrêt de bus 🚍 à proximité, ainsi que location de vélos et trottinettes.</p>
            <p>Réservez dès maintenant pour des vacances inoubliables à Salou 😊. Pour plus d'infos, merci de nous contacter en mp. À bientôt ⛱️</p>
        </section>
    );
};

export default Features;
