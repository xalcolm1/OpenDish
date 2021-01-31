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

user2 = User.create!( 
    firstname: 'carlos',
    lastname: 'xeyes',
    email: 'carlitos@tableouverte.com', 
    password: 'welcomedemo1'
)

user3 = User.create!( 
    firstname: 'monsure',
    lastname: 'imp',
    email: 'theimp@tableouverte.com', 
    password: 'welcomedemo2'
)

restaurant1 = Restaurant.create!(
    owner_id: user1.id,
    name: "Burrito Spot",
    cuisine: "Mexican",
    address: "1212 13th Street, San Francisco CA, United-States"
)
restaurant1.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/Burrito.jpg'), filename: 'Burrito.jpg')

restaurant2 = Restaurant.create!(
    owner_id: user1.id,
    name: "Ciao",
    cuisine: "Italian",
    address: "11 10th Street, Ithica NY, United-States"
)
restaurant2.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/italian.jpg'), filename: 'italian.jpg')


restaurant3 = Restaurant.create!(
    owner_id: user1.id,
    name: "Boba Guys",
    cuisine: "Boba",
    address: "8 Octavia Street, San Francisco CA, United-States"
)
restaurant3.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/bobaguys.jpg'), filename: 'bobaguys.jpg')


restaurant4 = Restaurant.create!(
    owner_id: user1.id,
    name: "1110 Fries & Burgers",
    cuisine: "Canadian",
    address: "4 Grove Street, San Francisco CA, United-States"
)
restaurant4.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/burgers.jpg'), filename: 'burgers.jpg')


restaurant5 = Restaurant.create!(
    owner_id: user1.id,
    name: "Souvla",
    cuisine: "Greek",
    address: "517 Hayes Street, San Francisco CA, United-States"
)
restaurant5.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/greek_food.jpg'), filename: 'greek_food.jpg')


restaurant6 = Restaurant.create!(
    owner_id: user1.id,
    name: "little Chihuahua",
    cuisine: "Mexican",
    address: "292 Divisidero St."
)
restaurant6.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/juan-rojas-4xIAHPsQEbY-unsplash.jpg'), filename: 'juan-rojas-4xIAHPsQEbY-unsplash.jpg')

restaurant7 = Restaurant.create!(
    owner_id: user1.id,
    name: "Nopalito",
    cuisine: "Mexican",
    address: "306 Broderick Street
    San Francisco, CA 94117"
)
restaurant7.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/ruslan-keba-7eVo50jFE-4-unsplash.jpg'), filename: 'ruslan-keba-7eVo50jFE-4-unsplash.jpg')

restaurant8 = Restaurant.create!(
    owner_id: user1.id,
    name: "El Monjo",
    cuisine: "Spanish",
    address: "Calle Eras, 7, 28670 Villaviciosa de Odón, Madrid, Spain"
)
restaurant8.photo.attach(io: File.open(Rails.root +  'app/assets/images/restaurant_imgs/arifuddin-rahmad-mbF78qBWlz4-unsplash.jpg'), filename: 'arifuddin-rahmad-mbF78qBWlz4-unsplash.jpg')

restaurant9 = Restaurant.create!(
    owner_id: user2.id,
    name: "Andiamo In Banca",
    cuisine: "Italian",
    address: "301 Linden Ave South San Francisco, CA 94080"
)
restaurant9.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/andres-medecigo-fqLYXaAqKZ4-unsplash.jpg'), filename: 'andres-medecigo-fqLYXaAqKZ4-unsplash.jpg')

restaurant10 = Restaurant.create!(
    owner_id: user2.id,
    name: "The Village Bakery and Cafe",
    cuisine: "American / French cafe",
    address: "3052 Woodside Road Woodside, CA 94062"
)
restaurant10.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/all-black-fancy-restaurant.jpg'), filename: 'all-black-fancy-restaurant.jpg')

restaurant11 = Restaurant.create!(
    owner_id: user2.id,
    name: "Chop Bar",
    cuisine: "American",
    address: "190 4th St Oakland, CA 94607"
)
restaurant11.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/american.jpg'), filename: 'american.jpg')

