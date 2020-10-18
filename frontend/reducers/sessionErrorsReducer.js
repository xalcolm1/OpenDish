import {RECIEVE_SESSION_ERRORS, RECIEVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);

    switch (action.type) {
        case RECIEVE_SESSION_ERRORS:
            debugger
            newState = action.errors;
            return newState;
        case RECIEVE_CURRENT_USER:
             
            return [];
        //add case for clearing errors 

        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer;