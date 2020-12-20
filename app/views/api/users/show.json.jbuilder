json.extract! @user, :id, :email, :firstname, :lastname
json.reviews @user.reviews
json.reservations @user.reservations do |reservation|
    json.extract! reservation, :id, :date
    json.extract! reservation.restaurant, :name, :address
end