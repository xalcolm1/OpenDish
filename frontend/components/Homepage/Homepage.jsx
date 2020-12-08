import React from 'react';
import RestaurantSearch from '../restaurants/restaurant_search/restaurant_search';
import RestaurantCategories from '../restaurants/restaurant_categories';

const Homepage = props => (
    <div className='homepage'>
        <div className="restaurant-finder">
                <h1 className="headline">Find your table for any occasion</h1>
                <RestaurantSearch />
                <RestaurantCategories/>
        </div>
    </div>
)

export default Homepage;