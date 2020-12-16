class Api::ReviewsController < ApplicationController
    before_action :require_logged_in, only: [:create,:update, :destroy]
    def show 
        render :show
    end

    # def index
    #     render :index
    # end

    def create   
        review = Review.new(review_params)

        if review.save
            render json: review
        else
            render json: review.errors.full_messages, status: 401
        end
    end

    def update

    end

    def destroy
        review = Review.find_by(id: params[:id])
        if review.destroy
            p 'success'
        else
            render json: review.errors.full_messages, status: 401
        end

    end

    def review_params
        params.require(:review).permit(:body, :restaurant_id, :user_id, :overall, :food, :service, :ambiance)
    end
end
