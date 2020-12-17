import React from 'react';

const Stars = props => {
    //props should be the rating that needs to be starifyied
 

    let rating = [];
    for(let i = 1; i <= 5; i ++){
        rating.push(
            <span
            className={ i <= props.targetRating ? "filledStar" : "emptyStar" }
            key={ i }
            >&#x2605;
            </span>
        )
    }
    return (
        <div>
                { rating } 
        </div>
    )
}

export default Stars;