restaurant12 = Restaurant.create!(
    owner_id: user2.id,
    name: "Weaver's Coffee & Tea - San Francisco Cafe",
    cuisine: "Tea / Cafe",
    address: "2301 Market Street Ground Left Floor, San Francisco, CA 94114"
)
restaurant12.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/bundo-kim-111aiLxYjcU-unsplash.jpg'), filename: 'bundo-kim-111aiLxYjcU-unsplash.jpg')

restaurant13 = Restaurant.create!(
    owner_id: user2.id,
    name: "Spike's Coffees and Teas",
    cuisine: "Tea / Cafe",
    address: "4117 19th St, San Francisco, CA 94114"
)
restaurant13.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/cafe.jpg'), filename: 'cafe.jpg')

restaurant14 = Restaurant.create!(
    owner_id: user2.id,
    name: "Another Cafe",
    cuisine: "Cafe",
    address: "1191 Pine St, San Francisco, CA 94109"
)
restaurant14.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/cinzia-orsina-HNcTMKRIlzg-unsplash.jpg'), filename: 'cinzia-orsina-HNcTMKRIlzg-unsplash.jpg')

restaurant15 = Restaurant.create!(
    owner_id: user2.id,
    name: "Ramen Nagi",
    cuisine: "Japanese / Ramen",
    address: "Japan, 〒160-0021 Tokyo, Shinjuku City, Kabukicho, 1 Chome−1−10 2F"
)
restaurant15.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/kvnga-zodXjArpP7s-unsplash.jpg'), filename: 'kvnga-zodXjArpP7s-unsplash.jpg')

restaurant16 = Restaurant.create!(
    owner_id: user2.id,
    name: "House Of Tariyaki",
    cuisine: "Japanese",
    address: "1177 N Pleasant St, Amherst, MA 01002"
)
restaurant16.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/markus-winkler-paMbZ0iNka8-unsplash.jpg'), filename: 'markus-winkler-paMbZ0iNka8-unsplash.jpg')

restaurant17 = Restaurant.create!(
    owner_id: user3.id,
    name: "Ramen Yamadaya",
    cuisine: "Japanese / Ramen",
    address: "1728 Buchanan St floor 2, San Francisco, CA 94115"
)
restaurant17.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/ar-zN5ytUnlXCA-unsplash.jpg'), filename: 'ar-zN5ytUnlXCA-unsplash.jpg')

restaurant18 = Restaurant.create!(
    owner_id: user3.id,
    name: "Iza Ramen",
    cuisine: "Japanese / Ramen",
    address: "237 Fillmore St, San Francisco, CA 94117"
)
restaurant18.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/baiq-daling-vuZJ1VRHNF4-unsplash.jpg'), filename: 'baiq-daling-vuZJ1VRHNF4-unsplash.jpg')

restaurant19 = Restaurant.create!(
    owner_id: user3.id,
    name: "Kazami",
    cuisine: "Japanese / Ramen",
    address: "Japan, 〒104-0061 Tokyo, Chuo City, Ginza, 6 Chome−4−13 浅黄ビル"
)
restaurant19.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/dave-kim-9L-69nORd4k-unsplash.jpg'), filename: 'dave-kim-9L-69nORd4k-unsplash.jpg')


restaurant20 = Restaurant.create!(
    owner_id: user3.id,
    name: "AMAMI Ramen",
    cuisine: "Japanese / Ramen",
    address: "430 Geary St, San Francisco, CA 94102"
)
restaurant20.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/clay-banks-hwLAI5lRhdM-unsplash.jpg'), filename: 'clay-banks-hwLAI5lRhdM-unsplash.jpg')

restaurant21 = Restaurant.create!(
    owner_id: user3.id,
    name: "Hankook Jib",
    cuisine: "Korean",
    address: "2-3 Jeon-dong, Wansan-gu, Jeonju-si, Jeollabuk-do, South Korea"
)
restaurant21.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg'), filename: 'jakub-kapusnak-4f4YZfDMLeU-unsplash.jpg')

restaurant22 = Restaurant.create!(
    owner_id: user3.id,
    name: "Bon, Nene",
    cuisine: "Japanese Fusion",
    address: "2850 21st St, San Francisco, CA 94110"
)
restaurant22.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/takehiro-tomiyama-XYXWhof95h8-unsplash.jpg'), filename: 'takehiro-tomiyama-XYXWhof95h8-unsplash.jpg')

