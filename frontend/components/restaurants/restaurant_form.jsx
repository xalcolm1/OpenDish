import React from 'react';
import { createRestaurant } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

class RestaurantForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.restaurant
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(field) {
        
        return  e => {
            
            this.setState({ [field]: e.target.value });
        }
    }
    
    handleSubmit() {
        this.props.action(this.state)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className='restaurant-form'>
               
                <input 
                    type="text" 
                    onChange={this.handleInput('name')}
                    placeholder='Name'
                />
                <input 
                    type="text" 
                    onChange={this.handleInput('address')}
                    placeholder='Address'
                />
                <input 
                    type="text" 
                    onChange={this.handleInput('cuisine')}
                    placeholder='Cuisine'
                />
                
                <input 
                    type="submit" 
                    value="Create Restaurant"
                />

            </form>
        );  
    }
    
}

const mapStateToProps = state => ({
    restaurant: {
        owner_id: state.session.id,
        name: '',
        address: '',
        cuisine: ''
    },
    formType: 'restaurant-create'
})

const mapDispatchToProps = dispatch => ({
     action: (restaurant) => dispatch(createRestaurant(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);