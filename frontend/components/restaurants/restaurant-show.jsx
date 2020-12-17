import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';
import { Link } from 'react-router-dom';

import ReviewIndex from '../reviews/review_index';
import ReviewForm from '../reviews/review_form';
import Stars from '../reviews/stars';


const RestaurantShowPage = props => {
    const [open, setOpen] = React.useState(false);
    
    React.useEffect(() =>  {
        props.getRestaurant(props.match.params.restaurantId)
      
    },[])
    
    
    let targetRating = 0
    
    if(props.restaurant && props.restaurant.reviews){
        
        targetRating = 0;
        if(props.restaurant.reviews.length > 0){
        props.restaurant.reviews.forEach((review) => targetRating += review.review.overall) 
        targetRating = targetRating / props.restaurant.reviews.length
        }
    }

    let reviewForm

        if (open){
           reviewForm = <ReviewForm restaurantId={props.match.params.restaurantId}/>
        } else {
            reviewForm = <div className="Rev-button" onClick={() => setOpen(!open)}> write a review </div>
        }
    

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

                        <ReviewIndex reviews={props.restaurant ? props.restaurant.reviews : []}/>
                    
                </main>  

                <aside className="reservation-box sticky">
                        <div className='reservation'>
                            <h2>make a reservation</h2>
                            
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
        restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id))
    }
}
export default  connect(mapStateToProps ,mapDispatchToProps)(RestaurantShowPage);