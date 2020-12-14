import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';

const ReviewForm = props => {
    const [body, setBody] = React.useState('');
    const [rating, setRating] = React.useState();

    const handleSubmit = (props) => {
        e => { 
            let review = {
                body,
                rating
            }
            debugger
            createReview(review)
        }
      
    }

    const handleClick = () => {

        return e => {

            setRating(parseInt(e.target.id))
        }
    }
    return (
            <form 
            onSubmit={handleSubmit(props)}>
                <div className="rating"> 
                   <span id='5' onClick={handleClick().bind(this)}>&#x2605;</span>
                   <span id='4' onClick={handleClick().bind(this)}>&#x2605;</span>
                   <span id='3' onClick={handleClick().bind(this)}>&#x2605;</span>
                   <span id='2' onClick={handleClick().bind(this)}>&#x2605;</span>
                   <span id='1' onClick={handleClick().bind(this)}>&#x2605;</span>
                </div>
                <textarea name="" id="" cols="30" rows="10" onChange={e => setBody(e.target.value)}></textarea>
                <input type="submit" value="publish"/>
            </form>
    )   
    
    
}


const mDTP = () => {

    return {
        createReview: (review) => dispatch(createReview(review))
    }
}

export default connect(null, mDTP)(ReviewForm);