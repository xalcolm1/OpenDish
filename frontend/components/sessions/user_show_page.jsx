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
      //change state to only include 
        this.state = {
            reservations: this.props.reservations,
            display: {
                    reservations: false,
                    restaurants: true,
                    reviews: false,
                    prevReservations: false
                }
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
        if(this.props.reservations){
                this.pastReservations = [];
                this.upcomingReservations = [];
       
            // when a new reservation comes from state it first
            // goes here to be split into the categories of past and future reservatons
            
            this.props.reservations.forEach(reservation => {
                console.log(reservation)
                console.log(new Date(reservation.date))
                console.log(this.date)


                if (new Date(reservation.date) < this.date) {
                    this.pastReservations.unshift(reservation)
                } else {
                    this.upcomingReservations.unshift(reservation)
                }
            })
        }  
    }


    

    render() {

        const { search, restaurants } = this.props

        let currentItems

        this.currentUser  = this.props.currentUser ?  this.props.currentUser : this.props.getUser(this.props.userId).then(user => user)

        if(this.state.display.restaurants){
            currentItems = (
                            <RestaurantIndex 
                                search={search}
                                restaurants={restaurants}//removed search
                                currentUser={this.currentUser}
                            />
                            )
            
        } else if (this.state.display.reservations) {
            currentItems = (
                            <ReservationsIndex
                                className="scrollbox"
                                currentUser={this.currentUser}
                                reservations={this.upcomingReservations}
                            />
                            )
            // console.log(curre)
           
        } else if (this.state.display.reviews) { 
            currentItems = (
                            <ReviewIndex
                                reviews={this.currentUser.reviews}
                            />
                            )   

        } else if (this.state.display.prevReservations) {

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
                    className={this.state.display.restaurants ? 'selected' : ''}
                    onClick={() => 
                        this.setState(prevState => ({
                                    ...prevState,
                                   display: {
                                        reservations: false,
                                        restaurants: true,
                                        reviews: false,
                                        prevReservations: false
                                    }
                                }))
                            }
                    >Restaurants</div>

                    <div 
                    className={this.state.display.reservations ? 'selected' : ''}
                    onClick={() =>

                        this.setState(prevState => ({
                                    ...prevState,
                                    display: {
                                        reservations: true,
                                        restaurants: false,
                                        reviews: false,
                                        prevReservations: false
                                    }
                                }))
                        }
                    >Reservations</div>

                    <div  
                    className={this.state.display.reviews ? 'selected' : ''}
                    onClick={() => 
                        this.setState(prevState => ({
                                    ...prevState,
                                    display: {
                                        reservations: false,
                                        restaurants: false,
                                        reviews: true,
                                        prevReservations: false
                                    }
                                }))
                        }
                    >Reviews</div>

                    <div 
                    className={this.state.display.prevReservations ? 'selected' : ''}
                    onClick={() => 
                        this.setState(prevState => ({
                                    ...prevState,
                                    display: {
                                        reservations: false,
                                        restaurants: false,
                                        reviews: false,
                                        prevReservations: true
                                    }
                                }))
                        }
                    >Previous Reservations</div>
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
        reservations:  users[session.id].reservations,
        reviews: users[session.id].reviews,
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