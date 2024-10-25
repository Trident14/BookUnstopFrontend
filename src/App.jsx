import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SeatMap from './components/SeatMap';
import BookingForm from './components/BookingForm';
import "./styles/App.css";
import toast, { Toaster } from 'react-hot-toast';

const App = () => {
    const [rows, setRows] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Function to fetch the current seat map from the server
    // const fetchSeatMap = async () => {
    //     setLoading(true); // Set loading to true before fetching
    //     try {
    //         const response = await axios.get('http://localhost:3001/seats');
    //         const seatData = response.data; 

           
    //         const seatMap = Array.from({ length: 12 }, () => Array(7).fill(null)); // 12 rows, 7 seats per row

    //         seatData.forEach(seat => {
    //             const { row, seat: seatNumber, booked } = seat;
    //             if (booked) {
    //                 seatMap[row - 1][seatNumber - 1] = 'Booked'; // Mark as booked
    //             } else {
    //                 seatMap[row - 1][seatNumber - 1] = null; // Mark as available
    //             }
    //         });

    //         setRows(seatMap); 
    //     } catch (error) {
    //         console.error("Error fetching seat map:", error);
    //         toast.error("Error fetching seat map");
    //         setError("Failed to fetch seat data.");
    //     } finally {
    //         setLoading(false); 
    //     }
    // };

    useEffect(() => {
        fetchSeatMap();
    }, []);

    const handleBookingSuccess = (data) => {
        setRows((prevRows) => {
            const newRows = [...prevRows];
            data.seats.forEach(seat => {
                newRows[seat.row - 1][seat.seat - 1] = data.username; 
            });
            return newRows;
        });
    };

    return (
       <>
             <div><Toaster/></div>
            <div className="main-div">
                <h1>Train Ticket Booking System</h1>
                {loading ? (
                    <p>Loading seat map...</p>
                ) : (
                    <div className='secondary-div'>
                        <div  className="booking-form"><BookingForm onBookingSuccess={handleBookingSuccess} /></div>
                        <div className="seatmap"><SeatMap rows={rows} /></div> 
                    </div>
                )}
            </div>
        </>
    );
};

export default App;
