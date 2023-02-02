class GoalsController < ApplicationController

    def index 
        render json: Goal.all 
    end

    def show 
        goal = find_goal
        render json: goal 
    end

    def create 
        goal = Goal.create!(goal_params)
        render json: goal, status: :created
    end

    def update 
        goal = find_goal
        goal.update!(goal_params)
        render json: goal, status: :accepted
    end

    def destroy 
        goal = find_goal
        goal.destroy
        head :no_content
    end

    private 

    def find_goal
        Goal.find(params[:id])
    end

    def goal_params 
        params.permit(:description, :completed, :date, :user_id, :event_id)
    end

end
