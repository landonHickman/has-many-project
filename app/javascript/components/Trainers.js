import React from 'react'

const Trainers = (props) => {
  const {trainers} = props

  //create function to render and map all singular trainers.
  const renderTrainers = () => {
    return trainers.map (trainer => {
      return(
        <div>
          <h2>Trainer {trainer.name}</h2>
          <a href={`/trainers/${trainer.id}`}>View Trainer</a>
        </div>
      )
    })
  }

  return(
    <div>
      <nav>
        <a href="/">Home</a>
      </nav>
      <h1>Pokemon Trainers</h1>
      <a href="/trainers/new">Create New Trainer</a>
      {renderTrainers()}
    </div>
  )
}


export default Trainers