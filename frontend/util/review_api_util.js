

export const createReview = review => {
    return $.ajax({
        url: "/api/reviews",
        method: "POST",
        data:  { review }
    })
}

export const deleteReview = reviewId => {
    return $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: "DELETE",

    })
}

export const updateReview = review => {
    return $.ajax({
        url: "/api/restaurants",
        method: "UPDATE",
        data: { review }
    })
}
 