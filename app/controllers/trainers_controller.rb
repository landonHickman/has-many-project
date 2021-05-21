class TrainersController < ApplicationController
before_action :set_trainer, only: [:show, :update, :edit, :destroy]

  def index
    @trainers = Trainer.all
    render component: "Trainers", props: {trainers: @trainers}
  end
  
  def show
    render component: "Trainer", props: {trainer: @trainer}
  end
  
  def new 
    render component: "TrainerNew"
  end

  def create
    @trainer = Trainer.new(trainer_params)
    if(@trainer.save)
      redirect_to trainer_path(@trainer.id)
    else
    end
  end
  
  def edit 
    render component: "TrainerEdit", props: {trainer: @trainer}
  end

  def update
    if(@trainer.update(trainer_params))
      redirect_to trainer_path(@trainer.id)
    else
      binding.pry
    end
  end

  def destroy
    @trainer.destroy
    redirect_to trainers_path
  end

  private

  def set_trainer
    @trainer = Trainer.find(params[:id])
  end

  def trainer_params
    params.require(:trainer).permit(:name, :age)
  end

end
