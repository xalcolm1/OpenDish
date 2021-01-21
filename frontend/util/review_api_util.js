

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
    console.log(review)
    return $.ajax({
        url: `/api/reviews/${review.id}`,
        method: "PATCH",
        data:  { review }
    })
}
 