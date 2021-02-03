
import React from 'react';



const ReservationIndexItem = (props) => {
    const {reservation, userName, action} = props;

    let dateNow = new Date(props.reservation.date);
    const reformatDate = number => number > 9 ?   number : `0${number}`;
    let date = `${dateNow.getFullYear()}-${reformatDate(dateNow.getMonth() + 1)}-${reformatDate(dateNow.getDate())}`;
    let time = `${reformatDate(dateNow.getHours())}:${reformatDate(dateNow.getMinutes())}:${reformatDate(dateNow.getSeconds())}`;

    // let date = new Date(props.reservation.date).toDateString()
    // let time = new Date(props.reservation.date).toTimeString()

    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        id: props.reservation.id,
        user_id: props.reservation.user_id,
        restaurant_id: props.reservation.restaurant_id,
        people: props.reservation.people,
        date: props.reservation.date
    });

    const handleSelection = () => {
        return e => {

            setState(prevState => ({
                ...prevState,
                people: parseInt(event.target.value)
            }))
        };
    };
    
    const handleSubmit = () => {
        date = new Date(state.date).toLocaleDateString()
        time = new Date(state.date).toLocaleTimeString()
        // console.log(state.date)
        action(state)
        // .then(
        //     value => 
        //     rejection => 
        // )
        
        // .then(action => {
        //     let reservationId = action.reservation.id
        //     console.log(props)
        //     props.history.push(`/confirmation/${reservationId}`)
        //  })

        setOpen(!open)
    }

    const handleChange = (type) => {
        return  event => {
            let change = event.target.value

            if(type === 'date'){ 
                date = change;

              
            } else if (type === 'time'){
                time = change;
            }
            let milliseconds = new Date(`${date}T${time}`).getTime()
            setState(prevState => ({
                ...prevState,
                date:  milliseconds
            }))
          

        
        }
    }
    const options = [];
    const currentDate = new Date(state.date)

    //create options
    for(let i = 1; i <= 20; i ++){
        options.push(<option 
                    key={i}
                    value={i}
                    onClick={() =>  
                        setState(prevState => ({
                        ...prevState,
                        people: i
                    }))}
                    className="option"
                    >{`For ${i}`}</option>)
    }
    return (
        <li  className="reservation-index-item">
            <aside>{userName}</aside>
            <main className="reservation-body">         
                <div>{reservation.name}</div>
                <div>{reservation.address}</div>

                { open ? (
                    <>
                        <label htmlFor="people"> Party Size</label>
                        <select className="people" onChange={handleSelection()} value={state.people}>
                            {options}
                        </select> 
                        <div className="column"> 
                            <label htmlFor="date"> Date</label>
                            <input type="date" onChange={handleChange('date') } />
                            <label htmlFor="time">Time</label>
                            <input type="time" onChange={handleChange('time')} />
                        </div>
                    </>
                ):(
                <>
                    <div> On {`${reformatDate(currentDate.getMonth() + 1)}/${reformatDate(currentDate.getDate())}/${currentDate.getFullYear()} `} 
                    At {`${reformatDate(currentDate.getHours())}:${reformatDate(currentDate.getMinutes())}`}</div>
                    <div>{state.people > 1 ? `${state.people} people` : `${state.people} person`}</div>
                </>
                )}


            </main>
        
            <div className='editDeleteArea'>
                <button onClick={props.delete(reservation.id)}>Cancel Reservations</button>
                <div className="edit">
                     <button onClick={() => {
                         setOpen(!open);
                        setState({
                            id: props.reservation.id,
                            user_id: props.reservation.user_id,
                            restaurant_id: props.reservation.restaurant_id,
                            people: props.reservation.people,
                            date: dateNow.getTime()
                        })}}>{open ? 'Cancel' : 'Edit'}</button>

                {  open ? (<button onClick={() => handleSubmit()}> Done </button>) : null}
                </div>
               
            </div>

        </li>
    )
}

// index
export default ReservationIndexItem;