restaurant23 = Restaurant.create!(
    owner_id: user3.id,
    name: "Dongmun-Won",
    cuisine: "Korean",
    address: "37-1 Gyeongwondong 2(i)-ga, Wansan-gu, Jeonju-si, Jeollabuk-do, South Korea"
) 
restaurant23.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/bao-menglong-Ecpw-lndLlw-unsplash.jpg'), filename: 'bao-menglong-Ecpw-lndLlw-unsplash.jpg')

restaurant24 = Restaurant.create!(
    owner_id: user3.id,
    name: "China Live",
    cuisine: "Chinese",
    address: "644 Broadway, San Francisco, CA 94133"
)
restaurant24.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/cheng-feng-nBY4syB_59w-unsplash.jpg'), filename: 'cheng-feng-nBY4syB_59w-unsplash.jpg')


restaurant25 = Restaurant.create!(
    owner_id: user3.id,
    name: "Taverna",
    cuisine: "Greek",
    address: "800 Emerson St Palo Alto, CA 94301-2412"
)
restaurant25.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/aleksander-sadowski-dlOdly8vh4s-unsplash.jpg'), filename: 'aleksander-sadowski-dlOdly8vh4s-unsplash.jpg')

restaurant26 = Restaurant.create!(
    owner_id: user3.id,
    name: "Acquerello",
    cuisine: "Fine / Italian",
    address: "1722 Sacramento Street NEAR VAN NESS &, Polk St, San Francisco, CA 94109"
)
restaurant26.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/fineDining.jpg'), filename: 'fineDining.jpg')

restaurant27 = Restaurant.create!(
    owner_id: user3.id,
    name: "Henry's Hunan Restaurant",
    cuisine: "Chinese",
    address: "4753 Mission St, San Francisco, CA 94112"
)
restaurant27.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/mche-lee-ptjUj3dDhWI-unsplash.jpg'), filename: 'mche-lee-ptjUj3dDhWI-unsplash.jpg')

restaurant28 = Restaurant.create!(
    owner_id: user3.id,
    name: "Daeho Kalbijim & Beef Soup",
    cuisine: "Korean / Steakhouse",
    address: "1620 Post St, San Francisco, CA 94115"
)
restaurant28.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg'), filename: 'mgg-vitchakorn-vBOxsZrfiCw-unsplash.jpg')

restaurant29 = Restaurant.create!(
    owner_id: user3.id,
    name: "Jane The Bakery",
    cuisine: "American / cafe",
    address: "1881 Geary Blvd, San Francisco, CA 94115"
)
restaurant29.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/spencer-davis-SP4WO9yDqQY-unsplash.jpg'), filename: 'spencer-davis-SP4WO9yDqQY-unsplash.jpg')

restaurant30 = Restaurant.create!(
    owner_id: user3.id,
    name: "Mogura",
    cuisine: "Japanese Bar",
    address: "QHP9+34 Western Addition, San Francisco, CA"
)
restaurant30.photo.attach(io: File.open(Rails.root + 'app/assets/images/restaurant_imgs/zero-take-QzQe16eKc1I-unsplash.jpg'), filename: 'zero-take-QzQe16eKc1I-unsplash.jpg')


reservation1 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant30.id,
    date: '2021-01-26T13:51:50.417-07:00'
)
reservation2 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant9.id,
    date: '2021-02-23T13:51:50.417-07:00'
)
reservation3 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant20.id,
    date: '2021-02-28T13:51:50.417-07:00'
)
reservation4 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant11.id,
    date: '2021-02-20T13:51:50.417-07:00'
)
reservation5 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant18.id,
    date: '2021-08-26T13:51:50.417-07:00'
)
reservation6 = Reservation.create!(
    user_id: user1.id,
    restaurant_id: restaurant29.id,
    date: '2021-04-20T13:51:50.417-07:00'
)


