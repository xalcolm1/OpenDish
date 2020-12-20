reservation.set! reservation.id do 
    json.date reservation.date
    json.extract! reservation.restaurant, :name, :address
    json.extract! reservation.user, :firstname, :lastname, :email
end

