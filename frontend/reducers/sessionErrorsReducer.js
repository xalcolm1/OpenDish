import {RECIEVE_SESSION_ERRORS, RECIEVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECIEVE_SESSION_ERRORS:
            newState[errors] = action.errors;
            return newState;
        case RECIEVE_CURRENT_USER:
             
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;