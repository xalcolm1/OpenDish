class Ratings < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :overall, :integer
    add_column :reviews, :food, :integer
    add_column :reviews, :service, :integer
    add_column :reviews, :ambiance, :integer
  end
end
