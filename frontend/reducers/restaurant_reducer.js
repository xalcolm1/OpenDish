import {
    RECIEVE_RESTAURANT,
    RECIEVE_ALL_RESTAURANTS,
    DELETE_RESTAURANT,
} from '../actions/restaurant_actions';
import { RECIEVE_REVIEW } from '../actions/review_actions';

// import {
//     RECIEVE_REVIEW,
//     DELETE_REVIEW
// } from '../actions/review_actions';

const restaurantReducer = (state = {all: {}, search: {}, categories: {}}, action) => {

// refactor for categories 

    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECIEVE_ALL_RESTAURANTS:
            newState.all = action.restaurants;
            return newState;
            
        case RECIEVE_RESTAURANT:
            newState.all[action.restaurant.id] = action.restaurant;
            return newState;

        case RECIEVE_REVIEW:
            newState.all[action.review.restaurant_id].reviews.push({review: action.review})

        case DELETE_RESTAURANT:
            delete newState.all[action.id];
            return newState;

        default:
            return state;
            
    }

}

export default restaurantReducer;

//  