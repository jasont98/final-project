# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_01_213830) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "title"
    t.boolean "completed"
    t.date "date"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_events_on_user_id"
  end

  create_table "goals", force: :cascade do |t|
    t.string "description"
    t.boolean "completed"
    t.date "date"
    t.bigint "user_id", null: false
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_goals_on_event_id"
    t.index ["user_id"], name: "index_goals_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "description"
    t.boolean "completed"
    t.date "date"
    t.bigint "user_id", null: false
    t.bigint "event_id"
    t.bigint "goal_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_tasks_on_event_id"
    t.index ["goal_id"], name: "index_tasks_on_goal_id"
    t.index ["user_id"], name: "index_tasks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.date "birthday"
    t.date "date_joined"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "events", "users"
  add_foreign_key "goals", "events"
  add_foreign_key "goals", "users"
  add_foreign_key "tasks", "events"
  add_foreign_key "tasks", "goals"
  add_foreign_key "tasks", "users"
end
