import React,{useState} from 'react';


export function NavList(props) {
    const [open, setOpen] = useState();
    const handleClick = () => {
        if (event.path[0].className ==="nav-backdrop") setOpen(!open);
    }
    return (
            <div className="nav-link">
                <a onClick={() => setOpen(!open)} className="title-div"> 
                    {props.title}
                </a>
                { open && props.children ? 
                <>
                    <div className="nav-backdrop" onClick={() => handleClick()}>
                        
                    </div>
                    
                    <div className="items">
                        {props.children}
                    </div>  
                </>
                : null}
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
