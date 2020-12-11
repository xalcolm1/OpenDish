class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create, :destroy]

    def create   
        review = Review.new(review_params)
        if review.save
            
        else

        end
    end

    def destroy
        
    end

end
