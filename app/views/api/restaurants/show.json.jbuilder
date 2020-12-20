#
#  id           :bigint           not null, primary key
#  owner_id     :integer          not null
#  name         :string           not null
#  address     :string           not null
#  cuisine      :string
#  phone_number :integer
#  image_url    :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null


#     json.extract! @restaurant, :id, :owner_id, :name, :address, :cuisine
#     json.photoUrl url_for(@restaurant.photo) if @restaurant.photo.attached?

# json.set! @restaurant.id do
    json.extract! @restaurant, :id, :owner_id, :name, :address, :cuisine
    json.photoUrl url_for(@restaurant.photo) if @restaurant.photo.attached?
    json.reviews @restaurant.reviews do |review| 
        json.extract! review, :id, :body, :overall, :food, :service, :ambiance 
        json.firstname review.user.firstname
        json.image_url review.user.photo if review.user.photo.attached?

    end
    json.reservations @restaurant.reservations do |reservation|
        json.extract!  reservation, :id, :date
        json.extract!  reservation.user, :firstname, :lastname, :email
    end

# end