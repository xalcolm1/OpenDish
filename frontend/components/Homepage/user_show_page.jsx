import React,{ useEffect } from 'react';
import Modal from '../modal/modal';
import RestaurantForm from '../restaurants/restaurant_form';
import { RestaurantIndex, RestaurantIndexItem}  from '../restaurants/resaurant_index';
import { searchRestaurants, getAllRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import PrettyLink from '../pretty_link';




class UserShowPage extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        const {search, currentUser, restaurants } = this.props
        return (
            
            <div className='profile-page'>
                <h1 id="profile-header">
                    {this.props.currentUser.firstname}'s profile
                </h1>
    
                <Modal formType="Create Restaurant">
                    <RestaurantForm/>
                </Modal>

                <div className="index-title">
                        <PrettyLink to="/restaurants" className="all-restaurants">Your restaurants</PrettyLink> 
                </div>

                <RestaurantIndex 
                restaurants={restaurants}
                search={search}
                currentUser={currentUser}
                />

            </div>
        )
        
    }
}

const mapStateToProps = ({session, entities : {users, restaurants}}) => {
    
    return{ 
        currentUser: users[session.id],
        restaurants: Object.values(restaurants.all)
    }
}

const mapDispatchToProps = dispatch => {
    
    return{
        search: (query) => dispatch(searchRestaurants(query)),


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);