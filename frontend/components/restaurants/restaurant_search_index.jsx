import React from "react";
import { connect } from "react-redux";

const RestaurantSearchIndex = (props) => {
debugger
    return (
        <div>
            <h1 className="results-found">{(Object.values(props.restaurants).length !== 0 )? ("Results") :  ("No Results Found") }</h1>
            <div className="restaurant-search-index">
                

                {
                
                        Object.values(props.restaurants).map(restaurant => {
                            return (
                                <div className="restaurant-search-index-item">
                                    <h1>{restaurant.name}</h1>
                                    <h3>{restaurant.address}</h3>
                                    <h5>{restaurant.cuisine}</h5>
                                </div>
                            )
                    }) 
                    
                }

            </div>
        </div>
    )
}

const mSTP = state => ({
    restaurants: state.entities.restaurants
})


// const mDTP = dispatch => ({

// })

export default connect(mSTP,null)(RestaurantSearchIndex)