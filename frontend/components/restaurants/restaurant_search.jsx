import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchRestaurants } from '../../actions/restaurant_actions';
import { withRouter } from 'react-router';

const RestaurantSearch = (props) => {
  

    const date = new Date();
    const todaysDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const todaysTime = `${date.getHours()}:${date.getMinutes()}`;

    const [dateTime, setDateTime] = useState(todaysDate);
    const [time, setTime] = useState(todaysTime);
    const [query, setQuery] = useState('');
   
    const handleSearch = () => {
        if(query.length > 0){
        props.search({address: query, cuisine: query, name: query})
        .then(() => {
            props.history.push('restaurants');
        })       
       }
    }


    //  next step make a restaurant index for displaying all restaurants 
    
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


const mSTP = state => ({
        restaurants: state.entities.restaurants.all
})

const mDTP = dispatch => ({
        search: (query) => dispatch(searchRestaurants(query)) 
})

export default withRouter(connect(mSTP, mDTP)(RestaurantSearch));