import React from 'react';
import Stars from './stars';

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

export default ReviewIndex