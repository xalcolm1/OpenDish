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
            // const formData = new FormData();
            // // formData.append('post[title]', this.state.title); 
         
            // formData.append('restaurant[owner_id]', this.state.owner_id);
            // formData.append('restaurant[name]', this.state.name);
            // formData.append('restaurant[address]', this.state.address);
            // formData.append('restaurant[cuisine]', this.state.cuisine);
    
            // if (this.state.photoFile) {
            //   formData.append('restaurant[photo]', this.state.photoFile);
    
            // }
              let restaurant = {
                owner_id: this.state.owner_id,
                name: this.state.name,
                address: this.state.address,
                cuisine: this.state.cuisine
                }
    
            if (this.state.photoFile) restaurant[photo] = this.state.photoFile
            
            this.props.action(restaurant).then(r => {console.log(r)});
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
                this.setState({ imageUrl: "", imageFile: null });
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
        fileUrl: null
    },
    formType: 'restaurant-create'
})

const mapDispatchToProps = dispatch => ({
     action: (restaurant) => dispatch(createRestaurant(restaurant))
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantForm);