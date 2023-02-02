class ApplicationController < ActionController::API
    include ActionController::Cookies 
    # skip_before_action :authorized, only: :create
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def authorized 
        return render json:{error: "Not Authorized"}, status: :authorized unless session.include? :user_id
    end
    
    private 

    def record_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
    
    def record_not_found(error)
        render json: {error: "#{error.model} not found"}, status: :not_found
      end
end
