import React from 'react';





const RestaurantCategory = (props) => {

  
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
        <section>
            <div className="index-title">
                <title>
                    {props.category.title}
                </title>
                {/* <div className="all-restaurants" onClick={(findRestaurants())}>View all</div>  */}
            </div>

            <div className='outer-restaurant-index'>
                    <div className="left-pointer arrow" onClick={() => scroll('left')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>

                <div className='restaurant-index' ref={slider}>
                    {
                        props.category.restaurants.map((restaurant) => {
                            return(
                                <div className='restaurant-index-item' key={restaurant.id}>
                                        <div className='restaurant-img'>
                                            
                                        </div>
                                        <div className='restaurant-information'>
                                            <h4>{restaurant.name}</h4>
                                            <h6>{restaurant.cuisine}</h6>
                                            <h6>{restaurant.address}</h6>                                    
                                        </div>
                                    </div>    
                                    ) 
                                })
                            }
                </div>
                
                <div className="right-pointer arrow" onClick={() => scroll('right')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>       

            </div>
        </section>
    )
}

export default RestaurantCategory