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
    cuisine: "American / French",
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



