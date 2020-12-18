@reservations.each do |reservation|
    reservation.set! reservation.id do 
        json.date reservation.date
        json.restaurant reservation.restaurant
        json.user reservation.user
    end
end