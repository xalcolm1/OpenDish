import React from 'react';
import Stars from './stars';

const ReviewIndex = props => {
    const reviews = [];

    if(props.review){
       for(let i = 0; i < props.reviews.length; i++){
       let review =  props.reviews[i] 
    }
    


       reviews.push(
            <li key={i}>
                <div className="user-side">

                </div>
                <div className="review-side">
                    <Stars targetRating={review.overall}/>
                    <div className="ratings">

                        Overall {review.overall} *
                        Food {review.food} *
                        Service {review.service} *
                        Ambiance {review.ambiance} *
                    </div>
                    <p>
                    { review.body} 
                    -</p>
                </div>
            </li>
       )    
    }

    return (
        <ul>
            { reviews }
        </ul>
    )
}

export default ReviewIndex