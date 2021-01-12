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
        this.currentUser  = this.props.currentUser ?  this.props.currentUser : this.props.getUser(this.props.userId).then(user => user)

       
    }
    componentDidMount() {
        this.props.getUser(this.props.userId)
      
    }

    componentDidUpdate(){
        this.pastReservations = [];
        this.upcomingReservations = [];
        
        this.currentUser.reservations.forEach(reservation => {
            if(new Date(reservation.date) < this.date){
              this.pastReservations.unshift(reservation)
            }else {
              this.upcomingReservations.unshift(reservation)
            }
        })
    }
    

    render() {
        const {search, restaurants } = this.props

        let currentItems

        this.currentUser  = this.props.currentUser ?  this.props.currentUser : this.props.getUser(this.props.userId).then(user => user)

        if(this.state.restaurants){
            currentItems = (
                            <RestaurantIndex 
                                restaurants={restaurants}
                                search={search}
                                currentUser={this.currentUser}
                            />
                            )
            
        } else if (this.state.reservations) {
       
            currentItems = (
                            <ReservationsIndex
                                className="scrollbox"
                                currentUser={this.currentUser}
                                reservations={this.upcomingReservations}
                            />
                            )
           
        } else if (this.state.reviews) { 
            currentItems = (
                            <ReviewIndex
                                reviews={this.currentUser.reviews}
                            />
                            )   

        } else if (this.state.prevRestaurants) {

            currentItems = (
                            <ReservationsIndex
                                currentUser={this.currentUser}
                                reservations={this.pastReservations}
                            />
                            )

        }

        // debugger

        return (
            
            <div className='profile-page'>
                <h1 id="profile-header">
                    {this.currentUser.firstname}'s 
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