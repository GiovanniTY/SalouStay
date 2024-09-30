import React, { useEffect, useRef } from 'react';
import '../Proximity.css';


const Proximity: React.FC = () => {
    // Ref per riferirsi agli elementi che si desidera animare
    const itemRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        // Funzione per applicare la classe di animazione
        const handleScroll = () => {
            itemRefs.current.forEach((item) => {
                const rect = item.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    item.classList.add('animate');
                }
            });
        };

        // Aggiungi l'event listener per lo scroll
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Chiamata iniziale per animare gli elementi visibili al caricamento

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="proximity">
            <h2 className="proximity-title">À Proximité</h2>
            <div className="proximity-item" ref={el => el && (itemRefs.current[0] = el)}>
                <div className="proximity-text">
                    <h3>PortAventura World</h3>
                    <p>
                        Situé à Salou, près de Tarragone, c’est l’un des plus grands parcs à thème en Europe.
                        Le parc est divisé en cinq zones thématiques : Méditerranée, Polynésie, Chine, Mexique et Far West, chacune offrant des
                        attractions, des spectacles et des restaurants inspirés par la culture et les traditions de ces régions. Parmi les attractions les plus célèbres,
                        on trouve des montagnes russes palpitantes comme le "Shambhala" et le "Dragon Khan".
                    </p>
                </div>
                <div className="proximity-image">
                <img src="/activ/panoramica-parque.jpg" alt="Ferrari Land" />
                </div>
            </div>
            <div className="proximity-item reverse" ref={el => el && (itemRefs.current[1] = el)}>
                <div className="proximity-text">
                    <h3>Ferrari Land</h3>
                    <p>
                        Adjacent à PortAventura, Ferrari Land est dédié à l'univers de Ferrari et aux voitures de sport. Le parc propose des attractions excitantes inspirées par la vitesse et la technologie automobile,
                        comme les montagnes russes "Red Force", les plus hautes et les plus rapides d’Europe. Ferrari Land rend hommage à la légende de la Formule 1 et à la marque Ferrari.
                    </p>
                </div>
                <div className="proximity-image">
                    <img src="/activ/ferrari.jpeg" alt="Ferrari Land" />
                </div>
            </div>
            <div className="proximity-item" ref={el => el && (itemRefs.current[2] = el)}>
                <div className="proximity-text">
                    <h3>Aquópolis</h3>
                    <p>
                        Situé à La Pineda, une station balnéaire proche de Salou, Aquópolis est un parc aquatique offrant une large gamme d’attractions aquatiques, y compris des toboggans vertigineux, des piscines à vagues et des zones spécialement conçues pour les enfants. C'est l'endroit idéal pour se rafraîchir et s'amuser en famille lors des chaudes journées estivales.
                    </p>
                </div>
                <div className="proximity-image">
                    <img src="/activ/acquopolis.jpeg" alt="Aquópolis" />
                </div>
            </div>
        </section>
    );
};

export default Proximity;
