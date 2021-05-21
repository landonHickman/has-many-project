class TrainersController < ApplicationController


  def index
    @trainers = Trainer.all
    render component: "Trainers", props: {trainers: @trainers}
  end
  
  def show
    render component: "Trainer"
  end
  
  def new 
    render component: "TrainerNew"
  end
  
  def edit 
    render component: "TrainerEdit"
  end


end
