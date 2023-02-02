class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.date :birthday
      t.date :date_joined
      t.string :email
      t.string :password_digest

      t.timestamps
    end
  end
end
