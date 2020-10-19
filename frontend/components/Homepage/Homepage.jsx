import React from 'react';
import RestaurantSearch from '../restaurants/restaurant_search';
const Homepage = props => (
    <div className='homepage'>
        <div className="restaurant-finder">
            
          
                <h1>Find a table now </h1>
                <RestaurantSearch />
            
        </div>

    </div>
)

export default Homepage;