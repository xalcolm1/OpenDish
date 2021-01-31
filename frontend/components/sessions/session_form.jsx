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

    handleClick() {
        if(event.path[0].className === "form-backdrop") this.props.history.push('/')
    }
    handleInput(field) {
        
      return  e => {
          
          this.setState({ [field]: e.target.value });
      }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.action(this.state)
        .then(() => {

            // this.props.history.push("/")
            return <Redirect to="/"/>
        })


    }

    handleDemo(){
        this.setState({
            email: 'jose@tableouverte.com',
            password: 'welcomedemo'
        })
        

    }
    renderErrors(){
        let {errors} = this.props
        if( errors.length > 0 ){
        
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

   

    
    render() {
       
    const { formType } = this.props;
        return (
            <div className="form-backdrop" onClick={() => this.handleClick()}>
                
                <form onSubmit={this.handleSubmit} className={this.props.classname}>
                   
                    {
                        (formType === "Sign Up") ? (
                            <>
                                <div className="form-top">
                                <h2>Welcome to Table Ouverte!</h2>


                                    <Link to="/" className="sesh close">&#x1F33F;</Link>
                                </div>
                                {this.renderErrors()}
                                    <input 
                                        className="text-input"
                                        type="text" 
                                        onChange={this.handleInput('firstname')} 
                                        value={this.state.firstname} 
                                        placeholder="Firstname" 
                                    />                                
                                
                                    <input 
                                        className="text-input" 
                                        type="text" 
                                        onChange={this.handleInput('lastname')} 
                                        value={this.state.lastname} 
                                        placeholder="Lastname"
                                    />
                                        
                            </>
                        ) : (
                            <>
                                <div className="form-top">
                                    <h2>Please sign in</h2>

                                    <Link to="/" className="sesh close">&#x1F33F;</Link>
                                </div>
                                
                                {this.renderErrors()}                       
                            
                            </> 
                        )
                    }
                    <input 
                        className="text-input" 
                        type="text" 
                        onChange={this.handleInput('email')} 
                        value={this.state.email} 
                        placeholder="Email"
                    />
                                        
                    <input 
                        className="text-input" 
                        type="password" 
                        onChange={this.handleInput('password')} 
                        value={this.state.password} 
                        placeholder="Password"
                    />
                    
                    <input type="submit" value={formType} className="submitBTN" />
                    {
                        (formType === "Sign In") ? (
                            <>
                            <input  
                                   type="submit" 
                                   value="Demo" 
                                   className="demoBTN" 
                                   onClick={this.handleDemo }
                               />
                           

                               
                        <div>
                            New to Table Ouverte?  
                            <Link  to="/signup" className="createAnAccount" >
                                 Create an account
                            </Link>
                        </div>
                        </>
                        ): (
                            <div>
                                Already have an account? 
                                <Link  to="/login" className="createAnAccount" >
                                    Sign in !
                                </Link>
                            </div>
                        
                        )
                    }
                </form>   
            </div> 
         )  
    }
}   

export default sessionForm;