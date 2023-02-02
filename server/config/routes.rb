Rails.application.routes.draw do
  resources :tasks
  resources :goals
  resources :events
  resources :users
  
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
  get "/auth", to: "users#show"
end
