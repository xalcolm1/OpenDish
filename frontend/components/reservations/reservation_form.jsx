import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        this.dateNow = new Date();
        this.reformatDate = number => number > 9 ?   number : `0${number}`;
        this.date = `${this.dateNow.getFullYear()}-${this.reformatDate(this.dateNow.getMonth() + 1)}-${this.reformatDate(this.dateNow.getDate())}`;
        this.time = `${this.reformatDate(this.dateNow.getHours())}:${this.reformatDate(this.dateNow.getMinutes())}:${this.reformatDate(this.dateNow.getSeconds())}`;
            
        console.log('date:', this.date, 'time:', this.time)
        this.state = {
            user_id: this.props.userId,
            restaurant_id: this.props.restaurantId,
            people: 1,
            date: this.dateNow.getTime()
        }
       
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelection = this.handleSelection.bind(this)
        
    }

    handleChange(type) {
        return  event => {
            let change = event.target.value

            if(type === 'date'){ 
                this.date = change;
            } else if (type === 'time'){
                this.time = change;
            }

            let milliseconds = new Date(`${this.date}T${this.time}`).getTime();

            this.setState( prevState => ({
                ...prevState,
                date: milliseconds
            }))
        }
    }

    handleSelection(){
        return e => {
            this.setState(prevState => ({
                ...prevState,
                people: parseInt(event.target.value)
            })) 
        }
    }

    handleSubmit() {
            event.preventDefault() // without prevent default form is sent incorrectly
            this.props.action(this.state)
            .then(action => {
               let reservationId = action.reservation.id

               this.props.history.push(`/confirmation/${reservationId}`)
            })
    }
    render() {
        let options = [];

        for(let i = 1; i <= 20; i ++){
            options.push(<option 
                        key={i}
                        value={i}
                        onClick={this.handleSelection()}
                        className="option"
                        >{`For ${i}`}</option>)
        }

        return (
            <form className="reservation-form" onSubmit={() => this.handleSubmit()}>
                <label htmlFor="people"> Party Size</label>

                <select className="people" onChange={this.handleSelection()}>
                {options}
                </select>   

                <div className="date-time-inputs">
                    <div className="column"> 
                        <label htmlFor="date"> Date</label>
                        <input type="date" onChange={this.handleChange('date') } />
                    </div>
                    {/* value={this.state.date} */}
                    <div className="column"> 
                        <label htmlFor="time">Time</label>
                        <input type="time" onChange={this.handleChange('time')} />
                    </div>
                </div>

                <input type="submit" className="Ouverte Ouverte-hover span" value="Find a table"/>
                {/* <input type="submit" className="Ouverte Ouverte-hover span" value="Find a table" onClick={}/> */}
            </form>
        )
    }
    //takes in current user_id from connectMSTP
    //takes in create reservation from connectMDTP
    //accepts custom dropdown of number of people
    //auto completes dateTime to the current day 
};


export default withRouter(ReservationForm);