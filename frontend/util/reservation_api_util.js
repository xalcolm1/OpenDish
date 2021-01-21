

export const createReservation = reservation => {
    return $.ajax({
        url: "/api/reservations",
        method: "POST",
        data: { reservation }
    })
}

export const deleteReservation = reservationId => {
    return $.ajax({
        url: `/api/reservations/${reservationId}`,
        method: "DELETE",
        data: { reservationId }
    })
}

export const updateReservation = reservation => {
    console.log(reservation)
    return $.ajax({
        url: `/api/reservations/${reservation.id}`,
        method: "PATCH",
        data: { reservation }
    })
}

export const getReservation = (reservationId) => {
    return $.ajax({
        url: `/api/reservations/${reservationId}`,
        method: "GET",
        data: { reservationId }
    })
}

export const getReservations = (id, type) => {
    return $.ajax({
        url: '/api/reservations',
        method: "GET",
        data: { id, type }

    })
}