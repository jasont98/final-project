class UsersController < ApplicationController
    # before_action :authorized 

    def index 
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show 
        # user = find_user
        current_user = User.find_by(id: session[:user_id])
        if current_user
        render json: current_user, serializer: UserPlanSerializer
        else 
            render json: {error: "Invalid Authorization"}, status: :unauthorized 
        end
    end

    private 

    def user_params 
        params.permit(:name, :email, :password, :birthday)
    end

    def find_user
        User.find(params[:id])
    end

end
