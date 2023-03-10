class SessionsController < ApplicationController

    def create 
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy 
        session.clear
        head :no_content
    end

end
