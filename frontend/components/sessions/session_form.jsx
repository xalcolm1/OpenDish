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
        return <Redirect to="/"/>
    }

    
    render() {
        const { formType } = this.props;
        return (
            <form onSubmit={this.handleSubmit} className="form-box">
                <h1>{formType}</h1>
                    {
                    (formType === "Sign Up") ? (
                        <>
                            <label>Firstname: 
                                <input type="text" onChange={this.handleInput('firstname')} value={this.state.firstname}/>
                            </label>

                            <label>Lastname: 
                                <input type="text" onChange={this.handleInput('lastname')} value={this.state.lastname}/>
                            </label>
                        </>
                    ) : <></>  }

                <label>Email: 
                    <input type="text" onChange={this.handleInput('email')} value={this.state.email}/>
                </label>

                <label>Password: 
                    <input type="password" onChange={this.handleInput('password')} value={this.state.password}/>
                </label>

                <input type="submit" value={formType}/>
            </form>    
         )  
    }
}   

export default sessionForm;