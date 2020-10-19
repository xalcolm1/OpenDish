import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem, NavList} from "./nav_item";

const Navbar = props => {
    const{ currentUser, logout } = props;
    const LoggedOutLinks = () => (
        <nav className="nav-session">
            <Link to="/signup" className="sesh signup">Sign Up</Link>
            {/* <button onClick={}></button>
            <button onClick={}></button> */}
            <Link to="/login" className="sesh signin">Sign In</Link>
        </nav>

    );
    const LoggedInLinks = () => (
        <hgroup className="signedin" >
            <NavList title="Profile">
                <NavItem>
                    <Link to="/"  onClick={() => logout()} > Log Out</Link>  
                </NavItem>
                <NavItem>
                    <Link to="/profile" >profile</Link>
                </NavItem>

            </NavList>
             
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;