import React,{useState, useRef} from 'react';


function Modal(props) {
   
    const [open, setOpen] = useState();
   
    const {children, formType, customColor, icon, closeContent} = props;

    const handleClick = () => {
           if (event.path[0].className === "modal-backdrop")setOpen(!open) 
    }
   
    let classname = formType ? `${formType.slice(0,3)}-button` : 'icon'

    return (
        (!open) ? (
            <div 
            onClick={() => setOpen(!open)}
            className={classname}
            >{formType ? formType : icon}</div>
        ) : (
            <div className={customColor ? customColor : "modal-backdrop"} onClick={() => handleClick()}>
                <div className="modal" onSubmit={() => setOpen(!open)}>
                
                    <div onClick={() => setOpen(!open)} className="modal-close">&#x1F33F;</div>
    
                    {children}
    
                </div> 
            </div>
            )
           
    )
}

export default Modal;