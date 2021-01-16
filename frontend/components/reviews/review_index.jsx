

import React from 'react';
import { connect } from 'react-redux';
import {deleteReview} from '../../actions/review_actions';
import Stars from './stars';



const ReviewIndex= props => {
    
    const [rejects, setRejects] = React.useState({})
    

    
    
    
    
    
    
    const handleDelete = reviewId => {
        //handles delete locally, aswell as internally
        return e => {
            e.preventDefault()
            props.deleteReview(reviewId)
            //setState without eliminating oldState
            setRejects(prevState => (
                {
                    ...prevState,
                    [reviewId]: reviewId
                }
                ))

            }
            
            

        }
        
        
        
        
        
        console.log('rejects:', rejects)
        
        return (
            <ul className="review-index">

                {
                    props.reviews ? (
                        props.reviews.map((review, idx)=> {
                            if(!(review.id in rejects)){
                                return (
                                    
                                <li key={idx} className="review-index-item">
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
                    
                                    {
                                        review.user_id === parseInt(props.currentUserId) ? (
                                            <div className='editDeleteArea'>
                                            <button onClick={handleDelete(review.id)}> Delete </button> 
                                            <button onClick={handleDelete(review.id)}> Edit </button> 
                                        </div>
                    
                    ): null
                }
                                </li>
                                )
                            }
                        })
                        ): null
                    }
            </ul>
        )
        
        
        
    }
    
    const mSTP = state =>({
        currentUserId: state.session.id
    })
    
    const mDTP = dispatch => ({
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
    });
    
    export default connect(mSTP,mDTP)(ReviewIndex)








    //classical ver
    
    // class ReviewIndex extends React.Component {
        
    //     // const [rejects] = React.useState({})
    
    //     constructor(props){
    //         super(props)
    
    //         this.state ={
    //             rejects: {}
    //         }
    //         this.handleDelete = this.handleDelete.bind(this) 
    //     }
        
    //     // const [reviews, setReviews] = React.useState([])
    
    //     handleDelete(reviewId){
    //         //handles delete locally, aswell as internally
    //         return e => {
    //             e.preventDefault()
    //             this.props.deleteReview(reviewId)
    //             //setState without eliminating oldState
    //             this.setState(prevState => ({
    //                 rejects: {
    //                     ...prevState.rejects,
    //                     [reviewId]: reviewId
    //                 }
    //             }))
    
    //         }
                
            
    
    //     }
        
    
       
    //     render(){
    //         console.log('rejects:', this.state.rejects)
    
    //         return (
    //             <ul className="review-index">
    
    //                 {
    //                     this.props.reviews ? (
    //                         this.props.reviews.map((review, idx)=> {
    //                             if(!(review.id in this.state.rejects)){
    //                                 return (
        
    //                                 <li key={idx} className="review-index-item">
    //                                     <div className="user-side">
    //                                         {review.firstname}
    //                                     </div>
                        
    //                                     <div className="review-side">
    //                                         <Stars targetRating={review.overall}/>
                        
    //                                         <div className="ratings">
                        
    //                                             Overall <span className="filledStar">{review.overall}</span> •
    //                                             Food <span className="filledStar">{review.food}</span> •
    //                                             Service <span className="filledStar">{review.service}</span> •
    //                                             Ambiance <span className="filledStar">{review.ambiance}</span>
    //                                         </div>
                        
    //                                         <p>
    //                                         { review.body } 
    //                                         </p>
    //                                     </div>
                        
    //                                     {
    //                                         review.user_id === parseInt(this.props.currentUserId) ? (
    //                                         <div className='editDeleteArea'>
    //                                             <button onClick={this.handleDelete(review.id)}> Delete </button> 
    //                                             {/* <button onClick={() => handleDelete(review.id)}> Edit </button>  */}
    //                                         </div>
                        
    //                                         ): null
    //                                     }
    //                                 </li>
    //                                 )
    //                             }
    //                         })
    //                     ): null
    //                 }
    //             </ul>
    //         )
    //     }
    
        
    // }
    
