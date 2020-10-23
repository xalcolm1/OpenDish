import React,{useState} from 'react';


export class RestaurantIndex extends React.Component{
    constructor(props){
        super(props)

        // this.state = {open: true} onClick={() => this.setState({open: !this.state.open})}
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
                                        {/* <h6>{exists(phone_number)}</h6>    */}
                                    </div>
                                    <p>
                                    {/* {exists(menu) }  */}
                                    </p>

                                </RestaurantIndexItem> 

                            
                                ) 
                            })
                        }
                        {/* <div className="index-selection">
                            <button className="button previous"> &#8668; </button>
                            <button className="button next">&#8669;</button>
                        </div> */}
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




// import React,{useState, useEffect} from 'react';
// import { connect } from 'react-redux';
// import { searchRestaurants } from '../../actions/restaurant_actions'


// export function RestaurantIndex(props){
//     const [open, setOpen] = useState(true);
    
//     useEffect(() => {
        
//         props.search(props.query)
        
//     },[]);
    


    
//     return (
//         <div className='restaurant-index'>
//             <div onClick={setOpen(!open)} className></div>
            
                    


                
        
//         </div>
//     );
// };

// export function RestaurantIndexItem(props) {

//     return (
//         <div className='restaurant-index-item'>
//             {props.children}
//         </div>
//     );
// };
// const mapStateToProps = ({entities: {restaurants}}) => ({
//     restaurants: Object.values(restaurants)
// })

// const mapDispatchToProps = dispatch => ({
//         search: (query) => dispatch(searchRestaurants(query))
//     })

// export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex);


