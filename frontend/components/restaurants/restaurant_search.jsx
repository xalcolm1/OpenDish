import React from 'react';

const RestaurantSearch = () =>  {
   
    return (
        <div className="searchbar">
            <input type="date" className="restaurant-data"/>
            <input type="datetime"className="restaurant-data"/>
            <input type="number" className="restaurant-data"/>
            <input type="text" className="restaurant-data"/>
            <input type="submit" value="Search" className="find-restaurant"/>

        </div>
    )
    
}

export default RestaurantSearch;