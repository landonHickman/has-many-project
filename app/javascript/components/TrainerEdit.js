import React from 'react'
//import the trainer form
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
      {/*use the trainer form. pass in trainer */}
      <TrainerForm trainer={trainer}/>
    </div>
  )
}


export default TrainerEdit