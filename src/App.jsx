import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SeatMap from './components/SeatMap';
import BookingForm from './components/BookingForm';
import "./styles/App.css";
import toast, { Toaster } from 'react-hot-toast';

const PopupModal = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className="popup-modal">
            <div className="popup-content">
                <p>The server is hosted on a free tier and may take a moment to wake up. Please wait or refresh if the seat map does not load.</p>
                <button onClick={onClose}>Got it</button>
            </div>
        </div>
    );
};

const App = () => {
    const [rows, setRows] = useState([]); 
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(true);
    const [bookedSeats, setBookedSeats] = useState([]); 

    const fetchSeats = async () => {
        try {
            const response = await axios.get('https://bookunstopbackend.onrender.com/seats');
            console.log('Fetched rows:', response.data); // Log fetched data
            setRows(response.data); 
        } catch (error) {
            const errorMessage = error.response?.data || "Failed to fetch seat map.";
            setError(errorMessage);
            toast.error(errorMessage); // Show toast notification for errors
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        fetchSeats(); 
    }, []); // Fetch seats when the component mounts

    const handleBookingSuccess = async (data) => {
        toast.success("Seats booked successfully!"); 
        setBookedSeats(data.seats); 
        await fetchSeats(); 
    };

    return (
        <>
            <Toaster />
            <PopupModal show={showPopup && loading} onClose={() => setShowPopup(false)} />
            <div className="main-div">
                <h1>Train Ticket Booking System</h1>
                <div className='secondary-div'>
                    <div className='secondary-primary'>
                        <div className="booking-form">
                            <BookingForm onBookingSuccess={handleBookingSuccess} />
                        </div>
                        <div className="booked-seats">
                            <h2>Your Booked Seats</h2>
                            {bookedSeats.length > 0 ? (
                                <ul>
                                    {bookedSeats.map((seat, index) => (
                                        <li key={index}>
                                            Row {seat.row}, Seat {seat.seat}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p>No seats booked yet.</p>
                            )}
                        </div>
                    </div>
                    {loading ? (
                        <p>Loading seat map...</p>
                    ) : (
                        <div className="seatmap">
                            <SeatMap rows={rows} />
                        </div>
                    )}
                </div>
                {error && <p className="error-message">{error}</p>}
            </div>
        </>
    );
};

export default App;
