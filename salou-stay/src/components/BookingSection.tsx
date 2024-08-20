import React, { useState } from 'react';
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

    const cleaningFee = 50;

    // Function to check if a date is booked
    const isBooked = (date: Date) => {
        return bookedDates.some(bookedDate =>
            date.toDateString() === bookedDate.toDateString()
        );
    };

    const handleCalculation = () => {
        if (!startDate || !endDate) {
            alert("Please select start and end dates.");
            return;
        }

        const start = startDate;
        const end = endDate;
        let total = 0;
        let seasonPriceTotal = 0;

        if (end < start) {
            alert("The end date cannot be earlier than the start date.");
            return;
        }

        // Check if dates are already booked
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            if (isBooked(current)) {
                alert(`The date ${current.toDateString()} is already booked.`);
                return;
            }
        }

        // Calculate the number of nights
        const numNights = Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1;
        if (numNights <= 0) {
            alert("The stay must be at least one night.");
            return;
        }

        // Calculate the total price based on the season
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            const dateString = current.toISOString().split('T')[0];
            const season = seasonDates.find(season => current >= season.start && current <= season.end);
            if (season) {
                const seasonPrice = seasonPrices[season.season];
                seasonPriceTotal += seasonPrice;
                total += seasonPrice;
            }
        }

        // Add cleaning fee
        total += cleaningFee;

        // Set price details
        setTotalPrice(total);
        setPriceDetails({
            seasonPrice: seasonPriceTotal,
            cleaningFee
        });
    };

    const handleBook = () => {
        if (!startDate || !endDate) {
            alert("Please select start and end dates.");
            return;
        }

        const start = startDate;
        const end = endDate;

        // Check if dates are already booked
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            if (isBooked(current)) {
                alert(`The date ${current.toDateString()} is already booked.`);
                return;
            }
        }

        // Add booked dates to the list
        const newBookedDates = [];
        for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
            newBookedDates.push(new Date(current));
        }

        setBookedDates([...bookedDates, ...newBookedDates]);
        alert("Booking successful!");
        setStartDate(null);
        setEndDate(null);
        setTotalPrice(null);
        setPriceDetails(null);
    };

    return (
        <section className="booking-section">
            <h2>Book Your Vacation</h2>

            <div className="date-picker">
                <label htmlFor="start-date">Start Date:</label>
                <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    minDate={new Date()}
                    placeholderText="Select a start date"
                    dateFormat="yyyy/MM/dd"
                    filterDate={(date: Date) => !isBooked(date)}
                />

                <label htmlFor="end-date">End Date:</label>
                <DatePicker
                    selected={endDate}
                    onChange={(date: Date | null) => setEndDate(date)}
                    minDate={startDate ? startDate : new Date()}
                    placeholderText="Select an end date"
                    dateFormat="yyyy/MM/dd"
                    filterDate={(date: Date) => !isBooked(date)}
                />
            </div>

            <button onClick={handleCalculation} className="calculate-button">Calculate Price</button>

            {totalPrice !== null && priceDetails && (
                <div className="total-price">
                    <h3>Price Details:</h3>
                    <p>Price for nights: {priceDetails.seasonPrice} €</p>
                    <p>Cleaning Fee: {priceDetails.cleaningFee} €</p>
                    <h3>Total Price: {totalPrice} €</h3>
                    <button onClick={handleBook} className="book-button">Book</button>
                </div>
            )}

            <div className="season-legend">
                <h3>Season Legend:</h3>
                <ul>
                    {seasonDates.map((seasonDate, index) => (
                        <li key={index}>
                            <strong>{seasonDate.season}:</strong> {seasonDate.start.toISOString().split('T')[0]} - {seasonDate.end.toISOString().split('T')[0]} (Price: {seasonPrices[seasonDate.season]} € per night)
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default BookingSection;