review1 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant1.id,
    overall: 5,
    food: 5,
    service: 3,
    ambiance:5,
    body: 'The steak burrito was amazing, just the right ratio of beans rice, cheese, avacado, steak, and rice I loved the way the restaurant was decorated.'
)
review2 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant2.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'Truely this restaurant is a place to go if you have a fancy dinner in mind'
)
review3 = Review.create!(
    user_id: user1.id,a
    restaurant_id: restaurant3.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: '10/10 boba, some of the best I have had in San Francisco!'
)
review4 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant4.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 3,
    body: 'The burgers her are great, an exellent spot to chill with some friends and enjoy the meal'
)
review5 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant5.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'I loved the food here at Souvla, I had the sweet potato sandwich, it was an interesting combination that I did not expect to be as delicious as it was.' 
)
review6 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant6.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'I love coming here for the horchata and a burrito, the tortillas high quality '
)
review7 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant7.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The food here is absolutely wonderful, as well as every other aspect of this fantastic restaurant.'
)
review8 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant8.id,
    overall: 4 ,
    food: 5 ,
    service: 5,
    ambiance: 4,
    body: 'This is a good restaurant for you if you have not had a taste of spanish food yet.'
)
review9 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant9.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'a great spot for outdoor dining in the summer or autumn. the ambiance makes this restaurant truly special.'
)
review10 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant10.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 3,
    body: 'this is an excellent spot to grab a warm cup of coffee, and a pastry'
)
review11 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant11.id,
    overall: 3,
    food: 4,
    service: 3,
    ambiance: 3,
    body: 'the food is alright but, everything else is just meh '
)
review12 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant12.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'this cafe has an excellent selection of tea for all you tea lovers'
)
review13 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant13.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'the tea here is high in quality, and well brewed at that '
)
review14 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant14.id,
    overall: 5,
    food: 5,
    service:4,
    ambiance: 3,
    body: 'there are some interesting drinks served here, something for everyone'
)
review15 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant15.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'Wow this was the best ramen I have ever had! I wish I could come again soon'
)
review16 = Review.create!(
    user_id: user1.id,
    restaurant_id:  restaurant16.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The miso was absolutly amazing, and ambiance was really nice'
)
review17 = Review.create!(
    user_id: user1.id,
    restaurant_id:  restaurant17.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'the Ramen was wonderful, a great spot for meeting with friends after work'
)
review18 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant18.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Wow, the seafood ramen was perfectly made i will be coming back here soon'
)
review19 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant19.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The Ramen here was absolutely amazing, this shop was bit hard to find but totally worth the trek.'
)

review20 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant20.id,
    overall: 4 ,
    food: 4,
    service: 5,
    ambiance: 4,
    body: 'the ramen was pretty good. the chefs where helpful'
)

review21 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant21.id,
    overall:5,
    food: 5,
    service:5 ,
    ambiance: 5,
    body: 'wonderful food, great service, overall great spot to dine'
)
review22 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant22.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 4,
    body: 'Bon Nene, was a very cool place I had wanted to checkout for a while, I really love how they are bringing together multiple cultures with their food'
)
review23 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant23.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 5,
    body: 'The food was very good, but not extrordinary'
)
review24 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant24.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'The food I had was delicious, and the portions where quite generous, and I had a lot of fun'
)
review25 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant25.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 5,
    body: 'the food was a little overcooked'
)
review26 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant26.id ,
    overall: 3,
    food: 4,
    service: 4,
    ambiance: 5,
    body: 'the food was was good, but the price was too high for what you get'
)
review27 = Review.create!(
    user_id: user1.id,
    restaurant_id:  restaurant27.id ,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'This restaurant serves some of the best chinese food I have ever had'
)
review28 = Review.create!(
    user_id: user1.id
    restaurant_id: restaurant28.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'the ribs where amazing, definitely the highlight of the meal'
)
review29 = Review.create!(
    user_id: user1.id,
    restaurant_id:  restaurant29.id
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'I just love that you can buy bread and get breakfast here, the sandwich I had was amazing.'
)
review30 = Review.create!(
    user_id: user1.id,
    restaurant_id:  restaurant30.id
    overall: 3,
    food: 5,
    service: 3,
    ambiance: 5,
    body: 'the ambiance was nice, but the staff was not kind.'
)
review31 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant1.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'I always love my bean and cheese burrito here, the seating environment is nothing out of the ordinary, however I do love the high seats and large mirror'
)
review32 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant2.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Ciao is an excelent spot to grab a nice authentic Italian pizza. I can personally recommend the exellently crafted red pizza'
)
review33 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant3.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'All in all, a  wonderful spot to get some boba with your friends '
)
review34 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant4.id,
    overall: 4,
    food: 4,
    service: 5,
    ambiance: 4,
    body: 'the burger was a bit on the greasy side for my taste, and the fries where undercooked, however, telling my waiter about the fries they efficiently brought me a new batch'
)
review35 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant5.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Souvla is a family favorite at my house, the kids always love to come here for dinner.'
)
review36 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant6.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'The tacos where excellent, add that to the sauce they added to the meal, wow , I will definitely be coming again'
)
review37 = Review.create!(
    user_id: user1.id,
    restaurant_id: restaurant7.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'Nopalito is one of those places you can go to and expect more than just amazing food.'
)
review38 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant8.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'I really enjoy the dishes served here I have come on severall occations and have not been disappointed'
)
review39 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant9.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Wow, if you are looking for a taste of fine italian food as well as the ambiance to tie it together, this is the place for you'
)
review40 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant10.id,
    overall: 4,
    food: 5,
    service: 5,
    ambiance: 3,
    body: 'the coffee is always well made here, however the ambiance is not the best, so i tend to take my joe to go'
)
review41 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant11.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 3,
    body: 'this place was once a great spot to grab some burgers, something changed'
)
review42 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant12.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'I really love every beverage on the menu here'
)
review43 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant13.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'they serve a fantastic selection of chilled teas here, especially when it comes to matcha use'
)
review44 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant14.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 4,
    body: 'They serve a decent chai latte here, I will likely return'
)
review45 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant15.id,
    overall: 5,
    food: 5 ,
    service: 5 ,
    ambiance:5,
    body: 'The ramen here is out of this world, If you ever find yourself in this part of tokyo stop by'
)
review46 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant16.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'I love the bento boxes they make here, everything we ordered was great tasting, and over all it was a nice place to visit with friends.'
)

