import React from 'react';
import { connect } from 'react-redux';
import {deleteReservation} from '../../actions/reservation_actions';

//depriciated


const DeleteReservation = props => {
   const [count, setCount] = React.useState(0)

    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    
    const handleClick = () => {
        event.preventDefault();
        deleteReservation(reservationId);
        forceUpdate();
    
    };
    let {deleteReservation, reservationId} = props;

    return   <button onClick={handleClick}>Cancel Reservation</button>
};

const mDTP = dispatch => ({
    deleteReservation: (reservationId) => dispatch(deleteReservation(reservationId))
});

export default connect(null, mDTP)(DeleteReservation);