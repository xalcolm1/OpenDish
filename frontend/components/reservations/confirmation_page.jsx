import React from 'react';
import { connect } from 'react-redux';
import { getReservation } from '../../actions/reservation_actions';

const confirmationPage = props => {

    React.useEffect(() => {
        props.getReservation(props.match.params.reservationId)
    },[])

    const handleClick = () => {
        return e => {
            debugger
            props.history.goBack();
        }
    }
    const handleOffClick = () => {
        return e => {
            debugger
            props.history.goBack();
        }
    }


    debugger
    //look into backdrops
    console.log(props.reservation)
    return (
        <div className="backdrop" onClick={handleOffClick()}>
            <div className="confirmation-box">
                props.reservation ? <h2>Reservation {props.reservation.id} confirmed!</h2> : <h2> Reservation failed</h2>
                <button onClick={handleClick}>Continue</button>
            </div>
        </div>
    )

    
    
    //if the reservation fails to fetch, show a failure message, else wise show a 

}

const mSTP =(state, ownProps) => ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mDTP = dispatch => ({
    getReservation: id => dispatch(getReservation(id))
})
export default connect(mSTP, mDTP)(confirmationPage);