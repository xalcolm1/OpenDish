# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Restaurant.destroy_all

user1 = User.create!( 
    firstname: 'jose',
    lastname: 'ßåose',
    email: 'jose@tableouverte.com', 
    password: 'welcomedemo'
)
restaurant1 = Restaurant.create!(
    owner_id: user1.id,
    name: "Burrito Spot",
    cuisine: "Mexican",
    address: "1212 13th Street, San Francisco CA, United-States"
)
restaurant2 = Restaurant.create!(
    owner_id: user1.id,
    name: "Ciao",
    cuisine: "Italian",
    address: "11 10th Street, Ithica NY, United-States"
)

restaurant3 = Restaurant.create!(
    owner_id: user1.id,
    name: "Boba Guys",
    cuisine: "Boba",
    address: "8 Octavia Street, San Francisco CA, United-States"
)
restaurant4 = Restaurant.create!(
    owner_id: user1.id,
    name: "1110 Fries & Burgers",
    cuisine: "Canadian",
    address: "4 Grove Street, San Francisco CA, United-States"
)

restaurant5 = Restaurant.create!(
    owner_id: user1.id,
    name: "Souvla",
    cuisine: "Greek",
    address: "517 Hayes Street, San Francisco CA, United-States"
)

# restaurant1.photo.attach(io: File.open('/Users/malcolm/Downloads/Burrito.jpg'), filename: 'Burrito.jpg')
# restaurant5.photo.attach(io: File.open('/Users/malcolm/Downloads/greek_food.jpg'), filename: 'greek_food.jpg')
# restaurant2.photo.attach(io: File.open('/Users/malcolm/Downloads/italian.jpg'), filename: 'italian.jpg')
# restaurant3.photo.attach(io: File.open('/Users/malcolm/Downloads/bobaguys.jpg'), filename: 'bobaguys.jpg')
# restaurant4.photo.attach(io: File.open('/Users/malcolm/Downloads/burgers.jpg'), filename: 'burgers.jpg')