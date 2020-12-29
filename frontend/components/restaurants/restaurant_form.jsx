import React from 'react';
import { createRestaurant } from '../../actions/restaurant_actions';
import { connect } from 'react-redux';

class RestaurantForm extends React.Component{

    constructor(props) {
        super(props);
        this.state = this.props.restaurant
        this.handleSubmit = this.handleSubmit.bind(this);
        this.previewFile = this.previewFile.bind(this);
    }
    
    handleInput(field) {
        return  e => {   
            this.setState({ [field]: e.target.value });
        }
    }
    
 
    handleSubmit() {
        
        return e => {


            e.preventDefault();
            const restaurant = new FormData();
            // debugger

            restaurant.append('restaurant[owner_id]', this.state.owner_id);
            restaurant.append('restaurant[name]', this.state.name);
            restaurant.append('restaurant[address]', this.state.address);
            restaurant.append('restaurant[cuisine]', this.state.cuisine);
            if (this.state.photoFile !== null) {

              restaurant.append('restaurant[photo]', this.state.imageFile);

            }
          
            this.props.action(restaurant)
            this.props.setState({})

        }
    }

    previewFile() {
        
       return e => {

            const reader = new FileReader();
            const file = e.currentTarget.files[0];
        

            reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });
            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.setState({ imageUrl: "", imageFile: null});
            }
            
        }
     
    }

    render() {

        return(
            <div>
            <form onSubmit={this.handleSubmit()} className='restaurant-form'>
               
                <input 
                    type="text" 
                    onChange={this.handleInput('name')}
                    placeholder='Restaurant Name'
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

                <div className="file">
                    <input 
                        type="file" 
                        name="restaurant image" 
                        onChange={this.previewFile()}
                        className="file-chooser"

                        /> 
                    <img src={this.state.imageUrl} alt="" height="50"/>
                </div>
                
                <input type="submit" value="Create Restaurant"/>
            </form>
        </div>
        );  
    }
    
}

const mapStateToProps = state => ({
    restaurant: {
        owner_id: state.session.id,
        name: '',
        address: '',
        cuisine: '', 
        imageUrl: null,
        imageFile: null
    },
    formType: 'restaurant-create'
})

const mapDispatchToProps = dispatch => ({
     action: (restaurant) => dispatch(createRestaurant(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);