Rails.application.routes.draw do
  get 'employees_controller/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :employees, except: [:new, :edit]
end
