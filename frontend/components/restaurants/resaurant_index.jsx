import React,{useState} from 'react';


export class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount() {
        this.props.search({owner_id: this.props.currentUser.id, address: '', cuisine: '', name: ''})
    }
    render() {
        return (
            <div className='restaurant-index'>
    
                {
                            this.props.restaurants.map((restaurant) => {
                            return(
                                 <RestaurantIndexItem key={restaurant.id}>
    
                                    <h1>{restaurant.name}</h1>
                                    <div className='restaurant-information'>
                                        <h6>{restaurant.cuisine}</h6>
                                        <h6>{restaurant.address}</h6>
                                        
                                    </div>
                                    <p>
                                    </p>

                                </RestaurantIndexItem> 

                            
                                ) 
                            })
                        }
                       
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


