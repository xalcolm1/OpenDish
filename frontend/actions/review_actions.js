import * as reviewApiUtil from '../util/review_api_util'


export const RECIEVE_REVIEW = 'RECIEVE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';

const recieveReview = review => {
    return {
        type: RECIEVE_REVIEW,
        review
    }
}

const editReview = review => {
    return {
        type: UPDATE_REVIEW,
        review
    }
}

const destroyReview = review => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

export const createReview = review => dispatch => {
    return reviewApiUtil.createReview(review)
    .then(review => dispatch(recieveReview(review)))

}

export const updateReview = review => dispatch => {
    return reviewApiUtil.updateReview(review)
    .then(review => dispatch(editReview(review)))

    
}

export const deleteReview = reviewId => dispatch => {
    return reviewApiUtil.deleteReview(reviewId)
    .then(review => dispatch(destroyReview(review)))

}
