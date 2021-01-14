import React,{useState, useRef} from 'react';


function AlertModal(props) {
   
    const [open, setOpen] = useState();
   
    const {children, formType, customColor, icon, closingContent} = props;

    const handleClick = () => {
           if (event.path[0].className === "modal-backdrop")setOpen(!open) 
    }
   
    let classname = formType ? `${formType.slice(0,3)}-button` : icon
    
    return (
            <div className={`${ open ? 'hidden' : 'show'}`} >
                <div className={customColor ? customColor : "modal-backdrop"} onClick={() => handleClick()}>
                    <div className="modal" onSubmit={() => setOpen(!open)}>
                    
                        <div onClick={() => setOpen(!open) } className="modal-close">{closingContent}</div>
        
                        {children}
        
                    </div> 
                </div>
            </div>
    )
           

}

export default AlertModal;