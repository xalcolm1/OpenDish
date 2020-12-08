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

json.extract! @restaurant, :id, :owner_id, :name, :address, :cuisine
json.photoUrl url_for(@restaurant.photo) if @restaurant.photo.attached?
# json.images json.array! do ||