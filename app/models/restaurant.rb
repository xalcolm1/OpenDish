class Restaurant < ApplicationRecord
    validates :owner_id, :address, :name, null: false

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: :User
end
