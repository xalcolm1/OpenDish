import React from 'react';
import { Link } from 'react-router-dom';
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
        
        if(overflow) this.slider.current.scrollTo(0,0);
        if((newPosition < 8 )&&(direction === 'left')) this.slider.current.scrollTo(width,0);

          this.slider.current.scrollBy(offset ,0)  
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
                    <div className="left-pointer arrow" onClick={() => this.scroll('left')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>

                <div className='restaurant-index' ref={this.slider}>
                    {
                        this.props.restaurants.map((restaurant) => {
                            return(
                                <Link to={`/restaurants/${restaurant.id}`}>
                                    <RestaurantIndexItem key={restaurant.id}>
                                        <div className='restaurant-img'>
                                            
                                        </div>
                                        <div className='restaurant-information'>
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
                
                <div className="right-pointer arrow" onClick={() => this.scroll('right')}><img src={window.ArrowURL} alt='&#x2347;' className="arrow-svg"/>	</div>       

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


