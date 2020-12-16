import React from 'react'

const ReviewIndex = props => {
    const reviews = [];
    for(let i = 0; i < props.reviews.length; i++){
       let review =  props.reviews[i]
       
       reviews.push(
            <li key={i}>
                <div className="ratings">
                    Overall {review.overall} *
                    Food {review.food} *
                    Service {review.service} *
                    Ambiance {review.ambiance} *
                </div>
                <p>
                   { review.body} 
                </p>
            </li>
       )    
    }
debugger
    return (
        <ul>
            { reviews }
        </ul>
    )
}

export default ReviewIndex