class GoalSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed, :date, :tasks
  # has_many :tasks 
  # belongs_to :event, optional: true
  # belongs_to :user
  
end
