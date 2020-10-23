import React from 'react';
import { NavLink } from 'react-router-dom';
//this link will be a container for all links 
//so I only need to style one classname
function PrettyLink(props){
    return (
        <NavLink to={props.to}  onClick={props.onClick ? props.onClick : null}className="pretty-link">
            {props.children}
        </NavLink> 
    )
}

export default PrettyLink;