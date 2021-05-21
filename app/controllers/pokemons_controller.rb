class PokemonsController < ApplicationController

def index
  @pokemons = Pokemon.all
  render component: "Pokemons", props: {trainer: @trainer, pokemons: @pokemons}
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


end
