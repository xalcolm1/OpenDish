import React, { useState } from 'react';

const RestaurantSearch = () =>  {
    const date = new Date();
    const todaysDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    const [time, setTime] = useState(todaysDate)
   
    return (
        <div className="searchbar">
            <div className="params">
                <input type="date" className="restaurant-data" placeholder='today' value={time} onChange={(event) => setTime(event.value)}/>
                <input type="time" className="restaurant-data"/>
                <input type="number" className="restaurant-data"/>
            </div>
            <div>
            <input type="text" className="restaurant-data search"/>
            <input type="submit" value="Search" className="find-restaurant"/>
            </div>
            
        </div>
    )
    
}

export default RestaurantSearch;