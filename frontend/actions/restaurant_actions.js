import * as restaurantApiUtil from '../util/restaurant_api_util'


export const RECIEVE_RESTAURANT = 'RECIEVE_RESTAURANT';
export const RECIEVE_ALL_RESTAURANTS = 'RECIEVE_ALL_RESTAURANTS';
export const DELETE_RESTAURANT = 'DELETE_RESTAURANT';
export const RECIEVE_CATEGORY_RESTAURANTS = 'RECIEVE_CATEGORY_RESTAURANTS'

export const recieveRestaurant = restaurant => {
    return {
        type: RECIEVE_RESTAURANT,
        restaurant
    }
}

const recieveAllRestaurants = restaurants => {
    
    return {
        type: RECIEVE_ALL_RESTAURANTS,
        restaurants
    }
}

const recieveCategoryRestaurants = (restaurants, type) => {
    return {
        type: RECIEVE_CATEGORY_RESTAURANTS,
        query: {restaurants, type}
    }
}

const destroyRestaurant = id => {
    return {
        type: DELETE_RESTAURANT,
        id
    }
}



export const createRestaurant = restaurant => dispatch => {
    return restaurantApiUtil.createRestaurant(restaurant)
        .then(restaurant => dispatch(recieveRestaurant(restaurant)))
        .fail(err => dispatch(recieveSessionErrors(err.responseJSON)))
}

export const getAllRestaurants = () => dispatch => {
    return restaurantApiUtil.getAllRestaurants()
    .then((restaurants) => dispatch(recieveAllRestaurants(restaurants)))
}

export const getRestaurant = id => dispatch => {
    return restaurantApiUtil.getRestaurant(id)
        .then(restaurant => dispatch(recieveRestaurant(restaurant)))
}

export const deleteRestaurant = id => dispatch => {
    return restaurantApiUtil.deleteRestaurant(id)
    .then((restaurant) => dispatch(destroyRestaurant(restaurant.id)))
        //look into this one
}

export const searchRestaurants = query => dispatch => {
    return restaurantApiUtil.searchRestaurants(query)
    .then((restaurants) => dispatch(recieveAllRestaurants(restaurants)))
}

export const searchCategory = query => dispatch => {
    return restaurantApiUtil.searchRestaurants(query)
    .then((restaurants) => dispatch(recieveCategoryRestaurants(restaurants, query)))
}