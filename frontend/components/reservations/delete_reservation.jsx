import React from 'react';
import { connect } from 'react-redux';
import {deleteReservation} from '../../actions/reservation_actions';

const DeleteReservation = props => {
    const handleClick = () => {
        event.preventDefault();
        deleteReservation(reservationId);
    };
    let {deleteReservation, reservationId} = props;

    return   <button onClick={handleClick}>Cancel Reservation</button>
};

const mDTP = dispatch => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
});

export default connect(null, mDTP)(DeleteReservation);