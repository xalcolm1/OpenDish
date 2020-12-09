
export const createRestaurant = restaurant => {
    debugger
    return $.ajax({
        url: "/api/restaurants",
        method: "POST",
        data: { restaurant },
        contentType: false,
        processData: false
    })
}

export const deleteRestaurant = id => {
    return $.ajax({
        url: `/api/restaurants/${id}`,
        method: "DELETE"
    })
}

export const getAllRestaurants = () => {
    return $.ajax({
        url: "/api/restaurants",
        method: "GET"
    })
}

export const getRestaurant = id => {
    return $.ajax({
        url: `/api/restaurants/${id}`,
        method: "GET" 
    })
}

export const searchRestaurants = q => {
    return $.ajax({
        url: '/api/search',
        method: 'GET',
        data: { q }
    })
}


