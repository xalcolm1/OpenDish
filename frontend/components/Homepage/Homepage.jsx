import React from 'react';
import RestaurantSearch from '../restaurants/restaurant_search/restaurant_search';
import RestaurantCategory from '../restaurants/restaurant_category';

const Homepage = props => (
    <div className='homepage'>
        <div className="restaurant-finder">
                <h1 className="headline">Find your table for any occasion</h1>
                <RestaurantSearch />
        </div>
                <RestaurantCategory category="japanese"/>
                <RestaurantCategory category="cafe"/>
                <RestaurantCategory category="italian"/>
                <RestaurantCategory category="mexican"/>
                <RestaurantCategory category="american"/>

    </div>
)

export default Homepage;