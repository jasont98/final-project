class EventsController < ApplicationController

    def index 
        render json: find_events
    end

    def show 
        render json: find_event
    end

    def create 
        render json: create_event, status: :created
    end

    def update 
        render json: update_event, status: :accepted
    end

    def destroy 
        destroy_event 
    end

    private 

    def event_params 
        params.permit(:id, :title, :completed, :date, :user_id)
    end
    
    def find_events
        logged_in_user.events.all
    end
    
    def find_event 
        logged_in_user.events.find(params[:id])
    end

    def create_event
        logged_in_user.events.create!(event_params)
    end

    def update_event 
        find_event.update!(event_params)
    end

    def destroy_event
        find_event.destroy
        head :no_content
    end

end
