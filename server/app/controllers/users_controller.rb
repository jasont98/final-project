class UsersController < ApplicationController

    def index 
        render json: User.all
    end

    def show 
        user = find_user
        render json: user, serializer: UserPlanSerializer
    end

    private 

    def find_user
        User.find(params[:id])
    end

end
