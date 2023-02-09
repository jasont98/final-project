class Event < ApplicationRecord
  belongs_to :user
  has_many :goals, dependent: :destroy 
  has_many :tasks, through: :goals, dependent: :destroy 
end
