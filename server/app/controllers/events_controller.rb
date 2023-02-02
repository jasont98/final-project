class EventsController < ApplicationController

    def index 
        render json: Event.all
    end

    def show 
        event = find_event
        render json: event
    end

    def create 
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def update 
        event = find_event
        event.update!(event_params)
        render json: event, status: :accepted
    end

    def destroy 
        event = find_event
        event.destroy
        head :no_content
    end

    private 

    def event_params 
        params.permit(:title, :completed, :date, :user_id)
    end
    
    def find_event
        Event.find(params[:id])
    end

end
