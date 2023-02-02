class UserPlanSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday, :date_joined, :events, :goals, :tasks
  has_many :events
  # has_many :goals
  has_many :goals, through: :events
  has_many :tasks, through: :goals

 
  # has_many :events, serializer: EventSerializer
end
