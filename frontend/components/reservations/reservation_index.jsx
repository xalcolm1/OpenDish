import React from 'react';
import { connect } from 'react-redux';
import DeleteReservation from '../reservations/delete_reservation';


const ReservationIndex = props => {


    return (
        <ul className="reservation-index">
            {props.reservations.map((reservation, idx) => {
                let date = new Date(reservation.date).toDateString()
                return (
                   reservation.id ? 
                    <li key={idx} className="reservation-index-item">
                        <aside>{props.currentUser.firstname}</aside>

                        <main className="reservation-body">
                            <div>{reservation.name}</div>
                            <div>{reservation.address}</div>
                            <div>{date}</div>
                            <DeleteReservation reservationId={reservation.id} /> 
                        </main>
                     </li>
                     :
                     <></> 
                )
            })}
        </ul>
    )
};

// is this the best place to decide if the reservatoi\on needs to ge moved to the next location.

// what needs to happen next : 
// have the number of people appear  on every reservation
const mSTP = state =>({
    currentUserId: state.session.id
})
export default connect(mSTP)(ReservationIndex);