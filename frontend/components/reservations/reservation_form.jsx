import React from 'react';
import { connect } from 'react-redux';
import { createReservation } from '../../actions/reservation_actions';

class ReservationForm extends React.Component {
    constructor(props) {
        super(props)
        let dateNow = new Date(this);

        this.date = ''
        this.time = ''
        

        this.state = {
            user_id: this.props.userId,
            restaurant_id: this.props.restaurant.id,
            people: 2,
            date: dateNow

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)


    }

    handleChange(type) {
        return  e => {
           let change = e.target.value

           if(type === 'date'){
               this.date = change;
           } else if (type === 'time'){
               this.time = change
           }
        }
    }

    handleSubmit () {
        this.setState({date: `${this.date} ${this.time}`})
        this.props.action(this.state)
    }
    render() {
        let options = [];
        for(let i = 1; i <= 20; i ++){
            options.push(<option 
                                key={i}
                                value={i}
                                onClick={() => this.setState({people: i})}
                                className="option"
                                >{`for ${i}`}</option>)
        }

        return (
            <form className="reservation-form" onSubmit={() => this.handleSubmit()}>
                <select className="people">
                    {options}
                </select>
                <div className="date-time-inputs">
                    <input type="date" onChange={this.handleChange('date') } />
                    <input type="time" onChange={this.handleChange('time')}/>
                </div>

                <input type="submit" className="Ouverte Ouverte-hover" value="Find a Table"/>
            </form>
        )
    }
    //takes in current user_id from connectMSTP
    //takes in create reservation from connectMDTP
    //accepts custom dropdown of number of people
    //auto completes dateTime to the current day 

}
const mSTP = state => {
    return {
        userId: state.session.id
    }
}
const mDTP = dispatch => {
    return {
        action: reservation => dispatch(createReservation(reservation))
    }
}

export default connect(mSTP, mDTP)(ReservationForm) ;