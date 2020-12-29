import React from 'react';
import PrettyLink from '../pretty_link';
import { Link } from 'react-router-dom';
import { NavItem, NavList} from "./nav_item";
import Modal from '../modal/modal'

const Navbar = props => {
    const{ currentUser, logout } = props;
    React.useEffect(() => {
        if(currentUser){
            props.getUser(currentUser.id)
        }
    },[])

    const LoggedOutLinks = () => (
        <nav className="nav-session">
            <Link to="/signup" className="sesh signup">Sign Up</Link>
            <Link to="/login" className="sesh signin">Sign In</Link>
            
        </nav>  

    );

    const LoggedInLinks = () => (
        <hgroup className="signedin" >
            <NavList title={currentUser.firstname ? `Hello ${currentUser.firstname}!` : ''}>
                
                
                
                <PrettyLink to={`/users/${currentUser.id}`} >
                    <NavItem> profile </NavItem>
                </PrettyLink>

                <PrettyLink to={`/users/${currentUser.id}`} >
                    <NavItem> reservations </NavItem>
                </PrettyLink>

                <PrettyLink to={`/restaurants`} >
                    <NavItem>restaurants</NavItem>
                </PrettyLink>
                
                <PrettyLink to="/"  onClick={() => logout()} >
                    <NavItem> Log Out</NavItem>
                </PrettyLink>  


                

            </NavList>


            {/* <div className="search-button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.8525 20.3554L18.4094 16.9123C19.9257 15.0342 20.6639 12.646 20.4718 10.2399C20.2797 7.83373 19.172 5.5929 17.377 3.97913C15.5819 2.36536 13.2362 1.50158 10.8233 1.56578C8.41034 1.62998 6.11392 2.61726 4.40721 4.3242C2.69982 6.03084 1.71215 8.32742 1.64777 10.7406C1.58338 13.1539 2.44717 15.4999 4.06113 17.2951C5.67509 19.0904 7.91623 20.1981 10.3227 20.39C12.7291 20.5819 15.1175 19.8434 16.9956 18.3266L20.4385 21.7695C20.626 21.957 20.8803 22.0624 21.1455 22.0624C21.4107 22.0624 21.665 21.957 21.8525 21.7695C22.04 21.582 22.1454 21.3277 22.1454 21.0625C22.1454 20.7973 22.04 20.543 21.8525 20.3554ZM5.82128 16.2441C4.60593 15.0288 3.84958 13.4297 3.68109 11.7193C3.5126 10.0088 3.9424 8.29288 4.89725 6.86381C5.8521 5.43473 7.27292 4.38095 8.91763 3.88201C10.5623 3.38307 12.3292 3.46985 13.9171 4.12756C15.505 4.78528 16.8157 5.97322 17.6259 7.489C18.4361 9.00477 18.6957 10.7546 18.3604 12.4403C18.0251 14.126 17.1157 15.6433 15.7871 16.7336C14.4585 17.824 12.7929 18.4199 11.0742 18.4199C10.0982 18.4226 9.13145 18.2317 8.22978 17.8582C7.32811 17.4848 6.50947 16.9361 5.82128 16.2441Z" fill="#2B273D"/>
                </svg>
            </div> */}
                       
        </hgroup>
    )
    return (currentUser ? LoggedInLinks() : LoggedOutLinks())
};

export default Navbar;