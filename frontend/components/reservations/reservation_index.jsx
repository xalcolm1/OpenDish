import React from 'react';
import { connect } from 'react-redux';
import { deleteReservation, updateReservation } from '../../actions/reservation_actions';
import ReservationIndexItem from './reservation_index_item';

const ReservationIndex = props => {
    const [rejects] = React.useState({}) 

    
    const handleDelete = (reservationId) => {
        return event => {
            event.preventDefault();
            props.deleteReservation(reservationId);
            rejects[reservationId] = reservationId;
        }
    };


    return (
        <ul className="reservation-index">
            {            
                props.reservations.map((reservation, idx) => {
                    if(!(reservation.id in rejects)){
                        
                    return <ReservationIndexItem userName={props.currentUser.firstname} key={reservation.id} reservation={reservation} action={props.editReservation} delete={handleDelete}/>
 
                }})

            }

        </ul>
    )
};


const mSTP = state =>({
    currentUserId: state.session.id
})

const mDTP = dispatch => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId)),
    editReservation: (reservation) => dispatch(updateReservation(reservation))
})


export default connect(mSTP, mDTP)(ReservationIndex);