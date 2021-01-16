import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';
import { Link } from 'react-router-dom';

import ReviewIndex from '../reviews/review_index';
import ReviewForm from '../reviews/review_form';
import ReservationForm from '../reservations/reservation_form';
import Stars from '../reviews/stars';

import { getUser } from '../../actions/session_actions';
import review_index from '../reviews/review_index';

const RestaurantShowPage = props => {
    const [open, setOpen] = React.useState(false);
    
    React.useEffect(() =>  {
        if(props.currentUser)props.getUser(props.currentUser.id);
        props.getRestaurant(props.match.params.restaurantId)
        .then(restaurant => {
            if ( props.restaurant && props.restaurant.reviews){
               props.restaurant.reviews.push(props.reviews) 
            }
        })
    },[])

    // React.useEffect(() =>  {
    //     // props.getUser(props.currentUser.id)

    //     props.getRestaurant(props.match.params.restaurantId)
    //     // .then(restaurant => {
    //     //     if ( props.restaurant && props.restaurant.reviews){
    //     //        props.restaurant.reviews.push(props.reviews) 
    //     //     }
    //     // })
    // })
    
    
    let targetRating = 0
    let reviewsUpdated = []; 
    //only the reviews in this loop seem to be updated, why?
    if(props.restaurant && props.restaurant.reviews){
        targetRating = 0;
        if(props.restaurant.reviews.length > 0){
        props.restaurant.reviews.forEach((review) => {

            reviewsUpdated.push(review);
             targetRating += review.overall;
        }) 

            targetRating = targetRating / props.restaurant.reviews.length
        }
    }

    let reviewForm

        if (open){
           reviewForm = <ReviewForm restaurantId={props.match.params.restaurantId}/>
        } else {
            reviewForm = <div className="Rev-button" onClick={() => setOpen(!open)}> write a review </div>
        }
        // props.restaurant ? props.restaurant.reviews : []

    return (
        // <>
        <div className='backdrop '>
            <div 
            style={{backgroundImage : `url(${props.restaurant ? props.restaurant.photoUrl : ivyWallURL})`}}
            className="background-img">
                {/* <img src={this.props.imageUrl ? this.props.imageUrl : ivyWallURL} alt="" /> */}
            </div>
           

            
            <div className='restaurant'>
             
                <main className="restaurant-box">
                    <nav className="selection-nav sticky">
                        <Link to={`/restauarants/${props.match.params.restaurantId}#overview`}>Overview</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#menu`}>Menu</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#photos`}>Photos</Link>
                        <Link to={`/restauarants/${props.match.params.restaurantId}#reviews`}>Reviews</Link>
                    </nav>

                    {props.restaurant ?
                    
                        <h1 >{props.restaurant.name}</h1>
                    
                    : null}
                    <Stars targetRating={targetRating}/>

                    <h2 id="menu"> Menu</h2>
                    {props.restaurant && props.restaurant.menu ?

                        <p>props.restaurant.menu</p>
                        
                    : 
                        <p>  Menu Not Available Yet </p>}
                   
                    <h2 id="photos"> Photos</h2>
                    {props.restaurant && props.restaurant.menu ?

                        <p>props.restaurant.menu</p>

                    : 
                        <p>  No Photos Yet</p>}


                        
                    <h2 id="reviews">Reviews</h2>
                        {
                            props.loggedIn ?
                            reviewForm 
                            : null
                        }
                     
                        {/* add  */}

                        <ReviewIndex reviews={reviewsUpdated}/>
                    
                </main>  

                <aside className="reservation-box sticky">
                        <div className='reservation'>
                            <h2>make a reservation</h2>
                            <ReservationForm restaurantId={props.restaurant ? props.restaurant.id : props.match.params.restaurantId}/>
                            
                        </div>
             
                </aside>

            </div>
        </div>
        // </>
    )

}

const mapStateToProps = (state, ownProps) => {

    return {
        loggedIn: Boolean(state.session.id),
        currentUser: state.entities.users[state.session.id],
        restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId],
        reviews: state.entities.reviews[[ownProps.match.params.restaurantId]]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id)),
        getUser: (id) => dispatch(getUser(id))
    }
}
export default  connect(mapStateToProps ,mapDispatchToProps)(RestaurantShowPage);