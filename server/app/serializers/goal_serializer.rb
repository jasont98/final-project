class GoalSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed, :date, :tasks
  has_many :tasks 
  # belongs_to :event, optional: true
  # belongs_to :user


  def tasks
    object.tasks.map do |task|
      TaskSerializer.new(task).attributes
    end
  end
  
end
