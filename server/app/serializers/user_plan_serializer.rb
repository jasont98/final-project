class UserPlanSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday, :date_joined, :events, :goals, :tasks
  has_many :goals, through: :events
  has_many :events
  
end
