class AddPeopleToReservations < ActiveRecord::Migration[5.2]
  def change
    add_column :reservations, :people, :big_int
  end
end
