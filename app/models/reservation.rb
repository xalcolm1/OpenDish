# == Schema Information
#
# Table name: reservations
#
#  id            :bigint           not null, primary key
#  date          :datetime         not null
#  user_id       :integer
#  restaurant_id :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Reservation < ApplicationRecord
    validates :user_id, :restaurant_id, :date, presence: true

    belongs_to  :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

end

# date must be a DateTime Object see docs

#// see example below: 
# [6] pry(main)> res = Reservation.new(date: date, user_id: user.id, restaurant_id: restaurant.id)
# => #<Reservation:0x00007fd965d54dc8 id: nil, date: Thu, 17 Dec 2020 20:03:54 UTC +00:00, user_id: 15, restaurant_id: 99, created_at: nil, updated_at: nil>
# [7] pry(main)> reservation.user
# NameError: undefined local variable or method `reservation' for main:Object
# from (pry):7:in `__pry__'
# [8] pry(main)> res.user
#   User Load (0.4ms)  SELECT  "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", 15], ["LIMIT", 1]]
# => #<User:0x00007fd9652eb440
#  id: 15,
#  session_token: "P6YMn0co0-YlGdb5EadOvA",
#  email: "jose@tableouverte.com",
#  password_digest: "$2a$12$CODVhRMRP9m.ZVjmr4PYf.IN7bKjRAsHxKiaV8ovxdL.Wrxtkn8R.",
#  image_url: nil,
#  created_at: Thu, 10 Dec 2020 18:34:29 UTC +00:00,
#  updated_at: Thu, 17 Dec 2020 00:15:17 UTC +00:00,
#  firstname: "jose",
#  lastname: "ßåose">
# [9] pry(main)> res.restaurant
#   Restaurant Load (0.3ms)  SELECT  "restaurants".* FROM "restaurants" WHERE "restaurants"."id" = $1 LIMIT $2  [["id", 99], ["LIMIT", 1]]
# => #<Restaurant:0x00007fd966170cb8
#  id: 99,
#  owner_id: 15,
#  name: "Burrito Spot",
#  address: "1212 13th Street, San Francisco CA, United-States",
#  cuisine: "Mexican",
#  phone_number: nil,
#  image_url: nil,
#  created_at: Thu, 10 Dec 2020 18:34:29 UTC +00:00,
#  updated_at: Thu, 10 Dec 2020 18:34:35 UTC +00:00>
# [10] pry(main)> res.date
# => Thu, 17 Dec 2020 20:03:54 UTC +00:00
