import {RECIEVE_USER} from '../actions/session_actions'


const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECIEVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        cas
        
        default:
            return state;
    }
}

export default usersReducer;
