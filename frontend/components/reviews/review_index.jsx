import React from 'react';
import { connect } from 'react-redux';
import Stars from './stars';
import DeleteReview from '../reviews/delete_review';

const ReviewIndex = props => {
    const reviews = [];

    if(props.reviews){
       for(let i = 0; i < props.reviews.length; i++){
       let review =  props.reviews[i] 

                  reviews.push(
                    <li key={i} className="review-index-item">
                        <div className="user-side">
                            {review.firstname}
                        </div>
                        <div className="review-side">
                            <Stars targetRating={review.overall}/>
                            <div className="ratings">

                                Overall <span className="filledStar">{review.overall}</span> •
                                Food <span className="filledStar">{review.food}</span> •
                                Service <span className="filledStar">{review.service}</span> •
                                Ambiance <span className="filledStar">{review.ambiance}</span>
                            </div>
                            <p>
                            { review.body } 
                            </p>
                        </div>
                        {review.user_id === currentUserId ? <DeleteReview/> : null}
                    </li>
            ) 
        }   
    }

    return (
        <ul className="review-index">
            { reviews }
        </ul>
    )
}

const mSTP = state =>({
    currentUserId: state.session.id
})
export default connect(mSTP)(ReviewIndex)