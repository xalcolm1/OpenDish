class AddPeopleToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :people, :integer
  end
end
