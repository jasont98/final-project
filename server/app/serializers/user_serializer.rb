class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :birthday, :date_joined, :email
  has_many :events
  has_many :goals 
  has_many :tasks
  
end
