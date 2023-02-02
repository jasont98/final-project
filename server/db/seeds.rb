# This file should contain all the record creation needed to seed the database with its default values.
require 'pry'

puts "🌱 Seeding spices..."

# Seed your database here

Task.destroy_all 
Goal.destroy_all
Event.destroy_all
User.destroy_all

u1 = User.create(name: "Jason T", birthday: "1998-10-10", date_joined: "2023-2-1", email: "jt@email.com", password_digest: "jason" )

e1 = Event.create(title: "graduation day", completed: false, date: "2023-2-17", user_id: u1.id)
e2 = Event.create(title: "big event", completed: false, date: "2023-2-18", user_id: u1.id)

g1 = Goal.create(description: "complete all my tasks", completed: false, date: "2023-2-12", event_id: e2.id, user_id: u1.id)
g2 = Goal.create(description: "graduate", completed: false, date: "2023-2-17", event_id: e1.id, user_id: u1.id)


t1 = Task.create(description: "wash the dishes", completed: false, date: "2023-2-1", goal_id: g1.id, event_id: e2.id, user_id: u1.id)
t2 = Task.create(description: "walk the dog", completed: true, date: "2023-2-17", user_id: u1.id)




puts "✅ Done seeding!"
