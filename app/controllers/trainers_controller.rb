class TrainersController < ApplicationController
before_action :set_trainer, only: [:show, :update, :edit, :destroy]

  def index
    #refrences all the trainers then passes to page through props
    @trainers = Trainer.all
    render component: "Trainers", props: {trainers: @trainers}
  end
  
  def show
    #individual trainer.
    render component: "Trainer", props: {trainer: @trainer}
  end
  
  def new 
    #dont need to pass trainer through props since we are creating a trainer.
    render component: "TrainerNew"
  end

  def create
    #sets @trainer to = a new trainer then saves with @trainer.save
    @trainer = Trainer.new(trainer_params)
    if(@trainer.save)
      redirect_to trainer_path(@trainer.id)
    else
    end
  end
  
  def edit 
    #goes to edit page
    render component: "TrainerEdit", props: {trainer: @trainer}
  end

  def update
    #this is diff than the create it doesnt need to be added to @trainer since its already apart of it. we just need to @trainer.update
    if(@trainer.update(trainer_params))
      redirect_to trainer_path(@trainer.id)
    else
    end
  end

  #delets by using @trainer.destroy
  def destroy
    @trainer.destroy
    redirect_to trainers_path
  end

  private

  #applys to routes that need the trainer id passed to before action.
  def set_trainer
    @trainer = Trainer.find(params[:id])
  end

  #scrubs create and update so that we only get trainer name and age.
  def trainer_params
    params.require(:trainer).permit(:name, :age)
  end

  # def set_pokemon
  #   @pokemon = @trainer.pokemons.find(params[:id])
  # end
end
