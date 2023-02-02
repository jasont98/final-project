class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :completed
      t.date :date
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :event, null: true, foreign_key: true, optional: true
      t.belongs_to :goal, null: true, foreign_key: true, optional: true

      t.timestamps
    end
  end
end
