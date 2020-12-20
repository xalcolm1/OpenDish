import usersReducer from './users_reducer';
import restaurantReducer from './restaurant_reducer';
import reservationReducer from './reservation_reducer';
import reviewReducer  from './review_reducer';
import {combineReducers} from 'redux';

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantReducer,
    reservations: reservationReducer,
    reviews: reviewReducer
});

export default entitiesReducer;