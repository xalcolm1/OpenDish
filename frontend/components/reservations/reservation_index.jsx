import React from 'react';


const ReservationIndex = props => {
    return (
        <ul className="reservation-index">
            {props.currentUser.reservations.map((reservation, idx) => {
                return (
                    <li key={idx} className="reservation-index-item">
                        <div>{props.currentUser.firstname}</div>
                        <div>{reservation.date}</div>
                        
                     </li>
                )
            })}
        </ul>
    )
};

// is this the best place to decide if the reservatoi\on needs to ge moved to the next location.

// what needs to happen next : 
// have the number of people appear  on every reservation

export default ReservationIndex;