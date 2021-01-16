import React from 'react';
import { connect } from 'react-redux';
import {deleteReview} from '../../actions/review_actions';

//depriciated

const DeleteReview = props => {
    const handleClick = () => {
        event.preventDefault();
        deleteReview(reviewId);
        window.location.reload(false);

    };
    let {deleteReview, reviewId} = props;

    return <button onClick={handleClick}>Delete review</button>
};

const mDTP = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
});

export default connect(null, mDTP)(DeleteReview);
