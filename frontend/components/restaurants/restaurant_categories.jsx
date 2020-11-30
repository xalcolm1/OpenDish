import React from 'react';
import { connect } from 'react-redux';
import RestaurantCategory from './restaurant_category'

const RestaurantCategories = (props) => {
    
    return(<>{
        props.categories.map(category => {
            // return <RestaurantCategory category={category}/>
        })
    }</>)
}

const mSTP = state => {
    
    return{
        categories: state.entities.restaurants.categories ? Object.values(state.entities.restaurants) : [],
        restaurants: state.entities.restaurants

}}

const mDTP = dispatch => ({
    getCategories: () => dispatch()
})

export default connect(mSTP, mDTP)(RestaurantCategories);


