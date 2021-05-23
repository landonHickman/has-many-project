import React from 'react'
//import trainer
import TrainerForm from './TrainerForm'
const TrainerNew = (props) => {
  return(
    <div>
      <nav>
        <a href="/">Home</a>
        <a href="/">Back</a>
      </nav>
      <h1>Create a Trainer</h1>
      {/* use the trainer form nothing to pass in. */}
      <TrainerForm />
    </div>
  )
}


export default TrainerNew