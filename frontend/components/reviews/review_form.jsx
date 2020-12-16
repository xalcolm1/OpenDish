import React from 'react';
import { connect } from 'react-redux';
import { createReview } from '../../actions/review_actions';
import Stars from './stars';


class ReviewForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            body: '',
            overall: 1,
            food: 1,
            service: 1, 
            ambiance: 1,
            user_id: this.props.currentUser.id,
            restaurant_id: this.props.restaurantId
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleSubmit(){
        event.preventDefault()

        this.props.createReview(this.state)  
        this.setState({
            body: '',
            rating: 1,

        })

    }
    
    handleClick(rating){
        return e => {
            this.setState({[ rating ]: parseInt(e.target.id)});
            // debugger
            let ratingElements = e.target.parentElement.children;
            let targetRating = e.target;
            let color = "rgb(102, 218, 102)"

            for(let i = ratingElements.length - 1; i >= 0; i--){
                e.target.parentElement.children[i].style.color = color
                if(ratingElements[i] === targetRating) color = "rgb(224, 222, 222)"
            }


        }
    }
    render(){

       return (

            <form 
            onSubmit={() => this.handleSubmit()}>
                <label htmlFor="rating">Overall: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('overall')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('overall')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('overall')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('overall')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('overall')}>&#x2605;</span>
                </span>
                
                <label htmlFor="rating1">Food: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('food')}>&#x2605;</span>
                </span>

                <label htmlFor="rating2">Service: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('service')}>&#x2605;</span>
                </span>

                <label htmlFor="rating3">Ambiance: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                </span>

                <textarea name="" id="" cols="30" rows="10" onChange={e => this.setState({body: e.target.value})} value={this.state.body}></textarea>
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