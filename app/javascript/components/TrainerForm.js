import React from 'react'

const TrainerForm = (props) => {
  const {trainer} = props

  const url = trainer ?
  `/trainers/${trainer.id}` :
  `/trainers`

  const defaultName = trainer ? trainer.name : ''
  const defaultAge = trainer ? trainer.age : ''
  return(
    <div>
      <form action={url} method="post">
        {trainer && <input type="hidden" name="_method" value="patch"/>}
        <p>Name</p>
        <input defaultValue={defaultName} placeholder="name" name="trainer[name]"/>
        <p>Age</p>
        <input defaultValue={defaultAge} placeholder="Age" name="trainer[age]" type="integer"/>
        <button type="submit">{trainer ? "Update" : "Create"}</button>
      </form>
    </div>
  )
}


export default TrainerForm