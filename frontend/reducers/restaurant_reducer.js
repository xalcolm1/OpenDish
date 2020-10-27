import {
    RECIEVE_RESTAURANT,
    RECIEVE_ALL_RESTAURANTS,
    DELETE_RESTAURANT
} from '../actions/restaurant_actions'

const restaurantReducer = (state = {}, action) => {



    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type){
        case RECIEVE_ALL_RESTAURANTS:
            newState = action.restaurants;
            return newState;
            
        case RECIEVE_RESTAURANT:
            newState[action.restaurant.id] = action.restaurant;
            return newState;

        case DELETE_RESTAURANT:
            delete newState[action.id];
            return newState;

        default:
            return state;
    }

}

export default restaurantReducer;

//     See a man without a face?
// Move like Ghosts from place to place.
// What’s their Plan? What’s their plan?
// Chandrian. Chandrian.