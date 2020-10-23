import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantReducer
});

export default entitiesReducer;