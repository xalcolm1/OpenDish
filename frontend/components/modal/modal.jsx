import React,{useStates, useRef} from 'react';

function Modal(props) {
   
    const [open, setOpen] = useState();
 
   
        const {children, modalTitle, formType} = props
        return (
                (!open) ? (
               <button onClick={() => setOpen(!open)} > {formType}  </button>
            ) : (
                <div className="modal" >
                    <div className="modal-head">
                        {modalTitle}
                        <button onClick={() => toggle()}>x</button>
                    </div>
                    {children}
                </div>
            )
        
        )
        
    
}

export default Modal