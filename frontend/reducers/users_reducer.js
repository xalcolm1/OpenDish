import { RECIEVE_USER, RECIEVE_CURRENT_USER} from '../actions/session_actions'


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
        default:
            return state;
    }
}

export default usersReducer;
