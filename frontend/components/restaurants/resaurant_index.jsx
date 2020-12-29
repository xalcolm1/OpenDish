import React from 'react';
import { Link } from 'react-router-dom';
import Stars from '../reviews/stars';
//if restaurant index does not appear on heroku run rails heroku run db:migrate:seed
export class RestaurantIndex extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            left: 0
        }
        this.slider = React.createRef()
    }

    scroll(direction){
        
        let offset;
        direction === 'left' ? offset = -800 : offset = 800;
        let width = this.slider.current.scrollWidth;
        let newPosition = this.slider.current.scrollLeft + offset ;
        let overflow = newPosition === width;
        
        if(overflow) {this.slider.current.scrollTo(7,0)} 
        
        if((newPosition < 8 )&&(direction === 'left')){ this.slider.current.scrollTo(width,0) }
     
            this.slider.current.scrollBy(offset, 0) 
        

        

    }
    
    componentDidMount() {

        this.props.search({owner_id: this.props.currentUser.id})
        // .then(() => {
        //     return (<Redirect to="/restaurants"/>)
        // })
        // this.setState({})
        
        //, address: '', cuisine: '', name: ''
    }
    render() {

        return (
            <div className='outer-restaurant-index'>
                
                  
                        {/* {
                        (this.slider.current && this.slider.current.scrollLeft - 800 > this.slider.current.scrollWidth) ? */}
                            <div className="left-pointer arrow" onClick={() => this.scroll('left')}>
                                <img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>
                            </div>  
                        {/* :
                            null
                    } */}

                <div className='restaurant-index' ref={this.slider}>
                    {
                        //overflow happening here: first restaurant review gradient dictates the rest of the star gradient
                        this.props.restaurants.map((restaurant) => {
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
                    {/* {
                        (this.slider.current && this.slider.current.scrollLeft + 800 < this.slider.current.scrollWidth) ? */}
                        <div className="right-pointer arrow" onClick={() => this.scroll('right')}>
                            <img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>
                        </div>       
                         {/* :
                        null
                     } */}
              
            </div>
        );
    }
    
};

export function RestaurantIndexItem(props) {

    return (
        <div className='restaurant-index-item'>
            {props.children}
        </div>
    );
};


