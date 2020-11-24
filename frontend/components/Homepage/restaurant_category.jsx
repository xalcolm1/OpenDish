import React from 'react';

//fix this::

const RestaurantCategory = (props) => {

    React.useEffect(() => {

    },[])

    const slider = React.useRef()
    const scroll = (direction) => {
        
        let offset;
        direction === 'left' ? offset = -800 : offset = 800;
        let width = this.slider.current.scrollWidth;
        let newPosition = this.slider.current.scrollLeft + offset ;
        let overflow = newPosition === width;
        
        if(overflow) this.slider.current.scrollTo(0,0);
        if((newPosition < 8 )&&(direction === 'left')) this.slider.current.scrollTo(width,0);

          this.slider.current.scrollBy(offset ,0)  
    }
    return (
        <section>
            <div>
                <title>
            
                </title>
                <div>See all</div>
            </div>

            <div className='outer-restaurant-index'>
                    <div className="left-pointer arrow" onClick={() => this.scroll('left')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>

                <div className='restaurant-index' ref={slider}>
                    {
                        props.restaurants.map((restaurant) => {
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
                
                <div className="right-pointer arrow" onClick={() => this.scroll('right')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>       

            </div>
        </section>
    )
}