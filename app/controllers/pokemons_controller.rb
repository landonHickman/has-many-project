class PokemonsController < ApplicationController
  before_action :set_trainer
  before_action :set_pokemon, only: [:show, :update, :edit, :destroy]

  def index
    render component: "Pokemons", props: {trainer: @trainer, pokemons: @trainer.pokemons}
  end

  def show
    render component: "Pokemon", props: {trainer: @trainer, pokemon: @pokemon}
  end

  def new
    render component: "PokemonNew", props: {trainer: @trainer}
  end

  def create
    pokemon = @trainer.pokemons.new(pokemon_params)
    if(pokemon.save)
      redirect_to trainer_pokemons_path(@trainer.id)
    else
    end
  end

  def destroy
    @pokemon.destroy
    redirect_to trainer_pokemons_path(@trainer.id)
  end

  def edit 
    render component: "PokemonEdit", props: {trainer: @trainer, pokemon: @pokemon}
  end

  def update
    if (@pokemon.update(pokemon_params))
      redirect_to trainer_pokemons_path(@trainer.id)
    else
    end
  end

  private

  def set_trainer
    @trainer = Trainer.find(params[:trainer_id])
  end

  def set_pokemon
    @pokemon = @trainer.pokemons.find(params[:id]) 
  end

  def pokemon_params
    params.require(:pokemon).permit(:name)
  end

end
