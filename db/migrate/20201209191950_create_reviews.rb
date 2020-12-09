class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.string :title, null: false
      t.text :body, null: false
      
      t.timestamps
    end
    add_reference :reviews, :user, foreign_key: true, null: false
    add_reference :reviews, :restaurant, foreign_key: true, null: false 

  end
end
