class PokemonsController < ApplicationController
  before_action :set_trainer
  before_action :set_pokemon, only: [:show, :update, :edit, :destroy]

def index
  render component: "Pokemons", props: {trainer: @trainer, pokemons: @trainer.pokemons}
end

def show
  render component: "Pokemon"
end

def new
  render component: "PokemonNew"
end

def edit 
  render component: "PokemonEdit"
end
private

def set_trainer
  @trainer = Trainer.find(params[:trainer_id])
end

def set_pokemon
  @pokemon = @trainer.pokemons.find(params[:id]) 
  
end

end
