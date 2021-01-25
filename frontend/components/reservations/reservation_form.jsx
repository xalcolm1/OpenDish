import React from 'react';
import { getRestaurant } from '../../actions/restaurant_actions'
class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
       this.dateNow = new Date();

        this.date = ''
        this.time = ''
            

        this.state = {
            user_id: this.props.userId,
            name: '',
            restaurant_id: this.props.restaurantId,
            people: 1,
            date: this.dateNow
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

            this.setState( prevState => ({
                ...prevState,
                date: `${this.date} ${this.time}`
            }))

        }
    }

    handleSelection(){
        return e => {
            this.setState(prevState => ({
                ...prevState,
                people: parseInt(event.target.value)
            }), console.log(this.state)) 
        }
    }

    handleSubmit() {
        let reservationDate = `${this.date}, at ${this.time}`
        let people = this.state.people

        console.log(this.state, "people:", this.state.people);  
        // debugger

           
            this.props.action(this.state)
            .then(
                value =>   alert( `Reservation confirmed for ${people} on ${reservationDate}`),
                rejection => alert( `Reservation Failed`)
            )
            
            this.setState({ 
                people: 1,
                date: this.dateNow
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

                <input type="submit" className="Ouverte Ouverte-hover span" value="Find a table" />
                {/* <input type="submit" className="Ouverte Ouverte-hover span" value="Find a table" onClick={}/> */}
            </form>
        )
    }
    //takes in current user_id from connectMSTP
    //takes in create reservation from connectMDTP
    //accepts custom dropdown of number of people
    //auto completes dateTime to the current day 
};

export default ReservationForm;