

import {
    RECIEVE_RESERVATION,
    DESTROY_RESERVATION,
} from '../actions/reservation_actions'

const reservationReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state)

    switch (action.type) {
        case RECIEVE_RESERVATION:
            newState[action.reservation.id] = action.reservation;
            return newState;
        // case DESTROY_RESERVATION:

        //     newState[action.reservationId] = null;
        //     return newState
        default:
            return state;
    }
}


export  default reservationReducer;