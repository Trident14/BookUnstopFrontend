import React, { useState } from 'react';
import toast from 'react-hot-toast'; 
import axios from 'axios';
import "../styles/BookingForm.css"

const BookingForm = ({ onBookingSuccess }) => {
    const [username, setUsername] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState(1);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/book', {
                username,
                numberOfSeats: parseInt(numberOfSeats),
            });

            // Call the success handler with the response data
            onBookingSuccess(response.data); // Pass the full response data to the parent component
            toast.success(response.data.message); // Show success notification
        } catch (error) {
            const errorMessage = error.response?.data || "Error booking seats.";
            toast.error(errorMessage); // Show error notification
        }
    };

    return (
        <>
            <div className='form-div'>
                <div><h2>Book Your Seats</h2></div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <select 
                        value={numberOfSeats} 
                        onChange={(e) => setNumberOfSeats(e.target.value)}
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                    <button type="submit">Book Seats</button>
                </form>
            </div>
        </>
    );
};

export default BookingForm;