review47 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant17.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The Ramen was very tasty I can recommend this to all Ramen fans'
)
review48 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant18.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'a very cozy ramen shop, and very well balenced ramen.'
)
review49 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant19.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The broth of the ramen I had was most delicious. the chef was helpful in showing us the top dishes as we where first time customers. very nice atmosphere as well.'
)

review50 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant20.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 4,
    body: 'Good ramen
            good food
            good drinks'
)

review51 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant21.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'A wide veriaty of posibilities for a meal, overall awsome experience'
)
review52 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant22.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The food was very delicious and the whole thing was really an experience to behold for yourself'
)
review53 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant23.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'It was a very nice place to get some food, the soup I had was good'
)
review54 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant24.id,
    overall: 4,
    food: 3,
    service: 3,
    ambiance:4,
    body: 'Food was not the best, It was still fun coming'
)
review55 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant25.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'I really liked the way they cooked the food to be charred, and it added flavor in the best ways.'
)
review56 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant26.id,
    overall: 4,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'The food was amazing, the price not so much'
)
review57 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant27.id,
    overall: 5 ,
    food: 5,
    service: 5 ,
    ambiance: 5,
    body: 'The best kung pao tofu I have ever had, the flavor was like nothing I have ever had'
)
review58 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant28.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Had A great time, and great food. A very nice place to meet with friends and family'
)
review59 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant29.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'I love to come here, although the line is always super long, the food is totally worth it.'
)
review60 = Review.create!(
    user_id: user2.id,
    restaurant_id: restaurant30.id,
    overall: 4,
    food: 4,
    service: 3,
    ambiance:5,
    body: 'the atmosphere is nice and the food is good but service seems somwhat hostile'
)
review61 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant1.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 4,
    body: 'I do find this restaurant to be of some quality, I would willingly say this restaurant is passable'
)
review62 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant2.id,
    overall: 4,
    food: 5,
    service: 5,
    ambiance: 4,
    body: 'This restaurant I find to have well made food. 
            and exeptional service. the restaurant its self is quite nice,
             however not quite to the extent that I would expect. '
)
review63 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant3.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance:4,
    body: 'The boba at Boba Guys, is always the perfect texture, and every flavor on the menu is simply delicious'
)
review64 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant4.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 4,
    body: 'I do like a good burger from time to time however these where not quite up to my standards, though not too far below either. '
)
review65 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant5.id,
    overall: 4 ,
    food: 4,
    service: 4,
    ambiance: 5,
    body: 'I found the outside dining quite agreeable. the food was acceptable'
)
review66 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant6.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'TLC makes some good burritos, I can safely say that I would recomend this restaurant to anyone looking for burritos'
)
review67 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant7.id,
    overall: 5,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'Nopalito is without a doubt, an exerience.'
)
review68 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant8.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'This restaurant serves excellent food theres no doubt about that, however the service was a bit slow even for a moderately busy day '
)
review69 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant9.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The seating really makes this one rise above the rest, it is truly an experience'
)
review70 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant10.id,
    overall: 4,
    food: 4,
    service: 5,
    ambiance: 4,
    body: 'they make quite good pastries here, however the coffee is not quite to my tastes'
)
review71 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant11.id,
    overall: 2,
    food: 3,
    service: 2,
    ambiance: 2,
    body: 'I do not think I can say a  single positive thing about my experience here'
)
review72 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant12.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 4,
    body: 'The range of selection makes this cafe unique, I would consider coming again'
)
review73 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant13.id,
    overall: 5 ,
    food: 5,
    service: 5 ,
    ambiance: 5, 
    body: 'the teas here are quite good, the amount of love put into the herbal teas is quite a thing to behold'
)
review74 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant14.id,
    overall: 4,
    food: 4,
    service: 3,
    ambiance: 2,
    body: 'the drinks are well designed, however I can not say the same about the rest of the buisness'
)
review75 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant15.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'This was by far, the best experience I have had with ramen, In all my days. just entering, 
    the ambiance immediatly puts you in a state of comfort, the warm smells of ramen and seafood, are enough to make this visit worth while.'
)
review76 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant16.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'The food was excellent to say the least, but even more impressive, the furnishings of this space are just beautiful'
)
review77 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant17.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 5,
    body: 'If you are looking for a good ramen place in San Francisco, Ramen Yamadaya is a solid spot for your outing'
)
review78 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant18.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'Top quality ramen, the soy-marinated soft boiled egg was perfectly done, the atmosphere was mellow and comfortable, and service was great. '
)
review79 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant19.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'This Ramen shop was one of the best I have ever been to, the chef was helpful the food was great, the seating was comfortable!'
)
review80 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant20.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 3,
    body: 'The sides where pretty good, however the seating was not as cozy as some other ramen places I have been to'
)
review81 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant21.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance:5,
    body: 'Hankook Jib, was an exquiset example of korean food, the spice was right'
)
review82 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant22.id,
    overall: 4,
    food: 4,
    service: 5,
    ambiance: 4,
    body: 'Although an interesting concept, and I certainly cannot speak for every menu item the meals I had felt somewhat average in terms of taste'
)
review83 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant23.id,
    overall: 5,
    food: 4,
    service: 5,
    ambiance: 5,
    body: 'It was very pretty restaurant. I liked the soup I had.'
)
review84 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant24.id,
    overall: 3,
    food: 3,
    service: 3,
    ambiance:5,
    body: 'the food was OK at best I will not becoming again.'
)
review85 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant25.id,
    overall: 4,
    food: 4,
    service: 4,
    ambiance: 5,
    body: 'The service was moderatly good, but the food relied too much on the over cooked nature, to give flavour. I do not think I will be returning anytime soon.'
)
review86 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant26.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'This restaurant serves exquisite meals, that can only be found here. If you are looking for a truely magnificent experience this is the place to go.'
)
review87 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant27.id,
    overall: 4,
    food: 5,
    service: 4,
    ambiance: 4,
    body: 'The food was exceptional, however the restaurant it self was not the most magical place I have been to'
)
review88 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant28.id,
    overall: ,
    food: ,
    service: ,
    ambiance:,
    body: 'The beef stew was excellently cooked, I have not had anything like it in quite some time'
)
review89 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant29.id,
    overall: 5,
    food: 5,
    service: 5,
    ambiance: 5,
    body: 'Food here was delicious, and I brought  home a loaf of bread because it was so good. I love that they bake the bread and sell it as well as making other baked goods and sandwiches.'
)
review90 = Review.create!(
    user_id: user3.id,
    restaurant_id: restaurant30.id,
    overall: 2,
    food: 4,
    service: 1,
    ambiance: 4,
    body: 'Not a nice place to eat, service is very poor.'
)



