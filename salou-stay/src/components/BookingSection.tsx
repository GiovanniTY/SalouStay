import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../BookingSection.css';

const SEASONAL_PRICES = {
    high: 150,
    low: 100,
};

const HIGH_SEASON_START = new Date('2024-06-01');
const HIGH_SEASON_END = new Date('2024-08-31');

const isHighSeason = (date: Date) => {
    return date >= HIGH_SEASON_START && date <= HIGH_SEASON_END;
};

const checkAvailability = async (date: Date) => {
    const availableDates = [
        new Date('2024-08-20'),
        new Date('2024-08-22'),
    ];
    return availableDates.some(d => d.toDateString() === date.toDateString());
};

const BookingSection: React.FC = () => {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [availability, setAvailability] = useState<string>('');
    const [price, setPrice] = useState<number>(0);

    const handleDateChange = async (date: Date | null) => {
        setStartDate(date);
        if (date) {
            const isAvailable = await checkAvailability(date);
            setAvailability(isAvailable ? 'Disponible' : 'Non Disponible');
            setPrice(isHighSeason(date) ? SEASONAL_PRICES.high : SEASONAL_PRICES.low);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (startDate) {
            alert(`Réservation pour le ${startDate.toDateString()} confirmée au prix de ${price}€ !`);
        }
    };

    return (
        
        <section className="booking-section">
            <h2>Réservez votre date</h2>
            <form onSubmit={handleSubmit}>
                <div className="calendar-container">
                    <DatePicker
                        selected={startDate}
                        onChange={handleDateChange}
                        dateFormat="d MMMM yyyy"
                        placeholderText="Sélectionnez une date"
                        minDate={new Date()}
                    />
                </div>
                <div className="availability">
                    {availability && <p>État : {availability}</p>}
                    {price > 0 && <p>Prix : {price}€</p>}
                </div>
                <button type="submit" disabled={!startDate || availability === 'Non Disponible'}>
                    Réserver
                </button>
            </form>
        </section>
    
    );
};

export default BookingSection;
