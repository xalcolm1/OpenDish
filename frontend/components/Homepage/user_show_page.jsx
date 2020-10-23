import React,{ useEffect } from 'react';
import Modal from '../modal/modal';
import RestaurantForm from '../restaurants/restaurant_form';
import { RestaurantIndex, RestaurantIndexItem}  from '../restaurants/resaurant_index';
import { searchRestaurants, getAllRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';



class UserShowPage extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        return (

            <div className='profile-page'>
                <h1>
                    {this.props.currentUser.name} profile
                </h1>
    
                    <Modal formType="Create Restaurant">
                        <RestaurantForm/>
                    </Modal>
                    
                    <RestaurantIndex 
                    restaurants={this.props.restaurants}
                    search={this.props.search}
                    currentUser={this.props.currentUser}

                    />
                       
    
                <ul>
                    <li>these will be links to owned restaurants</li>
                </ul>
            </div>
        )
    
        }
    }
    
const mapStateToProps = ({session, entities : {users, restaurants}}) => {
    
    
    return{ 
    currentUser: users[session.id],
    restaurants: Object.values(restaurants)
    }
}

const mapDispatchToProps = dispatch => {
    
    return{
        search: (query) => dispatch(searchRestaurants(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);