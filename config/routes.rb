Rails.application.routes.draw do
  get 'home/index'

  get 'users/index'

  get 'comments/index'

  get 'posts/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
