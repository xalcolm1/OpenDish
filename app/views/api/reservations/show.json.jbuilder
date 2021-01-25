json.extract! @reservation, :id, :date,:user_id, :restaurant_id, :people
json.extract! @reservation.restaurant, :name, :address
json.extract! @reservation.user, :firstname, :lastname, :email


