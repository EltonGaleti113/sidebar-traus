Rails.application.routes.draw do
  root "articles#index"
  get '/users/sign_in', to: 'articles#login_page'
end
