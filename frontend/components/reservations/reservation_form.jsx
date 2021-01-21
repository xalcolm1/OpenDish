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
        
    }

    handleChange(type) {
        return  event => {
            let change = event.target.value

            if(type === 'date'){ 
                this.date = change;
            } else if (type === 'time'){
                this.time = change;
            }
        }
    }

    handleSelection(){
        return event => {
            this.setState({people: parseInt(event.target.value)}) 
        }
    }

    handleSubmit () {
        // let reservationDate = `${this.date} ${this.time}`
        // let people = this.state.people
        console.log(this.state, "date:", this.state.date);

        this.setState({date: `${this.date} ${this.time}`},
            () => { 
                this.props.action(this.state)
                .then(
                    value =>   alert( `You have successfully reserved a table for ${this.state.people} on ${this.date}, at  ${this.time}`),
                    rejection => alert( `You have failed succesfully to reserve a table`)
                )
            },
            this.setState({ 
                people: 1,
                date: this.dateNow
            })
            );

      
    }
    render() {
        let options = [];

        for(let i = 1; i <= 20; i ++){
            options.push(<option 
                        key={i}
                        value={i}
                        onClick={() => this.setState({people: i}, console.log('people:',i, this.state.people))}
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