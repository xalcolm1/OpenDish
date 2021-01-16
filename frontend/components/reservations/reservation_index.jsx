import React from 'react';
import { connect } from 'react-redux';
import {deleteReservation} from '../../actions/reservation_actions';

// import DeleteReservation from '../reservations/delete_reservation';


const ReservationIndex = props => {
    // let reservations = props.reservations
    const [rejects] = React.useState({}) 
    
    const handleDelete = (index, reservationId) => {
        return event => {
            event.preventDefault();
            props.deleteReservation(reservationId);
            // window.location.reload(false);
            // setRejects({reservationId: reservationId})
            rejects[reservationId] = reservationId;

            // reservations = reservations.splice(index, 1);
     
        }
    };
   

    //posible solution to deletion, if the index in the deleted indexes don't show the item, if the item is 
    return (
        <ul className="reservation-index">
            {            
                props.reservations.map((reservation, idx) => {
                    if(!(reservation.id in rejects)){

                    let date = new Date(reservation.date).toDateString()

                    return (
                    <li key={idx} className="reservation-index-item">
                        <aside>{props.currentUser.firstname}</aside>

                        <main className="reservation-body">
                            <div>{reservation.name}</div>
                            <div>{reservation.address}</div>
                            <div>{date}</div>

                        </main>
                        <div className='editDeleteArea'>
                            <button onClick={handleDelete(idx, reservation.id)}>Cancel Reservation</button>
                            <button onClick={handleDelete(idx, reservation.id)}>Edit Reservation</button>
                        </div>

                    </li>
                    )
                }})

            }

        </ul>
    )
};

// is this the best place to decide if the reservatoi\on needs to ge moved to the next location.

// what needs to happen next : 
// have the number of people appear  on every reservation
const mSTP = state =>({
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
})


export default connect(mSTP, mDTP)(ReservationIndex);