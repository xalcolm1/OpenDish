import React,{useState} from 'react';


export function NavList(props) {
    const [open, setOpen] = useState();

    return (
        <div className="nav-link">
            <a onClick={() => setOpen(!open)} className="title-div"> 
                {props.title}
            </a>
            <div className="items">
             { open && props.children ? props.children : null}
            </div>  
        </div>
    )
}

export function NavItem(props) {

    return (
        <div className="nav-item">
           
                {props.children}
           
        </div>
    )
}
