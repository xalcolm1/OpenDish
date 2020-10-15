import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
    const{ currentUser, logout } = props;
    const LoggedOutLinks = () => (
        <nav className="nav-session">
            <Link to="/signup" className="signup">Sign Up</Link>
            <Link to="/login" className="signup">Sign In</Link>
        </nav>
    );
    const LoggedInLinks = () => (
        <hgroup>
             <button className="header-button" onClick={() => logout()}>Log Out</button>
        </hgroup>
    )
    return currentUser ? LoggedInLinks() : LoggedOutLinks()
};

export default Navbar;