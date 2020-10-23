import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';

class RestaurantShowPage extends React.Component {
    componentDidMount(){
    }
    render(){
    return (
        <div className="restaurant-show">
            
                <h1>
                </h1>

                <div >
                    When the hearth fire turns to blue<br/>
                    What to do? What to do?<br/>
                    Run outside.  Run and hide.<br/>
                    <br/>
                    When your bright sword turns to rust<br/>
                    Who to trust? Who to trust?<br/>
                    Stand alone. Standing stone.<br/>
                    <br/>
                    See a woman pale as Snow?<br/>
                    Silent come and silent go.<br/>
                    What’s their plan? What’s their plan?<br/>
                    Chandrian. Chandrian.<br/>
                    <br/>
                    When the hearth fire turns to blue<br/>
                    What to do? What to do?<br/>
                    Run outside.  Run and hide.<br/>
                    <br/>
                    When his eyes are black as crow<br/>
                    Where to go? Where to go?<br/>
                    Near and far. Here they are.<br/>
                    <br/>
                    <br/>
                    reviews will go here
                </div>

            
        </div>)
    }

}

const mapStateToProps = (state, ownProps) => {
    

    return {
         restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getRestaurant: (id) => dispatch(getRestaurant(id))
    }
}
export default connect(null,mapDispatchToProps)(RestaurantShowPage);