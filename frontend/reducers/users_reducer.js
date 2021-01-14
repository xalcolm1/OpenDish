import { 
    RECIEVE_USER, 
    RECIEVE_CURRENT_USER
} from '../actions/session_actions'
import {
    RECIEVE_RESERVATION,
    DESTROY_RESERVATION
} from '../actions/reservation_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    console.log(action.reservation)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECIEVE_CURRENT_USER:
        
            newState[action.user.id] = action.user;
            return newState;

        case RECIEVE_RESERVATION:

            newState[action.reservation.user_id].reservations.push(action.reservation)
            return newState;

        case DESTROY_RESERVATION:
            // let newstate = Object.assign({}, state);
            // delete newState[action.reservation.user_id].reservations;
            // return newState;
            // debugger
            newState[action.reservation.user_id].reservations = newState[action.reservation.user_id].reservations.filter(item => item.id !== action.reservation.id)
            return newState;
        default:
            return state;
    }
}

export default usersReducer;
