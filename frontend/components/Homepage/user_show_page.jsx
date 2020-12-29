import React,{ useEffect } from 'react';
import Modal from '../modal/modal';
import RestaurantForm from '../restaurants/restaurant_form';
import { RestaurantIndex, RestaurantIndexItem}  from '../restaurants/resaurant_index';
import ReservationsIndex from '../reservations/reservation_index'
import ReviewIndex from '../reviews/review_index'
import { searchRestaurants, getAllRestaurants } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';
import PrettyLink from '../pretty_link';
import { getUser } from '../../actions/session_actions';




class UserShowPage extends React.Component {
    constructor(props){
        super(props)
      
        this.state = {
            reservations: false,
            restaurants: true,
            reviews: false,
            prevRestaurants: false
        }
        this.date = new Date;


        this.pastReservations = [];
        this.upcomingReservations = [];
       
      
       
    }
    componentDidMount() {
        this.props.getUser(this.props.userId)
      
    }

    componentDidUpdate(){
        this.props.currentUser.reservations.forEach(reservation => {
            if(new Date(reservation.date) < this.date){
              this.pastReservations.push(reservation)
            }else {
              this.upcomingReservations.push(reservation)
            }
        })
    }
    

    render() {
        const {search, currentUser, restaurants } = this.props

        let currentItems

        if(this.state.restaurants){
            currentItems = (
                            <RestaurantIndex 
                                restaurants={restaurants}
                                search={search}
                                currentUser={currentUser}
                            />
                            )
            
        } else if (this.state.reservations) {
       
            currentItems = (
                            <ReservationsIndex
                                className="scrollbox"
                                currentUser={currentUser}
                                reservations={this.upcomingReservations}
                            />
                            )
           
        } else if (this.state.reviews) { 
            currentItems = (
                            <ReviewIndex
                                reviews={currentUser.reviews}
                            />
                            )   

        } else if (this.state.prevRestaurants) {

            currentItems = (
                            <ReservationsIndex
                                currentUser={currentUser}
                                reservations={this.pastReservations}
                            />
                            )

        }

        return (
            
            <div className='profile-page'>
                <h1 id="profile-header">
                    {this.props.currentUser.firstname}'s 
                    profile
                </h1>
    
                <Modal formType="Create Restaurant">
                    <RestaurantForm/>
                </Modal>



                <nav className="selection-nav user-nav">
                    <div 
                    onClick={() => 
                        this.setState({
                                        reservations: false,
                                        restaurants: true,
                                        reviews: false,
                                        prevRestaurants: false
                                    })
                            }
                    >Restaurants</div>

                    <div 
                    onClick={() =>
                         this.setState({
                                        reservations: true,
                                        restaurants: false,
                                        reviews: false,
                                        prevRestaurants: false
                                    })
                        }
                    >Reservations</div>

                    <div  
                    onClick={() => 
                        this.setState({reservations: false,
                                        restaurants: false,
                                        reviews: true,
                                        prevRestaurants: false
                                    })
                        }
                    >Reviews</div>

                     <div  
                     onClick={() => 
                        this.setState({reservations: false,
                                        restaurants: false,
                                        reviews: false,
                                        prevRestaurants: true
                                    })
                        }
                    >Previous Restaurants</div>
                </nav>

                <div className="currentItems">
                  {currentItems}  
                </div>
                

            </div>
        )
        
    }
}

const mapStateToProps = ({session, entities : {users, restaurants}}) => {
    
    return{ 
        currentUser: users[session.id],
        userId: session.id,
        restaurants: Object.values(restaurants.all)
    }
}

const mapDispatchToProps = dispatch => {
    
    return{
        search: (query) => dispatch(searchRestaurants(query)),
        getUser: id => dispatch(getUser(id))


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);