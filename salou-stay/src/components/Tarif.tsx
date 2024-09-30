import React from 'react';
import '../Tarif.css'; // Assicurati di avere uno stile CSS per la sezione

const Tarif: React.FC = () => {
    return (
        <section className="tarif-section">
            <h2 id="tarif-title">Tarif</h2>

            <div className="tarif-images">
                {/* Immagini esplicative */}
                <img src="/img/prix.JPG" alt="Descrizione della prima immagine" />
                <img src="/img/prix2.JPG" alt="Descrizione della seconda immagine" />
            </div>

            <p className="tarif-paragraph">
                Pour réserver, vous pouvez nous contacter directement. Un acompte de 20% est
                requis pour confirmer la réservation. En cas d'annulation un mois avant la
                date d'arrivée, l'acompte ne sera pas remboursé.
            </p>
        </section>
    );
};

export default Tarif;
