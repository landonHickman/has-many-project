import React from 'react'

const Trainers = (props) => {
  const {trainers} = props

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
    <div id="center">
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