import React from 'react';
import PrettyLink from '../pretty_link';
import { Link } from 'react-router-dom';
import { NavItem, NavList} from "./nav_item";

const Navbar = props => {
    const{ currentUser, logout } = props;
    const LoggedOutLinks = () => (
        <nav className="nav-session">
            <Link to="/signup" className="sesh signup">Sign Up</Link>
            <Link to="/login" className="sesh signin">Sign In</Link>
        </nav>

);
    const LoggedInLinks = () => (
        <hgroup className="signedin" >
            <NavList title="Profile">
                
                <PrettyLink to="/"  onClick={() => logout()} >
                    <NavItem> Log Out</NavItem>
                </PrettyLink>  
                <PrettyLink to={`/users/${currentUser.id}`} >
                    <NavItem> profile </NavItem>
                </PrettyLink>
                
                <PrettyLink to={`/restaurants`} >
                    <NavItem>restaurants</NavItem>
                </PrettyLink>
                

            </NavList>
             
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;