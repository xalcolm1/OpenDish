# == Schema Information
#
# Table name: reviews
#
#  id            :bigint           not null, primary key
#  rating        :integer
#  body          :text             not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :bigint           not null
#  restaurant_id :bigint           not null
#
class Review < ApplicationRecord
    validates :body, :user_id, :restaurant_id,  presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :restaurant,
        foreign_key: :restaurant_id,
        class_name: :Restaurant

end
