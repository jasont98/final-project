class User < ApplicationRecord
    has_many :tasks 
    has_many :goals 
    has_many :events
end
