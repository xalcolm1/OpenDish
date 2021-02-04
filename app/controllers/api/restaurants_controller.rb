class Api::RestaurantsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]


    def search 
        params.require(:q).permit(:owner_id, :name, :address, :cuisine)

        sql_string = ""
        sql_order = ""

        if(params[:q][:name].present?)
            sql_string += " OR "if(sql_string.length > 1)

            sql_string += " lower(name) LIKE '%#{params[:q][:name].downcase}%'"
        end

        if(params[:q][:address].present?)
            sql_string += " OR "if(sql_string.length > 1)

            sql_string += " lower(address) LIKE '%#{params[:q][:address].downcase}%'"
        end

        if (params[:q][:cuisine].present?)
            sql_string += " OR "if(sql_string.length > 1)

            sql_string += " lower(cuisine) LIKE '%#{params[:q][:cuisine].downcase}%'"
        end

        if (params[:q][:owner_id].present?)
            sql_string += " OR "if(sql_string.length > 1)

            sql_string += " owner_id = #{params[:q][:owner_id].downcase}"
        end

        sql_order = " ORDER BY #{sql_order} DESC" if(sql_order.length > 0)
        sql_string = "SELECT * FROM restaurants WHERE #{sql_string}#{sql_order}" #
            
        @restaurants = Restaurant.find_by_sql(sql_string)
        render '/api/restaurants/index'
    end

    def show
        @restaurant = Restaurant.find_by(id: params[:id])
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

    def update
        
    end

    def destroy
        @restaurant = Restaurant.find_by(owner_id: current_user.id)

        if @restaurant.destroy
            render json: @restaurant
        else
            render json: @restaurant.errors.full_messages, status: 422
        end
    end

    def restaurant_params
        params.require(:restaurant).permit(:id, :owner_id, :name, :address, :cuisine, :photo, images: [])
    end

end
