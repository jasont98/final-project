class TasksController < ApplicationController

    def index 
        render json: find_tasks
    end

    def show 
        render json: find_task
    end

    def create 
        render json: create_task, status: :created
    end

    def update 
        render json: update_task, status: :accepted
    end

    def destroy 
        find_task.destroy
        head :no_content
    end

    private 

    def task_params 
        params.permit(:description, :date, :user_id, :completed)
    end
    
    def find_tasks
        logged_in_user.tasks.all
    end
    
    def find_task 
        logged_in_user.tasks.find(params[:id])
    end

    def create_task 
        logged_in_user.tasks.create!(task_params)
    end

    def update_task 
        find_task.update!(task_params)
    end

end
