import React from 'react';

const RestaurantSearch = () =>  {
   
    return (
        <div className="searchbar">
            <div className="params">
                <input type="date" className="restaurant-data" placeholder='today'/>
                <input type="time" className="restaurant-data"/>
                <input type="number" className="restaurant-data"/>
            </div>
            <input type="text" className="restaurant-data search"/>
            <input type="submit" value="Search" className="find-restaurant"/>
        </div>
    )
    
}

export default RestaurantSearch;