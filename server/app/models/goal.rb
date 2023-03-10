class Goal < ApplicationRecord
  belongs_to :user
  belongs_to :event, optional: true
  has_many :tasks, dependent: :destroy
  validates_presence_of :description, :date
end
