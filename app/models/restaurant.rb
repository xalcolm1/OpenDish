# == Schema Information
#
# Table name: restaurants
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
#
class Restaurant < ApplicationRecord
    validates :owner_id, :address, :name,  presence: true
    validate :ensure_photo

    has_one_attached :photo
    has_many_attached :images
    
    def ensure_photo 
        unless self.photo.attached?
            errors[:photo] << "Must be attached"
        end
    end
    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end