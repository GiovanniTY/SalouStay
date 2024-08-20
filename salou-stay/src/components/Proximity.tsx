import React, { useEffect, useRef } from 'react';
import '../Proximity.css';

const Proximity: React.FC = () => {
    // Ref for referencing elements to animate
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Function to apply the animation class
        const handleScroll = () => {
            itemRefs.current.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    item.classList.add('animate');
                }
            });
        };

        // Add the scroll event listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to animate elements visible on load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="proximity">
            <h2 className="proximity-title">Nearby</h2>
            <div className="proximity-item" ref={el => el && (itemRefs.current[0] = el)}>
                <div className="proximity-text">
                    <h3>PortAventura World</h3>
                    <p>
                        Located in Salou, near Tarragona, it is one of the largest theme parks in Europe.
                        The park is divided into five themed areas: Mediterranean, Polynesia, China, Mexico, and Far West, each offering
                        attractions, shows, and restaurants inspired by the culture and traditions of these regions. Some of the most famous attractions
                        include thrilling roller coasters like "Shambhala" and "Dragon Khan".
                    </p>
                </div>
                <div className="proximity-image">
                    <img src="/public/activ/WhatsApp Image 2024-08-19 at 19.10.09 (2).jpeg" alt="PortAventura World" />
                </div>
            </div>
            <div className="proximity-item reverse" ref={el => el && (itemRefs.current[1] = el)}>
                <div className="proximity-text">
                    <h3>Ferrari Land</h3>
                    <p>
                        Adjacent to PortAventura, Ferrari Land is dedicated to the world of Ferrari and sports cars. The park offers exciting attractions inspired by speed and automotive technology,
                        such as the "Red Force" roller coaster, the highest and fastest in Europe. Ferrari Land pays tribute to the Formula 1 legend and the Ferrari brand.
                    </p>
                </div>
                <div className="proximity-image">
                    <img src="/public/activ/WhatsApp Image 2024-08-19 at 19.10.09.jpeg" alt="Ferrari Land" />
                </div>
            </div>
            <div className="proximity-item" ref={el => el && (itemRefs.current[2] = el)}>
                <div className="proximity-text">
                    <h3>Aquópolis</h3>
                    <p>
                        Located in La Pineda, a seaside resort close to Salou, Aquópolis is a water park offering a wide range of water attractions, including dizzying slides, wave pools, and areas specially designed for children. It’s the perfect place to cool off and have fun with the family on hot summer days.
                    </p>
                </div>
                <div className="proximity-image">
                    <img src="/public/activ/WhatsApp Image 2024-08-19 at 19.10.09 (1).jpeg" alt="Aquópolis" />
                </div>
            </div>
        </section>
    );
};

export default Proximity;
