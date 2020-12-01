import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';

class RestaurantShowPage extends React.Component {
    componentDidMount(){
        this.props.getRestaurant(this.props.match.params.restaurantId)
    }
    render(){
    return (
        <div>
            <div>
             
                <div className="restaurant-show">
                    
                    {this.props.restaurant ?<h1>{this.props.restaurant.name}</h1> : null}



                    <div className='review'>
                            reviews will go here
                    </div>

                    
                </div>  

                <div >
                        <div className='reservation'>
                            make a reservation
                        </div>
                        
                        <div>

                        </div>
                </div>

            </div>
        </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    

    return {
         restaurant: state.entities.restaurants.all[ownProps.match.params.restaurantId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RestaurantShowPage);