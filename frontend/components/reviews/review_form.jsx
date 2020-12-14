import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';


class ReviewForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            body: '',
            rating: 1

        }
        this.handleClick = this.handleClick.bind(this)
    }
    // const [body, setBody] = React.useState('');
    // const [rating, setRating] = React.useState();

    handleSubmit(){

        createReview(this.state)  
        this.setState({
            body: '',
            rating: 1,
            user_id: currentUser.id,
            restaurant_id: props.restaurantId
        })

    }
    
    handleClick(){

        return e => {
            this.setState({rating: parseInt(e.target.id)})
        }
    }
    render(){

       return (
            <form 
            onSubmit={() => this.handleSubmit()}>
                <div className="rating"> 
                   <span id='5' onClick={this.handleClick()}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick()}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick()}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick()}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick()}>&#x2605;</span>
                </div>
                <textarea name="" id="" cols="30" rows="10" onChange={e => this.setState({body: e.target.value})}></textarea>
                <input type="submit" value="publish"/>
            </form>
        )   
      
    }
   
    
}
const mSTP = ({ entities: { users } , session : {id} }) => ({
    currentUser: users[id]
})


const mDTP = dispatch => ({


    createReview: (review) => dispatch(createReview(review))
    
})

export default connect(mSTP, mDTP)(ReviewForm);