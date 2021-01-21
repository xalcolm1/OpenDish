
import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';
import { getRestaurant } from '../../actions/restaurant_actions'
import ReservationForm from './reservation_form';
const mSTP = state => {
    return {
        userId: state.session.id,
        formType: 'createReservation'
    }
}
const mDTP = dispatch => {
    return {
        action: reservation => dispatch(createReservation(reservation))
    }
}

export default connect(mSTP, mDTP)(ReservationForm) ;