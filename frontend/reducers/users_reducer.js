import { 
    RECIEVE_USER, 
    RECIEVE_CURRENT_USER
} from '../actions/session_actions'
import {
    RECIEVE_RESERVATION,
    DESTROY_RESERVATION,
    UPDATE_RESERVATION
} from '../actions/reservation_actions'
import { 
    DELETE_REVIEW,
    RECIEVE_REVIEW,
    UPDATE_REVIEW
} from '../actions/review_actions';


const usersReducer = (state = {}, action) => {
    Object.freeze(state);

    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        case RECIEVE_CURRENT_USER:
        
            newState[action.user.id] = action.user;
            return newState;

        // case RECIEVE_RESERVATION:
        //     newState[action.reservation.user_id].reservations ?
        //      newState[action.reservation.user_id].reservations.push(action.reservation) :
        //        newState[action.reservation.user_id].reservations = [action.reservation]
               
        //     return newState;

        case UPDATE_RESERVATION:
            newState[action.reservation.user_id].reservations = 
            newState[action.reservation.user_id].reservations.map(reservation => action.reservation.id === reservation.id ? action.reservation : reservation) // secret line

            return newState;
        case DESTROY_RESERVATION:
            newState[action.reservation.user_id].reservations =
             newState[action.reservation.user_id].reservations.filter(reservation => reservation.id !== action.reservation.id)
            return newState;

        case RECIEVE_REVIEW:
            newState[action.review.user_id].reviews.push(action.review) 
                return newState;
                
        case UPDATE_REVIEW:
            newState[action.review.user_id].reviews = 
            newState[action.review.user_id].reviews.map(review => {return  review.id === action.review.id ? action.review : review}) 

            return newState;

        case DELETE_REVIEW:
            newState[action.review.user_id].reviews = newState[action.review.user_id].reviews.filter(item => item.id !== action.review.id)
            return newState;

        default:
            return state;
    }
}

export default usersReducer;
