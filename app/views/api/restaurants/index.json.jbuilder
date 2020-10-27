



@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :owner_id, :address, :cuisine
    end
  end