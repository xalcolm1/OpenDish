import React from 'react';
import { Redirect } from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
      return  e => {
          this.setState({ [field]: e.target.value });
      }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state);
        
    }

    
    render() {
        const { formType } = this.props;
        return (
            <div className="form-backdrop">
                <form onSubmit={this.handleSubmit} className="form-box">
                    
                    <h1>Please {formType.toLowerCase()}</h1>
                        {
                        (this.props.errors) ? (
                            <>
                                <ul>
                                    {
                                        this.props.errors.map( (error,idx) => {
                                        return <li key={idx} >{error}</li>
                                        })
                                    }
                                </ul>
                            </>
                        ):(
                            <>
                            </>
                        )
                        }{
                        (formType === "Sign Up") ? (
                            <>
                                
                                    <input type="text" onChange={this.handleInput('firstname')} value={this.state.firstname} placeholder="Firstname: " />
                                

                                
                                    <input type="text" onChange={this.handleInput('lastname')} value={this.state.lastname} placeholder="Lastname: "/>
                                
                            </>
                        ) : <></>  }

                        <input type="text" onChange={this.handleInput('email')} value={this.state.email} placeholder="Email:"/>
                    

                    
                        <input type="password" onChange={this.handleInput('password')} value={this.state.password} placeholder="Password:"/>
                    

                    <input type="submit" value={formType} className="submitBTN" onClick={() => (<Redirect to="/"/>) }/>
                </form>   
            </div> 
         )  
    }
}   

export default sessionForm;