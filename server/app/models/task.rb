class Task < ApplicationRecord
  belongs_to :user
  belongs_to :event, optional: true
  belongs_to :goal, optional: true
end
