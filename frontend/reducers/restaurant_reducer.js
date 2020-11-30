import {
    RECIEVE_RESTAURANT,
    RECIEVE_ALL_RESTAURANTS,
    DELETE_RESTAURANT
} from '../actions/restaurant_actions';

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
        
        

        case DELETE_RESTAURANT:
            delete newState.all[action.id];
            return newState;

        default:
            return state;
    }

}

export default restaurantReducer;

//  