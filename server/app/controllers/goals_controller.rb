class GoalsController < ApplicationController

    def index 
        render json: find_goals
    end

    def show 
        render json: find_goal
    end

    def create 
        render json: create_goal, status: :created
    end

    def update 
        render json: update_goal, status: :accepted
    end

    def destroy 
        destroy_goal
    end

    private 

    def goal_params 
        params.permit(:id, :description, :completed, :date, :user_id, :event_id)
    end

    def find_goals
        logged_in_user.goals.all
    end
    
    def find_goal
        logged_in_user.goals.find(params[:id])
    end

    def create_goal
        logged_in_user.goals.create!(goal_params)
    end

    def update_goal
        find_goal.update!(goal_params)
    end

    def destroy_goal
        find_goal.destroy
        head :no_content
    end

end
