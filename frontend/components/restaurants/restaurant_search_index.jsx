import React from "react";
import { connect } from "react-redux";
import { PrettyLink } from '../pretty_link';
import { Link } from 'react-router-dom'
const RestaurantSearchIndex = (props) => {
    return (
        <div>
            <h1 className="results-found">{(Object.values(props.restaurants).length !== 0 )? ("Results") :  ("No Results Found") }</h1>
            <div className="restaurant-search-index">
                

                {
                
                        Object.values(props.restaurants).map(restaurant => {
                            return (
                                <Link  to={`/restaurants/${restaurant.id}`} key={`restaurant.id`}>
                                    <div className="restaurant-search-index-item">
                                        <h1>{restaurant.name}</h1>
                                        <h3>{restaurant.address}</h3>
                                        <h5>{restaurant.cuisine}</h5>
                                    </div>
                                </Link>
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


// const mDTP = dispatch => ({

// })

export default connect(mSTP,null)(RestaurantSearchIndex)