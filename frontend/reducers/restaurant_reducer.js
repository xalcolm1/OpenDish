import { UPDATE_RESERVATION } from '../actions/reservation_actions';
import {
    RECIEVE_RESTAURANT,
    RECIEVE_ALL_RESTAURANTS,
    DELETE_RESTAURANT,
    RECIEVE_CATEGORY_RESTAURANTS
} from '../actions/restaurant_actions';
import { 
        RECIEVE_REVIEW,
        DELETE_REVIEW,
        UPDATE_REVIEW
} from '../actions/review_actions';



const restaurantReducer = (state = {all: {}, search: {}, categories: {}}, action) => {

// refactor for categories 
// console.log(action.restaurants)
Object.freeze(state);
let newState = Object.assign({}, state);
switch(action.type){
    case RECIEVE_ALL_RESTAURANTS:
        newState.all = action.restaurants;
        return newState;
        
        case RECIEVE_RESTAURANT:
            newState.all[action.restaurant.id] = action.restaurant;
            return newState;
            
        case RECIEVE_CATEGORY_RESTAURANTS:
            newState.categories[action.query.type.cuisine] = action.query.restaurants;
            return newState;
            
        case RECIEVE_REVIEW:

            newState.all[action.review.restaurant_id].reviews.push(action.review)

            return newState;

        case UPDATE_REVIEW:
            newState.all[action.review.restaurant_id].reviews = 
            newState.all[action.review.restaurant_id].reviews.map(review => {return  review.id === action.review.id ? action.review : review})
            debugger 
        return newState;

        case DELETE_REVIEW:
            // debugger
            newState.all[action.review.restaurant_id].reviews.filter(review => review.id !== action.review.id)
            return newState;

        case DELETE_RESTAURANT:
            delete newState.all[action.id];
            return newState;

        default:
            return state;
    }

}

export default restaurantReducer;

//  