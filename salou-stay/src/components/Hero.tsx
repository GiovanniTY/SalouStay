import React from 'react';
import '../Hero.css';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <img src="img/view2.jpg" alt="Salou" />
            <div className="hero-text">
                <h1>Réservez vos vacances à Salou !</h1>
                <p>Découvrez notre appartement idéalement situé avec vue sur la mer 🌊</p>
            </div>
        </div>
    );
};

export default Hero;








