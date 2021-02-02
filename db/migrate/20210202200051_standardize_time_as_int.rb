class StandardizeTimeAsInt < ActiveRecord::Migration[5.2]
  def change
    remove_column :reservations, :date
    add_column :reservations, :date, :bigint, null: false
  end
end
