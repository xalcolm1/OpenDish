import React from 'react';
import { connect } from 'react-redux';
import {deleteReservation} from '../../actions/reservation_actions';

const DeleteReservation = props => {
   const [count, setCount] = React.useState(0)
    const handleClick = () => {
        event.preventDefault();
        deleteReservation(reservationId);
        setCount(count + 1);
    };
    let {deleteReservation, reservationId} = props;

    return   <button onClick={handleClick}>Cancel Reservation</button>
};

const mDTP = dispatch => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
});

export default connect(null, mDTP)(DeleteReservation);