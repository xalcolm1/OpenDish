import React from 'react';
import { connect } from 'react-redux';
import { getRestaurant } from '../../actions/restaurant_actions';
// import { } from 'react-dom';

class RestaurantShowPage extends React.Component {
    componentDidMount(){
        // debugger


        this.props.getRestaurant(this.props.match.params.restaurantId)
    }

    render(){
    return (
        // <>
        <div className='backdrop'>
            <img src="" alt="restaurant img" className="background-img"/>
            
            <div className='restaurant'>
             
                <main className="restaurant-box">
                    <nav > 
                        <a href="#menu">Menu</a>
                        <a href="#photos">Photos</a>
                        <a href="#reviews">Reviews</a>
                    </nav>

                    {this.props.restaurant ?
                    <h1 >{this.props.restaurant.name}</h1>

                    : null}
                    <h2 id="menu"> Menu</h2>
                    <h2 id="photos"> Photos</h2>
                    <h2 id="reviews">Reviews</h2>
                    
                </main>  

                <aside className="reservation-box">
                        <div className='reservation'>
                            <h2>make a reservation</h2>
                            
                        </div>
             
                </aside>
            </div>
        </div>
        // </>
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