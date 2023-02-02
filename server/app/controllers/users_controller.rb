class UsersController < ApplicationController
    before_action :authorize 

    def index 
        render json: User.all
    end

    def show 
        # user = find_user
        user = User.find_by(id: session[:user_id])
        if user
        render json: user, serializer: UserPlanSerializer
        else 
            render json: {error: "Invalid Authorization"}, status: :unauthorized 
        end
    end

    private 

    def find_user
        User.find(params[:id])
    end

end
