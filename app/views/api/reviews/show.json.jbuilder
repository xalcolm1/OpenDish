
json.extract! @review, :id, :body, :overall, :food, :service, :ambiance 
json.firstname @review.user.firstname
json.image_url @review.user.photo if @review.user.photo.attached?
