import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class sessionForm extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }
    componentDidMount() {
        this.props.clearErrors();
    }

    handleInput(field) {
      return  e => {
          this.setState({ [field]: e.target.value });
      }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state);

        return () => (<Redirect to="/"/>)
        
    }

    handleDemo(){

        this.props.action({
            email: 'jose@tableouverte.com',
            password: 'welcomedemo'
        })
        return () => (<Redirect to="/"/>) 

    }
    renderErrors(){
        if( this.props.errors.length > 0 ){
        
        return (
            <ul>
            {
                
              this.props.errors.map( (error,idx) => {
                return <li key={idx} className="errors">{error}</li>

                })
            }
        </ul>
        )}
    }

    handleClick() {
        return e => {
            if(e.currentTarget.className !== this.props.classname) {
                this.props.history.push('/')
            }
            
        }
    }

    
    render() {
       
        const { formType } = this.props;
        return (
            <div className="form-backdrop" onClick={this.handleClick()}>
                <form onSubmit={this.handleSubmit} className={this.props.classname}>
                    
                    
                       {
                        (formType === "Sign Up") ? (
                            <>
                                <h1>Welcome to Table Ouverte!</h1>
                                {this.renderErrors()}
                                    <input className="text-input" type="text" onChange={this.handleInput('firstname')} value={this.state.firstname} placeholder="Firstname" />
                                

                                
                                    <input className="text-input" type="text" onChange={this.handleInput('lastname')} value={this.state.lastname} placeholder="Lastname "/>
                                     
                            </>
                        ) : (
                        <>
                            <h1>Please sign in</h1>
                           {this.renderErrors()}
                        

                        
                            <input  type="submit" value="Demo" className="demoBTN" onClick={this.handleDemo }/>
                        </> 
                        )
                        }
                        <input className="text-input" type="text" onChange={this.handleInput('email')} value={this.state.email} placeholder="Email"/>
                    

                    
                        <input className="text-input" type="password" onChange={this.handleInput('password')} value={this.state.password} placeholder="Password"/>
                    

                    <input type="submit" value={formType} className="submitBTN" />
                    {(formType === "Sign In") ? (<div>New to Table Ouverte? <Link to="/signup" className="createAnAccount">Create an account</Link></div>): null}
                </form>   
            </div> 
         )  
    }
}   

export default sessionForm;