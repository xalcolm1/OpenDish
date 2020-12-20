import React from 'react';


const ReservationIndex = props => {
    return (
        <ul>
            {props.currentUser.reservations.map((reservation, idx) => {
                return (
                    <li key={idx}>
                        {props.currentUser.firstname}
                        {reservation.date}
                     </li>
                )
            })}
        </ul>
    )
};

export default ReservationIndex;