import React from 'react';
import { Link, Route } from 'react-router-dom'
import loginFormContainer from './sessions/login_form_container'
import signupFormContainer from './sessions/signup_form_contaner'



const App = () => (
    <div>
        <header>
         <Link to="/"></Link>
         <Link to="/signup"/>
         <Link to="/login"/>
        </header>

        <Route path="/signup" component={signupFormContainer}/>
        <Route path="/login" component={loginFormContainer}/>
    </div>
);

export default App;