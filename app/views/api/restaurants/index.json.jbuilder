



@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :owner_id, :address, :cuisine
        json.photoUrl url_for(restaurant.photo) if restaurant.photo.attached?
        json.reviews restaurant.reviews do |review| 
            json.review review
            json.firstname review.user.firstname
            json.image_url review.user.photo if review.user.photo.attached?
    
        end
    end
  end