class Api::RestaurantsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]


    def search 
        
        params.require(:q).permit(:owner_id, :name, :address, :cuisine)
        @restaurants = Restaurant.where('name LIKE ? OR address LIKE ? OR cuisine LIKE ? OR owner_id = ?',
             "%#{params[:q][:name]}%","%#{params[:q][:address]}%","%#{params[:q][:cuisine]}%","#{params[:q][:owner_id]}") 
        render '/api/restaurants/index'
    end
    
    def show
        @restaurant = Restaurant.find_by(owner_id: current_user.id)
        render :show
    end

    def index
        @restaurants = Restaurant.all
        render :index
    end 

    def create
        @restaurant = Restaurant.new(restaurant_params)

        if @restaurant.save
            render json: @restaurant
        else
            render json: @restaurant.errors.full_messages, status: 401
        end

    end

    def destroy
        @restaurant = Restaurant.find_by(owner_id: current_user.id)

        if @restaurant.destroy
            render json: {}

        else
            render json: @restaurant.errors.full_messages, status: 422
        end

    end

    def restaurant_params
        params.require(:restaurant).permit(:owner_id, :name, :address, :cuisine)
    end

end
