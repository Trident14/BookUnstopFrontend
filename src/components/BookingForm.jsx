// src/components/BookingForm.js
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';


const BookingForm = ({ onBookingSuccess }) => {
    const [username, setUsername] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post('http://localhost:3001/api/book', {
                username,
                numberOfSeats: parseInt(numberOfSeats)
            });
            onBookingSuccess(response.data); // Call the success handler
            setMessage("Seats booked successfully!");
            toast.success("Seats booked successfully!");
        } catch (error) {
            setMessage(error.response.data || "Error booking seats.");
            toast.error("Error booking seats.");
        }
    };

    return (
        <div>
            <h2>Book Your Seats</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <select value={numberOfSeats} onChange={(e) => setNumberOfSeats(e.target.value)}>
                    {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                        <option key={num} value={num}>{num}</option>
                    ))}
                </select>
                <button type="submit">Book Seats</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookingForm;
