class Event < ApplicationRecord
  belongs_to :user
  has_many :goals 
  has_many :tasks, through: :goals
end
