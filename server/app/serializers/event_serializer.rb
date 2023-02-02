class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :date, :goals
  has_many :goals
  
  def goals
    object.goals.map do |goal|
      GoalSerializer.new(goal).attributes
    end
  end


end
