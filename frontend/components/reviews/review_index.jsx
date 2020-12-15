import React from 'react'

const ReviewIndex = props => {

    return (
        <ul>
            {
                props.reviews ? 
                props.reviews.forEach((review, idx)=> {
                   return(
                    <li key={idx}>
                        { review.overall}
                        { review.food}
                        { review.service}
                        { review.ambiance}
                        { review.body}
                    </li>
                   )
                }) 
                :
                null
            }
        </ul>
    )
}

export default ReviewIndex