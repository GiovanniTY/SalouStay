/* import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../BookingSection.css';

const BookingSection = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [totalPrice, setTotalPrice] = useState<number | null>(null);
    const [priceDetails, setPriceDetails] = useState<{ seasonPrice: number, cleaningFee: number } | null>(null);
    const [bookedDates, setBookedDates] = useState<Date[]>([]);

    const seasonPrices: Record<string, number> = {
        'Très haute saison': 107,
        'Haute saison': 96,
        'Moyenne saison': 89,
        'Basse saison': 75,
    };

    const seasonDates = [
        { start: new Date('2024-07-01'), end: new Date('2024-08-31'), season: 'Très haute saison' },
        { start: new Date('2024-09-01'), end: new Date('2024-09-15'), season: 'Haute saison' },
        { start: new Date('2024-09-16'), end: new Date('2024-10-31'), season: 'Moyenne saison' },
        { start: new Date('2024-11-01'), end: new Date('2024-12-20'), season: 'Basse saison' },
        { start: new Date('2024-12-21'), end: new Date('2024-12-31'), season: 'Moyenne saison' },
    ];

    const cleaningFee = 60;

    // Funzione per verificare se una data è prenotata
    const isBooked = (date: Date) => {
        return bookedDates.some(bookedDate =>
            date.toDateString() === bookedDate.toDateString()
        );
    };

    const handleCalculation = () => {
        if (!startDate || !endDate) {
            alert("Veuillez sélectionner les dates de début et de fin.");
            return;
        }

        const start = startDate;
        const end = endDate;
        let total = 0;
        let seasonPriceTotal = 0;

        if (end < start) {
            alert("La date de fin ne peut pas être antérieure à la date de début.");
            return;
        }

        // Verifica se le date sono già prenotate
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            if (isBooked(current)) {
                alert(`La date ${current.toDateString()} est déjà réservée.`);
                return;
            }
        }

        // Calcolare il numero di notti
        const numNights = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        if (numNights <= 0) {
            alert("La durée du séjour doit être d'au moins une nuit.");
            return;
        }

        // Calcolare il prezzo totale in base alla stagione
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            const dateString = current.toISOString().split('T')[0];
            const season = seasonDates.find(season => current >= season.start && current <= season.end);
            if (season) {
                const seasonPrice = seasonPrices[season.season];
                seasonPriceTotal += seasonPrice;
                total += seasonPrice;
            }
        }

        // Aggiungere la spesa per le pulizie
        total += cleaningFee;

        // Impostare i dettagli dei prezzi
        setTotalPrice(total);
        setPriceDetails({
            seasonPrice: seasonPriceTotal,
            cleaningFee
        });
    };

    const handleBook = () => {
        if (!startDate || !endDate) {
            alert("Veuillez sélectionner les dates de début et de fin.");
            return;
        }

        const start = startDate;
        const end = endDate;

        // Verifica se le date sono già prenotate
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            if (isBooked(current)) {
                alert(`La date ${current.toDateString()} est déjà réservée.`);
                return;
            }
        }

        // Aggiungere le date prenotate all'elenco
        const newBookedDates = [];
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            newBookedDates.push(new Date(current));
        }

        setBookedDates([...bookedDates, ...newBookedDates]);
        alert("Réservation effectuée avec succès !");
        setStartDate(null);
        setEndDate(null);
        setTotalPrice(null);
        setPriceDetails(null);
    };

    return (
        <section className="booking-section">
            <h2>Réservez vos vacances</h2>

            <div className="date-picker">
                <label htmlFor="start-date">Date de début :</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    minDate={new Date()}
                    placeholderText="Sélectionnez une date de début"
                    dateFormat="yyyy/MM/dd"
                    filterDate={(date: Date) => !isBooked(date)}
                />

                <label htmlFor="end-date">Date de fin :</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    minDate={startDate ? startDate : new Date()}
                    placeholderText="Sélectionnez une date de fin"
                    dateFormat="yyyy/MM/dd"
                    filterDate={(date: Date) => !isBooked(date)}
                />
            </div>

            <button onClick={handleCalculation} className="calculate-button">Calculer le prix</button>

            {totalPrice !== null && priceDetails && (
                <div className="total-price">
                    <h3>Détails du prix :</h3>
                    <p>Prix pour les nuits: {priceDetails.seasonPrice} €</p>
                    <p>Frais de nettoyage: {priceDetails.cleaningFee} €</p>
                    <h3>Prix total: {totalPrice} €</h3>
                    <button onClick={handleBook} className="book-button">Réserver</button>
                </div>
            )}

            <div className="season-legend">
                <h3>Légende des saisons :</h3>
                <ul>
                    {seasonDates.map((seasonDate, index) => (
                        <li key={index}>
                            <strong>{seasonDate.season}:</strong> {seasonDate.start.toISOString().split('T')[0]} - {seasonDate.end.toISOString().split('T')[0]} (Prix: {seasonPrices[seasonDate.season]} € par nuit)
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BookingSection;
 */