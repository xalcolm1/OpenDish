class Api::UsersController < ApplicationController   
    def index
        @users = User.all
        render :index
    end

    def show
        @user = current_user
        render :show
    end
    
    def create
        @user = User.new(user_params)
        
        if @user.save
            login!(@user)
            render json: @user
        else 
            render json: @user.errors.full_messages, status: 401              
        end
    end

    private

    def user_params
        params.require(:user).permit(:firstname, :lastname, :email, :password)
    end
end 
