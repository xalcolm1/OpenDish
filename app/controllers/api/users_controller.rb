class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user && @user.save
            login!(@user)
            render :show
        else
            render json: {
                errors: @user.errors.full_messages,
                status: 401
                }
        end
    end

    private

    def user_params
        params.require(:users).permit(:username, :email, :password, :image_url)
    end
end
