import React from 'react';
import { Link, Route } from 'react-router-dom';
import loginFormContainer from './sessions/login_form_container';
import signupFormContainer from './sessions/signup_form_contaner';
import {AuthRoute} from '../util/route_util';
import NavContainer from './navcontainer/NavContainer';
import HomePage from './Homepage/Homepage'



const App = () => (
    <>
        <header className='hbar'>
            <Link to="/"> <img src={OuverteURL} height="45"/></Link>
       
            <NavContainer className="auth-route" />
        </header>


        <HomePage className="home"/> 

        


        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/login" component={loginFormContainer}/>
    </>

);

export default App;