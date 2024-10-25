// src/components/SeatMap.js
import React from 'react';

const SeatMap = ({ rows }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2>Seat Availability</h2>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} style={{ margin: '5px' }}>
                    Row {rowIndex + 1}: {row.map((seat, seatIndex) => (
                        <span key={seatIndex} style={{
                            padding: '10px',
                            margin: '2px',
                            backgroundColor: seat === null ? 'lightgreen' : 'lightcoral',
                            borderRadius: '5px',
                            color: seat === null ? 'black' : 'white'
                        }}>
                            {seat === null ? `S${seatIndex + 1}` : seat}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeatMap;
