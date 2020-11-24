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
        this.props.action(this.state);

        // e.preventDefault();
        const formData = new FormData();
        // formData.append('post[title]', this.state.title);
        if (this.state.photoFile) {
      
          formData.append('restaurant[photo]', this.state.photoFile);
        }
        $.ajax({
          url: '/api/restaurants',
          method: 'POST',
          data: formData,
          contentType: false,
          processData: false
        });
    
    }

    previewFile() {
        e => {
              const reader = new FileReader();
            const file = e.currentTarget.files[0];
            reader.onloadend = () =>
            this.setState({ imageUrl: reader.result, imageFile: file });
            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.setState({ imageUrl: "", imageFile: null });
            }
            console.log(this.state.imageUrl)
        
        }
     
    }

    render() {
        debugger
        return(
            <div>
                <img src={this.state.imageUrl} alt="idk"/>
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
                    type="file" 
                    name="restaurant image" 
                    onChange={this.previewFile()}
                    className="file-chooser"
                    /> 
                <img src={this.state.imageUrl} alt=""/>
                <input 
                    type="submit" 
                    value="Create Restaurant"
                    />

               


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
        cuisine: ''
    },
    formType: 'restaurant-create'
})

const mapDispatchToProps = dispatch => ({
     action: (restaurant) => dispatch(createRestaurant(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);