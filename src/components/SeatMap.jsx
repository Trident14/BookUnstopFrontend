import React from 'react';
import "../styles/seatMap.css"; 

const SeatMap = ({ rows }) => {
    return (
        <div className="seat-map">
            {Object.keys(rows).map(rowNumber => (
                <div key={rowNumber} className="row">
                    <h4>Row - {rowNumber}</h4>
                    <div className="seats">
                        {rows[rowNumber].map((seat, seatIndex) => (
                            <div
                                key={seatIndex}
                                className={`seat ${seat.booked ? 'booked' : 'available'}`} 
                            >
                                <h1>{seatIndex+1}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SeatMap;
