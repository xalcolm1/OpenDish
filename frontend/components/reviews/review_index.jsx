

import React from 'react';
import { connect } from 'react-redux';
import {deleteReview, updateReview} from '../../actions/review_actions';

import Stars from './stars';
// review index item:

const ReviewIndexItem = props => {
    const {review, handleDelete, edit} = props
    const [open, setOpen] =React.useState(false)
    const [state, setState] = React.useState({
            id: review.id,
            body: review.body,
            overall: review.overall,
            food: review.food,
            service: review.service, 
            ambiance: review.ambiance
    })
    
    const handleClick = (rating) => {
        return e => {
            // it's beautiful (*_*)
            let collection = Array.from(event.target.parentElement.parentElement.parentElement.parentElement.children)
            let newRating = collection.indexOf(event.target.parentElement.parentElement.parentElement) + 1

            setState(prevState => ({
                ...prevState,
                [rating]: newRating}));
        }
    }

    const handleSubmit = () => {
        event.preventDefault();
        setState(prevState => ({
            ...prevState,
            id: review.id
        }))
        
        edit(state)
        setOpen(!open)
    }


    return (
        <li className="review-index-item">
                                    <div className="user-side">
                                        {review.firstname}
                                    </div>
                    
                                    <div className="review-side">
                                        { !open ? (
                                            <>
                                            <Stars targetRating={state.overall}/>
                                            
                                            <div className="ratings">
                                                Overall <span className="filledStar">{state.overall}</span> • 
                                                Food <span className="filledStar">{state.food}</span> •
                                                Service <span className="filledStar">{state.service}</span> •
                                                Ambiance <span className="filledStar">{state.ambiance}</span>
                                            </div>
                        
                                            <p>
                                                { state.body } 
                                            </p>  
                                        </>
                                        ) : (
                                            <>
                                            <label>Overall:
                                                <Stars targetRating={state.overall} onClick={handleClick('overall')}/>
                                            </label>
                                            <label>Food:
                                                <Stars targetRating={state.food} onClick={handleClick('food')}/>
                                            </label>
                                            <label>Service:
                                                <Stars targetRating={state.service} onClick={handleClick('service')}/>
                                            </label>
                                            <label>Ambiance:
                                                <Stars targetRating={state.ambiance} onClick={handleClick('ambiance')}/>
                                            </label>

                                                <textarea 
                                                name="" 
                                                id="" 
                                                cols="30" 
                                                rows="10" 
                                                onChange={e =>{

                                                    setState(prevState => ({
                                                        ...prevState,
                                                        body: event.target.value
                                                    }))} 
                                                } 
                                                value={state.body}></textarea>
                                            </>

                                        )}
                                        
                                    </div>
                    
                                    {
                                        review.user_id === parseInt(props.currentUserId) ? (
                                            <div className='editDeleteArea'>
                                                <button onClick={handleDelete(review.id)}> Delete </button> 
                                                <button onClick={() => {
                                                    setOpen(!open);
                                                    setState({
                                                        id: review.id,
                                                        body: review.body,
                                                        overall: review.overall,
                                                        food: review.food,
                                                        service: review.service, 
                                                        ambiance: review.ambiance,
                                                    });
                                                
                                                }
                                                    }>{open ? 'Cancel' : 'Edit'}</button>
                                                {open ?  <button onClick={() => handleSubmit() }>Save</button> : null}
                                            </div>
                                        ): null
                                    }
                                </li>
    )
}

// review index:
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
                }))
            }
        }   

        React.useEffect(() => {
       
        }, [props.reviews])

        return (
            <ul className="review-index">

                {
                    props.reviews ? (
                        props.reviews.map((review, idx)=> {
                            if(!(review.id in rejects)){
                                return <ReviewIndexItem 
                                key={review.id}
                                review={review} 
                                edit={props.editReview} 
                                handleDelete={handleDelete} 
                                currentUserId={props.currentUserId} />
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
        deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
        editReview: (review) => dispatch(updateReview(review))
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
    
