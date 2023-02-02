class TaskSerializer < ActiveModel::Serializer
  attributes :id, :description, :completed, :date
end
