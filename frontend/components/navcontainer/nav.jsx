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
                <NavItem>
                    <PrettyLink to="/"  onClick={() => logout()} > Log Out</PrettyLink>  
                </NavItem>
                <NavItem>
                    <PrettyLink to={`/users/${currentUser.id}`} >profile</PrettyLink>
                </NavItem>
                <NavItem>
                    <PrettyLink to={`/restaurants`} >restaurants</PrettyLink>
                </NavItem>

            </NavList>
             
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;