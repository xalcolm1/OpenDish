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
{/* 
    element.style {
    flex-direction: column;
    display: flex;
    align-items: center; */}
            <div className='restaurants'>
             
                <div className="restaurant-box">
                    
                    {this.props.restaurant ?<h1>{this.props.restaurant.name}</h1> : null}

                </div>  

                <div className='reservation-box' >
                        <div className='reservation'>
                            make a reservation
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