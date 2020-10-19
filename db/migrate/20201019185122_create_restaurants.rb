class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.integer :owner_id, null: false, foreign_key: true
      t.string  :name, null: false, index:true
      t.string  :adderess, null: false, index:true
      t.string  :cuisine, index:true
      t.integer :phone_number
      t.string  :image_url
      t.timestamps
    end
  end
end
