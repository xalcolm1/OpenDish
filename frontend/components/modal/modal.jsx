import React from 'react';

const Modal = props =>  {
   
    // const [display, setDisplay] = React.useState({initialState: true})
    
    let open = true;
    const toggle = () => {
        debugger
        open = !open;


    }
   
        const {ModalBody, modalTitle, formType} = props
        return (
            
                (!open) ? (
               <button onClick={() => toggle()}> {formType}  </button>
            ) : (
                <div className="modal" >
                    <div className="modal-head">
                        {modalTitle}
                        <button onClick={() => toggle()}>x</button>
                    </div>
                    
                </div>
            )
        
        )
        
    
}

export default Modal