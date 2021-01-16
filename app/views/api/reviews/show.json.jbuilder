
json.extract! @review, :id, :body, :overall, :food, :service, :ambiance, :restaurant_id, :user_id
json.firstname @review.user.firstname
json.image_url @review.user.photo if @review.user.photo.attached?
