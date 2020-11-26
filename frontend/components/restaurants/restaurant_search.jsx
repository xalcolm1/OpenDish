import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';

const RestaurantSearch = (props) => {
  

    const date = new Date();
    const todaysDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const todaysTime = `${date.getHours()}:${date.getMinutes()}`;

    const [dateTime, setDateTime] = useState(todaysDate);
    const [time, setTime] = useState(todaysTime);
    const [query, setQuery] = useState('');
   
    const handleSearch = () => {
        
      props.search({address: query, cuisine: query, name: query});
        
        console.log(props.restaurants)
    }
    
    return (
        <div className="searchbar" >
            <div className="params">
                <input type="date" className="restaurant-data" placeholder='today' value={dateTime} onChange={(event) => setDateTime(event.value)}/>
                <input type="time" className="restaurant-data" value={time} onChange={(event) => setTime(event.value)}/>
                <input type="number" className="restaurant-data"/>
            </div>

            <div className="search-text">
                <input type="text" className="restaurant-data search" onChange={(event) => setQuery(event.target.value)} placeholder="search restaurants, cuisine or location" />
                <input type="submit" value="Search" className="find-restaurant" onClick={() => handleSearch()} />
            </div>
        </div>
    ) 
}

//connect search action from actions
const mSTP = state => {
    return {
        restaurants: state.entities.restaurants
    }
}

const mDTP = dispatch => {
    return {
        search: (query) => dispatch(searchRestaurants(query)) 
    }
}

export default connect(mSTP, mDTP)(RestaurantSearch);