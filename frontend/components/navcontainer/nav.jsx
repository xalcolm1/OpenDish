import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Navbar = props => {
    const{ currentUser, logout } = props;
    const LoggedOutLinks = () => (
        <nav className="nav-session">
            <Link to="/signup" className="sesh">Sign Up</Link>
            <Link to="/login" className="sesh signup">Sign In</Link>
        </nav>

    );
    const LoggedInLinks = () => (
        <hgroup className="signedout" >
             <button className="logout" onClick={() => logout()} > Log Out</button>
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;