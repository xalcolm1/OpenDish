

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

export const getReservation = (reservationId) => {
    return $.ajax({
        url: `/api/reservations/${reviewId}`,
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