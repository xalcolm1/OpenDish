import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import loginFormContainer from './sessions/login_form_container';
import signupFormContainer from './sessions/signup_form_contaner';
import { AuthRoute } from '../util/route_util';
import NavContainer from './navcontainer/NavContainer';
import HomePage from './Homepage/Homepage'
import Modal from './modal/modal';
import UserShowPage from './Homepage/user_show_page';
import RestaurantShowPage from './restaurants/restaurant-show';
import RestaurantSearchIndex from './restaurants/restaurant_search/restaurant_search_index';
const App = () => (
    <>
        <header className='hbar'>
            <Link to="/" className="logo"> <img src={OuverteURL} height="45"/></Link>
       
            <NavContainer className="auth-route" />
        </header>


        

        <Switch>

            <Route path='/restaurants/:restaurantId' component={RestaurantShowPage}/>
            <Route path='/users/:userId' component={UserShowPage}/>
            <Route path='/restaurants' component={RestaurantSearchIndex}/>
            <Route path="/" component={HomePage}/>
        </Switch>
    
        <AuthRoute exact path="/signup" component={signupFormContainer}/>
        <AuthRoute exact path="/login" component={loginFormContainer}/>
    </>

);

export default App;