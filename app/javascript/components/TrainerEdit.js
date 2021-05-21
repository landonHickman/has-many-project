import React from 'react'
import TrainerForm from './TrainerForm'

const TrainerEdit = (props) => {
  const {trainer} = props
  return(
    <div>
      <h1>Edit Trainer</h1>
      <TrainerForm trainer={trainer}/>
    </div>
  )
}


export default TrainerEdit