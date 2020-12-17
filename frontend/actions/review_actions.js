import * as reviewApiUtil from '../util/review_api_util'


export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';

const recieveReview = review => {
    return {
        type: RECIEVE_REVIEW,
        review
    }
}

const destroyReview = reviewId => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

export const createReview = review => dispatch => {
    return reviewApiUtil.createReview(review)
    .then(review => {

        dispatch(recieveReview(review))
    })
}

export const updateReview = review => dispatch => {
    return reviewApiUtil.updateReview(review)
    .then(review => dispatch(recieveReview(review)))
    
}

export const deleteReview = reviewId => dispatch => {
    return reviewApiUtil.deleteReview(reviewId)
    .then(review => dispatch(destroyReview(review.id)))
}
