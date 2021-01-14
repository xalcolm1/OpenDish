import {
    RECIEVE_REVIEW,
    DELETE_REVIEW
    
} from '../actions/review_actions';

const reviewReducer = (state = {}, action) => {

// refactor for categories 

    Object.freeze(state);
    let newState = Object.assign({}, state);


    switch(action.type){
        // case RECIEVE_REVIEW:
        //     newState[action.review.restaurant_id] = action.review;
        //     return newState;
        
        case DELETE_REVIEW:
            delete newState[action.review.id];
            return newState;

        default:
            return state;
    }

}

export default reviewReducer;