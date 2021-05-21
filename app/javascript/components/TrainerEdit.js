import React from 'react'
import TrainerForm from './TrainerForm'

const TrainerEdit = (props) => {
  const {trainer} = props
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href={`/trainers/${trainer.id}`}>Back</a>
      </nav>
      <h1>Edit Trainer</h1>
      <TrainerForm trainer={trainer}/>
    </div>
  )
}


export default TrainerEdit