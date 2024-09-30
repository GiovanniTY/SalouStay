import React, { useState } from 'react';
import '../Gallery.css';

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const media = [
        '/img/view.jpg',
        '/img/view2.jpg',
        '/img/view3.jpg',
        '/img/view4.jpg',
        '/img/view5.jpg',
        '/img/view6.jpg',
        '/img/terrasse.jpg',
        '/img/terasse2.jpg',
        '/img/terrasse3.jpg',
        '/img/terrasse4.jpg',
        '/img/salon.jpg',
        '/img/salon2.jpg',
        '/img/salon3.jpg',
        '/img/salon4.jpg',
        '/img/cuisine.jpg',
        '/img/cuisine2.jpg',
        '/img/grandchambre.jpg',
        '/img/grandchambre2.jpg',
        '/img/chambre.jpg',
        '/img/chambre2.jpg',
        '/img/chambre3.jpg',
        '/img/sdb.jpg',
        '/img/sdb2.jpg',
        '/img/plage.jpg',
        '/img/appartement.jpg',
        '/img/appartement2.jpg',
        '/img/appartement3.jpg',
        '/img/route.jpg',
        '/img/route2.jpg',
        '/img/route3.jpg',
        '/img/route4.jpg',
        'img/appartment-tour2.mp4',
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? media.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === media.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="gallery">
            <h2 id="gallery-title">Gallerie</h2>
            <div className="gallery-container">
                <div
                    className="gallery-slide"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {media.map((item, index) => {
                        // Se il file è un video, usa il tag video
                        if (item.endsWith('.mp4')) {
                            return (
                                <video
                                    key={index}
                                    src={item}
                                    autoPlay
                                    loop
                                    muted
                                    controls={false} // Nessun controllo, si riproduce in loop
                                    style={{ width: '100%' }}
                                />
                            );
                        } else {
                            // Altrimenti è un'immagine
                            return (
                                <img key={index} src={item} alt={`Media ${index + 1}`} />
                            );
                        }
                    })}
                </div>
                <button className="gallery-button prev" onClick={handlePrev}>
                    &#10094;
                </button>
                <button className="gallery-button next" onClick={handleNext}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};

export default Gallery;