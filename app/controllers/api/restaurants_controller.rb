class Api::RestaurantsController < ApplicationController

    before_action :require_logged_in, only: [:create, :destroy]


    def search 
        params.require(:q).permit(:owner_id, :name, :address, :cuisine)

        sql_string = ""
        
        if(params[:q][:name].present?)
            sql_string += " name LIKE '%#{params[:q][:name]}%'"

        elsif(params[:q][:address].present?)
            sql_string += " address LIKE '%#{params[:q][:address]}%'"

        elsif (params[:q][:cuisine].present?)
            sql_string += " cuisine LIKE '%#{params[:q][:cuisine]}%'"

        elsif (params[:q][:owner_id].present?)
            sql_string += " owner_id = #{params[:q][:owner_id]}"

        end

        sql_string = "SELECT * FROM restaurants WHERE#{sql_string}"

        @restaurants = Restaurant.find_by_sql(sql_string)
            
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
        if @restaurant && @restaurant.save
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
