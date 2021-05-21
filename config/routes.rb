Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "trainers#index"
  resources :trainers do
    resources :pokemons
    end

  resources :pokemons do
    resources :attacks
    end
end
