import * as reservationApiUtil from '../util/reservation_api_util';

export const RECIEVE_RESERVATION = 'RECIEVE_RESERVATION';
export const DESTROY_RESERVATION = 'DESTROY_RESERVATION';


const recieveReservtion = reservation => {
    return {
        type: RECIEVE_RESERVATION,
        reservation
    }
}

const destroyReservation = reservationId => {
    return {
        type: DESTROY_RESERVATION,
        reservationId
    }
}

export const createReservation = reservation => dispatch => {
    return reservationApiUtil.createReservation(reservation)
    .then(reservation => dispatch(recieveReservtion(reservation)))
}

export const deleteReservation = reservationId => dispatch => {
    return reservationApiUtil.deleteReservation(reservationId)
        .then(reservation => dispatch(destroyReservation(reservation.id)))
}