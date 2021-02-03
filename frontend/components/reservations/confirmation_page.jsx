import React from 'react';
import { connect } from 'react-redux';
import { getReservation } from '../../actions/reservation_actions';

const ConfirmationPage = props => {

    React.useEffect(() => {
        props.getReservation(props.match.params.reservationId)
    },[])

    const handleClick = () => {
        return e => {
            props.history.goBack();
        }
    }
    // const handleOffClick = () => {
    //     return e => {

    //         props.history.goBack();
    //     }
    // }


    //look into backdrops
   
    const currentDate = props.reservation ? new Date(props.reservation.date) : '';
    const reformatDate = num => num > 9 ? num : `0${num}`;


    return (
            <div className="confirmation-box">
                {props.reservation ?(

                    <>
                        <h2 className="confirmation-header">Reservation {props.reservation.id} confirmed!</h2>
                        <h3> 
                            You are scheduled for {`${reformatDate(currentDate.getMonth() + 1)}/${reformatDate(currentDate.getDate())}/${currentDate.getFullYear()} `} 
                                At {`${reformatDate(currentDate.getHours())}:${reformatDate(currentDate.getMinutes())}`}
                        </h3>
                        <h3>At a table for {props.reservation.people > 1 ? `${props.reservation.people} people` : `${props.reservation.people} person`}</h3>
                    </>

                ) : <h2 className="failure-header">Reservation failed</h2>}
                <button className='confirm-reservation' onClick={handleClick()}>Continue</button>
            </div>
    )

    //if the reservation fails to fetch, show a failure message, else wise show a 

}

const mSTP =(state, ownProps) => ({
    reservation: state.entities.reservations[ownProps.match.params.reservationId]
})

const mDTP = dispatch => ({
    getReservation: (id) => dispatch(getReservation(id))
})
export default connect(mSTP, mDTP)(ConfirmationPage);