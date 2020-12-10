import React from "react";
import { connect } from "react-redux";
// import { PrettyLink } from '../pretty_link';
import { Link } from 'react-router-dom'
const RestaurantSearchIndex = (props) => {

    return (
        <div>
            <h2 className="results-found">{(Object.values(props.restaurants).length !== 0 )? ("Results") :  ("No Results Found") }</h2>
            <div className="restaurant-search-index">
                

                {
                
                        Object.values(props.restaurants).map(restaurant => {
                            return (
                               
                                    <div className="restaurant-search-index-item"  key={restaurant.id}>
                                        <div 
                                             style={{backgroundImage : `url(${props.imageUrl ? props.imageUrl : ivyWallURL})`}}
                                            className="card-img">
                                            <Link  to={`/restaurants/${restaurant.id}`}/>
                                        </div>
                                        <div className="left">
                                            <Link  to={`/restaurants/${restaurant.id}`}>
                                                <h2>{restaurant.name}</h2>
                                            </Link>
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