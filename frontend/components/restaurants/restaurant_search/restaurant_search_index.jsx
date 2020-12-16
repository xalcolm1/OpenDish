import React from "react";
import { connect } from "react-redux";
import Stars from '../../reviews/stars';
import { Link } from 'react-router-dom'
const RestaurantSearchIndex = (props) => {
   
    
    return (
        <div>
            <h2 className="results-found">{(Object.values(props.restaurants).length !== 0 )? ("Results") :  ("No Results Found") }</h2>
            <div className="restaurant-search-index">
                

                {
                
                        Object.values(props.restaurants).map(restaurant => {
                            let targetRating = 0;
                            if(restaurant.reviews){

                                targetRating = 0;
                                if(restaurant.reviews.length > 0){
                                restaurant.reviews.forEach((review) => targetRating += review.review.overall) 
                                targetRating = targetRating / restaurant.reviews.length
                                }
                            }
                                
                            

                            return (
                               
                                    <div className="restaurant-search-index-item"  key={restaurant.id}>
                                        <Link  to={`/restaurants/${restaurant.id}`}>
                                            <div 
                                                style={{backgroundImage : `url(${restaurant.photoUrl ? restaurant.photoUrl : ivyWallURL})`}}
                                                className="card-img">
                                            </div>
                                        </Link>
                                        <div className="left">

                                            <Link  to={`/restaurants/${restaurant.id}`}>
                                                <h2>{restaurant.name}</h2>
                                            </Link>
                                            <Stars targetRating={targetRating}/>
                                            <h3>{restaurant.address}</h3>
                                            <h5>{restaurant.cuisine}</h5>
                                        </div>
                                        
                                    </div>
                                
                            )
                    }) 
                    
                }

            </div>
        </div>
    )
}

const mSTP = state => ({
    restaurants: state.entities.restaurants.all
})

export default connect(mSTP,null)(RestaurantSearchIndex)