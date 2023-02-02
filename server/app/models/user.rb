class User < ApplicationRecord
    validates_presence_of :name, :email, :password
    has_many :tasks 
    has_many :goals 
    has_many :events
end
