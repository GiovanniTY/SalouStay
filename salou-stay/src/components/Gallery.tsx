import React, { useState } from 'react';
import '../Gallery.css';

const Gallery: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/public/img/PHOTO-2024-08-19-16-19-12 2.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-12 3.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-12 4.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-12.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-13 2.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-13 3.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-13 4.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-13.jpg',
        '/public/img/PHOTO-2024-08-19-16-19-14 2.jpg',
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section className="gallery">
            <h2 id='gallery-title'>Gallerie</h2>
            <div className="gallery-container">
                <div
                    className="gallery-slide"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Immagine ${index + 1}`} />
                    ))}
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

/* const Gallery: React.FC = () => {
    return (
        <section className="gallery">
            <h2>Galleria</h2>
            <div>
                <img src="/public/img/PHOTO-2024-08-19-16-19-12 2.jpg" alt="" />
                <img src="/public/img/PHOTO-2024-08-19-16-19-12 3.jpg" />
                <img src="/public/img/PHOTO-2024-08-19-16-19-12 4.jpg" alt="Immagine 3" />
                <img src="/public/img/PHOTO-2024-08-19-16-19-12.jpg" alt="Immagine 3" />
                <img src="/public/img/PHOTO-2024-08-19-16-19-13 2.jpg" alt="Immagine 3" />
            </div>
        </section>
    );
};

export default Gallery;
 */