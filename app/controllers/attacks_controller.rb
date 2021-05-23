class AttacksController < ApplicationController
  before_action :set_pokemon
  before_action :set_attack, only: [:destroy, :edit, :show, :update]

  def index
    render component: "Attacks", props: {pokemon: @pokemon, attacks: @pokemon.attacks}
  end

  def show
    render component: "Attack", props: {pokemon: @pokemon, attack: @attack}
  end

  def new
    render component: "AttackNew", props: {pokemon: @pokemon}
  end

  def create
    attack = @pokemon.new(attack_params)
    if (attack.save)
      redirect_to #check later
    else
    end
  end

  def edit
    render component: "AttackEdit", props: {pokemon: @pokemon, attack: @attack}
  end

  def update
    if @attack.update(attack_params)
      redirect_to #add later
    else
    end
  end

  def destroy
    @attack.destroy
    redirect_to pokemon_attacks_path(@pokemon)
  end
  
  private

  def attack_params #scrubber to only get attack model and its keys move and power
    params.require(:attack).permit(:move, :power) 
  end

  # might not work / might not need
  # def set_trainer
  #   @trainer = Trainer.find(params[:id])
  # end

  def set_pokemon #gets pokemon id passed to before action
    @pokemon = Pokemon.find(params[:pokemon_id])
  end

  def set_attack  #gets attack id passes to before action
    @attack = @pokemon.attacks.find(params[:id])   #####This is where i am getting an error couldnt find attack without an ID#####
  end





end
