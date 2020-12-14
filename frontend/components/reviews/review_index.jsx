import React from 'react'

const ReviewIndex = props => {

    return (
        <ul>
            {
                props.reviews ? 
                props.reviews.forEach((review, idx)=> {
                   return(
                    <li key={idx}>
                        { props.review.rating}
                        { props.review.body}
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