import React,{useState, useRef} from 'react';
import {connect} from 'react-redux';

function Modal(props) {
   
    const [open, setOpen] = useState();
   
    const {children, formType} = props;
    const inside = useRef();

    return (
        (!open) ? (
            <div 
            onClick={() => setOpen(!open)}
            className={`${formType.slice(0,3)}-button`}
            >{formType}</div>
        ) : (
            <div className='modal-backdrop'>
                <div className="modal" ref={inside} onSubmit={() => setOpen(!open)}>
                
                    <div onClick={() => setOpen(!open)} className="modal-close">&#x1F33F;</div>
    
                    {children}
    
                </div> 
            </div>
            )
           
    )
}

export default Modal;