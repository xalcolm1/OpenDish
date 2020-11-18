import React,{useState} from 'react';


export class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            scrollPosition: 0
        }
        this.scroll = this.scroll.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleScroll(){
        

            this.setState({
                scrollPosition: this.pageXOffset
            })
        
    }
    scroll(direction){
        let x = this.state.scrollPosition
        let newX = direction === 'left' ? x -= 100 : x += 100 
        this.setState({ scrollPosition: this.pageXOffset})
        scrollTo({left: this.state.scrollPosition}, 0)
        
    }

    

    componentDidMount() {
        debugger
        this.props.search({owner_id: this.props.currentUser.id, address: '', cuisine: '', name: ''})
    }
    render() {
        return (
            <div className='restaurant-index' onScroll={() => this.handleScroll()}>
    
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

                        <button className="left-arrow" onClick={() => this.scroll('left')}></button>
                        <button className="right-arrow" onClick={() => this.scroll('right')}></button>
                       
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


