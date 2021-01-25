import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchCategory } from '../../actions/restaurant_actions';
import { RestaurantIndexItem } from '../restaurants/resaurant_index';
import Stars from '../reviews/stars';

//props must include : 
// --category

const RestaurantCategory = (props) => {

    React.useEffect(() => {
 
        props.searchCategory({cuisine: props.category})

    },[])

    const slider = React.useRef()

    const scroll = (direction) => {
        
        let offset;
        direction === 'left' ? offset = -800 : offset = 800;
        let width = slider.current.scrollWidth;
        let newPosition = slider.current.scrollLeft + offset ;
        let overflow = newPosition === width;
        if(overflow) slider.current.scrollTo(0,0);
        if((newPosition < 8 )&&(direction === 'left')) slider.current.scrollTo(width,0);

          slider.current.scrollBy(offset ,0)  
    }
    return (
                    
        <section className="restaurant-category">
            <div className="index-title">
                <h2>
                    {props.category}
                </h2>
            </div>
            <div className='outer-restaurant-index'>
                <div className="left-pointer arrow" onClick={() => scroll('left')}>
                    <img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>
                </div>  
            
                <div className='restaurant-index' ref={slider}>
                {
                props.restaurants.map((restaurant) => {
                    let targetRating = 0;

                    if(restaurant.reviews){
                        targetRating = 0;
                        if(restaurant.reviews.length > 0){
                        restaurant.reviews.forEach((review) => targetRating += review.overall) 
                        targetRating = targetRating / restaurant.reviews.length
                        }
                    }
                    return(
                        <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id}>
                            <RestaurantIndexItem >
                                <div 
                                    className='restaurant-img'
                                    style={{backgroundImage : `url(${restaurant.photoUrl ? restaurant.photoUrl: ivyWallURL})`}}
                                    >
                                </div>
                                <div className='restaurant-information'>
                                    <Stars targetRating={targetRating}/>
                                    <h4>{restaurant.name}</h4>
                                    <h6>{restaurant.cuisine}</h6>
                                    <h6>{restaurant.address}</h6>                                    
                                </div>
                            </RestaurantIndexItem>    
                        </Link>
                    ) 
                })
                }
                </div>

                <div className="right-pointer arrow" onClick={() => scroll('right')}>
                    <img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>
                </div>       
            </div>
        </section>
    )
}

const mSTP = (state, ownProps)=> {
    let restaurants = state.entities.restaurants.categories[ownProps.category]

    return {
        restaurants:  restaurants ? Object.values(restaurants) : [] 
    }
}

const mDTP = () => {
    return {
        searchCategory: (category) => dispatch(searchCategory(category))
    }
}


export default connect(mSTP, mDTP)(RestaurantCategory)