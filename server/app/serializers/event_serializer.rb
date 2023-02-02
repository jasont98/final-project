class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :completed, :date, :goals
  has_many :goals
  # has_many :tasks
end
