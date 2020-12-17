class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.datetime :date, null: false
      t.datetime :time, null: false
      t.integer :user_id, foreign_key: true
      t.integer :restaurant_id, foreign_key: true
      t.timestamps
    end
  end
end
