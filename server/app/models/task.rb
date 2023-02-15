class Task < ApplicationRecord
  belongs_to :user
  belongs_to :event, optional: true
  belongs_to :goal, optional: true
  validates_presence_of :description, :date
end
