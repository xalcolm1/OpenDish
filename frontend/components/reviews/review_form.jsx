import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createReview } from '../../actions/review_actions';
import Stars from './stars';


class ReviewForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            body: '',
            overall: 0,
            food: 0,
            service: 0, 
            ambiance: 0,
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
            overall: 1,

        })



    }
    
    handleClick(rating){
        return e => {
            this.setState({[ rating ]: parseInt(e.target.id)});

            let ratingElements = e.target.parentElement.children;
            let targetRating = e.target;
            let color = "#FF523D"

            for(let i = ratingElements.length - 1; i >= 0; i--){
                e.target.parentElement.children[i].style.color = color
                if(ratingElements[i] === targetRating) color = "rgb(224, 222, 222)"
            }
            // let ratingElements = e.target 


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
                {/* <Stars targetRating={this.state.overall} onClick={() => {debugger} } /> */}
                
                <label htmlFor="rating1">Food: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('food')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('food')}>&#x2605;</span>
                </span>
                {/* <Stars targetRating={this.state.food} onClick={this.handleClick('food')}/> */}

                <label htmlFor="rating2">Service: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('service')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('service')}>&#x2605;</span>
                </span>
                {/* <Stars targetRating={this.state.service} onClick={this.handleClick('service')}/> */}

                <label htmlFor="rating3">Ambiance: </label>
                <span className="rating"> 
                   <span id='5' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='4' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='3' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='2' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                   <span id='1' onClick={this.handleClick('ambiance')}>&#x2605;</span>
                </span>
                {/* <Stars targetRating={this.state.ambiance} onClick={this.handleClick('ambiance')}/> */}

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
export default withRouter(connect(mSTP, mDTP)(ReviewForm));