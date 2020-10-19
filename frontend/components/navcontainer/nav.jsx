import React from 'react';
import { Redirect, Link } from 'react-router-dom';

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
        <hgroup className="signedout" >
             <Link to="/" className="sesh logout" onClick={() => logout()} > Log Out</Link>
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;